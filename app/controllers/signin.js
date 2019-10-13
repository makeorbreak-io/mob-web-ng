import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service'
import authenticate from 'mob-web-ng/gql/mutations/authenticate';

export default class SigninController extends Controller {
  @service
  apollo

  @service
  router

  @action
  async submit(event) {
    event.preventDefault();

    const response = await this.apollo.mutate({
      mutation: authenticate,
      variables: {
        email: this.email,
        password: this.password,
      },
    });

    localStorage.setItem("jwt", response.authenticate);

    this.router.transitionTo('welcome.you');
  }
}
