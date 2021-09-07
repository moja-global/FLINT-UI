<div align="center">
<h1>FLINT UI</h1>
<p>
A FLINT client, written in Vue, to provide an awesome user interface for configuring simulations using the FLINT.Cloud APIs.
</p>
<a href="#contributors"><img src="https://img.shields.io/badge/all_contributors-1-74e8a3.svg?style=flat-square" /></a>
<a href="https://github.com/moja-global/FLINT-UI/network/members"><img src="https://img.shields.io/github/forks/moja-global/FLINT-UI?color=74e8a3&style=flat-square" /></a>
<a href="https://github.com/moja-global/FLINT-UI/stargazers"><img src="https://img.shields.io/github/stars/moja-global/FLINT-UI?color=74e8a3&style=flat-square" /></a>
<a href="https://github.com/moja-global/FLINT-UI/blob/master/LICENSE"><img src="https://img.shields.io/github/license/moja-global/FLINT-UI?color=74e8a3&style=flat-square" /></a>
</div>

## About Project

This project provides an intuitive way for new to explore some preconfigured FLINT modules, including the Generic Budget Carbon Model (GCBM), in order to better understand how the FLINT system works. Our client is written as a Web application and can be used in a local or remote environment. Please contact us if you'd like help deploying your cloud instance or customizing the client.

## Usage

To set up this project locally follows the below procedure:

1. Pull the below docker image to run flint.example:

```shell
docker pull shubhamkarande13/flint.example:bionic
```

