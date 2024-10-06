import fs from "fs/promises";
import path from "path";

const list = async () => {
  const dirPath = path.join(process.cwd(), "src", "fs", "files");

  try {
    const fileNames = await fs.readdir(dirPath);
    (await fileNames).forEach((file) => {
      console.log(file);
    });
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      throw error;
    }
  }
};

await list();
