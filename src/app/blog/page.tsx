import { Metadata } from "next";
import { FC } from "react";

import BlogFileBrowser from "@/components/BlogFileBrowser/BlogFileBrowser";
import createBlogService from "@/services/blog";

const metadata: Metadata = {
  title: "Blog",
};

const BlogPage: FC = async () => {
  const blogService = createBlogService();
  const blogs = await blogService.getBlogs();

  return <BlogFileBrowser blogs={blogs} />;
};

export { BlogPage as default, metadata };
