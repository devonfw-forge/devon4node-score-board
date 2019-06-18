FROM node:lts
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install -g @angular/cli@7.3.9
RUN npm install
EXPOSE 4200

ENTRYPOINT [ "ng","serve", "--host", "0.0.0.0"]