import Ember from 'ember';
// import presenter from '../../models/contact-us/present';

export default Ember.Route.extend({

  model: function() {
    return this.store.createRecord('feedback');
  },
  deactivate: function() {
    this.modelFor(this.routeName).rollbackRecord();
  }
});
