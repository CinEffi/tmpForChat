# Description: Makefile for docker-compose
all	: 	
	cd ./be/backend/cineffi && ./gradlew build && cd ../../../ && docker-compose up -d
down :
	docker-compose down
clean :
	docker images | grep 'tmpForChat-' | awk '{print $$3}' | while read image_id; do \
        docker rmi $$image_id; \
    done

update: 
	if [ -z "$$(ls -A be/backend)" ]; then \
		git submodule update --init be/backend; fi;
	git submodule update --remote;
	cd be/backend && git checkout 'feat/building_redis_caching#25' && cd ../..;
	cat etc.txt >> ~/.zshrc;
	source ~/.zshrc;
