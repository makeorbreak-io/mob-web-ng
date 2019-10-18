import Route from '@ember/routing/route';

export default class WelcomeIndexRoute extends Route {
  beforeModel() {
    this.transitionTo("welcome.you");
  }
}
