# Gift Me

A full-stack single page app where users can create more than one wishlist with items.

# Features

## Homepage

<img width="1267" alt="Screen Shot 2022-12-11 at 11 18 15 AM (2)" src="https://user-images.githubusercontent.com/5660854/206915337-39679dd4-3bea-4d0e-8f6c-44e7ba580ffc.png">

## Wishlists

### Make Wishlist

By clicking the 'New Wishlist' button, a form will appear for users to enter the list information.
![create-wishlist](https://user-images.githubusercontent.com/5660854/206913029-b9fe0f81-c394-478f-bafd-ba6dcee11c6f.gif)

### Edit Wishlist

By clicking the 'edit' icon, a form will appear for users to change the lists information.
![edit-list](https://user-images.githubusercontent.com/5660854/206913595-d13105c8-9456-40a8-86b7-7174e28a9035.gif)

### Delete Wishlist

Users can remove a list from clicking the 'trash' button.
<br />
![delete-list](https://user-images.githubusercontent.com/5660854/206913695-f646e85b-f60a-4bb1-8f32-c82865a43b65.gif)

## Items

### Add Item

By clicking the 'New Item' button, a form will appear for users to enter the items information, such as:

- Name
- Description
- Price
- Image URL
- Product URL

\*Form filled ahead of demonstration purposes
![add-item](https://user-images.githubusercontent.com/5660854/206914414-b0fbb3c4-55e1-4095-ba55-1107c385a654.gif)

### Edit Item

The 'edit' button will allow users to make changes to the item information.
![edit-item](https://user-images.githubusercontent.com/5660854/206914590-b4931fd0-ea97-4274-b5d3-875044c1c2f2.gif)

### Redirect to Product

The 'redirect' button will open the product page in a new tab.
![redirect-item](https://user-images.githubusercontent.com/5660854/206914788-038d00bf-288a-4dcd-b474-185417d49cb4.gif)

### Delete Item

The 'delete' button will remove the item from the list.
![delete-item](https://user-images.githubusercontent.com/5660854/206914866-383f830e-61b3-4fba-8b83-502e7b8fa7d2.gif)

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

#

Thank you for checking out my project!
