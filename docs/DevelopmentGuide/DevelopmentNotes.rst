Development Notes
=================

Docker
------

Run commands from FLINT UI repo folder:

FLINT Example

1. To build image

.. code:: shell

   docker build -t flint-api ./flint.cloud/local/rest_api_flint.example

2. To run image

.. code:: shell

   docker run --rm -d -p 8080:8080 flint-api

GCBM

1. To build image

.. code:: shell

   docker build -t gcbm-api ./flint.cloud/local/rest_api_gcbm

2. To run image

.. code:: shell

   docker run --rm -d -p 8081:8080 gcbm-api

Vue app
-------

To run the Vue app locally, you can follow the below procedure:

1. Go to the ``flint.ui`` folder and run ``yarn install``.
2. Run ``yarn serve`` to start the Vue app server.
3. Go to `127.0.0.1:8000`_ to view the Vue app.

E2E Testing 
-------

To test the Vue app locally, you can follow the below procedure:

1. Go to the ``flint.ui`` folder
2. Run ``yarn test:e2e`` 
3. This will run the app in production mode at `127.0.0.1:8000`_ for E2E testing.
4. The Cypress interactive GUI will be opened where E2E testing can be run   

Storybook in local development
------------------------------

Storybook dependencies and configuration are located under the
``flint.ui/.storybook`` directory.

To build and launch Storybook locally, we have to follow the below
procedure:

Go to the ``flint.ui`` directory.

1. Install Storybook dependencies:

.. code:: shell

   yarn install

2. Start the Storybook in development mode:

.. code:: shell

   yarn storybook

Go to `localhost:6006`_ to view the Storybook.

Storybook in production
-----------------------

We have deployed Storybook on `Chromatic`_. It is made by Storybook
maintainers. Chromatic automates gathering UI feedback, visual testing,
and documentation, so developers can iterate faster with less manual
work.

-  Get a permalink to FLINT-UI’s latest published Storybook on a given
   branch. Replace ``<branch>`` with the designated branch.

.. code:: shell

   https://<branch>--612f3734da98c9003a398626.chromatic.com

-  Get a permalink to the latest published component or library on a
   given branch. Add the ``&branch=<branch>`` query parameter to the
   url.

.. code:: shell

   https://chromatic.com/library?appId=612f3734da98c9003a398626&branch=<branch>

Storybook live (master branch):
https://master--612f3734da98c9003a398626.chromatic.com

Storybook documentation can be found on the index page of https://master--612f3734da98c9003a398626.chromatic.com/.

Dependency management
---------------------

We are following `Yarn`_ package manager.

Our ``package.json`` file is gitignored to enforce strict management of
our client dependencies.

In order to add a new dependency, please:

1. use ``yarn add <your-package>``
2. ``git checkout -b dependency/<your-package>``
3. ``git add --force flint.ui/package.json``
4. ``git push`` and submit a PR with only the ``package.json`` changes

Our CI build will test for conflicts and your new dependency will be
added after your PR has been reviewed.

Code Style
----------

The Vue.js style guide has been used to maintain a consistent style
throughout the project. Click `here`_ to learn more about the style
guide.

One exception is the case used to describe the ecological models exposed
to our FLINT client. Because model names, and sometimes model variables,
often use acronyms these remain capitalized.

Obvious examples are:

-  GCBM: Generic Carbon Budget model
-  FLINT: Full Lands Integration Tool
-  RothC: Rothamstead Carbon model

We recommend using ESLint and the Prettier plugins to make conforming to
the Vue style guide easy. There is `official integration`_ for VSCode and
other editors.

If you have ESLint installed globally, you can run it from the
``flint.ui`` directory. For example, this will detect any errors in the
``src`` folder:

.. code:: shell

   eslint --ext .js,.vue src

Minor errors can be fixed automatically:

.. code:: shell

   eslint --fix --ext .js,.vue src

.. _`127.0.0.1:8000`: http://127.0.0.1:8000/
.. _`localhost:6006`: http://localhost:6006/
.. _Chromatic: https://www.chromatic.com/
.. _Yarn: https://yarnpkg.com/
.. _here: https://vuejs.org/v2/style-guide/
.. _official integration: https://eslint.vuejs.org/user-guide/
