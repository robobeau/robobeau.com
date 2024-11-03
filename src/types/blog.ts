type Blog = {
  author: string;
  content: string;
  date: Date;
  link: string;
  title: string;
};

interface BlogMetadata {
  author: string;
  date: string;
  title: string;
}

export { type Blog, type BlogMetadata };
