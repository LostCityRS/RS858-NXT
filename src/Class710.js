import { Class709 } from 'Class709.js';
import { Class95 } from 'Class95.js';
import { Priority } from 'Class96.js';
import { Class80 } from 'Class80.js';
import { Class76 } from 'Class76.js';
export var HeadbarType = function (h) {
    var HeadbarType = {};
    var u;
    var a;
    HeadbarType.getID = function () {
        return a;
    };
    if (h.member625 !== undefined && h.myList !== undefined) {
        a = h.member625;
        u = h.myList;
    } else {
        throw new Error('977 ');
    }
    var i = 255;
    HeadbarType.member7727 = function () {
        return i;
    };
    var priority = 255;
    HeadbarType.getPriority = function () {
        return priority;
    };
    var fadeout = -1;
    HeadbarType.getFadeOut = function () {
        return fadeout;
    };
    var s = -1;
    HeadbarType.member9988 = function () {
        return s;
    };
    var sticktime = Class709.member9985;
    HeadbarType.member7728 = function () {
        return sticktime;
    };
    var full = -1;
    HeadbarType.getFullGraphic = function () {
        return full;
    };
    var empty = -1;
    HeadbarType.getEmptyGraphic = function () {
        return empty;
    };
    var g = -1;
    HeadbarType.member9991 = function () {
        return g;
    };
    var n = -1;
    HeadbarType.member9992 = function () {
        return n;
    };
    var r = -1;
    HeadbarType.member9993 = function () {
        return r;
    };
    var e = -1;
    HeadbarType.member9994 = function () {
        return e;
    };
    HeadbarType.decode = function (y) {
        while (true) {
            var x = y.g1();
            if (x === undefined) {
                throw new Error('978 ');
                break;
            }
            if (x === 0) {
                break;
            }
            k(y, x);
        }
    };
    var o = HeadbarType.decode;
    var k = function (packet, opcode) {
        if (opcode === 1) {
            packet.g2();
        } else if (opcode === 2) {
            i = packet.g1();
        } else if (opcode === 3) {
            priority = packet.g1();
        } else if (opcode === 4) {
            fadeout = 0;
        } else if (opcode === 5) {
            sticktime = packet.g2();
        } else if (opcode === 6) {
            packet.g2();
        } else if (opcode === 7) {
            full = packet.gSmart2or4null();
        } else if (opcode === 8) {
            empty = packet.gSmart2or4null();
        } else if (opcode === 9) {
            g = packet.gSmart2or4null();
        } else if (opcode === 10) {
            n = packet.gSmart2or4null();
        } else if (opcode === 11) {
            fadeout = packet.g2();
        } else if (opcode === 12) {
            r = packet.gSmart2or4null();
        } else if (opcode === 13) {
            e = packet.gSmart2or4null();
        } else if (false) {
        }
    };
    HeadbarType.member8752 = function (z, y) {
        if (y < 0) {
            return null;
        }
        var x = u.member8753(y);
        if (x === null) {
            d(z);
            var x = u.member8753(y);
        }
        return x;
    };
    var j = function (D, z) {
        var y = u.member7535();
        if (z >= 0 && u.member8753(z) === null) {
            var C = y.getFile(Class95.member811, z, 0, Priority.member840);
            if (C !== null) {
                var A = Class80.member606(C);
                var B = A[0].getColour();
                var x = Class76(D, A[0].member556(), A[0].member557(), B, false);
                x.member563();
                u.member8754(x, z);
            }
        }
    };
    var d = function (y) {
        var x = u.member7535();
        j(y, full);
        j(y, empty);
        j(y, g);
        j(y, n);
        j(y, r);
        j(y, e);
    };
    h = undefined;
    return HeadbarType;
};