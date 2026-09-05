import { API_URL } from "@/api/commonApi";
import { East } from "@mui/icons-material";
import { Button } from "@mui/material";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const BlogCard = ({ data }) => {
  const router = useRouter();

  return (
    <div
      className="blog-card"
      onClick={() => router.push(`/blogs/${data?.slug}`)}
    >
      <div>
        <div className="img-container">
          <img src={`${API_URL}${data?.thumbnail}`} />
        </div>
        <div className="content">
          <h4 className="line-clamp-2">{data?.title}</h4>
          <p className="line-clamp-2">{data?.sub_title}</p>
        </div>
      </div>
      <div className="bottom-content">
        <Link href={`/blogs/${data?.slug}`} className="read-more">
          Read more <East />
        </Link>
        <p>{moment(data?.created_at).format("MMMM DD, YYYY")}</p>
      </div>
    </div>
  );
};

export default BlogCard;
