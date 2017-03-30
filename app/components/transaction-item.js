import Ember from 'ember';

export default Ember.Component.extend({

  messageBus: Ember.inject.service('message-bus'),
  tagName:'',
  isSelected: false,
  actions: {

    onSelect: function() {
      this.set('isSelected', !this.get('isSelected'));
      if (this.get('isSelected')) {
        this.get('messageBus').publish('transaction-item-selected', this.get('transaction'));
      } else {
        this.get('messageBus').publish('transaction-item-unselected', this.get('transaction'));
      }

    },
  }
});

