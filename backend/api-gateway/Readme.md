# NGINX as an API Gateway 

- nginx.conf

worker_processes 1;

events {
    worker_connections 1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    # Define upstreams for your microservices
    upstream user_management {
        server localhost:3000;  # User Management microservice running on port 3000
    }

    upstream billing_service {
        server localhost:4000;  # Billing microservice running on port 4000
    }

    upstream service_management {
        server localhost:5000;  # Service Management microservice running on port 5000
    }

    server {
        listen 80;  # NGINX will listen on port 80 (HTTP)

        # Route for User Management API
        location /api/users/ {
            proxy_pass http://user_management;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # Route for Billing Service API
        location /api/billing/ {
            proxy_pass http://billing_service;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # Route for Service Management API
        location /api/services/ {
            proxy_pass http://service_management;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
}



