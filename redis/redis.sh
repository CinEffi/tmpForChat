#!/bin/bash

# Redis 설정 파일 경로
redis_conf="/usr/src/app/redis/redis.conf"

# 변경할 내용
search_bind="^bind"
replace_bind="bind redis"

search_requirepass="# requirepass foobared"
replace_requirepass="requirepass $REDIS_PW"

# sed 명령을 사용하여 파일 내용 변경
sed -i "s/${search_bind}.*/${replace_bind}/" $redis_conf
sed -i "s/${search_requirepass}.*/${replace_requirepass}/" $redis_conf

redis-server ./redis/redis.conf
