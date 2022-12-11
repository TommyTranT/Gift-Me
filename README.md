# Gift Me

A full-stack single page app where users can create more than one wishlist with items.

# Features

## Homepage

## Wishlists

### Make Wishlist

![create-wishlist](https://user-images.githubusercontent.com/5660854/206913029-b9fe0f81-c394-478f-bafd-ba6dcee11c6f.gif)

### Edit Wishlist

### Delete Wishlist

## Items

### Add Item

### Edit Item

### Redirect to Product

### Delete Item

# Technologies

### Front-end

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MaterialUI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)

### Back-end

![Express.JS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

### Database

![Postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

# Usage

Clone and CD into Project Folder:
`git@github.com:TommyTranT/pern-wishlist.git`

This project requires the use of the back-end server and the front-end client.

# Set up the Database

This app connects to the server to a local PostgreSQL database. To set it tup, PostgreSQL is required.

The file 'database.sql' in the server/database has the commands to create the database and table required.

# Set up Server API

CD into server folder:
`cd server`

Install server dependencies:
`npm i`

Start the server:
`npm start`

# Set up Client

From another terminal, CD into the client folder:
`cd client`

Install client dependencies:
`npm i`

Start the client:
`npm start`

# Dependencies

### Server

    cors: ^2.8.5
    express: ^4.18.2
    morgan: ^1.10.0
    nodemon: ^2.0.20
    pg: ^8.8.0

### Client

    @emotion/react: ^11.10.5
    @emotion/styled: ^11.10.5
    @fontsource/roboto: ^4.5.8
    @mui/icons-material: ^5.10.16
    @mui/material: ^5.10.17
    axios: ^1.2.0
    react: ^18.2.0
    react-dom: ^18.2.0
    react-scripts: 5.0.1
