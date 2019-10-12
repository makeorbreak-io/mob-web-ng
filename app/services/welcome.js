import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class WelcomeService extends Service {
  @tracked
  interestedInParticipatingInHackathon = true
}
