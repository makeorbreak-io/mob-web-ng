import OriginalApolloService from 'ember-apollo-client/services/apollo';
import { setContext } from 'apollo-link-context';
import { inject as service } from '@ember/service'

export default class ApolloService extends OriginalApolloService {
  @service
  auth

  link() {
    let httpLink = super.link(...arguments);
    const authorizationHeader = this.auth.token() ? `Bearer ${this.auth.token()}` : "";

    let authLink = setContext(() => ({
      headers: { "Authorization": authorizationHeader },
    }));
    return authLink.concat(httpLink);
  }
}
