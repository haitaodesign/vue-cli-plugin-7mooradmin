FROM node:10.15.0-alpine
ADD . /build
WORKDIR /build
RUN yarn config set registry https://registry.npm.taobao.org -g \
    && yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g \
    && yarn && yarn run build

FROM nginx:1.15.3-alpine
LABEL app="fedocs" maintainer="liht<liht@7moor.com>"
WORKDIR /www
COPY --from=0 /build/docs/.vuepress/dist ./
