import fs from "node:fs";
import path from "path";

function getFilePaths(directory: string): Array<string> {
  return fs.readdirSync(directory).reduce((files, file) => {
    const filePath = path.join(directory, file);

    if (fs.statSync(filePath).isDirectory()) {
      return [...files, ...getFilePaths(filePath)];
    }

    return [...files, filePath];
  }, [] as Array<string>);
}

export { getFilePaths };
