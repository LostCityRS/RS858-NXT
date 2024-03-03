import { Class805 } from 'Class805.js';
import { Class122 } from 'Class122.js';
export var Class806 = function () {
    var d = {};
    var a;
    d.member25 = function (j, i, h) {
        a = Class805;
        a.member25(j, i, h);
        a.member3590();
    };
    var g = d.member25;
    d.member9740 = function (m, i) {
        if (!a.member3590()) {
            throw new Error('1823 ');
        }
        var n = m.member1047();
        var k = Class122.member1037(i);
        m.member1060(k.length);
        var h = a.member10528(k, 0, k.length, new Uint8Array(m.getData()), m.member1047());
        m.member607(m.member1047() + h);
        return m.member1047() - n;
    };
    var c = d.member9740;
    d.member10048 = function (k) {
        if (!a.member3590()) {
            throw new Error('1824 ');
        }
        var h = k.member1078();
        var i = [];
        var j = a.decode(new Uint8Array(k.getData()), k.member1047(), i, 0, h);
        k.member607(k.member1047() + j);
        return Class122.member1038(i);
    };
    var b = d.member10048;
    d.member3590 = function () {
        return a.member3590();
    };
    var e = d.member3590;
    return d;
}();