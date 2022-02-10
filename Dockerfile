FROM node:12 AS BUILD_IMAGE

COPY [".", "/opt/source/"]

WORKDIR /opt/source/

RUN npm install && npm run build

FROM node:12-slim

COPY --from=BUILD_IMAGE /opt/source/package.json /opt/source/
COPY --from=BUILD_IMAGE /opt/source/public /opt/source/public
COPY --from=BUILD_IMAGE /opt/source/node_modules /opt/source/node_modules
COPY --from=BUILD_IMAGE /opt/source/build /opt/source/build
COPY --from=BUILD_IMAGE /opt/source/next.config.js /opt/source/next.config.js

WORKDIR /opt/source/

EXPOSE 3000

CMD npm run start
