CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    password VARCHAR,
    email VARCHAR
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users,
    title VARCHAR,
    content TEXT
);