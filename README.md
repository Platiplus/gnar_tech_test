[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

# Gnar Tech Test :rocket:

This is a fullstack developer test provided by Gnar.io

## Starting
This project was developed using Node Js and React

To get yourself a local copy of the source code, you can run the command `git clone https://github.com/Platiplus/gnar_tech_test.git` on a terminal or download the zip folder by clicking on the upper right corner button.

### Pre-requisites

In case you want to run the project locally without containers:  
* [NodeJS](https://nodejs.org/)

In case you want to run the project with Docker containers:  
* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/install/)

Detailed information on how to install those applications are provided in the links above

### Running the project

#### Heroku :cloud:
You can access the project with the following link:
* [Heroku Build](https://pacific-woodland-57110.herokuapp.com/)  
##### Ps: You will probably have to navigate between pages and do a reload to wake up the free apps hehehe

#### Docker and Docker-compose :whale:
To install the project through docker, go to the root folder of the project and run the command `docker-compose up --build`.

Depending on your machine specs, this process can take SEVERAL minutes, go get a coffee while it builds! :coffee:

You can see the project on your browser at 'http://localhost'

#### Locally :house:
In case you want to install the project without using Docker containers, go inside the root folders of the applications (api and frontend) and run the command ```npm install``` in both of them.

Run the command `node server.js` in the api folder.
Run the command `npm start` in the frontend folder.

Running locally, you will probably use the provided connection to the Postgres database on the cloud, so you might want to change the SSL environment variable to "true" in the .env file on the api's root directory.

A new tab will open automatically in your browser, but in case it didn't, you can see the project at 'http://localhost:3000'

#### Suggested flow
* Upload a csv file at the uploads page
* See the upload file content on the explore page.

##### PS: The project isn't ENTIRELY responsive, but it has a 'budget' mobile version, try to check it out on your phone using the Heroku link

## Developed with

* [NodeJS](https://nodejs.org/)
* [NPM](https://www.npmjs.com/)
* [React](https://reactjs.org/)

## Author

* **Victor Rosa** - [Platiplus](https://github.com/Platiplus)

## License

This is an Open source project (MIT).
