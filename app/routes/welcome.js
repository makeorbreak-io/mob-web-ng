import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default class WelcomeRoute extends Route {
  @service
  auth

  beforeModel() {
    if (!this.auth.token()) {
      this.transitionTo('signin');
    }
  }
}
