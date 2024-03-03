import { Packet } from 'Class124.js';
import { Class217 } from 'Class217.js';
import { Class219 } from 'Class219.js';
export var Class227 = function () {
    var d = {};
    var e = false;
    var c = 0;
    d.member2746 = c;
    var a = 1;
    d.member2747 = a;
    var h = 2;
    d.member2748 = h;
    var g = 3;
    d.member2749 = g;
    var b = function (m) {
        m.setPos(0);
        var n = m.g1();
        var k = m.g4s();
        if (n === c) {
            if (false) {
            }
            var i = Packet(k);
            i.member1067(m.getData(), m.getPos(), k);
            return i;
        } else {
            var j = m.g4s();
            var i = new ArrayBuffer(j);
            if (n === a) {
                if (false) {
                }
                Class217.member2691(i, j, m.getData(), k, 9);
            } else if (n === h) {
                if (false) {
                }
                Class219.member2709(i, m.getData(), 9);
            } else if (n === g) {
                if (false) {
                }
                throw new Error('980 ');
            }
            return Packet(undefined, i);
        }
    };
    d.member2691 = b;
    return d;
}();