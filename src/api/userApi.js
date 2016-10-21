class UserApi {

  static getAllUsers() {
    const request = new Request('http://api.s3curity-api.dev/v1/users', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

}

export default UserApi;
