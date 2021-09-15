import UserSession from "../components/UserSession";

export const getStraeegiaData = async ({ token }) => {
  const user_id = UserSession.getId();
  let strateegiaData = [];
  let stProjects = [];
  let stMissions = [];
  let stMaps = [];
  let stDivergenceContents = [];
  // let stPoints = [];
  let stDivergencePoints = [];
  let stConvergencePoints = [];
  let stConversationPoints = [];
  let stKitQuestions = []
  let stReplies = [];
  let userStReplies = [];
  let userCommentReplies = [];

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

    for (const point of stDivergencePoints) {
      let has_contributed = await strateegiaHasContribution({ token: token, content_id: point.id });
      if (has_contributed.has_contributed === true) {
        let divergence_content = await strateegiaContents({ token: token, content_id: point.id });
        stDivergenceContents.push(divergence_content);
      }
    }

    stDivergenceContents.forEach(function (content) {
      content.kit.questions.forEach(function (question) {
        stKitQuestions.push(question);
      })
    })

    for (const content of stDivergenceContents) {
      for (const question of content.kit.questions) {
        let parent_comments = await strateegiaParentComments({ token, content_id: content.id, question_id: question.id });
        stReplies.push(parent_comments);
        for (const reply of parent_comments.content) {
          if (reply.author.id === user_id) {
            userStReplies.push(reply);
          }
        }
      }
    }

    for (const reply of stReplies) {
      for (const content of reply.content) {
        let question_comment_replies = await strateegiaCommentReplies({ token, question_comment_id: content.id });
        for (const question_comment_reply of question_comment_replies.content) {
          if (question_comment_reply.author.id === user_id) {

            userCommentReplies.push(question_comment_reply)
          }
        }
      }
    }



    // console.log(
    //   userCommentReplies
    // )

    strateegiaData.push({
      stProjects,
      stMissions,
      stDivergenceContents,
      stMaps,
      stDivergencePoints,
      stConvergencePoints,
      stConversationPoints,
      userStReplies,
      userCommentReplies
    })

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

export const strateegiaParentComments = async ({ token, content_id, question_id }) => {
  return new Promise((resolve, reject) => {

    var myHeaders = new Headers();

    const url = 'https://api.strateegia.digital:443/projects/v1/content/' + content_id + '/question/' + question_id + '/comment'

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

export const strateegiaHasContribution = async ({ token, content_id }) => {
  return new Promise((resolve, reject) => {

    var myHeaders = new Headers();

    const url = 'https://api.strateegia.digital:443/projects/v1/content/' + content_id + '/comment/contribution'

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

export const strateegiaCommentReplies = async ({ token, question_comment_id }) => {
  return new Promise((resolve, reject) => {

    var myHeaders = new Headers();

    const url = 'https://api.strateegia.digital:443/projects/v1/question/comment/' + question_comment_id + '/reply'

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

export const strateegiaContents = async ({ token, content_id }) => {
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