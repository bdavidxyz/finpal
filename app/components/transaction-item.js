import Ember from 'ember';

export default Ember.Component.extend({

  tagName:'',

  displayed_date: Ember.computed('created_at', function () {
    return this.get('transaction.created_at');
  }),
});
