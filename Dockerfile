# syntax=docker/dockerfile:1

FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm install --production
CMD ["npm", "run", "start"]
EXPOSE 4200