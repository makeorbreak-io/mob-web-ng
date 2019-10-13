import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class WelcomeController extends Controller {
  @service
  welcome

  get steps() {
    return [
      { route: "welcome.you", title: "Your information" },
      { route: "welcome.privacy", title: "Your privacy" },
      { route: "welcome.team", title: "Your team", hidden: !this.welcome.interestedInParticipatingInHackathon },
    ].filter((step) => !step.hidden)
      .map((step, index) => ({ ...step, number: index + 1}))
  }
}
