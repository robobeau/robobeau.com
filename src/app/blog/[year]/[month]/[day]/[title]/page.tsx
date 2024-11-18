import Loading from "@/components/Loading/Loading";
import createService from "@/services/blog";
import Page from "@/types/page";
import { Metadata } from "next";
import dynamic from "next/dynamic";

type BlogParams = {
  day: string;
  month: string;
  title: string;
  year: string;
};

async function generateMetadata(
  pageProps: Page<BlogParams>
): Promise<Metadata> {
  const blogService = createService();
  const blogMetadata = await blogService.getBlogMetadata(pageProps.params);

  return {
    title: `Blog | ${blogMetadata.title}`,
  };
}

const Blog = async (props: Page<BlogParams>) => {
  const { params } = props;
  const { day, month, title, year } = params;

  const Blog = dynamic(
    () => import(`../../../../../blogs/${year}/${month}/${day}/${title}.md`),
    {
      loading: () => <Loading />,
    }
  );

  return <Blog />;
};

export { Blog as default, generateMetadata, type BlogParams };
