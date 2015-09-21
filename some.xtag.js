xtag.register('some-element-name', {
  lifecycle: {
    created: function() {
      var tpl = document.getElementById('some-element-template').content;
      this.appendChild(tpl.cloneNode(true));
    }
  },
  events: {
    click: function() {
    }
  },
  accessors: {
    'name': {
      set: function(value) {
      }
    }
  }
});
