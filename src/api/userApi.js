class UserApi {

  static getAllUsers() {
    return new Promise((resolve, reject) => {
    
      function parseJSON(response) {
        return response.json();
      }

      fetch('http://api.s3curity-api.dev/v1/users')
        .then(parseJSON)
        .then(function(data) {
          console.log('request succeeded with JSON response', data)
          let users = data;
          resolve(Object.assign([], users));
        }).catch(function(error) {
          console.log('request failed', error)
        });

    });
  }

}

export default UserApi;