import Service from '@ember/service';
import { inject as service } from '@ember/service'
import authenticate from 'mob-web-ng/gql/mutations/authenticate';

export default class AuthService extends Service {
  @service
  apollo

  async signin({ email, password }) {
    const response = await this.apollo.mutate({
      mutation: authenticate,
      variables: { email, password },
    });

    localStorage.setItem("jwt", response.authenticate);
  }

  token() {
    return localStorage.getItem("jwt");
  }
}
