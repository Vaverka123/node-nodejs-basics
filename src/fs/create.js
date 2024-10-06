import fs from "fs/promises";
import path from "path";

const create = async () => {
  const content = "I am fresh and young";
  const filePath = path.join(process.cwd(), "src", "fs", "files", "fresh.txt");

  try {
    await fs.access(filePath);
    console.log("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      try {
        await fs.writeFile(filePath, content);
        console.log("File created successfully!");
      } catch (writeError) {
        console.log("Error writing file:", writeError);
      }
    } else {
      console.log("Error checking file existence:", error);
    }
  }
};

await create();
