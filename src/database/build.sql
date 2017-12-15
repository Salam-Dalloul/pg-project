BEGIN;

DROP TABLE IF EXISTS books CASCADE;

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  author VARCHAR(100) NOT NULL
);

INSERT INTO books (title, author) VALUES
('Harry Potter and the Philosophers Stone', 'J. K. Rowling'),
('The Trial', 'Kafka'),
('Twilight', 'Stephenie Meyer');

DROP TABLE IF EXISTS visitors CASCADE;

CREATE TABLE visitors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

INSERT INTO visitors (name) VALUES
('salam'),
('marwa'),
('hanan');

DROP TABLE IF EXISTS books_reservation CASCADE;

CREATE TABLE books_reservation (
  book_id integer REFERENCES books,
  visitor_id integer REFERENCES visitors,
  reservation_date date NOT NULL,
  reservation_period integer NOT NULL,
  PRIMARY KEY (book_id, visitor_id)
);

INSERT INTO books_reservation (book_id, visitor_id, reservation_date, reservation_period) VALUES
(1, 1, '1/1/2018', 5),
(2, 3, '4/1/2018', 3);

COMMIT;


