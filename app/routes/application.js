import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

import me from 'mob-web-ng/gql/queries/me'

export default class ApplicationRoute extends Route {
  @service
  apollo

  model() {
    return this.apollo.query({ query: me });
  }
}
