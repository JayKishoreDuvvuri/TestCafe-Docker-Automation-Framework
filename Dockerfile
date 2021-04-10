FROM testcafe/testcafe
# See https://github.com/DevExpress/testcafe/tree/master/docker

# INSTALL PACKAGES
WORKDIR /usr/wdiowithoutgrid/
COPY package*.json ./
COPY . .
EXPOSE 8080
RUN npm install

ENTRYPOINT ["npm", "run", "test"]
