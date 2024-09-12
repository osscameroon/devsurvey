import yaml
import matplotlib.pyplot as plt
import matplotlib.colors as pltc
from config import COLORS

from random import sample

all_colors = [k for k,v in pltc.cnames.items()]


def load_yaml(path):
    with open(path, 'r') as stream:
        return yaml.load(stream, Loader=yaml.FullLoader)


def plot_fav_languages(datas: list, path: str):
    languages = []
    for data in datas:
        languages.extend(data["fav_languages"])

    plot_data = {language: languages.count(language) for language in languages}
    colors = [COLORS.get(lang, "red") for lang in plot_data.keys()]
    fig = plt.figure()
    plt.bar(list(plot_data.keys()), list(plot_data.values()), color=colors)
    plt.xticks(rotation=90)
    plt.xlabel("Languages")
    plt.ylabel("Number of people using this language")
    plt.title("Favourite languages")
    # plt.legend(list(plot_data.values()) , labels=list(plot_data.keys()))
    plt.savefig(path)
    return plot_data


def plot_fav_frameworks(datas: list, path: str):
    frameworks = []
    for data in datas:
        frameworks.extend(data["fav_frameworks"])

    plot_data = {framework: frameworks.count(framework) for framework in frameworks}
    values = list(plot_data.values())
    X = [x/sum(values) for x in values]
    colors = [COLORS.get(framework, "red") for framework in plot_data.keys()]
    fig = plt.figure()
    plt.pie(X, labels=tuple(plot_data.keys()), colors=colors, autopct='%1.0f%%', startangle=90)
    plt.savefig(path)
    return plot_data
