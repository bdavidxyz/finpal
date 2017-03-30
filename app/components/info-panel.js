import Ember from 'ember';

export default Ember.Component.extend({

  messageBus: Ember.inject.service('message-bus'),

  selectedTransactions: [],

  init() {
    this._super(...arguments);
    this.get('messageBus').subscribe('transaction-item-selected', this, this.transactionSelected);
    this.get('messageBus').subscribe('transaction-item-unselected', this, this.transactionUnselected);
  },

  transactionSelected(transaction) {
    this.get('selectedTransactions').push(transaction);
  },

  transactionUnselected(transaction) {
    this.set('selectedTransactions', this.get('selectedTransactions').filter(function( obj ) {
      return obj.id !== transaction.id;
    }));
  }

});
