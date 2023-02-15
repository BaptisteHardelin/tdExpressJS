-- drop tables
DROP TABLE IF EXISTS quote;
DROP TABLE IF EXISTS author;
-- create tables
CREATE TABLE author (
    auth_id INTEGER PRIMARY KEY,
    auth_firstname TEXT NOT NULL,
    auth_lastname TEXT NOT NULL,
    auth_picture TEXT
);
CREATE TABLE quote (
    quo_id INTEGER PRIMARY KEY,
    quo_text TEXT NOT NULL,
    auth_id INTEGER NOT NULL,
    FOREIGN KEY (auth_id) REFERENCES author(auth_id)
);
-- insert data
INSERT INTO author (auth_firstname, auth_lastname, auth_picture)
VALUES ('Sherlock', 'Holmes', 'holmes.jpeg'),
    ('George', 'Orwell', 'orwell.jpeg'),
    ('Rene', 'Descartes', 'descartes.jpeg'),
    ('Travis', 'Bickle', 'bickle.jpeg'),
    ('Toto', 'toto', 'toto.jpeg');
INSERT INTO quote (quo_text, auth_id)
VALUES ('Elementary, my dear Watson', 1),
    ('Big Brother is watching you', 2),
    ('I think therefore I am', 3),
    ('You talkin'' to me?', 4);