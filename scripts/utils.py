import yaml

def load_yaml(path):
    print(path)
    with open(path, 'r') as stream:
        return yaml.load(stream, Loader=yaml.FullLoader)


def save_plot(fig, path):
    fig.savefig(path, dpi=fig.dpi)
    print(f"Saved plot to {path}")
