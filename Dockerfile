FROM nginx:alpine

# Copy static files to nginx
COPY . /usr/share/nginx/html/

# Remove unnecessary files
RUN rm -f /usr/share/nginx/html/Dockerfile \
    /usr/share/nginx/html/.gitignore \
    /usr/share/nginx/html/.gitattributes \
    /usr/share/nginx/html/.editorconfig \
    /usr/share/nginx/html/.DS_Store \
    /usr/share/nginx/html/.htaccess

EXPOSE 80
