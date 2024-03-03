import { Class148 } from 'Class148.js';
import { Class298 } from 'Class298.js';
export var Class732 = function () {
    var a = function (d) {
        if (d.position !== undefined && d.member7004 !== undefined) {
            this.position = d.position;
            this.member7004 = d.member7004;
            this.member3615;
        } else {
            throw new Error('1565 ');
        }
    };
    a.prototype.setPosition = function (d, e) {
        this.position.x = d;
        this.position.y = e;
    };
    a.prototype.member2026 = function () {
        return this.position;
    };
    a.prototype.member10118 = function () {
        this.member3615 = Class148.member1491(this.member7004);
        return this.member3615.member1540();
    };
    a.prototype.member10119 = function () {
        return this.member3615;
    };
    var c = 18;
    a.prototype.member10120 = c;
    var b = 2;
    a.prototype.member10121 = b;
    a.prototype.member10122 = function () {
        var e;
        var d = Class298.member3559();
        if (d !== undefined) {
            e = d.position;
        } else {
            e = Class298.member3558();
        }
        return e.x >= this.position.x && e.x <= this.position.x + c && e.y >= this.position.y && e.y <= this.position.y + c;
    };
    return a;
}();