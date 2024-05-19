FROM python:3.11-slim

WORKDIR /app

COPY Pipfile Pipfile.lock ./
RUN apt-get update && apt-get install -y python3.11

RUN ln -s /usr/bin/python3.11 /usr/bin/python
RUN python -m pip install --upgrade pip

RUN pip install pipenv && pipenv install
COPY . .
