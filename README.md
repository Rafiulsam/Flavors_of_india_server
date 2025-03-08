# Flavors of India - Server
### [Live Link](https://flavors-of-india-d6dbf.web.app/)

## Description

Flavors of India is the backend server for the [**Flavors of India**](https://github.com/Rafiulsam/flavors-of-india-client) project. This server is built using **Node.js** and **Express.js**, providing APIs to manage chefs and spices data for the client-side application.

## Features

- RESTful API for handling chefs and spices data.
- Simple and lightweight Express server.
- CORS enabled for cross-origin access.

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework for Node.js
- **Cors** - Cross-Origin Resource Sharing

## Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)

### Steps to Run

1. Clone the repository:
   ```sh
   git clone https://github.com/Rafiulsam/Flavors_of_india_server.git
   cd Flavors_of_india_server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```

The server will be running on `http://localhost:5000/`

## API Endpoints

### General

- **GET** `/` - Check if the server is running

### Chefs

- **GET** `/chefs` - Fetch all chefs data
- **GET** `/chefs/:id` - Fetch a specific chef by ID

### Spices

- **GET** `/spices` - Fetch all spices data


---

Feel free to contribute or raise issues in the repository!

🚀 Happy Coding!

