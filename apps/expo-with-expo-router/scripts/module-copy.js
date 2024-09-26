const fs = require("fs");
const path = require("path");

fs.cpSync(
  path.resolve(
    __dirname,
    "../",
    "../",
    "../",
    "node_modules/share-extension-expo-plugin"
  ),
  path.resolve(__dirname, "../node_modules/share-extension-expo-plugin"),
  { recursive: true }
);
