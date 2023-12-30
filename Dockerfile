FROM: node:18-alpine

WORKDIR /src

COPY . .

RUN npm install --unsafe-perm

EXPOSE 3000

CMD ["npm","start"]
