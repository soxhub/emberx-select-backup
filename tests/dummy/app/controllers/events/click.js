import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    onClick(value, event/*, component*/) {
      this.set('eventType', event.type);
    }
  }
});
