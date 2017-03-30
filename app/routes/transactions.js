import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.get('http://private-5d708-interviewfront.apiary-mock.com/transactions');
  }
});
