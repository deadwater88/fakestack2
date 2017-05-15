# Schema Information

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Profile
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
Biography   | text      | not null
current_city| string    |
user_id     | integer   | not null, foreign key (references users), indexed
home_town   | string    |
image_url   | string    |
other_names | string    | default: [], array
favorite_quotes | string|

## Comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
post_id     | integer   | foreign key (references Posts), indexed
Content     | text      | not null

## Friend_requests
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
requester_id| integer   | not null, foreign key (references users), unique in context of recipient_id
recipient_id| integer   | not null, foreign key (references users)
Approved    | Boolean   | not null, default: false

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

## Interests
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
Type        | string    | not null, inclusion [Sports, Music, Books, TV Shows]
image_url   | string    | not null
