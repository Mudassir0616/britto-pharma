import { renderHeadTags } from '@/utils/renderHeadTags'
import Head from 'next/head'
import React from 'react'

const Index = ({ data, error }) => {

    console.log('data', data)

    return (
        <>
            <Head>{renderHeadTags(data?.head)}</Head>

            {/* <BlogDetails blog_data={data} /> */}
        </>
    );
};

export async function getStaticPaths() {
    try {
        const res = await fetch("https://api.gammabiotechs.com/api/blog/", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json, text/plain, */*",
            },
        });
        const procedures = await res.json();

        const paths = [];

        if (procedures?.results && Array.isArray(procedures?.results)) {
            procedures?.results?.forEach((procedure) => {
                paths.push({
                    params: { slug: procedure?.slug },
                });
            });
        }

        return {
            paths,
            fallback: "blocking", // or 'blocking' if you want to serve generated pages on-demand
        };
    } catch (error) {
        console.error("Failed to fetch service IDs:", error);
        return {
            paths: [], // Return an empty array if there's an error
            fallback: "blocking",
        };
    }
}

// For each slug, load any needed data
export async function getStaticProps({ params, locale }) {
    try {
        const [procedureRes, seo] = await Promise.all([
            fetch(
                `https://api.gammabiotechs.com/api/blog/?slug=${params.slug}&depth=3&nested=True`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json, text/plain, */*",
                    },
                },
            ),
        ]);

        if (!procedureRes.ok) {
            return { notFound: true };
        }

        const procedures = await procedureRes.json();

        return {
            props: {
                data: procedures?.results?.[0] || null,
                error: null,
            },
            revalidate: 60,
        };
    } catch (error) {
        return {
            props: {
                data: null,
                error: error?.message || "Unknown error",
            },
            revalidate: 60,
        };
    }
}

export default Index;
