CREATE DATABASE pern_wishlist;

DROP TABLE IF EXISTS users CASCADE;

DROP TABLE IF EXISTS wishlists CASCADE;
CREATE TABLE wishlists (
  wishlist_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255)
);

DROP TABLE IF EXISTS items CASCADE;
CREATE TABLE items (
  item_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  url VARCHAR,
  img_url VARCHAR,
  price decimal(10,2),
  wishlist_id INTEGER NOT NULL REFERENCES wishlists(wishlist_id) ON DELETE CASCADE NOT NULL
);