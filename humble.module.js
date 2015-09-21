$(function() {
  var
    MyCollection;

  humble.MyModel = Backbone.Model.extend({
    defaults: function() {
      return {
        prop1: 'val1',
        prop2: 'val2',
        someNumber: 3,
        isProp: true
      };
    },
    doStuff: function() {
      console.log('The stuff is done.');
    },
    validate: function(attrs, options) {
      if (attrs.isProp !== true) {
        return "Something is wrong with the isProp!";
      }
    }
  });
  
  MyCollection = Backbone.Collection.extend({
    model: humble.MyModel,
    localStorage: new Backbone.LocalStorage("some key")
  });

  humble.collection = new MyCollection;
}());
