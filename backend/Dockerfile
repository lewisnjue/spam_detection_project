FROM python:3.9.21-slim

WORKDIR /app
COPY ./entrypoint.sh /app/
COPY ./requirements.txt /app/
COPY ./src/ /app/src/

RUN chmod +x ./entrypoint.sh 


CMD [ "./entrypoint.sh" ]