2. Clone [FLINT.UI](https://github.com/moja-global/FLINT-UI) repository:

When using submodules the installation code needs to be:

```shell
git clone --recursive https://github.com/moja-global/flint-ui
```

Or if you've already initialized the repository without the submodule

```shell
git submodule update --init --recursive
```

3. Now you have to get inside the repository directory and to build the `docker-compose.yml` file follow the below command:

```shell
docker-compose up
```

This will build all the docker images inside the `docker-compose.yml` file. It will take some time and after that, you can see all images list in the Docker app.

<div align="center">
<img src="assets/docker-images.jpg">
</div>

<br />

`docker-compose.yml` file is compose of four services i.e. `flint.example.api`, `flint.gcbm.api`, `flint.ui` and `storybook`.

Now you can start all the containers by clicking on the `START` button or using the command `docker-compose up`. You can also use the command `docker start {name of the container}` to start the only specific container.

All containers list will look like this in the Docker app:

<div align="center">
<img src="assets/docker-containers.jpg">
</div>

<br />

If you want to shut down a specific container click on the `STOP` button of that specific container in the Docker app. You can also use the command line to stop a specific container by using the command `docker stop {name of the container you want to stop}`

To shut down, the whole `docker-compose.yml` file and all services inside it then use the command `docker-compose down`.

> You can also run `Detached mode` in Detached mode. Detached mode, shown by the option `--detach` or `-d`, means that a Docker container runs in the background of your terminal. It does not receive input or display output. So the command for running `docker-compose up` in Detached mode is `docker-compose up -d`.

> You may encounter a problem with the `flint.gcbm.api` containers because it is not refactored for a local environment yet.

4. To view the UI please navigate to [127.0.0.1:8000](http://127.0.0.1:8000/). UI will look something like this:

<div align="center">
<img src="assets/dashboard.jpg">
</div>

## Developer notes

### Vue app

To run the Vue app locally, you can follow the below procedure:

1. Go to the `flint.ui` folder and run `npm install`.
2. Run `npm run serve` to start the Vue app server.
3. Go to [127.0.0.1:8000](http://127.0.0.1:8000/) to view the Vue app.

### Storybook in local development

Storybook dependencies and configuration are located under the `flint.ui/.storybook` directory.

To build and launch Storybook locally, we have to follow the below procedure:

Go to the `flint.ui` directory.

1. Install Storybook dependencies:

```shell
npm install
```

2. Build the Storybook site:

```shell
npm run storybook
```

Go to [localhost:6006](http://localhost:6006/) to view the Storybook.

### Dependency management

Our `package.json` file is gitignored to enforce strict management of our client dependencies.

In order to add a new dependency, please:

1. use `npm install <your-package>`
2. `git checkout -b dependency/<your-package>`
3. `git add --force flint.ui/package.json`
4. `git push` and submit a PR with only the `package.json` changes

Our CI build will test for conflicts and your new dependency will be added after your PR has been reviewed.

#### npm ci

You can also use `npm ci` to test your changes locally. CI stands for continuous integration and `npm ci` is used to install all exact version dependencies or devDependencies from a `package-lock.json` file.

- It is generally used to install dependencies.
- It never writes to `package.json` or `package-lock.json`.
- Individual dependencies cannot be added with this command.
- It is faster in execution.
- If any dependencies are missing or have incompatible versions, then `npm ci` will throw an error.
- If a `node_modules` is already present, it will be automatically removed before `npm ci` begins its install.
- It can not install global packages.
- Used for the deterministic, repeatable build.

### Code Style

The Vue.js style guide has been used to maintain a consistent style throughout the project. Click [here](https://vuejs.org/v2/style-guide/) to learn more about the style guide.

One exception is the case used to describe the ecological models exposed to our FLINT client. Because model names, and sometimes model variables, often use acronyms these remain capitalized.

Obvious examples are:

- GCBM: Generic Carbon Budget model
- FLINT: Full Lands Integration Tool
- RothC: Rothamstead Carbon model

We recommend using ESLint and the prettier plugins to make conforming to the Vue style guide easily. There is official integration for VSCode and Atom editors. Find out more [here](https://eslint.vuejs.org/user-guide/).

If you have ESLint installed globally, you can run it from the `flint.ui` directory. For example, this will detect any errors in the `src` folder:

```
eslint --ext .js,.vue src
```

Minor errors can be fixed automatically:

```
eslint --fix --ext .js,.vue src
```

## Code Style

- The Vue.js style guide has been used to maintain a consistent style throughout the project. Click [here](https://vuejs.org/v2/style-guide/) to learn more about the style guide.

## How to Get Involved?

moja global welcomes a wide range of contributions as explained in [Contributing document](https://github.com/moja-global/About-moja-global/blob/master/CONTRIBUTING.md) and the [About moja-global Wiki](https://github.com/moja-global/.github/wiki).

## FAQ and Other Questions

- You can find FAQs on the [Wiki](https://github.com/moja.global/.github/wiki).
- If you have a question about the code, submit [user feedback](https://github.com/moja-global/About-moja-global/blob/master/Contributing/How-to-Provide-User-Feedback.md) in the relevant repository
- If you have a general question about a project or repository or moja global, [join moja global](https://github.com/moja-global/About-moja-global/blob/master/Contributing/How-to-Join-moja-global.md) and
  - [submit a discussion](https://help.github.com/en/articles/about-team-discussions) to the project, repository or moja global [team](https://github.com/orgs/moja-global/teams)
  - [submit a message](https://get.slack.help/hc/en-us/categories/200111606#send-messages) to the relevant channel on [moja global's Slack workspace](mojaglobal.slack.com).
- If you have other questions, please write to info@moja.global

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://moja.global"><img src="https://avatars1.githubusercontent.com/u/19564969?v=4" width="100px;" alt="moja global"/><br /><sub><b>moja global</b></sub></a><br /><a href="#projectManagement-moja-global" title="Project Management">📆</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

## Maintainers Reviewers Ambassadors Coaches

The following people are Maintainers Reviewers Ambassadors or Coaches

<table><tr><td align="center"><a href="http://moja.global"><img src="https://avatars1.githubusercontent.com/u/19564969?v=4" width="100px;" alt="moja global"/><br /><sub><b>moja global</b></sub></a><br /><a href="#projectManagement-moja-global" title="Project Management">📆</a></td></tr></table>

**Maintainers** review and accept proposed changes
**Reviewers** check proposed changes before they go to the Maintainers
**Ambassadors** are available to provide training related to this repository
**Coaches** are available to provide information to new contributors to this repository

## License

[Mozilla Public License Version 2.0](https://github.com/moja-global/FLINT-UI/blob/master/LICENSE)
