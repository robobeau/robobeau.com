import { BASE_URL, MY_EMAIL, MY_HANDLE, MY_NAME } from "@/constants";
import createBlogService from "@/services/blog";
import { Feed } from "feed";
import { NextRequest } from "next/server";

async function GET(request: NextRequest) {
  const blogUrl = `${BASE_URL}/blog`
  const feed = new Feed({
    author: {
      email: MY_EMAIL,
      name: MY_NAME,
    },
    copyright: `All rights reserved ${new Date().getFullYear()}, ${MY_NAME}`,
    description: `${MY_NAME}' blog.`,
    feedLinks: {
      rss: `${blogUrl}/rss`,
    },
    id: blogUrl,
    language: "en",
    link: blogUrl,
    title: `${MY_HANDLE} Blog RSS Feed`,
  });
  const blogService = createBlogService();
  const blogs = await blogService.getBlogs();

  blogs.forEach((blog) => {
    const { content, date, description, path, title } = blog;
    const fullUrl = `${BASE_URL}${path}`
    const id = fullUrl;

    feed.addItem({
      content,
      description,
      id,
      title,
      date: new Date(date),
      link: fullUrl,
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
