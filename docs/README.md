# FLINT-UI documentation

This directory contains user and developer documentation for the [FLINT-UI](https://github.com/moja-global/FLINT-UI) project. We use [Sphinx](https://www.sphinx-doc.org/) with [reStructuredText](https://docutils.sourceforge.io/rst.html) as our markup language. The documentation website uses a [ReadTheDocs](https://github.com/readthedocs/sphinx_rtd_theme) theme.

## Documentation setup

To edit the documentation you need a [GitHub](github.com) account. Once you have created one and logged in, you can edit any page by navigating to the corresponding file and clicking the edit (pen) icon.

This will create a "fork" and further you can create a "pull request", which will be approved by one of the existing members of the Docs team. If you have any development experience, you can setup the docs on your local machine to build the documentation locally.

First make a fork, and then clone the repo:

```sh
git clone https://github.com/<GITHUB_USERNAME>/FLINT-UI.git
cd FLINT-UI
cd docs
```

Replace the `<GITHUB_USERNAME>` with your GitHub username. You can find your username by clicking on your profile picture in the top right corner of the GitHub website.

We are now in the `docs` directory. Let us set the documentation up:

### For **Linux** Users

```sh
virtualenv env
source env/bin/activate
pip install -r requirements.txt
make html
```

### For **Windows** Users

```sh
virtualenv env
env\Scripts\activate
pip install -r requirements.txt
make html
```

You can now open the documentation site on `_build/html/index.html` in your browser. Make corresponding changes on the documentation site and then run `make clean && make html` to update the documentation. You can now create a pull request to get your changes merged into the upstream master branch.
