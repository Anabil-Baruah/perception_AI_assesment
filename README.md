
# Shopping cart API (Assignment)

This shopping cart CRUD API is a RESTful web service that provides the basic Create, Read, Update, and Delete (CRUD) operations for managing shopping carts. This API allows clients (such as web or mobile applications) to create, retrieve, update, and delete shopping carts and their contents.


## API Endpoints

#### Get all items

```http
  GET /api
```
This endpoint allows users to retrieve a array of all ahopping cartd stored on the database.

#### Add items / create a cart for the new user

```http
  POST /api
```
This endpoint allows users to add new items into the cart. If the user is new and then this api will create a new document object in the database and add the first item.

#### Get cart of only one user
```http
  GET /api/:id
```
This end point will allow to fetch the cart details of a single user by passing the unique id in the URL body.

#### Increase the quantity of items
```http
  PATCH /api/:id
```
This end point will allow to increase or decrease the quantity of items in a cart.

#### Delete items
```http
  DELETE /api/:id
```
This end point will allow to remove the items from the cart.
## Tech stack

- Node / Express.JS

- Mongo DB


## Features

- REST API architecture

- Add items to the cart

- Remove the items from the cart

- Create a cart

- Update the quantity of items from the cart


## Installation

To use this app, you'll need to have Node.js , npm and mongoDB installed on your machine.

```bash
cd perception_AI_assesment

```
Then install the node modules and all the dependencies by running -

```bash
 npm install
```
Start the server
```bash
 nodemon server.js
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URL` = mongodb://localhost:27017/Zigy




