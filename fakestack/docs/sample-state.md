{
  notices: []
  currentUser: {
    id: 1,
    email: "david.wong.cal@gmail.com"
    imageUrl: "example.com/image123"
    firstName: "David"
    lastName: "Wong"
    profile: {
      places: {homeTown: "Sacramento"},
      details: {intro: "I'm the best AROUND. Nothing's ever gonna keep me down",
                otherNames: ["Dave", "Mr. Wong"],
                favoriteQuotes: "Hey! What the Hell! That was my daughter's, pediatrician!"}
      interests {
        music: { 1: { id: 1,
                    title: "Red Hot Chili Peppers",
                    image_url: "example.com/image/rhc",
                    link_url: "example.com/rhc"
                    }
                },

        sports: {4: { id: 4,
                      title: "Golden State Warriors",
                      image_url: "example.com/image/gsw",
                      link_url: "example.com/gsw"} },

        tvShows: {6, {id: 6,
                      title: "Happy Days",
                      image_url: "example.com/image/hd",
                      link_url: "example.com/hd"
          }}
      }

    }
    friends: [1, 2, 123]
    friendsRequest: [4, 7, 9]
  }

  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
  },

  Posts: {
    1:{
      id: 1
      author: {
        id: 1,
        firstName: "David"
        lastName: "Wong"
        imageUrl: "example.com/image123"
      }
      tagged_users: [2, 4, 5]
      content: "This requires a lot of planning"
    }
    2:{
      id: 2
      author:{
        id: 2
        firstName: "Rick"
        lastName: "Sanchez"
        imageUrl: "example.com/image413"
      }
      tagged_users: [1, 3, 6]
      content: "This wasn't too hard"
    }
  }

  comments: {
    1:{
      id: 1
      postId: 1
      content: "It wasn't too bad"
      author: {
        id: 1,
        firstName: "David"
        lastName: "Wong"
        imageUrl: "example.com/image123"
      }
    }
    2:{
      id: 2
      author:{
        id: 2
        firstName: "Rick"
        lastName: "Sanchez"
        imageUrl: "example.com/image413"
      }
      postId: 1
      content: "It wasn't too bad"
    }
  }

  relevantUsers: {
    1:{
      id: 1,
      firstName: "David"
      lastName: "Wong"
      imageUrl: "example.com/image123"
    }
    2:{
      id: 2
      firstName: "Rick"
      lastName: "Sanchez"
      imageUrl: "example.com/image413"
    }
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

  viewedUserProfile: {
    id: 4,
    firstName: "Kate"
    lastName: "Winslet"
    profile: {
      places: {homeTown: "New York City"},
      details: {biography: "Great Actress. Really great in Eternal Sunshine",
                otherNames: ["Katie", "Kat"],
                favoriteQuotes: "I'm Flying."}
      interests {
        music: {...

        }

        sports: {...}

        tvShows: {...}
      }

    }
    friends: [1, 2, 123]
  }
}
