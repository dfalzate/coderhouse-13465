"use strict";

var Color = /** @class */function () {
    function Color() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        this.color = "rgb(" + r + "," + g + "," + b + ")";
    }
    Color.prototype.getColor = function () {
        console.log(this.color);
    };
    return Color;
}();
var color = new Color();
color.getColor();
