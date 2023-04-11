import xlsx from "xlsx";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const { readFile, utils } = xlsx;
console.log("check", __dirname);

const fieldsMap = {
  TranslatedRecipeName: "recipe",
  TranslatedIngredients: "ingredients",
  PrepTimeInMins: "prepTime",
  CookTimeInMins: "cookTime",
  TotalTimeInMins: "totalTime",
  Servings: "servings",
  Cuisine: "cuisine",
  Course: "course",
  Diet: "diet",
  TranslatedInstructions: "instructions",
};

const cleanupTextList = arr => {
  return arr.reduce((acc, text) => {
    const cleanText = text.trim();
    if (cleanText) {
      acc.push(cleanText);
    }
    return acc;
  }, []);
};

const normaliseData = (key, targetKey, item) => {
  switch (targetKey) {
    case "ingredients":
      return cleanupTextList(item[key]?.split(",") || []);
    case "instructions":
      return cleanupTextList(item[key]?.split(".") || []);
  }
  return item[key];
};

const init = async () => {
  const fileName = "recipesDatasetOriginal.csv";
  const workbook = await readFile(`${__dirname}/data/${fileName}`);
  const data = utils.sheet_to_json(workbook.Sheets.Sheet1, {});
  const recipes = data.map(item => {
    const formattedRecipe = {};
    for (const [key, targetKey] of Object.entries(fieldsMap)) {
      formattedRecipe[targetKey] = normaliseData(key, targetKey, item);
      if (targetKey === "ingredients") {
        formattedRecipe.numIngredients = formattedRecipe[targetKey].length;
      }
    }

    return formattedRecipe;
  });

  await fs.writeFile(
    path.resolve(__dirname, "../src/assets", "recipes.json"),
    JSON.stringify(recipes.slice(0, 1000), null, 2),
    "utf-8"
  );
};

init();
