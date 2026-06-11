import fs from "fs";
import path from "path";
import { marked } from "marked";
import { renderPremiumPage } from "../templates/page-premium.js";

const CONTENT_DIR = "./content";
const OUTPUT_DIR = "./public";

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function generate() {
  ensureDir(OUTPUT_DIR);

  const files = fs.readdirSync(CONTENT_DIR);

  files.forEach(file => {
    if (!file.endsWith(".md")) return;

    const filePath = path.join(CONTENT_DIR, file);
    const raw = fs.readFileSync(filePath, "utf8");

    const htmlContent = marked.parse(raw);
    const title = raw.split("\n")[0].replace("# ", "").trim();

    const finalHTML = renderPremiumPage({
      title,
      content: htmlContent
    });

    const outputName = file.replace(".md", ".html");
    const outputPath = path.join(OUTPUT_DIR, outputName);

    fs.writeFileSync(outputPath, finalHTML);
    console.log(`✔ Page générée : ${outputName}`);
  });
}

generate();
