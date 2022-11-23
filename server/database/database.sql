CREATE DATABASE pern-wishlist;

CREATE TABLE user(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255),
)

CREATE TABLE wishlist(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description VARCHAR(255),
  user_id INT FOREIGN KEY REFERENCES user(id);
)

CREATE TABLE items(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description VARCHAR(255),
  url VARCHAR(255),
  img_url VARCHAR(255),
  price INT,
  wishlist_id INT FOREIGN KEY REFERENCES wishlist(id);
)