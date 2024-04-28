FROM openjdk:17.0.2-jdk-slim-buster
VOLUME /usr/src/app
WORKDIR /usr/src/app
COPY ./back.sh /usr/src/run.sh
COPY ./.bashrc /root/.bashrc
CMD ["bash", "/usr/src/run.sh"]
