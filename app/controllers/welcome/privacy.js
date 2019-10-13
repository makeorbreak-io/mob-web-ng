import Controller from '@ember/controller';
import { inject as service } from '@ember/service'
import { set, action } from  '@ember/object'

export default class WelcomePrivacyController extends Controller {
  @service
  router

  @service
  welcome

  @action
  async submit(me, event) {
    event.preventDefault();

    if (this.welcome.interestedInParticipatingInHackathon) {
      this.router.transitionTo('welcome.team');
    } else {
      this.router.transitionTo('dashboard');
    }
  }

  @action
  change(me, field, value) {
    set(me, field, value);
  }
}
