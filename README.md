### Important Docker Commands

- View running containers
    - `docker ps`

- Pull and run images
    - `docker pull <image_name>`
    - `docker run <image_name>`    

- Delete image
    - `docker rmi <image_name>`

- Delete container
    - `docker rm <container_name>`

- View all containers
    - `docker ps -a`

- Port binding
    - `docker run -p<host_port>:<image_port> -d <image>:<version>`

- Start container
    - `docker restart <id>`
    - `docker start <id>`

- Stop container
    - `docker stop <id>`

- Debugging
    - `docker logs <id>`

- Renaming a container    
    - `docker run -d -p<host_port>:<image_port> --name <any_name> <image_name>:<image_port>`

- Inside view of a container
    - `docker exec -it <containerId> /bin/bash`

- List docker network
    - `docker network ls`

- Create a network
    - `docker network create <network_name>`

- Run image with network, name and env variables
    - `docker run -p <host_port>:<img_port> -d -e <env_name>=<env_val> -e <env_name>=<env_val> --name <container_name> --net <network_name> <img_name>`

- View docker container directory
    - `docker exec it <docker_container> /bin/sh`

### docker-compose

- Run file
    - `docker-compose -f docker-compose.yaml up`
    - `docker-compose -f docker-compose.yaml down`

### Dockerfile

- Build docker image
    - `docker build -t <image_name>:<image_version> <path>`