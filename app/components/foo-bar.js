import { inject } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  session: inject(),
});
