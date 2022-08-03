FROM node:12.22.9-buster-slim

# set the working directory in the container
RUN mkdir /app
RUN chmod 777 /app
WORKDIR /app

COPY package.json yarn.lock .
RUN yarn install

COPY . .

CMD ["yarn", "start"]
