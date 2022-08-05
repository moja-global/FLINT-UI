FROM node:17 as build-stage
WORKDIR /app
COPY ["package*.json", "./"]
RUN ["yarn", "install"]
COPY ["./", "."]
# Enabling this legacy option is a temporary fix.
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN ["yarn", "run", "build"]

FROM nginx:1.21.4 as production-stage
RUN ["mkdir", "/app"]
COPY --from=build-stage ["/app/dist", "/app"]
COPY ["nginx.conf", "/etc/nginx/nginx.conf"]
