import Controller from '@ember/controller';
import { set, action } from  '@ember/object'
import { inject as service } from '@ember/service'
import updateMe from 'mob-web-ng/gql/mutations/update-me'

export default class WelcomeYouController extends Controller {
  @service
  router

  @service
  apollo

  @service
  welcome

  @action
  async submit(me, event) {
    event.preventDefault();

    await this.apollo.mutate({
      mutation: updateMe,
      variables: { user: {
        name: me.name,
        tshirtSize: me.tshirtSize,
      } },
    });

    if (this.welcome.interestedInParticipatingInHackathon) {
      this.router.transitionTo('welcome.team');
    } else {
      this.router.transitionTo('welcome.privacy');
    }
  }

  @action
  tshirtsize(me, event) {
    set(me, 'tshirtSize', event.target.value);
  }
}
