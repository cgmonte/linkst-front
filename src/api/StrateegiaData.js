export const getStraeegiaData = async ({ token }) => {
  let strateegiaData = [];
  let stProjects = [];
  let stMissions = [];
  let stMaps = [];
  let stContents = [];
  // let stPoints = [];
  let stDivergencePoints = [];
  let stConvergencePoints = [];
  let stConversationPoints = [];

  try {
    const projects = await strateegiaProjects({ token: token });
    projects.forEach(function (lab) {
      lab.projects.forEach(function (project) {
        stProjects.push(project);
      })
    })

    for (const project of stProjects) {
      let missions = await strateegiaMissions({ token: token, project_id: project.id });
      missions.missions.forEach(function (mission) {
        stMissions.push(mission);
      })
    }

    for (const mission of stMissions) {
      let map = await strateegiaMaps({ token: token, mission_id: mission.id });
      stMaps.push(map);
    }

    stMaps.forEach(function (map) {
      map.points.forEach(function (point) {
        // stPoints.push(point);
        // console.log(point);
        switch (point.point_type) {
          case 'DIVERGENCE':
            stDivergencePoints.push(point);
            break;
          case 'CONVERGENCE':
            stConvergencePoints.push(point);
            break;
          case 'CONVERSATION':
            stConversationPoints.push(point);
            break;
          default:
            console.log('Tipo de ponto não mapeado')
        }
      })
    })




    // for (const mission of stMissions) {
    //   let contents = await strateegiaContents({ token: token, mission_id: mission.id })
    //   contents.content.forEach(function (content) {
    //     console.log(content)
    //     stContents.push(content)
    //   })
    // }

    // for (const content of stContents) {
    //   let comments = await strateegiaComments({ token: token, content_id: content.id })
    //   // console.log(comments)
    //   // comments.forEach(function (comments) {

    //   //  console.log(comments)

    //   //   // stContents.push(content)
    //   // })
    // }

    strateegiaData.push({
      stProjects,
      stMissions,
      stContents,
      stMaps,
      stDivergencePoints,
      stConvergencePoints,
      stConversationPoints
    })

    console.log(strateegiaData)

    return strateegiaData;

  } catch (e) {
    return e;
  }
};

export const strateegiaProjects = async ({ token }) => {
  return new Promise((resolve, reject) => {

    var myHeaders = new Headers();

    const url = 'https://api.strateegia.digital:443/projects/v1/project'

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

export const strateegiaMissions = async ({ token, project_id }) => {
  return new Promise((resolve, reject) => {

    var myHeaders = new Headers();

    const url = 'https://api.strateegia.digital:443/projects/v1/project/' + project_id

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

export const strateegiaContents = async ({ token, mission_id }) => {
  return new Promise((resolve, reject) => {

    var myHeaders = new Headers();

    const url = 'https://api.strateegia.digital:443/projects/v1/mission/' + mission_id + '/content'

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

export const strateegiaConvergencePoints = async ({ token, mission_id }) => {
  return new Promise((resolve, reject) => {

    var myHeaders = new Headers();

    const url = 'https://api.strateegia.digital:443/projects/v1/mission/' + mission_id + '/convergence-point'

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

export const strateegiaCheckPoints = async ({ token, mission_id }) => {
  return new Promise((resolve, reject) => {

    var myHeaders = new Headers();

    const url = 'https://api.strateegia.digital:443/projects/v1/mission/' + mission_id + '/checkpoint'

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

export const strateegiaComments = async ({ token, content_id }) => {
  return new Promise((resolve, reject) => {

    var myHeaders = new Headers();

    const url = 'https://api.strateegia.digital:443/projects/v1/content/' + content_id

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

export const strateegiaMaps = async ({ token, mission_id }) => {
  return new Promise((resolve, reject) => {

    var myHeaders = new Headers();

    const url = 'https://api.strateegia.digital:443/projects/v1/map/' + mission_id

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

// fetch("https://api.strateegia.digital/projects/v1/map/60cb7c6dfff53a3dc6e90e78", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "pt-br",
//     "access-control-allow-credentials": "true",
//     "access-control-expose-headers": "Authorization",
//     "authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjZ21vbnRlQGdtYWlsLmNvbSIsInVpZCI6IjYwYzc3ZDkyZGI5MWEyMGJlNTIzMDU1MSIsInJvbGVzIjpbXSwibmFtZSI6IkNhcmxvcyBNb250ZW5lZ3JvIiwiZXhwIjoxNjMxMDcyMzQzLCJpYXQiOjE2MzEwNTc5NDN9.cDwQGy3w1a4XWQU6ha9l-LbZlT4qT5-0XlOTQQ1FLLbPGYPjdSVzsXrHpcR_KPBBUwpLE11PS51Jx8GoaFbL8g",
//     "content-type": "application/json",
//     "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
//     "sec-ch-ua-mobile": "?0"
//   },
//   "referrer": "https://app.strateegia.digital/",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "include"
// });