import Showdown from "showdown";

type Blog = {
  author: string;
  date: Date;
  // html: string;
  link: string;
  // markdown: string;
  title: string;
};

interface BlogMetadata extends Showdown.Metadata {
  author: string;
  date: string;
  title: string;
}

export { type Blog, type BlogMetadata };
