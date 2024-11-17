import fs from "node:fs";
import path from "path";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { read } from "to-vfile";
import { unified } from "unified";

import { BLOGS_DIRECTORY } from "@/constants";
import { Blog, BlogMetadata } from "@/types/blog";
import { parseFrontmatter } from "@/utils/unified.util";

function getBlogFilePaths(directory: string): Array<string> {
  return fs.readdirSync(directory).reduce((files, file) => {
    const filePath = path.join(directory, file);

    if (fs.statSync(filePath).isDirectory()) {
      return [...files, ...getBlogFilePaths(filePath)];
    }

    if (file.endsWith(".md")) {
      return [...files, filePath];
    }

    return files;
  }, [] as Array<string>);
}

async function getBlogs() {
  const blogsDirectory = path.join(process.cwd(), BLOGS_DIRECTORY);
  const filePaths = getBlogFilePaths(blogsDirectory);

  const promises = filePaths.map(getMetadataFromFilePath);
  const blogs = await Promise.all(promises);

  return blogs;
}

async function getMetadataFromFilePath(filePath: string): Promise<Blog> {
  const [_, relativeFilePath] = filePath.match(/^.*blogs(.*)\.md$/) ?? [];
  const path = `/blog${relativeFilePath.replace(/\\/g, "/")}`;
  const vFile = await read(filePath, {
    encoding: "utf-8",
  });
  const processedFile = await unified()
    .use(remarkFrontmatter)
    .use(parseFrontmatter)
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(vFile);
  const { data, value } = processedFile;
  const { author, date, description, title } = data.matter as BlogMetadata;

  return {
    author,
    description,
    path,
    title,
    content: String(value),
    date: new Date(date),
  };
}

export { getBlogs as default };

