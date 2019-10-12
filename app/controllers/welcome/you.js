import Controller from '@ember/controller';
import { action } from  '@ember/object'
import { inject as service } from '@ember/service'

export default class WelcomeYouController extends Controller {
  @service
  router

  @action
  submit(event) {
    putInternet()

    this.router.transitionTo('welcome.team');
    event.preventDefault();
  }
}
