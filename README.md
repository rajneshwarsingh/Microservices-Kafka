# Microservices with Kafka

This project demonstrates a microservices-based architecture for User and Product management using Kafka for communication between services. It includes features like JWT-based authentication, data validation, and error logging. Feel free to use, modify, and expand upon this project for personal or professional use.

## What will you need:

- Clone this repository: <a href="https://github.com/rajneshwarsingh/Microservices-Kafka">Microservices-Kafka</a>
- An IDE or text editor like VS Code
- Node version installed above 20.12.1
- Run `npm install` to install the necessary node packages.
- Install MySQL and phpMyAdmin
- Create an `.env` file based on the `.env.sample` and update MongoDB credentials.
- Run the following commands to start the full project
    - Make the bash script executable: `chmod +x nodeServe.sh` 
    - Run the bash script: `./nodeServe.sh `
- Run the Docker commands for setup the Kafka `docker-compose up -d`
- Import the MIcroservice-Kafka.postman_collection.json file in postman
- Microservices APIs ready for the testing

## Project Run Commands

- Make the bash script executable: `chmod +x nodeServe.sh` 
- Run the bash script: `./nodeServe.sh`

## Key Topics

The following topics were covered in this unit:

- User CRUD module with SignUp and Login
- Product CRUD module
- Express-Gateway
- Microservices architecture
- Kafka communication
- Request method like Get, Post, Put, Delete
- JWT authorization and authentication
- Joi validation
- Sequelize ORM
- Winston error and info loggers
- Bcrypt for password hashing and compare
- Helmet
- Eslint
- Multi environment config
- PM2 for alive forever
- Prettier for code formatter
- Postman collection
- Bash script

## Helpful Links

<table>
  <tr>
    <td><b>Node.js:</b></td>
    <td><a href="https://nodejs.org/en">Nodejs.org</a></td>
  </tr>
  <tr>
    <td><b>Typescript:</b></td>
    <td><a href="https://www.typescriptlang.org/">typescriptlang.org</a></td>
  </tr>
  <tr>
    <td><b>Microservice:</b></td>
    <td><a href="https://microservices.io/">microservices.io</a></td>
  </tr>
  <tr>
    <td><b>Kafka:</b></td>
    <td><a href="https://kafka.apache.org/">kafka.apache.org</a></td>
  </tr>
  <tr>
</table>

---

© 2024 <a href="https://rajneshwar.com/">Rajneshwar Singh</a>

