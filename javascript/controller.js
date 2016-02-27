"use strict";

fr.imie.Controller = {
  state: {
    model: {
      writable: true
    },
    view: {
      writable: true
    }
  },
  proto: {
    init: function(model, view) {
      this.model = model;
      this.view = view;

    },
    update: function(message, data) {
      if (message == "harvest") {
        this.model.fields[data].harvest();
      } else if (message == "water") {
        this.model.fields[data].water();
      } else if (message == "buyWater") {
        this.model.buyWaterWater(data);
      }else if (message == "go") {
        this.model.go();
      }
    }
  },
  build: function(model, view) {
    var obj = Object.create(this.proto, this.state);
    obj.init(model, view);
    return obj;
  }
}

fr.imie.Utils.build().mixin(fr.imie.Observer, fr.imie.Controller);
