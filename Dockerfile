# Step 1

FROM node:10-alpine as build-step
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

 

# Stage 2

FROM nginxinc/nginx-unprivileged 
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-step /app/build /usr/share/nginx/html
CMD ['chmod', '/var/run']