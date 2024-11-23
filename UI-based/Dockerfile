# chose the alpine image base (alpine is a lightweight linux distro)
FROM node:22-alpine
# node 18 is the LTS version of node

# Sets the working directory, basically the directory where Docker
# runs commands in.
WORKDIR /app/

# Just copied all the files and directories present into the container.
# In production, be more selective of what files are actually needed.
COPY . /app

RUN npm install

# --host 0.0.0.0 makes sure the server is accessible outside of docker
# run dev runs the development version, you can build the app and have a look
# at it with run preview (instead of dev), but for actual production, you should use a proper
# web server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
