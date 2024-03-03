import { Class70 } from 'Class70.js';
export var Class71 = function () {
    var a = function (b) {
        this.member433 = b;
    };
    a.prototype.set = function (i, h, e, g, c, b, k, j) {
        if (this.x !== i || this.y !== h || this.width !== e || this.height !== g || this.member493 !== c || this.member494 !== b || this.member495 !== k || this.member496 !== j) {
            this.member497();
            this.x = i;
            this.y = h;
            this.width = e;
            this.height = g;
            this.member493 = c;
            this.member494 = b;
            this.member495 = k;
            this.member496 = j;
            var d = Class70.member490(this.member433, i, h, e, g, c, b, k, j);
            this.member491 = d.member491;
            this.member492 = d.member492;
        }
    };
    a.prototype.bind = function () {
        this.member433.gl.bindBuffer(this.member433.gl.ARRAY_BUFFER, this.member491);
        this.member433.gl.bindBuffer(this.member433.gl.ELEMENT_ARRAY_BUFFER, this.member492);
    };
    a.prototype.member497 = function () {
        if (this.member491 !== undefined) {
            this.member433.gl.deleteBuffer(this.member491);
        }
        if (this.member492 !== undefined) {
            this.member433.gl.deleteBuffer(this.member492);
        }
        this.member491 = undefined;
        this.member492 = undefined;
    };
    return function (b) {
        return new a(b);
    };
}();