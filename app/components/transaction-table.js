import Ember from 'ember';

export default Ember.Component.extend({

  sortProperties: ['amount:desc'],
  sortedTransactions: Ember.computed.sort('transactions', 'sortProperties'),

  actions: {

    sortByDate: function () {
      this.set('sortProperties', ['date']);
    },

    sortByCounterparty: function () {
      this.set('sortProperties', ['counterparty_name']);
    },

    sortByPayment: function () {
      this.set('sortProperties', ['operation_type']);
    },

    sortByAmount: function () {
      this.set('sortProperties', ['amount']);
    },

  }

});
