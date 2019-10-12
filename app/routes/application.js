import Route from '@ember/routing/route';
import ENV from 'mob-web-ng/config/environment';

export default class ApplicationRoute extends Route {
  async model() {
    let x = await fetch(
      "http://localhost:4200/graphql",
      {
        "credentials":"include",
        "headers": {
          "accept":"*/*",
          "authorization":`Bearer ${ENV.TOKEN}`,
          "content-type":"application/json",
        },
        "body":"{\"operationName\":null,\"variables\":{},\"query\":\"{\\n  me {\\n    ...fullUser\\n    __typename\\n  }\\n}\\n\\nfragment fullUser on User {\\n  id\\n  email\\n  name\\n  displayName\\n  tshirtSize\\n  githubHandle\\n  role\\n  gravatarHash\\n  dataUsageConsent\\n  spamConsent\\n  shareConsent\\n  currentAttendance {\\n    id\\n    checkedIn\\n    voterIdentity\\n    __typename\\n  }\\n  currentTeam {\\n    id\\n    name\\n    applied\\n    accepted\\n    projectName\\n    memberships {\\n      user {\\n        id\\n        displayName\\n        gravatarHash\\n        __typename\\n      }\\n      __typename\\n    }\\n    invites {\\n      id\\n      gravatarHash\\n      displayName\\n      __typename\\n    }\\n    __typename\\n  }\\n  invitations {\\n    id\\n    host {\\n      id\\n      displayName\\n      __typename\\n    }\\n    team {\\n      id\\n      name\\n      __typename\\n    }\\n    __typename\\n  }\\n  workshops {\\n    id\\n    slug\\n    name\\n    __typename\\n  }\\n  favorites {\\n    id\\n    teamId\\n    __typename\\n  }\\n  currentBot: currentAiCompetitionBot {\\n    id\\n    title\\n    revision\\n    sdk\\n    __typename\\n  }\\n  __typename\\n}\\n\"}",
        "method":"POST",
        "mode":"cors",
      }).then(j => j.json());

    console.log(x);
    return x.data;
  }
}
