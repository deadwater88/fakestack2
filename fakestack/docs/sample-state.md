{
  currentUser: {
    id: 1,
    email: "david.wong.cal@gmail.com"
    image_url: "example.com/image123"
  },
  currentUserProfile: {
    id: 1,
    firstName: "David"
    lastName: "Wong"
    profile: {
      workEducation:{},
      places: {home_town: "Sacramento"},
      contact: {},
      relations: {},
      details: {Biography: "I'm the best AROUND. Nothing's ever gonna keep me down",
                Other Names: ["Dave", "Mr. Wong"]
                Favorite Quotes: "Hey! What the Hell! That was my daughter's pediatrician!"
    }

    }
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]}
  },

  Posts: {
    1:{
      id: 1
      author_id: 1
      tagged_users: [2, 4, 5]
      content: "This requires a lot of planning"
    }
    2:{
      id: 2
      author_id: 2
      author_firstName: "Sam"
      author_lastName: "Uncle"
      tagged_users: [1,3,6]
      content: "This wasn't too hard"
    }
  }

  Comments: {
    1:{
      id: 1
      author_firstName: "David"
      author_lastName: "Wong"
      author_id: 2
      post_id: 1
      content: "It wasn't too bad"
    }
    2:{
      id: 2
      author_firstName: "Sam"
      author_lastName: "Uncle"
      author_id: 2
      post_id: 1
      content: "It wasn't too bad"
    }
  }

  userFriends: {
    1:{
      id: 1,
      firstName: "David"
      lastName: "Wong"
      image_url: "example.com/image123"
    }
    2:{
      id: 2
      firstName: "Rick"
      lastName: "Sanchez"
      image_url: "example.com/image413"
    }
    123:{
      id: 123
      firstName: "Gerry"
      lastName: "Goodwin"
      image_url: "example.com/image123124"
    }
  }

  viewedUserFriends: {
    123:{
      id: 123
      firstName: "Gerry"
      lastName: "Goodwin"
      image_url: "example.com/image123124"
    }
    124:{
      id: 124
      firstName: "Barry"
      lastName: "Goldberg"
      image_url: "example.com/image123125"
    }
  }

  viewedUser: {
    id: 4,
    firstName: "Kate"
    lastName: "Winslet"
    profile: {
      workEducation:{},
      places: {},
      contact: {},
      relations: {},
      details: {}

    }


  }
}
