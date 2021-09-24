export const linkedInProfileData = async ({ access_token }) => {
  return new Promise((resolve, reject) => {

    var myHeaders = new Headers();

    const url = 'https://radiant-brushlands-64499.herokuapp.com/https://api.linkedin.com/v2/me'

    myHeaders.set('Authorization', 'Bearer ' + access_token);
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

export const ShareText = async ({ access_token, author }) => {
  return new Promise((resolve, reject) => {
    console.log('ooooia',access_token, author)
    var myHeaders = new Headers();

    const url = 'https://radiant-brushlands-64499.herokuapp.com/https://api.linkedin.com/v2/ugcPosts'

    myHeaders.set('Authorization', 'Bearer ' + access_token);
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('X-Restli-Protocol-Version', '2.0.0')

    let share_body = JSON.stringify({
      'author': 'urn:li:person:' + author,
      'lifecycleState': 'PUBLISHED',
      'specificContent': {
        'com.linkedin.ugc.ShareContent': {
          'shareCommentary': {
            'text': 'linkedin.com/company/digitalstrateegia certifica que tenho habilidades em strateegia.digital!'
          },
          'shareMediaCategory': 'NONE'
        }
      },
      'visibility': {
        'com.linkedin.ugc.MemberNetworkVisibility': 'CONNECTIONS'
      }
    })

    fetch(url, {
      method: 'POST',
      headers: myHeaders,
      body: share_body
    })
      .then((response) => {
        if (response.ok) {
          console.log('bom')
          resolve(response.json());
        } else {
          console.log(share_body)
          console.log(response)
          reject();
        }
      });
  });
};