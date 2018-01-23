import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  canAddPic: computed('pics.{@each}',function(){
    let pic = this.get('pics');
    let count = pic.get("length");
    return  (count < 4);
  }),

  actions: {
    fileLoaded: function(file) {
        this.get("pics").pushObject(file);
    },

    viewBigPic: function(idx) {
      console.log(idx);
    },

    removePic: function(idx) {
      this.get("pics").removeAt(idx);
    }
  }
});
