import { Class805 } from 'Class805.js';
import { CP1252 } from 'Class122.js';
export var Class806 = function () {
    var d = {};
    var a;
    d.member25 = function (j, i, h) {
        a = Class805;
        a.member25(j, i, h);
        a.readyanim();
    };
    var g = d.member25;
    d.member9740 = function (m, i) {
        if (!a.readyanim()) {
            throw new Error('1823 ');
        }
        var n = m.getPos();
        var k = CP1252.member1037(i);
        m.pSmart1or2(k.length);
        var h = a.member10528(k, 0, k.length, new Uint8Array(m.getData()), m.getPos());
        m.setPos(m.getPos() + h);
        return m.getPos() - n;
    };
    var c = d.member9740;
    d.member10048 = function (k) {
        if (!a.readyanim()) {
            throw new Error('1824 ');
        }
        var h = k.gSmart1or2();
        var i = [];
        var j = a.decode(new Uint8Array(k.getData()), k.getPos(), i, 0, h);
        k.setPos(k.getPos() + j);
        return CP1252.member1038(i);
    };
    var b = d.member10048;
    d.readyanim = function () {
        return a.readyanim();
    };
    var e = d.readyanim;
    return d;
}();