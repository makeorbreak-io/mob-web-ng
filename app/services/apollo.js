import OriginalApolloService from 'ember-apollo-client/services/apollo';
import ENV from 'mob-web-ng/config/environment';
import { setContext} from 'apollo-link-context';
import Service from '@ember/service';

export default class ApolloService extends OriginalApolloService {
  link() {
    let httpLink = super.link(...arguments);

    let authLink = setContext((request, context) => {
      return { headers: { "Authorization": `Bearer ${ENV.TOKEN}` } };
    });
    return authLink.concat(httpLink);
  }
}
