import createService from "@/services/blog";
import Page from "@/types/page";
import { Metadata, ResolvingMetadata } from "next";
import dynamic from "next/dynamic";

type BlogParams = {
  day: string;
  month: string;
  title: string;
  year: string;
};

async function generateMetadata(
  pageProps: Page<BlogParams>,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const layoutMetadata = await parent;
  const layoutTitle = layoutMetadata.title?.absolute;

  const blogService = createService();
  const blogMetadata = await blogService.getBlogMetadata(pageProps.params);

  return {
    title: `${layoutTitle && "Blog | "}${blogMetadata.title}`,
  };
}

const Blog = async (props: Page<BlogParams>) => {
  const { params } = props;
  const { day, month, title, year } = params;

  const Blog = dynamic(
    () => import(`../../../../../blogs/${year}/${month}/${day}/${title}.md`)
  );

  return (
    <div className="overflow-auto p-4">
      <Blog />;
    </div>
  );
};

export { Blog as default, generateMetadata, type BlogParams };
