import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | welcome/you', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:welcome/you');
    assert.ok(controller);
  });
});
