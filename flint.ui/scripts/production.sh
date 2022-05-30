#!/usr/bin/env bash
sed -i 's/http:\/\/localhost:8081/https:\/\/gcbm.azurewebsites.net/g' .env

sed -i 's/http:\/\/localhost:8080/https:\/\/flint-example.azurewebsites.net/g' .env
