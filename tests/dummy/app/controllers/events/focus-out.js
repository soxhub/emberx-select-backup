import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    focusOut(value, event/*, component*/) {
      this.set('eventType', event.type);
    }
  }
});
