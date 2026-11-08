import { Item } from "./survey";

const maxBars: number = 10;

//Different spellings of the same answer, the key must be lower case
const aliases: { [key: string]: string } = {
  golang: "Go",
};

export interface Chart {
  id: string;
  title: string;
  labels: string[];
  counts: number[];
}

const questions: { key: keyof Item; title: string }[] = [
  { key: "city", title: "Cities" },
  { key: "fav_languages", title: "Favourite languages" },
  { key: "fav_frameworks", title: "Favourite frameworks" },
  {
    key: "pro_cam_languages",
    title: "Languages used at Cameroonian companies",
  },
  {
    key: "pro_cam_frameworks",
    title: "Frameworks used at Cameroonian companies",
  },
];

//countAnswers counts how many developers gave each answer to a question.
//Answers that only differ by case (Javascript, JavaScript) are counted together
//and shown with their most common spelling.
const countAnswers = (items: Item[], key: keyof Item) => {
  const counts: { [answer: string]: number } = {};
  const spellings: { [answer: string]: { [spelling: string]: number } } = {};

  for (const item of items) {
    const value = item[key];
    const answers = Array.isArray(value) ? value : value ? [value] : [];

    for (const answer of answers) {
      const spelling = String(answer).trim();
      if (spelling === "") {
        continue;
      }

      const id = spelling.toLowerCase();
      const label = aliases[id] || spelling;
      const labelId = label.toLowerCase();
      counts[labelId] = (counts[labelId] || 0) + 1;
      spellings[labelId] = spellings[labelId] || {};
      spellings[labelId][label] = (spellings[labelId][label] || 0) + 1;
    }
  }

  return Object.keys(counts)
    .map((id) => {
      const label = Object.keys(spellings[id]).sort(
        (a, b) => spellings[id][b] - spellings[id][a]
      )[0];
      return { label, count: counts[id] };
    })
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label))
    .slice(0, maxBars);
};

export const getCharts = (items: Item[]): Chart[] => {
  return questions.map(({ key, title }): Chart => {
    const answers = countAnswers(items, key);
    return {
      id: `chart-${key}`,
      title,
      labels: answers.map((a) => a.label),
      counts: answers.map((a) => a.count),
    };
  });
};
