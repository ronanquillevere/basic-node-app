!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n():"function"==typeof define&&define.amd?define(n):n()}(0,function(){"use strict";var e=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},n=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),t=new(function(){function t(n){e(this,t),this.name=n}return n(t,[{key:"getName",value:function(){return this.name}}]),t}())("ronan");console.log("Hello  "+t.getName())});
