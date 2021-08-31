export const strateegiaLogin = async ({ email, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@test.com' && password === 'password') {
          resolve();
        } else {
          reject();
        }
      }, 3000);
    });
  };