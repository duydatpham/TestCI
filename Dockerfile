#
# Created by duydatpham@gmail.com on 26/03/2021
# Copyright (c) 2021 duydatpham@gmail.com
#

# # build stage
# FROM node:latest as build
# WORKDIR /app
# ENV ver=0.7

# COPY package*.json .
# RUN npm install

# COPY . .
# RUN yarn build

FROM nginx:latest
COPY /build /usr/share/nginx/html

COPY ngix/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]