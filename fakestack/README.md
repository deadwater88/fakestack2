# Fakestack

[Fakestack live][heroku]

[heroku]: http://www.fakestack.us/

Fakestack is a full-stack web app clone intended to replicate many of the features of Facebook as well replicates its UI design as accurately as possible. The back-end framework was built using Ruby on Rails utilizing a PostgreSQL dataabase, and the front-end was built using React/Redux framework.

## Features & Implementation  

### Note Rendering and Editing

  The front-end store is a normalized state consisting of 7 top-level slices/resources: comments, currentUserProfile, notices, posts, relevantUsers, session, and viewedUserProfile.

### Friending

  Friending is handled using a friending table/model on the backend containing columns for `id`, `requester_id`, `recipient_id`, `approved` `createdAt` and `updated_at`. To determine a user's friends, the users table is joined to itself using the Friending as joining table and extracting all recipient_ids where the requester is the user and the approved is set to true. Since a `friendship` can also exist in a reverse relationship where the user is the recipient of a friend request, two queries are used to construct any particular user's friends.

  ```ruby
  def friends
    friends1 = self.requesters.where(friendings: {approved: true})
    friends2 = self.recipients.where(friendings: {approved: true})
    friends1 + friends2
  end
  ```

  Friending is stored as an array of reference Ids within userProfile state (currentUser or viewedUser). It is used in conjunction with another top-level state, relevantUsers to access user objects corresponding to the reference friends reference id.

### Posts and Comments

  Posts exists both as a top-level state on the front-end as well as a model/table on the back-end. It has columns pertaining to `author_id`, `id`, `location_id`, and `content`. Comments are similar except that their `location_id` is replaced with a `parent_id.` To allow for the nested replies available in facebook, comments are set up to have a polymorphic association where it's parent may be a post or another comment.

  On viewing a target user's wall (it may be the current user), all posts referencing the target user's `id` as it's `location_id` are fetched using a simple SQL query. Each post object, will also include an `comments` array of ids referencing the comments belonging to the post through an association. Comments are similarly imported except that their "child comments" (known as `replies`) are stored as an array of objects instead of references.

  Both comments and posts are made available as top-level resources on the front-end and are accessed by reference ids as needed.

### Profiles

  On the database side, all profile details are almost all stored as columns within the users table, using a variety of data-types including, text, string and with some fields such as `places` existing as an array.

  All of the profile information is stored on the front-end under a single `userProfile` top-level state. Information is fetched using an api call to the `users/show` route. The JSON response will include relationship information as along with profile information stored in the user table.

  Limited photo upload capability is provided through Cloudinary widgets to allow for users to upload profile pictures and cover images.

  It presented a significant challenge to generate uniformly styled forms, displays, and functions for what amounted to about 7 different profile details. To address this, modular components were created to handle similar data-types. At cost of some overhead time to generate a more complex, but modular component, I was able to successfully use quickly generate similar displays for different profile details.

```Javascript

  let profileInfoCurrentCity = {editCheck: editCheck,
                       instruction: "Add your current city",
                       inputLabel: "Current City",
                       propName: "current_city",
                       value: this.props.viewedUserProfile.currentCity}


  <UnitForm profileInfo={profileInfoCurrentCity}
    viewedUserProfile={this.props.viewedUserProfile}
    updateProp={this.props.updateProp} />
  <UnitForm profileInfo={profileInfoHometown}
    viewedUserProfile={this.props.viewedUserProfile}
    updateProp={this.props.updateProp} />
  ```


![image of profileDetail](docs/images/Profile-Details-Modular-Form.png)
![image of profileDetail2](docs/images/Profile-Details-Modular-Form2.png)


## Future Direction

Part of the reason I chose to replicate Facebook was due to the wide variety of features it offers. I plan on continuing to work on this project and expands its features as way to build experience with working with large projects with many inter-locking parts. The features I plan to implement in the near future are outlined as follows.

### Autocomplete

In filling out certain profile details like hometown or current city, Facebook has an autocomplete feature that will predict the input and provide an image/link that will be used auto-fill the field. Facebook uses this in many of its components. I plan to utilize various third-party-apis to achieve a similar effect.

### Photos

I also plan to implement photo features across different components
