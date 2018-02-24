/bin/sed -i "s|FACEBOOK_GRAPH_API_BASE_URL|${FACEBOOK_GRAPH_API_BASE_URL}|" /usr/share/nginx/html/api_urls.js
/bin/sed -i "s|BACKEND_GRAPH_API_BASE_URL|${BACKEND_GRAPH_API_BASE_URL}|" /usr/share/nginx/html/api_urls.js

nginx -g 'daemon off;'