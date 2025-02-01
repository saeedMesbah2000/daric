FROM node:20-alpine3.21
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY package*.json .
RUN npm install 
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]