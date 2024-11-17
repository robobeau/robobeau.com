type Blog = {
  author: string;
  content: string;
  date: Date;
  description: string;
  path: string;
  title: string;
};

interface BlogMetadata {
  author: string;
  date: string;
  description: string;
  title: string;
}

export { type Blog, type BlogMetadata };
