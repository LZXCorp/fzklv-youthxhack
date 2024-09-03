FROM node:16.3.0-alpine AS prod
WORKDIR /app

COPY ./public /app/public
COPY ./dist /app/build

FROM nginx:alpine
WORKDIR /usr/local/bin

COPY --from=prod /app/build /usr/share/nginx/html
COPY generate-config.sh .
COPY web-nginx.template /etc/nginx/conf.d/

RUN chmod -R 766 /usr/share/nginx/html
RUN chown -R nginx:nginx /usr/share/nginx/html

RUN chmod +x generate-config.sh

EXPOSE 80

ENTRYPOINT ["/bin/sh", "generate-config.sh"]
