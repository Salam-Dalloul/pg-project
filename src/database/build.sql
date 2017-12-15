BEGIN;

DROP TABLE IF EXISTS usersinformations CASCADE;

CREATE TABLE usersinformations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  location VARCHAR(100) NOT NULL
);

INSERT INTO usersinformations (name, location) VALUES
('salam', 'gaza'),
('shahy', 'gaza');

COMMIT;
