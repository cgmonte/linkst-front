export const strateegiaUserMe = async ({ token }) => {
  return new Promise((resolve, reject) => {

    var myHeaders = new Headers();

    const url = 'https://api.strateegia.digital:443/users/v1/user/me'

    myHeaders.set('Authorization', 'Bearer ' + token);
    myHeaders.append('Content-Type', 'application/json')

    fetch(url, {
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