FROM debian:bullseye
VOLUME /usr/src/app
VOLUME /home/redis
WORKDIR /usr/src/app
COPY ./.bashrc /root/.bashrc
COPY ./redis.sh /usr/src/app/redis.sh
RUN apt-get update -y\
	&& apt-get install -y vim\
	&& apt-get install -y wget\
	&& apt-get install -y man\
	&& apt-get install -y gcc\
	&& apt-get install -y make
RUN wget 'http://download.redis.io/releases/redis-7.0.8.tar.gz'\
	&& tar -zxvf 'redis-7.0.8.tar.gz'\
	&& mv 'redis-7.0.8' 'redis'
WORKDIR /usr/src/app/redis
RUN 'make'
WORKDIR /usr/src/app/redis
RUN make PREFIX=/home/redis install || true
ENV PATH="/home/redis/bin:$PATH"
ENV REDIS_PW="mooyaho"
WORKDIR /usr/src/app
CMD ["bash", "redis.sh"]
