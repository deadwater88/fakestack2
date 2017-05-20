# Schema Information

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null, indexed, unique
session_token   | string    | not null, indexed, unique
intro       | string    |
current_city    | string    |
home_town       | string    |
profile_image_url | string    | default: ""
other_names     | string    | default: [], array
favorite_quotes | text      | default: [], array
first_name       | string    | not null, indexed
last_name        | string    | not null, indexed
places          | string    | default: [], array


## Comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
post_id     | integer   | foreign key (references Posts), indexed
content     | text      | not null

## Friend_requests
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
requester_id| integer   | not null, foreign key (references users), unique in context of recipient_id
recipient_id| integer   | not null, foreign key (references users)
approved    | Boolean   | not null, inclusion: [true, false] default: false

## Taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
comment_id  | integer   | not null, foreign key (references comments), unique in context of user_id
user_id     | integer   | not null, foreign key (references users), indexed
tagger_id   | integer   | not null, foreign key (references users)

## Posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
content     | text      | not null
location_id | integer   | not null, foreign key (references users), indexed

## Interests
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
type        | string    | not null, inclusion [Sports, Music, Books, TV Shows]
image_url   | string    |
title       | string    | not null
link_url    | string    |
