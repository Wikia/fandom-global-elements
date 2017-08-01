FROM mhart/alpine-node:8.2.1

RUN apk update && \
  apk add nginx=1.12.1-r0 && \
  mkdir -p /run/nginx
