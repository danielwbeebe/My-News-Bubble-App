\c news_bubble_dev;

CREATE TABLE IF NOT EXISTS users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  email VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS sources
(
  id SERIAL PRIMARY KEY,
  source VARCHAR(255),
  user_id INT REFERENCES users(id)
);
