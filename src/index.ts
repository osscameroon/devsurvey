import express from "express";
import exphbs from "express-handlebars";
import * as helpers from "./helpers/handlebars";
import { getApps, Item } from "./apps";
import Fuse from "fuse.js";

const port: number = 3001;
const limit: number = 12;
const app = express();

const getCurrentYear = () => {
  const d = new Date();
  return d.getFullYear();
};

//Set view path
app.set("views", __dirname + "/views");
app.engine(
  ".hbs",
  exphbs({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts/",
    partialsDir: __dirname + "/views/partials/",
    helpers: helpers,
  })
);
app.set("view engine", ".hbs");

const getItemsMatchingQuery = (query: string, items: any): Item[] => {
  let list = items;

  if (query !== "") {
    const f: Fuse<Item> = new Fuse(items, {
      distance: 100,
      threshold: 0.3,
      keys: [
        "fav_languages",
        "pro_cam_languages",
        "pro_abroad_languages",
        "fav_frameworks",
        "pro_cam_frameworks",
        "pro_abroad_frameworks",
      ],
    });
    list = f.search(query)?.map((e: Fuse.FuseResult<Item>): Item => {
      return e.item;
    });
  }

  return list;
};

const paginate = (items: Item[], page: number) => {
  const count = items.length;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  items = items.slice(startIndex, endIndex);
  const interval = Number(page) > 5 ? Number(page) - 4 : 1;
  return { count, items, interval };
};

const handleHome = async (req: any, res: any) => {
  const query = req.query.query || "";
  const apps = getApps()?.items;
  let filteredApps = getItemsMatchingQuery(query, apps);

  const { count, items, interval } = paginate(
    filteredApps,
    parseInt(req.query.page) || 1
  );
  const fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;

  res.render("index", {
    link: "home",
    query,
    interval,
    fullUrl,
    hasParams: fullUrl.includes("?"),
    current: parseInt(req.query.page) || 1,
    pages: Math.ceil(count / limit),
    apps: items,
    currentYear: getCurrentYear(),
  });
};

app.get("/", handleHome);

app.use("/views", express.static(__dirname + "/views"));
app.use("/res", express.static(__dirname + "/res"));
app.listen(port, () => {
  console.log(`The application is listening on port ${port}`);
});
