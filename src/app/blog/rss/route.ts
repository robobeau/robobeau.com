import { BASE_URL, MY_EMAIL, MY_HANDLE, MY_NAME } from "@/constants";
import createBlogService from "@/services/blog";
import crypto from "crypto";
import { Feed } from "feed";
import { NextRequest } from "next/server";

async function GET(request: NextRequest) {
  const feed = new Feed({
    author: {
      email: MY_EMAIL,
      name: MY_NAME,
    },
    copyright: `All rights reserved ${new Date().getFullYear()}, ${MY_NAME}`,
    id: `${BASE_URL}/blog`,
    language: "en",
    link: `${BASE_URL}/blog`,
    title: `${MY_HANDLE} Blog RSS Feed`,
  });
  const blogService = createBlogService();
  const blogs = await blogService.getBlogs();

  blogs.forEach((blog) => {
    const { content, date, link, title } = blog;
    const id = crypto.createHash("md5").update(title).digest("hex");

    feed.addItem({
      id,
      title,
      content,
      date: new Date(date),
      link: `${BASE_URL}${link}`,
    });
  });

  const rssFeed = feed.rss2();

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}

export { GET };
