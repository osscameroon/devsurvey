import os
from utils import load_yaml

DATA_PATH = os.path.join(os.path.abspath(os.path.dirname(os.path.dirname(__file__))), "src", "res", "survey.yaml")

def main():
    print("Hello World!")

    data = load_yaml(path=DATA_PATH)["items"]
    print(list(map(lambda x: x["github_handle"], data)))


if __name__ == "__main__":
    main()