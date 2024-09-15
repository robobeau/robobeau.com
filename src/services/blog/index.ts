import getBlogMetadata from "./methods/getBlogMetadata";
import getBlogs from "./methods/getBlogs";

interface BlogService {
  getBlogMetadata: typeof getBlogMetadata;
  getBlogs: typeof getBlogs;
}

function createService(): BlogService {
  return {
    getBlogMetadata,
    getBlogs,
  };
}

export { createService as default };
