import { Class173 } from 'Class173.js';
import { Class160 } from 'Class160.js';
export var Class174 = function () {
    var a = {};
    var e;
    var h;
    var d;
    var c;
    a.member1709 = function () {
        return c;
    };
    var g;
    var b = null;
    a.member25 = function (j) {
        if (j.member995 !== undefined) {
            e = j.member995;
            h = j.member1897;
            d = Class173;
            d.member25(e, h);
        } else {
            c = j.member1689;
            g = j.member1898;
            b = j.member1899;
            for (var i = 0; i < g; i++) {
                if (b[i] !== undefined) {
                    b[i] = Class160({ member680: b[i] });
                }
            }
        }
    };
    a.member681 = function () {
        var j = new Array(g);
        for (var i = 0; i < g; i++) {
            if (b[i] !== undefined) {
                j[i] = b[i].member681();
            }
        }
        return {
            member1689: c,
            member1898: g,
            member1899: j
        };
    };
    a.member1900 = function () {
        return b !== null;
    };
    a.member1719 = function (i) {
        if (b === null) {
            throw new Error('1744 ');
        }
        return b[i];
    };
    a.member487 = function () {
        if (b === null) {
            var j = d.member78();
            if (j) {
                g = d.member1894();
                c = d.member1709();
                var k = d.member1895();
                b = new Array(g);
                for (var i = 0; i < g; i++) {
                    if (k[i] !== undefined) {
                        b[i] = Class160({
                            member625: i,
                            member651: k[i].getMaterial(),
                            member1676: k[i].member1680(),
                            member1677: k[i].member1681(),
                            member1380: k[i].member1416(),
                            member1678: k[i].member1682(),
                            member1679: k[i].member1893(),
                            member654: k[i].member1783()
                        });
                    } else {
                        b[i] = null;
                    }
                }
                d.member512();
                d = null;
            }
        }
    };
    return a;
}();