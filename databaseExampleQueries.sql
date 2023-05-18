-- Create needed tables for animals
CREATE TABLE IF NOT EXISTS animals (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name varchar(100) NOT NULL,
    type varchar(100) NOT NULL,
    object varchar(100),
);


-- Insert some animals
INSERT INTO animals
  (name, type, object)
VALUES
  ( 'gigi',  'cat', 'rat' ),
  ( 'freddy',  'dog', 'biscuit' ),
  ( 'bob',  'trashpanda', 'candy' ),
  ( 'nagini',  'snake', 'band' ),
  ( 'kunfu',  'panda', 'food' );

-- Query the database to get all the animals
SELECT * FROM animals;
