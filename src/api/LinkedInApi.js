const axios = require('axios');

export const handleAccess = async ({ authorization_code }) => {

  let config = {
      headers: {
          'Content-Type': 'x-www-form-urlencoded',
      }
  }

  axios.post('https://radiant-brushlands-64499.herokuapp.com/https://www.linkedin.com/oauth/v2/accessToken?'
  +'grant_type=authorization_code&client_id=782r44eaplkfzr&client_secret=VGKnUhm3eZPNl5Io&redirect_uri=http://localhost:3000/share&code='+authorization_code,config
  )
      .then(function (response) {
          UserSession.setAccessToken(response.data.access_token, response.data.expires_in)
      })
      .catch(function (error) {
          console.log(error);
      })
      .then(function () {
          // always executed
      });
};