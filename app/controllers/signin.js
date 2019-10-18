import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service'

export default class SigninController extends Controller {
  @service
  apollo

  @service
  router

  @service
  auth

  @action
  async submit(event) {
    event.preventDefault();

    await this.auth.signin({
      email: this.email,
      password: this.password,
    });

    this.router.transitionTo('welcome.you');
  }
}
