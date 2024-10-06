import fs from "fs/promises";
import path from "path";

const remove = async () => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "fs",
    "files",
    "fileToRemove.txt"
  );

  try {
    await fs.access(filePath);
    fs.unlink(filePath);
    console.log("File removed");
  } catch {
    console.log("FS operation failed");
  }
};

await remove();
