import { MenuItem } from "@/components/ProgramWindow/Menu";
import ProgramWindow from "@/components/ProgramWindow/ProgramWindow";
import createBlogService from "@/services/blog";
import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
import FileBrowser from "./FileBrowser";

const blogMenu: Array<MenuItem> = [
  { label: "RSS Feed", key: "R", url: "/blog/rss", target: "_blank" },
];

const metadata: Metadata = {
  title: "Blog",
};

const Layout: FC<PropsWithChildren> = async (props) => {
  const { children } = props;

  const blogService = createBlogService();
  const blogs = await blogService.getBlogs();

  return (
    <ProgramWindow
      className="z-20"
      hasPadding={false}
      isScrollable={false}
      menu={blogMenu}
      origin="tl"
      offset={{ x: 256, y: 64 }}
      size={{ height: 480, width: 480 }}
      title="Blog"
    >
      <FileBrowser blogs={blogs} />

      {children}
    </ProgramWindow>
  );
};

export { Layout as default, metadata };
