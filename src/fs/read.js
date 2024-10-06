import fs from "fs/promises";
import path from "path";

const read = async () => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "fs",
    "files",
    "fileToRead.txt"
  );

  try {
    await fs.access(filePath);
    const content = await fs.readFile(filePath, "utf-8");
    console.log(content);
  } catch {
    console.log("FS operation failed");
  }
};

await read();
