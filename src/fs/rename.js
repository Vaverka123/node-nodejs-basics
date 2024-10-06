import fs from "fs/promises";
import path from "path";

const rename = async () => {
  const wrongName = path.join(
    process.cwd(),
    "src",
    "fs",
    "files",
    "wrongFilename.txt"
  );
  const properName = path.join(
    process.cwd(),
    "src",
    "fs",
    "files",
    "properFilename.md"
  );

  try {
    (await fs.access(properName)) || !fs.access(wrongName);
    console.log("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      try {
        await fs.rename(wrongName, properName);
        console.log("File renamed successfully!");
      } catch (writeError) {
        console.log("Error rename file:", writeError);
      }
    } else {
      console.log("Error checking file existence:", error);
    }
  }
};

await rename();
