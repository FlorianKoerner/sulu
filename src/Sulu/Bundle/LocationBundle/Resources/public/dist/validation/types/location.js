define(["type/default"],function(a){"use strict";return function(b,c){var d={},e={setValue:function(a){App.dom.data(b,"location",a)},getValue:function(){return App.dom.data(b,"location")},needsValidation:function(){return!1},validate:function(){return!0}};return new a(b,d,c,"location",e)}});