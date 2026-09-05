import React, { useEffect, useRef, useState } from "react";
import BlogCard from "./BlogCard";
import { blogsCategoryApi } from "@/api/commonApi";
import {
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Pagination,
  PaginationItem,
} from "@mui/material";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { BlogCategoryApi, BlogListApi } from "@/api/api";

const Blogs = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setloading] = useState(false);
  const [selected_categories, setSelectedCategories] = useState([]);
  const [search_term, setSearchTerm] = useState("");
  const [blogCategories, setBlogCategories] = useState([]);
  const [pagination, setPagination] = useState({
    count: 0,
    next: null,
    previous: null,
    currentPage: 1,
  });

  const blogSectionRef = useRef(null);

  const fetch_blogs = async (category_ids = "", s_term = "", page = 1) => {
    setloading(true);
    try {
      // Build the query string dynamically based on category & search
      let query = `?page=${page}&page_size=12&nested=True&depth=3&order_by=-created_at`;

      if (category_ids.length > 0) {
        category_ids?.map((cat) => {
          query += `&category=${cat}`;
        });
      }
      if (s_term) {
        // Append the search parameter if it is not blank
        query += `&title=${s_term}`;
      }

      const res = await BlogListApi.get(query);
      setBlogs(res?.results || []);
      setPagination({
        count: Math.ceil(res?.total_items / 9), // Assuming page_size is 9
        next: res?.links?.next,
        previous: res?.links?.previous,
        currentPage: res?.current_page,
      });
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setloading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await BlogCategoryApi.get("");
      setBlogCategories(res?.results || []);
    } catch (error) {}
  };

  useEffect(() => {
    fetch_blogs();
    fetchCategories();
  }, []);

  const handle_category_change = (category_id) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(category_id)) {
        return prevSelected.filter((id) => id !== category_id);
      } else {
        return [...prevSelected, category_id];
      }
    });
  };

  const handle_search_change = (e) => {
    setSearchTerm(e.target.value);
  };

  const handle_apply_filter = () => {
    fetch_blogs(selected_categories, search_term);
  };

  const handlePageChange = async (event, page) => {
    fetch_blogs(selected_categories, search_term, page);

    if (blogSectionRef.current) {
      blogSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const clear = () => {
    setSelectedCategories([]);
    setSearchTerm("");
    fetch_blogs();
  };

  const CustomCheckbox = styled(Checkbox)(({ theme }) => {
    return {
      padding: 0,
      color: "#FFFF",

      "&.Mui-checked": {
        color: "#FFFF",
      },
      "&.MuiFormControlLabel-root": {
        color: "#FFFF",
      },
    };
  });

  // Custom styled pagination
  const CustomPagination = styled(Pagination)(({ theme }) => ({
    "& .MuiPaginationItem-root": {
      color: "#FFFF",
      fontSize: "14px",
      "&:hover": {
        backgroundColor: "#7A5CFA",
      },
    },
    "& .MuiPaginationItem-page.Mui-selected": {
      backgroundColor: "#7A5CFA",
      color: "white",
      "&:hover": {
        backgroundColor: "#7A5CFA",
      },
    },
    "& .MuiPaginationItem-previousNext": {
      border: "1px solid #ddd",
      borderRadius: "4px",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "1.5rem",
    },
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
  }));

  return (
    <div className="blogs-container">
      <div className="purple-frame">
        <div className="heading">
          <h1>Blog Insights</h1>
          <p>Explore our latest blogs and cybersecurity insights</p>
        </div>
      </div>

      <div className="container" ref={blogSectionRef}>
        {loading ? (
          <div className="loader">
            <CircularProgress sx={{ color: "#7A5CFA" }} />
          </div>
        ) : (
          <section className="blogs-section">
            <div className="blog-filter">
              <div className="search-container">
                {/* <div className="icon-container">
              <SearchIcon />
            </div> */}
                <input
                  type="text"
                  placeholder="Search..."
                  value={search_term}
                  onChange={handle_search_change}
                  style={{ width: "100%", padding: "0.5rem" }}
                />
              </div>

              <div className="filter-box">
                <div className="heading">
                  <h4>Filter</h4>

                  <p onClick={clear}>Clear</p>
                </div>

                {/* Category checkboxes */}
                <div className="category">
                  <h6>Category</h6>
                  <ul>
                    {blogCategories?.map((cat) => (
                      <li key={cat.id} style={{ listStyle: "none" }}>
                        <FormControlLabel
                          control={
                            <CustomCheckbox
                              checked={selected_categories.includes(cat.id)}
                              onChange={() => handle_category_change(cat.id)}
                            />
                          }
                          label={cat.category}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* APPLY FILTER BUTTON (optional) */}
                <Button onClick={handle_apply_filter} className="add-btn">
                  Apply
                </Button>
              </div>
            </div>

            <div className="blogs">
              <div className="blogs-grid">
                {blogs?.map((blog, i) => (
                  <BlogCard key={i} data={blog} />
                ))}
              </div>
              {/* Pagination */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {pagination.count > 1 && (
                  <CustomPagination
                    count={pagination.count}
                    page={pagination.currentPage}
                    onChange={handlePageChange}
                    shape="rounded"
                    color="primary"
                    renderItem={(item) => (
                      <PaginationItem
                        slots={{
                          previous: () => "Previous",
                          next: () => "Next",
                        }}
                        {...item}
                      />
                    )}
                  />
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Blogs;
