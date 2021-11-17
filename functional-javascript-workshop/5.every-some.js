function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
      // SOLUTION GOES HERE
      return submittedUsers.every(user => {
          return goodUsers.some(id => id === user)
      })
    };
  }

  module.exports = checkUsersValid