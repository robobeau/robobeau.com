import { FC, PropsWithChildren } from "react";

import FileBrowser from "@/components/FileBrowser/FileBrowser";
import { MenuItem } from "@/components/Program/Menu";
import Program from "@/components/Program/Program";
import { ProgramIconWithUrlProps } from "@/components/ProgramIcon/ProgramIcon";
import NOTEP001 from "@/images/NOTEP001.png";
import createBlogService from "@/services/blog";

const blogMenu: Array<MenuItem> = [
  { label: "RSS Feed", key: "R", url: "/blog/rss", target: "_blank" },
];

const programIcon: ProgramIconWithUrlProps = {
  image: NOTEP001,
  label: "Blog",
  url: "/blog",
};

const BlogProgram: FC<PropsWithChildren> = async (props) => {
  const { children } = props;

  const blogService = createBlogService();
  const blogs = await blogService.getBlogs();

  return (
    <Program
      hasPadding={false}
      icon={programIcon.image}
      initialSize={{ height: 475, width: 475 }}
      isScrollable={false}
      menu={blogMenu}
      offset={{ x: 325, y: 0 }}
      origin="tl"
      title="Blog"
      zIndexOffset={1}
    >
      <FileBrowser blogs={blogs} />

      {children}
    </Program>
  );
};

export { BlogProgram as default, programIcon };
