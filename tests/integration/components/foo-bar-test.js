// import { moduleForComponent, test } from 'ember-qunit';
// import { run } from '@ember/runloop';
// import Service from '@ember/service';
// import hbs from 'htmlbars-inline-precompile';

// moduleForComponent('foo-bar', 'Integration | Component | foo bar', {
//   integration: true
// });

// test('it renders', function(assert) {
//   this.inject.service('store', { as: 'store' });
//   run(() => this.get('store').findRecord('user', '1234').catch((error) => {}));
//   this.register('service:session', Service.extend({ hello: '1234' }));
//   this.inject.service('session', { as: 'session' });

//   console.log(this.get('session.hello'));

//   assert.ok(true);
// });

import { module, test } from 'qunit';
import { run } from '@ember/runloop';
import { setupRenderingTest } from 'ember-qunit';
import Service from '@ember/service';

module('Integration | Component | foo bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', function(assert) {
    const store = this.owner.lookup('service:store', { as: 'store' });

    // Removing this makes things work. Weird! Although in my case, I have
    // a mirage server running in the background so this should work in my app.
    // Plus if you see the old style of testing above, it's practically doing
    // the same thing but that one works.
    run(() => store.findRecord('user', '1234').catch((error) => {}));

    this.owner.register('service:session', Service.extend({ hello: '456' }));

    const session = this.owner.lookup('service:session');

    console.log(this.get('session.hello'));

    assert.ok(true);
  });
});
