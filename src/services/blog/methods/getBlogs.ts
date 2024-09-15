import { BLOGS_DIRECTORY } from "@/constants";
import { BlogMetadata } from "@/types/blog";
import fs from "node:fs";
import path from "path";
import { read } from "to-vfile";
import { matter } from "vfile-matter";

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

async function getMetadataFromFilePath(filePath: string) {
  const [_, relativeFilePath] = filePath.match(/^.*blogs(.*)\.md$/) ?? [];
  const link = `/blog${relativeFilePath.replace(/\\/g, "/")}`;

  const vFile = await read(filePath);
  matter(vFile);

  const { author, date, title } = vFile.data.matter as BlogMetadata;

  return {
    author,
    link,
    title,
    date: new Date(date),
  };
}

export { getBlogs as default };
