import fs from "fs";
import * as yaml from "js-yaml";
import path from "path";

let fileContents = fs.readFileSync(path.join( __dirname ,"..","/res/survey.yaml"), "utf8");
let data: any = yaml.load(fileContents);

export function findingLanguage(language: string) {
  let total = 0;
  for (var i = 0; i < data["items"].length; i++) {
    let get_obj: any = Object.values(data["items"][i]["fav_languages"]);
    for (var j = 0; j < get_obj.length; j++) {
      if (get_obj[j].toLowerCase() === language.toLowerCase()) {
        total++;
      }
    }
  }
  return total;
}

export function findingFramework(framework: string) {
  let total = 0;
  for (var i = 0; i < data["items"].length; i++) {
    let get_obj: any = Object.values(data["items"][i]["fav_frameworks"]);
    for (var j = 0; j < get_obj.length; j++) {
      if (get_obj[j].toLowerCase() === framework.toLowerCase()) {
        total++;
      }
    }
  }
  return total;
}
export function findingCamerLanguage(camerLanguage: string) {
  let total = 0;
  for (var i = 0; i < data["items"].length; i++) {
    let get_obj: any = Object.values(data["items"][i]["pro_cam_languages"]);
    for (var j = 0; j < get_obj.length; j++) {
      if (get_obj[j].toLowerCase() === camerLanguage.toLowerCase()) {
        total++;
      }
    }
  }
  return total;
}

export function findingCamerFramework(camerFramework: string) {
  let total = 0;
  for (var i = 0; i < data["items"].length; i++) {
    let get_obj: any = Object.values(data["items"][i]["pro_cam_frameworks"]);
    for (var j = 0; j < get_obj.length; j++) {
      if (get_obj[j].toLowerCase() === camerFramework.toLowerCase()) {
        total++;
      }
    }
  }
  return total;
}

export function sum ( a : number, b : number ) {
    return a + b;
};

export const isLink = (exp: string, got: string): boolean => {
  return exp === got;
};

export const ifEquals = (a: string, b: string): boolean => {
  return a === b;
};
export const displayPagesNumber = (interval: number, current: number, pages: number): Array<number> => {
  let result = [];
  for (; interval <= (current + 4) && interval <= pages; interval++) {
    result.push(interval);
  }
  return result;
};

export const isLower = (v1: number, v2: number): boolean => {
  return v1 < v2;
};

export const ifEqual = (a: number, b: number, extra: number): boolean => {
  return a === (b + extra);
};

export const ifDifferent = (a: number, b: number): boolean => {
  return a !== b;
};

export const constructUrl = (url: string, param: string): string => {
  let data = url.includes("&") ? url.split("&") : url.split("?");
  for (let i = 0; i < data.length; i++) {
    if (data[i].includes("page")) {
      data[i] = "page=" + param;
    }
  }
  return url.includes("&") ? data.join("&") : data.join("?");
}

export const contains = (a: string, b: string): boolean => {
  return a.includes(b);
}

export const formatList = (list: string[]): string => {
  return list?.join(', ');
}
