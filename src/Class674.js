import { Class635 } from 'Class635.js';
export var Class674 = function () {
    var a = {};
    a.member9809 = function (c, b) {
        if (b >= 1000) {
            return true;
        }
        if (b < 1000 && c < 1000) {
            if (this.member9810(c)) {
                return true;
            }
            if (this.member9810(b)) {
                return false;
            }
            return true;
        }
        return false;
    };
    a.member9810 = function (b) {
        return b === Class635.member9501 || b === Class635.member9469 || b === Class635.member9474 || b === Class635.member9482 || b === Class635.member9480 || b === Class635.member9481 || b === Class635.member8065;
    };
    return a;
}();