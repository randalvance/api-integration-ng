FROM nginx

WORKDIR /usr/share/nginx/html

COPY /dist .
COPY /src/api_urls.js .
COPY run.sh /run.sh

CMD ["sh", "/run.sh"]