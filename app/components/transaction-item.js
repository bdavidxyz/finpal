import Ember from 'ember';

export default Ember.Component.extend({

  tagName:'',
  isSelected: false,
  actions: {

    onSelect: function() {
      this.set('isSelected', !this.get('isSelected'));
    },
  }
});

