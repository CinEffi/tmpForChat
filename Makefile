# Description: Makefile for docker-compose
all	: 	
	cd ./be/backend/cineffi && ./gradlew build && cd ../../../ && docker-compose up -d
down :
	docker-compose down
clean :
	docker images | grep 'tmpForChat-' | awk '{print $$3}' | while read image_id; do \
        docker rmi $$image_id; \
    done
