FROM node:16.3-alpine3.13 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY deploy/docker .
RUN npm run build

FROM nginx:1.20.1-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]