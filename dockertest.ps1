docker stop @(docker ps -qf "name=my-portfolio")
docker rm @(docker ps -qf "status=exited")
docker rmi tien-dnm-portfolio:latest
docker build -t tien-dnm-portfolio -f .docker/portfolio.dockerfile .
docker compose up -d