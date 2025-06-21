server {
    listen 80;
    server_name diominvd.ru www.diominvd.ru;

    root /var/www/diominvd.ru/html;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    error_page 404 /404.html;
    location = /404.html {
        internal;
    }
}