export const strateegiaLogin = async ({ email_var, password_var }) => {
  return new Promise((resolve, reject) => {

    var myHeaders = new Headers();

    const url = 'https://api.strateegia.digital:443/users/v1/auth/signin'

    myHeaders.set('Authorization', 'Basic ' + Buffer.from(email_var + ":" + password_var).toString('base64'));
    myHeaders.append('Content-Type', 'application/json')

    fetch(url, {
      method: 'POST',
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