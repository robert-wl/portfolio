FROM node:lts AS runtime

WORKDIR /app

COPY . .

RUN npm install -g pnpm

RUN pnpm install
RUN pnpm build


EXPOSE 4321

CMD node ./dist/server/entry.mjs