import Controller from '@ember/controller';

export default Controller.extend({

  pics:[],

  canAddPic: Ember.computed('pics','pics.@each', function() {
    let pic = this.get('pics');
    let count = pic.get("length");
    console.log(count);
    return  count < 4;
  }),

  actions: {
  		fileLoaded: function(file) {
  			// readAs="readAsFile"
        this.get("pics").pushObject(file);
  			// console.log(file.name, file.type, file.size);
  			// readAs="readAsArrayBuffer|readAsBinaryString|readAsDataURL|readAsText"
  			// console.log(file.name, file.type, file.data, file.size);
  			// There is also file.filename for backward compatibility
  		}
  	}


});
