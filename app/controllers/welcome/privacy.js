import Controller from '@ember/controller';
import { inject as service } from '@ember/service'
import { set, action } from  '@ember/object'

export default class WelcomePrivacyController extends Controller {
  @service
  router

  @action
  async submit(me, event) {
    event.preventDefault();
  }

  @action
  change(me, field, value) {
    set(me, field, value);
  }
}
