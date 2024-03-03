import { Class744 } from 'Class744.js';
import { Class433 } from 'Class433.js';
import { Class435 } from 'Class435.js';
import { Class557 } from 'Class557.js';
import { Class743 } from 'Class743.js';
import { Class539 } from 'Class539.js';
import { Class671 } from 'Class671.js';
import { Class745 } from 'Class745.js';
import { Class549 } from 'Class549.js';
import { Class751 } from 'Class751.js';
import { Class715 } from 'Class715.js';
import { Class695 } from 'Class695.js';
import { Class720 } from 'Class720.js';
import { Class746 } from 'Class746.js';
import { Class737 } from 'Class737.js';
import { Class456 } from 'Class456.js';
import { Class753 } from 'Class753.js';
import { Class534 } from 'Class534.js';
import { Class714 } from 'Class714.js';
import { Class680 } from 'Class680.js';
import { Class740 } from 'Class740.js';
import { Class752 } from 'Class752.js';
import { Class747 } from 'Class747.js';
import { Class649 } from 'Class649.js';
import { Class453 } from 'Class453.js';
import { Class501 } from 'Class501.js';
import { Class293 } from 'Class293.js';
export var Class754 = function () {
    var h = {};
    var a;
    var i = Class744({ member10197: Class433 });
    h.member9083 = function () {
        return i;
    };
    h.member10109 = function () {
        i.member10199();
    };
    var o = 0;
    var b = false;
    h.member10201 = function () {
        return b;
    };
    h.member10203 = function () {
        b = false;
    };
    var c = Class744({ member10197: Class433 });
    h.member8253 = function () {
        return c;
    };
    var e = 0;
    var d = function (q) {
        a = q;
        if (true) {
            Class435.member25(a);
            Class557.member25(a);
            Class743.member25(a);
            Class539.member25(a);
            Class671.member25(a);
            Class745.member25(a);
            Class549.member25(a);
            Class751.member25(a);
            Class715.member25(a);
            Class695.member25(a);
        } else {
        }
        Class720.member25(a);
        Class746.member25(a);
        Class737.member25(a);
        Class456.member25(a);
        Class753.member25(a);
        Class534.member25(a);
        Class714.member25(a);
        Class680.member25(a);
        Class740.member25(a);
        Class752.member25(a);
        Class747.member25(a);
        Class649.member25(a);
    };
    h.member25 = d;
    var j = function (r, q) {
        if (q === Class453.member7198) {
            c.member8254();
            i.member8254();
        } else if (q === Class453.member7199) {
            i.member8254();
        } else if (q === Class453.member7201) {
            c.member8254();
            if (r !== Class453.member7202) {
                b = true;
            }
        }
    };
    h.member7183 = j;
    var n = function (t) {
        var s = a.member8233();
        if (s === Class453.member7199 || s === Class453.member7200 && a.member8559.member8239()) {
            if (c.member8239()) {
                g(c);
                e++;
                if (e > 50) {
                    var r = c.member8260(Class501.member6382);
                    c.member8261(r);
                    e = 0;
                }
                c.member8279();
            } else if (!a.member8234.member8235()) {
                if (false) {
                }
                a.member8236(Class453.member7198);
            }
        } else if (s === Class453.member7201) {
            if (i.member8239()) {
                g(i);
                o++;
                if (o > 50) {
                    var r = i.member8260(Class501.member6382);
                    i.member8261(r);
                    o = 0;
                }
                i.member8279();
            } else {
                if (false) {
                }
                i.member8254();
                a.member8236(Class453.member7202);
            }
        }
        if (a.member6116.member7139() % 50 === 0) {
            var x = Class293.document.getElementById('lobbyactivity');
            var v = Class293.document.getElementById('worldactivity');
            if (x !== null && v !== null || a.member9190 !== undefined && a.member9190.member9278()) {
                var u = 'Disconnected';
                if (c.member8239()) {
                    u = 'Sent: ' + Math.floor(c.member10195() / 1024) + 'KB ';
                    u += 'Rec: ' + Math.floor(c.member10196() / 1024) + 'KB';
                }
                var q = 'Disconnected';
                if (i.member8239()) {
                    q = 'Sent: ' + Math.floor(i.member10195() / 1024) + 'KB ';
                    q += 'Rec: ' + Math.floor(i.member10196() / 1024) + 'KB';
                }
                if (x !== null) {
                    x.textContent = u;
                }
                if (v !== null) {
                    v.textContent = q;
                }
                if (a.member9190.member9278()) {
                    a.member9190.member10212(u);
                    a.member9190.member10213(q);
                }
            }
        }
    };
    h.member487 = n;
    var k = function () {
        if (i.member8239()) {
            return i;
        } else if (c.member8239()) {
            return c;
        } else {
            return undefined;
        }
    };
    h.member8259 = k;
    var g = function (q) {
        if (a.member7887.member9264() > 0) {
            return;
        }
        try {
            for (var s = 0; s < 100; s++) {
                if (!m(q)) {
                    break;
                }
            }
        } catch (r) {
            if (false) {
            }
            q.member2599();
            throw r;
        }
    };
    var m = function (q) {
        var r = q.member10198();
        if (r === null) {
            return false;
        }
        if (r.member2818.member6428 !== undefined) {
            if (r.member2818.member6428(q.member8284(), r.member2819)) {
                return false;
            } else {
                q.member2599();
                return true;
            }
        } else {
            if (false) {
            }
            q.member2599();
            return true;
        }
    };
    return h;
}();