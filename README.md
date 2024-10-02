# SriTel

Project Overview
- This project is a microservices-based telecom management system that provides customers with essential functionalities such as user management, billing, and service management. It uses modern web technologies and open-source tools to ensure scalability, security, and ease of use.

Features
User Management: Secure user registration, login, and JWT-based authentication.
Service Management: Activate and deactivate telecom services
Billing System: View and manage bill history, make online payments.
Microservices Architecture: Services are broken down into User Management, Billing, and Service Management for better scalability.
API Gateway: NGINX is used as the reverse proxy for routing between microservices.
Technologies Used
Backend:
Node.js: Runtime environment for building scalable server-side applications.
Express.js: Fast, unopinionated, and minimalistic web framework.
MongoDB: used for data storage.
JWT: JSON Web Tokens for secure authentication and authorization.
NGINX: Acts as the API gateway to route traffic between microservices.
AMQP: Message broker for asynchronous communication (RabbitMQ).
Frontend:
React: JavaScript library for building user interfaces.
Axios: Promise-based HTTP client for making API requests.
Microservices
User Management Service

Manages user registration, login, and user information.
Uses JWT for authentication and authorization.
Billing Service

Manages billing history and payments for users.
Interacts with a mock payment gateway and returns billing history.
Service Management Service

Allows users to activate and deactivate telecom services.
Communicates with the Provisioning System via RESTful APIs.
Messaging Service

Handles message publishing and consumption for asynchronous communication between services (using RabbitMQ).