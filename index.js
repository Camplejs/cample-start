#!/usr/bin/env node

import inquirer from "inquirer";
import * as fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const DIRECTORY = process.cwd();
const ENCODING = "utf8";
const PROJECT_REGEX = /^([\_\-\A-Za-z0-9])+$/;
const QUESTION1 = "template";
const QUESTION2 = "projectName";
const templates = ["parcel-app", "webpack-app"];
const __dirname = dirname(fileURLToPath(import.meta.url));
const srcPath = join(__dirname, "src");

const choices = fs
  .readdirSync(srcPath)
  .filter((item) => templates.includes(item));

const QUESTIONS = [
  {
    name: QUESTION1,
    type: "list",
    message: "Project template:",
    choices,
  },
  {
    name: QUESTION2,
    type: "input",
    message: "Project name:",
    validate: function (input) {
      if (PROJECT_REGEX.test(input)) return true;
      else {
        console.error("\nProject name error.");
        return false;
      }
    },
  },
];

const renderFiles = (templatePath, projectNamePath) => {
  const filesToCreate = fs.readdirSync(templatePath);
  for (let i = 0; i < filesToCreate.length; i++) {
    const currentFile = filesToCreate[i];
    const currentFilePath = join(templatePath, currentFile);
    const currentFileStat = fs.statSync(currentFilePath);
    const writePath = join(DIRECTORY, projectNamePath, currentFile);
    if (currentFileStat.isFile()) {
      const fileContent = fs.readFileSync(currentFilePath, ENCODING);
      fs.writeFileSync(
        writePath,
        currentFile === "package.json"
          ? fileContent.replace("cample-start", projectNamePath)
          : fileContent,
        ENCODING
      );
    }
    if (currentFileStat.isDirectory()) {
      fs.mkdirSync(writePath);
      renderFiles(
        join(templatePath, currentFile),
        join(projectNamePath, currentFile)
      );
    }
  }
};

inquirer.prompt(QUESTIONS).then((answers) => {
  const projectName = answers[QUESTION2];
  const projectNamePath = join(DIRECTORY, projectName);
  fs.mkdirSync(projectNamePath);
  renderFiles(join(__dirname, "src", answers[QUESTION1]), projectName);
  console.log(`Project ${projectName} installed successfully!`);
});
