import { VFile } from "vfile";
import { matter } from "vfile-matter";

function parseFrontmatter() {
  return function (tree: unknown, file: VFile) {
    matter(file);
  };
}

export { parseFrontmatter };
