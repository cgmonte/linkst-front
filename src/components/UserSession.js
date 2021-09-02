import Cookies from 'universal-cookie';

const UserSession = (function() {
    const cookies = new Cookies();

    // let token = "";
  
    const getToken = function() {
      return cookies.get('token');
    };
  
    const setToken = function(token) {
      cookies.set('token', token, { 
          path: '/',
          sameSite: true });
    };

    const removeToken = function() {
        cookies.remove('token', { 
            path: '/' });
      };
  
    return {
      getToken: getToken,
      setToken: setToken,
      removeToken: removeToken,
    }
  
  })();
  
  export default UserSession;