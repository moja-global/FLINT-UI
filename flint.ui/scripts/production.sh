#!/usr/bin/env bash
sed -i 's/http:\/\/localhost:8081/https:\/\/rest-api-gcbm-flint-example.azurewebsites.net/g' .env

sed -i 's/http:\/\/localhost:8080/https:\/\/flint-example-rest-api-example.azurewebsites.net/g' .env
