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
biography   | text      | not null
current_city| string    |
user_id     | integer   | not null, foreign key (references users), indexed
home_town   | string    |
image_url   | string    |
skills      | string    | default: [], array
other_names | string    | default: [], array
favorite_quotes | string| 

## Places
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | string    | not null, foreign key (references users), indexed
city        | string    | not null,
country     | string    | not null,

## Contact Information
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
user_id      | string    | not null, foreign key (references users), indexed
Mobile Phones| string    | default: [], array
country      | string    | not null,
websites     | string    | default: [], array


## Work_history
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
Organization| string    | not null
Position    | string    |
user_id     | integer   | not null, foreign key (references users), indexed
City/Town   | string    |
Description | text      |
Start Date  | Date      |
End Date    | Date      |

## Education_history
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
School      | string    | not null
Graduated   | Boolean   | default true
user_id     | integer   | not null, foreign key (references users), indexed
Type        | string    | high_school, college
City/Town   | string    |
Focus       | text      |
Start Date  | Date      |
End Date    | Date      |


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
