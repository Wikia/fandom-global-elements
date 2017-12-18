FROM mhart/alpine-node:8.2.1

RUN apk update && \
  apk add nginx && \
  mkdir -p /run/nginx
