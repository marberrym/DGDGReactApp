DROP TABLE IF EXISTS dgdg_users, dgdg_goals, dgdg_likes, dgdg_likes, dgdg_comments,
    dgdg_progress, dgdg_checkins CASCADE;

CREATE TABLE dgdg_users (
    id SERIAL PRIMARY KEY,
    username varchar(12) NOT NULL,
    first_name varchar(200) NOT NULL,
    last_name varchar(200) NOT NULL,
    email varchar(200) UNIQUE NOT NULL,
    avatar_file varchar(255),
    password varchar(200) NOT NULL
);

CREATE TABLE dgdg_goals (
    id SERIAL PRIMARY KEY,
    creation_date TIMESTAMP,
    user_id INTEGER REFERENCES dgdg_users(id),
    goal_status INTEGER NOT NULL,
    goal_name varchar(200) NOT NULL,
    goal_scope INTEGER NOT NULL,
    goal_category INTEGER NOT NULL,
    goal_description TEXT,
    goal_privacy INTEGER NOT NULL
);

CREATE TABLE dgdg_likes (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES dgdg_users(id),
    goal_id INTEGER REFERENCES dgdg_goals(id),
    UNIQUE (user_id, goal_id)
);

CREATE TABLE dgdg_comments (
    id SERIAL PRIMARY KEY,
    creation_date TIMESTAMP,
    user_id INTEGER REFERENCES dgdg_users(id),
    goal_id INTEGER REFERENCES dgdg_goals(id),
    comment varchar(500) NOT NULL
);

CREATE TABLE dgdg_progress (
    id SERIAL PRIMARY KEY,
    goal_id INTEGER REFERENCES dgdg_goals(id),
    progress_title varchar(500),
    progress_description TEXT,
    progress_image varchar(500)
);

CREATE TABLE dgdg_checkins (
    id SERIAL PRIMARY KEY,
    creation_date TIMESTAMP,
    user_id INTEGER REFERENCES dgdg_users(id),
    goal TEXT,
    goal_outcome INTEGER NOT NULL,
    goal_improvements TEXT,
    self_help INTEGER NOT NULL,
    self_help_response TEXT,
    help_others INTEGER NOT NULL,
    help_others_response TEXT
);