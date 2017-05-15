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
  + Side bar
  + Posts
    + Comments
    + CommentForm

**PostsContainer**
 - Posts

**ProfileContainer**
 - NotebookHeader
  + NoteIndex

**SearchContainer**
 - Searchform
 - SearchList

**EditProfileContainer**
 - EditProfileForm
  + Subforms

**FriendsContainer**
 - FriendsContainer




## Routes

|Path   | Component   |
|-------|-------------|
| "/root" | "AuthFormContainer" |
| "/root" | "AuthFormContainer" |
| "/root" | "HeaderNav" |
| "/profile/:userid" | "ProfileContainer" |
| "/profile/:userid/friends" | "FriendsContainer" |
| "/profile/:userid/edit" | "EditProfileContainer" |
| "/profile/:userid/edit/:profileprop" | "subform" |
| "/home/ | "NewsFeedContainer" |
| "/home/ | "NewsFeedContainer" |
