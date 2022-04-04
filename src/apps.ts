import YAML from "yaml";
import * as fs from "fs";

const appsFilePath = __dirname + "/res/apps.yaml";

export interface Item {
  fav_languages?: string;
  pro_cam_languages?: string[];
  pro_abroad_languages?: string[];
  fav_frameworks?: string[];
  pro_cam_frameworks?: string[];
  pro_abroad_frameworks?: string[];
};

export interface Apps {
  items?: Item[];
};

export const getApps = (): Apps => {
  try {
    const file = fs.readFileSync(appsFilePath, "utf8");
    const apps = YAML.parse(file);
    return {
      items: apps.items,
    };
  } catch (err) {
    //replace this with a proper log
    //and proper http error handling
    console.error("Failed to parse file:", err);
  }

  return {};
};
