import { BLOGS_DIRECTORY } from "@/constants";
import { BlogMetadata } from "@/types/blog";
import fs from "node:fs";
import path from "path";
import Showdown from "showdown";

interface BlogFilePathParams {
  day: string;
  month: string;
  title: string;
  year: string;
}

function getBlogFileMetadata(blogFile: string): BlogMetadata {
  const converter = new Showdown.Converter({ metadata: true });

  converter.makeHtml(blogFile);

  return converter.getMetadata() as BlogMetadata;
}

function getBlogFilePath(filePathParams: BlogFilePathParams): string {
  const { day, month, title, year } = filePathParams;

  const decodedDay = decodeURIComponent(day);
  const decodedMonth = decodeURIComponent(month);
  const decodedTitle = decodeURIComponent(title);
  const decodedYear = decodeURIComponent(year);

  return `${BLOGS_DIRECTORY}/${decodedYear}/${decodedMonth}/${decodedDay}/${decodedTitle}.md`;
}

async function getBlogFileFromFilePath(filePath: string): Promise<string> {
  const blogFile = await fs.promises.readFile(filePath, "utf-8");

  return blogFile;
}

async function getBlogHTMLFromFilePath(filePath: string): Promise<string> {
  const fileContents = await getBlogFileFromFilePath(filePath);
  const converter = new Showdown.Converter({ metadata: true });
  const blogHTML = converter.makeHtml(fileContents);

  return blogHTML;
}

async function getBlogHTMLFromFilePathParams(
  filePathParams: BlogFilePathParams
): Promise<string> {
  const filePath = path.join(process.cwd(), getBlogFilePath(filePathParams));
  const blogHTML = getBlogHTMLFromFilePath(filePath);

  return blogHTML;
}

export {
  getBlogFileFromFilePath,
  getBlogFileMetadata,
  getBlogFilePath,
  getBlogHTMLFromFilePath,
  getBlogHTMLFromFilePathParams,
  type BlogFilePathParams,
};
