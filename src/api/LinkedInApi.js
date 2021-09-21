export const LinkedInAuth = async () => {
  return new Promise((resolve, reject) => {

    var myHeaders = new Headers();


    // response_type = code & client_id={ your_client_id }& redirect_uri={ your_callback_url }& state=foobar & scope=r_liteprofile % 20r_emailaddress % 20w_member_social

    const url = 'https://radiant-brushlands-64499.herokuapp.com/https://www.linkedin.com/oauth/v2/authorization?'

    // myHeaders.set('Authorization', 'Bearer ' + token);
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('Accept', 'application/json')

    fetch(url + new URLSearchParams({
      response_type: 'code',
      client_id: '782r44eaplkfzr',
      redirect_uri: 'https://radiant-brushlands-64499.herokuapp.com/',
      state: 'JSNCUEJH=83jfiD2çH83hidhs9',
      scope: 'w_member_social',
    }), {
      method: 'GET',
      headers: myHeaders,
    })
      .then((response) => {
        if (response.ok) {
          resolve(response.json());
        } else {
          reject();
        }
      });
  });
};