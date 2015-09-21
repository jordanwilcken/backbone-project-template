/*
 * module_template.js
 * Template for browser feature modules
 *
 * Michael S. Mikowski - mike.mikowski@gmail.com
 * Copyright (c) 2011-2012 Manning Publications Co.
*/

/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/

/*global $ */

humble.app = (function () {
  'use strict';

  return {
    init: init
  };

  function init() {
    var
      someView;

    Backbone.$ = $;

    humble.collection.fetch();

    someView = createView();
    someView.render();
  }
  
  //------------------- BEGIN UTILITY METHODS ------------------
  // example : getTrimmedString
  function createView() {
    var
      TheView;

    TheView = Backbone.View.extend({
      model: humble.collection.at(0),
      el: $("div"),
      events: {
        "click .list-group-item": "onItemClicked",
        "keydown": "onKeyDown"
      },
      onItemClicked: function(event) {
      },
      onKeyDown: function(e) {
        var
          dleteKey = 46,
          view = this;

        if (e.which === dleteKey) {
        }
      },
      render: function() {
        return this;
      },
    });

    return new TheView();
  }
  //-------------------- END UTILITY METHODS -------------------

  //--------------------- BEGIN DOM METHODS --------------------
  //---------------------- END DOM METHODS ---------------------

  //------------------- BEGIN EVENT HANDLERS -------------------
  //-------------------- END EVENT HANDLERS --------------------



  //------------------- BEGIN PUBLIC METHODS -------------------
  //------------------- END PUBLIC METHODS ---------------------
}());
