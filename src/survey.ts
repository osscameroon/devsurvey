import YAML from "yaml";
import * as fs from "fs";

const surveyFilePath = __dirname + "/res/survey.yaml";

export interface Item {
  fav_languages?: string;
  pro_cam_languages?: string[];
  pro_abroad_languages?: string[];
  fav_frameworks?: string[];
  pro_cam_frameworks?: string[];
  pro_abroad_frameworks?: string[];
};

export interface Survey {
  items?: Item[];
};

export const getSurvey = (): Survey => {
  try {
    const file = fs.readFileSync(surveyFilePath, "utf8");
    const survey = YAML.parse(file);
    return {
      items: survey.items,
    };
  } catch (err) {
    //replace this with a proper log
    //and proper http error handling
    console.error("Failed to parse file:", err);
  }

  return {};
};
