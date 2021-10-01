.. _installation:

Installation
============

To set up this project locally, follow the procedure below:

1. Pull the docker image below to run ``flint.example``::

    docker pull shubhamkarande13/flint.example:bionic

2. Clone the `FLINT.UI <https://github.com/moja-global/FLINT-UI>`_ repository:

    When using submodules, the installation code needs to be::

        git clone --recursive https://github.com/moja-global/flint-ui

    Or, if you've already initialized the repository without the submodule::

        git submodule update --init --recursive

3. Now get inside the repository directory and build the ``docker-compose.yml``
   file by following the below command::

        docker-compose up

   This will build all the docker images inside the ``docker-compose.yml`` file.
   It will take some time and after that, you can see all images listed in the
   Docker app.

   .. figure:: images/docker-images.jpg
       :alt: A screenshot of the Images tab in the Docker app on desktop
           showing the list of images on disk.


   ``docker-compose.yml`` file is composed of three services:
   ``flint.example.api``, ``flint.gcbm.api``, and ``flint.ui``.

   Now you can start all the containers by clicking on the ``START`` button or
   using the command ``docker-compose up``. You can also use the command
   ``docker start {name of the container}`` to start one specific container.

   The list of all containers will look like this in the Docker app:

   .. figure:: images/docker-containers.jpg
       :alt: A screenshot of the Containers tab in the Docker app on desktop
           showing the list of containers.


   If you want to shut down a specific container, click on the ``STOP`` button
   of that specific container in the Docker app. You can also use the command
   line to stop a specific container by using the command
   ``docker stop {name of the container you want to stop}``.

   To shut down the entire ``docker-compose.yml`` file and all the services
   inside it, use the command ``docker-compose down``.

   .. note:: 
       You can also run ``docker-compose.yml`` in Detached mode. Detached mode,
       shown by the option ``--detach`` or ``-d``, means that a Docker container
       runs in the background of your terminal. It does not receive input or
       display output. The command for running ``docker-compose up`` in
       Detached mode is ``docker-compose up -d``.

4. To view the UI, please navigate to http://127.0.0.1:8000. It will look
   something like this:

   .. figure:: images/flint-ui-dashboard.jpg
       :alt: A screenshot of the FLINT-UI dashboard in a browser showing five
           routes and the side navigation pane.