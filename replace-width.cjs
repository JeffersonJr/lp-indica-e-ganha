const fs = require("fs");
const path = require("path");

const routesDir = path.join(process.cwd(), "src", "routes");

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith(".tsx")) {
      let content = fs.readFileSync(fullPath, "utf8");
      if (content.includes("max-w-5xl")) {
        content = content.replace(/max-w-5xl/g, "max-w-7xl");
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${file}`);
      }
    }
  }
}

processDir(routesDir);
