import yaml

def load_yaml(path):
    with open(path, 'r') as stream:
        return yaml.load(stream)

