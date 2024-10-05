const fs = require("fs");
const path = require("path");

const create = async () => {
  const filePath = path.join(__dirname, "files", "fresh.txt");
  const content = "I am fresh and young";
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (!err) {
      // File exists, throw error
      throw new Error("FS operation failed");
    } else {
      // File doesn't exist, create the file
      fs.writeFile(filePath, content, (err) => {
        if (err) {
          console.error("Error writing file:", err);
          return;
        }
        console.log("File created successfully!");
      });
    }
  });
};

await create();
