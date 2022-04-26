.. _simulation:


Run a simulation
================

For running a simulation, you will need certain input and configuration files. For an example, you can `download and extract the GCDM_demo files <https://github.com/moja-global/FLINT.Cloud/blob/master/GCBM_Demo_Run.zip>`_.

How to run a simulation of the GCBM
-----------------------------------

To run a simulation locally, you need to `launch FLINT-UI with docker-compose as explained earlier <DevelopmentGuide/index.html#launch-using-docker>`_.
Otherwise, you can use a publicly accesible instance like `this one <https://nice-bush-04fb02600.1.azurestaticapps.net/>`_. Note that if you're using the Docker local instance, you will need to disable `CORS <https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS>`_.

Once inside, go to the GCBM simulation page by pressing "Explore" under the GCBM title (you should see `/gcbm/dashboard` in the url). Then, write a new name for the simulation, press "Create run" button and, upon success confirmation, go to next step "2. Upload dataset".

Select the recent created simulation from the drop-down list. Add the CONFIG files (json, cfg and conf files inside the ``config`` folder), the DB files (db file inside the ``input_database`` folder) and the INPUT files (json and tiff files inside the ``layers/tiled`` folder). Finally, press the "Submit uploaded files" button.

You can watch all the process in this video:

.. raw:: html

	<video src="https://user-images.githubusercontent.com/58583793/131383069-149d94b7-f26f-4b73-bc06-4e5c5d035e99.mov" data-canonical-src="https://user-images.githubusercontent.com/58583793/131383069-149d94b7-f26f-4b73-bc06-4e5c5d035e99.mov" controls="controls" muted="muted" class="d-block rounded-bottom-2 border-top width-fit" style="max-height:340px;">

	</video>

Once the files are uploaded, go to the next step "Run | Check status | Download" and press "Run simulation". You can check the status of the simulation and download the output once it's finished. Below, you can find a video showing this process:

.. raw:: html

	<video src="https://user-images.githubusercontent.com/58583793/131382996-8c3e4f73-46a0-4487-95c6-28b830e5bb49.mov" data-canonical-src="https://user-images.githubusercontent.com/58583793/131382996-8c3e4f73-46a0-4487-95c6-28b830e5bb49.mov" controls="controls" muted="muted" class="d-block rounded-bottom-2 border-top width-fit" style="max-height:340px;">

	</video>
