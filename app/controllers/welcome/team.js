import Controller from '@ember/controller';
import { inject as service } from '@ember/service'
import { action } from  '@ember/object'

export default class WelcomeTeamController extends Controller {
  @service
  router

  @action
  async submit(me, event) {
    event.preventDefault();

    this.router.transitionTo('welcome.privacy');
  }
}
