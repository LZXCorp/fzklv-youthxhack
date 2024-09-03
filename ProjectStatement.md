## About the Project
...

## Inspiration
...

## Technical

The Web Application will be run in the cloud using a Virtual Cloud Computer running Linux with Docker installed.

Docker is used to containerize our application into four/five separate parts:
- Nginx Reverse Proxy
- Front-end Web Server (ReactJS)
- Back-end API Server (ExpressJS)
- MariaDB Database (Relational SQL Database)
- Redis Cache (optional)

The Nginx Reverse Proxy is used to point connections to the correct server. For base routes starting with '/api', it points to the Back-end API Server while any other base route leads to the Front-end Web Server. This will have an open bridge port, which will also be port forwarded to for public-facing connections.

The docker containers will be within a Docker Internal Network. Here are the list of containers per network.
- **Web Internal Network:** The Nginx Reverse Proxy, Front-end Web Server and Back-end API Server
- **Back-end Network:** The Back-end API Server, MariaDB Database and Redis Cache (optional)

A `docker-compose.yaml` file will be used to streamline and speedup the deployment of the containers.

Cloudflare will be used for the domain name and DNS propagation.
LetsEncrypt is used to the renewal of SSL/TLS Certificates.

## What we Learnt

- how to make use of ReactJS to create the Web Application
- how to make use of ExpressJS to create the API Endpoints and making use of SwaggerUI to test the endpoints efficiently
- how to structure and work together as a development team to ensure consistency throughout the development cycle
- how to deploy the web application using Dockerfile and docker-compose.yaml on a Linux machine

## Challenges Faced

- Since we were mostly newbies in Web Development, we weren't able to code out all of the features that we wanted into the application.
- Due to time and money constraints, we weren't able to get tokens for testing out the API services that we want to use along-side our application.
- Developing the application together caused some technical bugs due to differences in programming ethics and style. It was also caused from a lack of structure as we were not used to developing in production. This was eventually sorted out later on close to the deadline.