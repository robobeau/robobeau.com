import { BlogParams } from "@/app/blog/[year]/[month]/[day]/[title]/page";
import { BlogMetadata } from "@/types/blog";
import path from "path";
import { read } from "to-vfile";
import { matter } from "vfile-matter";

async function getBlogMetadata(params: BlogParams) {
  const { day, month, title, year } = params;

  const vFile = await read(
    path.join(
      process.cwd(),
      `/src/app/blogs/${year}/${month}/${day}/${title}.md`
    )
  );
  matter(vFile);

  const {
    author,
    date,
    title: metadataTitle,
  } = vFile.data.matter as BlogMetadata;

  return {
    title: metadataTitle ?? "Blog",
  };
}

export { getBlogMetadata as default };
