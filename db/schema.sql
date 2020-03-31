DROP DATABASE IF EXISTS sodapop;

CREATE DATABASE sodapop;

\c sodapop;


CREATE TYPE addiction_type AS ENUM ('Alcohol', 'Drugs', 'Sex', 'Gambling', 'Shopping', 'Food', 'Work', 'Pain', 'Exercise');
CREATE TYPE connection_type AS ENUM ('Friend', 'NeedSponsor', 'BeSponsor', 'Relationship');
CREATE TYPE gender AS ENUM ('Male', 'Female', 'Other');
CREATE TYPE sexual_orientation AS ENUM ('Straight', 'Gay', 'Bi');
CREATE TYPE time_unit AS ENUM ('Day', 'Month', 'Year');

Create TABLE location(
    id serial PRIMARY KEY,
    city TEXT NOT NULL,
    zipcode TEXT, -- text and not int because some zip codes have dashes (12345-12321)
    state TEXT,
    country TEXT NOT NULL,
    latitude INT,
    longitude INT
);

CREATE TABLE user_profile(
    id serial PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    username TEXT UNIQUE NOT NULL,
    firstname TEXT,
    password TEXT NOT NULL,
    created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP,
    picture_url TEXT,
    bio TEXT,
    struggle TEXT,
    location serial REFERENCES location (id),
    time_clean_amount int,
    time_clean_unit time_unit
);

Create TABLE user_profile_addiction(
    id serial PRIMARY KEY,
    user_profile_id serial REFERENCES user_profile (id),
    addiction_type addiction_type NOT NULL
);

Create TABLE relationship_option(
    id serial PRIMARY KEY,
    gender gender NOT NULL,
    sexual_orientation sexual_orientation NOT NULL
);

Create TABLE user_profile_connection(
    id serial PRIMARY KEY,
    user_profile_id serial REFERENCES user_profile (id),
    connection_type connection_type NOT NULL,
    relationship_option serial REFERENCES relationship_option(id)
);

Create TABLE message(
    id serial PRIMARY KEY,
    body TEXT NOT NULL,
    sender_id serial REFERENCES user_profile (id),
    recipient_id serial REFERENCES user_profile (id),
    CHECK (sender_id != recipient_id)
);

Create TABLE friend(
    id serial PRIMARY KEY,
    requestor_id serial REFERENCES user_profile (id),
    target_id serial REFERENCES user_profile (id),
    confirmed BOOLEAN NOT NULL, -- true when target accepts requestor's request
    CHECK (requestor_id != target_id)
);

