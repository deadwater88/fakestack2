# API Endpoints

## HTML API

### Root
- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Profiles (resource profiles)

- `GET /api/users/:user_id/profile`
- `POST /api/users/:user_id/profile`
- `PATCH /api/users/:user_id/profile`
- `DELETE /api/users/:user_id/profile`

### Comments
- `GET /api/comments/:comment_id`
- `POST /api/comments/`
- `PATCH /api/comments/:comment_id/`
- `DELETE /api/comments/:comment_id/`
