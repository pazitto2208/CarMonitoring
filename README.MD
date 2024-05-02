# Car Monitoring 

This project is a application built with Express.js, MongoDB, and Node.js. It provides APIs to manage car data and parameters.

## Getting Started

To get started with this project, follow these instructions:

## Prerequisites

- Node.js installed on your machine;
- MongoDB installed and running locally or an accessible MongoDB Atlas instance;


## Clone the repository
- git clone https://github.com/pazitto2208/CarMonitoring.git

1. Server side:
    ### Installation

    1. Install dependencies:
    - cd CarMonitoring
    - cd server
    - npm i 


    2. Set up environment variables:

    - Create a .env file in the root directory;
    - Define the following variables in the .env file:
        MONGO_ATLAS_CS=<your-mongodb-atlas-connection-string>
        MONGO_DB_NAME=<your-mongodb-database-name>

    ### Running the Server

    To run the server, execute:
    - npm run dev

    The server will start running at http://localhost:3000.

    ### Project Structure
    - /dataAccess: Contains data access classes to interact with MongoDB;
    - /controllers: Contains controller classes to handle business logic;
    - /routes: Defines API routes using Express Router;
    - /helpers: Contains helper classes/functions;
    - /database: Contains MongoDB connection setup;
    - index.js: Entry point of the application.

    ### Available Endpoints
    - GET /parameters: Retrieve parameters data;
    - POST /parameters: Add parameters data;
    - GET /cars: Retrieve cars data.

2. Client side:
    ### Installation

    1. Install dependencies:
    - cd CarMonitoring
    - cd client
    - npm i 

    2. Running application: 
    - npm run dev 

    The client will start generating and sending simulated sensor data to the server.

    ### Project Structure
    - /models: Contains model classes for car parameters.
    - /sensors: Defines functions to simulate sensor data.
    - /sensorDataSender: Contains a class to send sensor data to the server.
    - index.js: Entry point of the client application.

    ### Sensor Data Generation
    - Speed: Simulates random speed data.
    - Tyres Pressure: Generates random tyre pressure data for all four tyres.

    ### Sending Data to the Server
    - HTTP: Sends sensor data to the server using HTTP POST request.
    - MQTT: Publishes sensor data to an MQTT broker.

    ### Sample data
    {
        carId: '660e844d951281f01eaca684',
        speed: 57,
        tyresPressure: { 
            frontLeft: 2.59, 
            frontRight: 2.55, 
            rearLeft: 2.5, 
            rearRight: 2.55 
        }
    }

    To use the HTTP server, you'll need to start both the server and client applications. The HTTP client will send sensor data to the server using HTTP POST requests.

    Follow these steps to set up the MQTT broker using Mosquitto, and then start the server and client:

    ### Setting up the MQTT Brocker (Mosquitto)
    1. Follow the tutorial to install and run Mosquitto MQTT broker 
    2. Make sure the broker is running and accessible at mqtt://test.mosquitto.org or the appropriate address and port.
    3. Topic to subscribe: cars/{carId}/parameters

With both the server and client running, they should be able to communicate successfully.

## Authors
- Pazitto Eduardo
- Roncaglia Emanuele