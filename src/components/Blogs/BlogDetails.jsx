"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { API_URL, blogsApi } from "@/api/commonApi";
import { CircularProgress } from "@mui/material";
import { West } from "@mui/icons-material";
import { useRouter } from "next/router";
import moment from "moment";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BlogDetails = ({ blog_data }) => {
  const router = useRouter();
  const [loading, setloading] = useState(false);

  function fixImageUrls(content) {
    return content?.replace(
      /src="(?:\.\.\/)+media/g,
      'src="https://api2.threatwatch360.com/media',
    );
  }

  const shareUrl = `https://threatwatch360.com/blogs/${blog_data?.slug}`;
  const shareText = blog_data?.title || "Check out this blog";

  // Encode URL properly
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(shareText);

  return (
    <section style={{ margin: 0 }} className="container">
      <div className="blog-detail-container">
        <div className="back" onClick={() => router.back()}>
          <West /> Back
        </div>
        {loading ? (
          <div className="loader">
            <CircularProgress sx={{ color: "#7A5CFA" }} />
          </div>
        ) : (
          <div className="blog-details">
            <div className="left">
              <div className="img-container">
                <img src={`${API_URL}${blog_data?.thumbnail}`} />
              </div>

              <div className="flex">
                <p className="category">{blog_data?.category?.category}</p>

                <span>
                  {moment(blog_data?.created_at).format("MMMM DD, YYYY")}
                </span>
              </div>

              <div className="banner-content">
                <h1>{blog_data?.title}</h1>
                <p>{blog_data?.sub_title}</p>
              </div>

              <div className="content">
                <div
                  className="featured-text"
                  dangerouslySetInnerHTML={{
                    __html: fixImageUrls(blog_data?.text),
                  }}
                />
              </div>
            </div>

            <div className="right">
              <div className="connect">
                <div className="img-container">
                  <img src="/images/eye.png" alt="" />
                </div>

                <h6>Your Business Could Be the Next Target</h6>
                <p>
                  Detect phishing attacks, exposed credentials, and malicious
                  activity before damage happens.
                </p>

                <button
                  className="cta-btn"
                  onClick={() => router.push("/contact-us")}
                >
                  Protect Your Organization
                </button>
              </div>

              <div className="share">
                <h6>Share this blog</h6>

                <div className="flex">
                  {/* WhatsApp */}
                  <div
                    className="icon-container"
                    onClick={() =>
                      window.open(
                        `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
                        "_blank",
                      )
                    }
                  >
                    <img src="/icons/whatsapp.svg" alt="WhatsApp" />
                  </div>
                  {/* LinkedIn */}
                  <div
                    className="icon-container"
                    onClick={() =>
                      window.open(
                        `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
                        "_blank",
                      )
                    }
                  >
                    <img src="/icons/linkedin.svg" alt="LinkedIn" />
                  </div>
                  {/* Instagram */}
                  {/* Instagram does NOT support direct web sharing like others */}
                  <div
                    className="icon-container"
                    onClick={() => {
                      navigator.clipboard.writeText(shareUrl);
                      alert("Blog link copied. Paste it on Instagram.");
                    }}
                  >
                    <img src="/icons/ig.svg" alt="Instagram" />
                  </div>

                  {/* X / Twitter */}
                  <div
                    className="icon-container"
                    onClick={() =>
                      window.open(
                        `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
                        "_blank",
                      )
                    }
                  >
                    <img src="/icons/x.svg" alt="X" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {blog_data?.api_recommended?.length > 0 && (
          <div className="recommended-blogs">
            <h2>Recommended Blogs</h2>
            <div className="blogs-slider">
              <Swiper
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0} // spacing between slides
                slidesPerView={1} // default number of slides to show at a time
                scrollbar={{ draggable: true }} // for draggable scrollbar
                breakpoints={{
                  440: {
                    slidesPerView: 1, // Show 1 full card + partial next card
                    spaceBetween: 0,
                  },
                  768: {
                    slidesPerView: 3, // show 2 slides at a time on tablets
                    spaceBetween: 10, // medium gap for tablets
                  },
                  1500: {
                    slidesPerView: 3, // show 4 slides at a time on desktops
                    spaceBetween: 30, // larger gap for desktop
                  },
                  1640: {
                    slidesPerView: 4, // show 4 slides at a time on desktops
                    spaceBetween: 20, // larger gap for desktop
                  },
                }}
              >
                {blog_data?.api_recommended?.map((data, i) => (
                  <SwiperSlide key={i}>
                    <BlogCard data={data} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogDetails;
