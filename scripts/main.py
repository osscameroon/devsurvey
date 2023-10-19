import os
from utils import load_yaml, plot_fav_languages, plot_fav_frameworks
from config import data_path, plot_dir


def main():
    data = load_yaml(path=data_path)["items"]
    plot_fav_languages(data, path=os.path.join(plot_dir, "languages.png"))
    plot_fav_frameworks(data, path=os.path.join(plot_dir, "frameworks.png"))


if __name__ == "__main__":
    main()