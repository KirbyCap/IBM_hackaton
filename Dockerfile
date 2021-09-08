# Step 1

FROM node:10-alpine as build-step

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

 

# Stage 2
FROM bitnami/nginx:latest
COPY ./nginx/nginx.conf /opt/bitnami/nginx/conf/nginx.conf
COPY --from=build-step /app /app