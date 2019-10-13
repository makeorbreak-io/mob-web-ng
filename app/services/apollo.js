import OriginalApolloService from 'ember-apollo-client/services/apollo';
import { setContext } from 'apollo-link-context';

export default class ApolloService extends OriginalApolloService {
  link() {
    let httpLink = super.link(...arguments);
    const authorizationHeader = localStorage.getItem("jwt") ? `Bearer ${localStorage.getItem("jwt")}` : "";

    let authLink = setContext(() => ({
      headers: { "Authorization": authorizationHeader },
    }));
    return authLink.concat(httpLink);
  }
}
