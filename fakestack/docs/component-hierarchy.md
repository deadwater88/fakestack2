## Component Hierarchy

**AuthFormContainer**
 - AuthForm
    + LogIn
    + Signup
    + BottomNav

**HeaderNavContainer**
  - HeaderNav
    + SearchContainer

**NewsFeedContainer**
 - NewsFeed
  + PostFormContainer
  + SideBar
  + PostsIndexContainer
    + PostsIndexItem
    + CommentsIndexContainer
      + CommentIndexItem
    + CommentFormContainer

**ProfileContainer**
 - Profile
  + ProfileDetails
  + InterestsContainer
  + PostFormContainer
  + WallContainer

**SearchContainer**
 - SearchForm
 - SearchList

**EditProfileContainer**
 - EditProfileForm
  + ProfileDetailsFormContainer
    + PlacesForm
    + DetailsForm
  + InterestsFormContainer

**FriendsListContainer**
 - FriendsListContainer
  + FriendRequestsContainer
    + FriendRequestsItem
  + FriendListItem


## Routes

|Path   | Component   |
|-------|-------------|
| "/root" | "AuthFormContainer" |
| "/profile/:userid" | "ProfileContainer" |
| "/profile/:userid/friends" | "FriendsListContainer" |
| "/profile/:userid/edit" | "EditProfileContainer" |
| "/profile/:userid/edit/Places" | "PlacesForm" |
| "/profile/:userid/edit/Details" | "DetailsForm" |
| "/home/ | "NewsFeedContainer" |
