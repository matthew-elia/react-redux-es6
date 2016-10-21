class Auth {
  static loggedIn() {
    return !!sessionStorage.jwt;
  }

  static logOut() {
    sessionStorage.removeItem('jwt');
    window.location.pathname = '/';
  }
}

export default Auth;