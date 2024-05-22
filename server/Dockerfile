FROM python:3.11-slim

WORKDIR /app

COPY Pipfile Pipfile.lock ./
RUN apt-get update && apt-get install -y python3.11

# Symlink python3.11 to python
RUN ln -s /usr/bin/python3.11 /usr/bin/python
RUN python -m pip install --upgrade pip

RUN pip install pipenv && pipenv install
COPY . .

# Удаление миграций из Dockerfile, так как они будут выполнены в контейнере
# RUN pipenv run python backend/manage.py makemigrations
# RUN pipenv run python backend/manage.py migrate

CMD ["pipenv", "run", "python", "backend/manage.py", "runserver", "0.0.0.0:5000"]
