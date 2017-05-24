import values from 'lodash/values'

export const selectAllRelevantUsers = (state) => {
  return Object.values(state.relevantUsers)
}

export const selectWallPosts = (state, location_id) => {
  return Object.values(state.posts).filter(post => post.id === parseInt(location_id))
}
