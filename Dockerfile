FROM node:20-alpine3.21
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY . .
RUN npm install 
EXPOSE 3000
CMD ["npm", "run", "dev"]