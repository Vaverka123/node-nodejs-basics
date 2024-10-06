import { log } from "console";
import fs from "fs/promises";
import path from "path";

const copy = async () => {
  const filePath = path.join(process.cwd(), "src", "fs", "files");
  const fileCopyPath = path.join(process.cwd(), "src", "fs", "files_copy");

  try {
    (await fs.access(fileCopyPath)) || !fs.access(filePath);
    console.log("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      try {
        await fs.mkdir(fileCopyPath);
        console.log("Folder Copy created successfully!");
        await fs.cp(filePath, fileCopyPath, { recursive: true });
        console.log("Folder copyed to New folder");
      } catch (writeError) {
        console.log("Error copy folder:", writeError);
      }
    } else {
      console.log("Error checking folder existence:", error);
    }
  }
};

await copy();
