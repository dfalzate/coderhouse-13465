"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Color = function () {
	function Color() {
		_classCallCheck(this, Color);
	}

	_createClass(Color, [{
		key: "getColor",
		value: function getColor() {
			var r = void 0,
			    g = void 0,
			    b = void 0;
			r = Math.floor(Math.random() * 255);
			g = Math.floor(Math.random() * 255);
			b = Math.floor(Math.random() * 255);
			var rgb = "rgb(" + r + "," + g + "," + b + ")";
			return rgb;
		}
	}]);

	return Color;
}();

var unColor = new Color();
console.log(unColor.getColor());
console.log(unColor.getColor());
