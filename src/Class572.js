import { Class421 } from 'Class421.js';
import { Class317 } from 'Class317.js';
import { Class443 } from 'Class443.js';
import { Class450 } from 'Class450.js';
import { Class571 } from 'Class571.js';
import { Class501 } from 'Class501.js';
import { Class570 } from 'Class570.js';
import { Class124 } from 'Class124.js';
export var Class572 = function () {
    var d = {};
    var g;
    var a;
    var h = function (j, i) {
        a = j;
        g = i;
    };
    d.member25 = h;
    Class421.member5579.member867 = function (k) {
        var j = k.member6100[--k.member6099];
        if (g.member7250() === g.member7249 && j < g.member7238()) {
            var i = g.member7235(j);
            k.member6142[k.member6143++] = i.member7233;
            if (i.member7234 !== null) {
                k.member6142[k.member6143++] = i.member7234;
            } else {
                k.member6142[k.member6143++] = '';
            }
        } else {
            k.member6142[k.member6143++] = '';
            k.member6142[k.member6143++] = '';
        }
    };
    Class421.member5581.member867 = function (j) {
        var i = j.member6142[--j.member6143];
        if (i.indexOf(Class317.member3724(0)) === 0 || i.indexOf(Class317.member3724(1)) === 0) {
            i = i.slice(7, i.length);
        }
        j.member6100[j.member6099++] = b(i) !== -1 ? 1 : 0;
    };
    Class421.member5211.member867 = function (j) {
        var i = j.member6142[--j.member6143];
        return e(i, false);
    };
    Class421.member5217.member867 = function (j) {
        var i = j.member6142[--j.member6143];
        return e(i, true);
    };
    var e = function (j, n) {
        if (j === undefined) {
            return;
        }
        if (g.member7238() >= g.member7239) {
            var i = a.member7135().member8191() ? Class443.member6964[a.clientParameters.member7138.value.id] : Class443.member6963[a.clientParameters.member7138.value.id];
            a.member8023.member7186(Class450.member7147, 0, '', '', '', i);
            a.member7259.member7215({
                member8871: Class571.member8869.id,
                member3492: i
            });
            return;
        }
        var m = Class317.member3718(j, g.member7209());
        if (m === null) {
            return;
        }
        if (g.member7257(a.member7135().member3009(), j)) {
            a.member8023.member7186(Class450.member7147, 0, '', '', '', Class443.member6967[a.clientParameters.member7138.value.id]);
            a.member7259.member7215({
                member8871: Class571.member6221.id,
                member3492: Class443.member6967[a.clientParameters.member7138.value.id]
            });
            return;
        }
        if (g.member7242(j)) {
            a.member8023.member7186(Class450.member7147, 0, '', '', '', j.concat(Class443.member6965[a.clientParameters.member7138.value.id]));
            a.member7259.member7215({
                member8871: Class571.member6222.id,
                member3492: j.concat(Class443.member6965[a.clientParameters.member7138.value.id])
            });
            return;
        }
        if (g.member7232(j)) {
            a.member8023.member7186(Class450.member7147, 0, '', '', '', Class443.member6971[a.clientParameters.member7138.value.id].concat(j, Class443.member6972[a.clientParameters.member7138.value.id]));
            a.member7259.member7215({
                member8871: Class571.member8870.id,
                member3492: Class443.member6971[a.clientParameters.member7138.value.id].concat(j, Class443.member6972[a.clientParameters.member7138.value.id])
            });
            return;
        }
        var o = a.member8252.member8259();
        var k = o.member8260(Class501.member8131);
        k.member2698.member1051(j.length + 2);
        k.member2698.member1065(j);
        k.member2698.member1051(n ? 1 : 0);
        o.member8261(k);
    };
    d.member8872 = e;
    Class421.member5212.member867 = function (j) {
        var i = j.member6142[--j.member6143];
        c(i);
    };
    var c = function (k) {
        var j = g.member7209();
        if (k === null) {
            a.member7259.member7217({
                member8871: Class570.member6838.id,
                member3492: Class443.member6854[a.clientParameters.member7138.value.id]
            });
            return;
        }
        var n = Class317.member3718(k, j);
        if (n === null) {
            a.member7259.member7217({
                member8871: Class570.member6838.id,
                member3492: Class443.member6854[a.clientParameters.member7138.value.id]
            });
            return;
        }
        for (var i = 0; i < g.member7238(); i++) {
            if (g.member7257(k, g.member7235(i).member7233)) {
                g.member7237(i);
                a.member7187.member7261();
                g.member7255();
                var o = a.member8252.member8259();
                var m = o.member8260(Class501.member8130);
                m.member2698.member1051(k.length + 1);
                m.member2698.member1065(k);
                o.member8261(m);
                return;
            }
        }
        a.member7259.member7217({
            member8871: Class570.member8868.id,
            member3492: Class443.member6854[a.clientParameters.member7138.value.id]
        });
    };
    d.member8873 = c;
    Class421.member5578.member867 = function (i) {
        if (g.member7250() === g.member7247) {
            i.member6100[i.member6099++] = -2;
        } else if (g.member7250() === g.member7248) {
            i.member6100[i.member6099++] = -1;
        } else {
            i.member6100[i.member6099++] = g.member7238();
        }
    };
    Class421.member5580.member867 = function (j) {
        if (g.member7250() === g.member7249) {
            var i = j.member6100[--j.member6099];
            if (i < g.member7238()) {
                j.member6142[j.member6143++] = g.member7235(i).member7260;
                return;
            }
        }
        j.member6142[j.member6143++] = 0;
    };
    Class421.member5589.member867 = function (j) {
        if (g.member7250() === g.member7249) {
            var i = j.member6100[--j.member6099];
            if (i < g.member7238()) {
                j.member6100[j.member6099++] = g.member7235(i).temp;
                return;
            }
        }
        j.member6100[j.member6099++] = false;
    };
    Class421.member5591.member867 = function (j) {
        if (g.member7250() === g.member7249) {
            var i = j.member6100[--j.member6099];
            if (i < g.member7238()) {
                j.member6142[j.member6143++] = g.member7235(i).member7233;
                return;
            }
        }
        j.member6142[j.member6143++] = '';
    };
    Class421.member5587.member867 = function (j) {
        var i = j.member6142[--j.member6143];
        if (i.indexOf(Class317.member3724(0)) === 0 || i.indexOf(Class317.member3724(1)) === 0) {
            i = i.slice(7, i.length);
        }
        j.member6100[j.member6099++] = b(i);
    };
    var b = function (k) {
        var j = g.member7209();
        var m = Class317.member3718(k, j);
        if (m === null) {
            return -1;
        }
        for (var i = 0; i < g.member7238(); i++) {
            if (g.member7257(g.member7235(i).member7233, k)) {
                return i;
            }
        }
        return -1;
    };
    Class421.member5213.member867 = function (m) {
        m.member6143 -= 2;
        var j = m.member6142[m.member6143];
        var i = m.member6142[m.member6143 + 1];
        var n = a.member8252.member8259();
        var k = n.member8260(Class501.member8132);
        if (i.length > 30) {
            i = i.substring(0, 30);
        }
        k.member2698.member1051(Class124.member1152(j) + Class124.member1152(i));
        k.member2698.member1065(i);
        k.member2698.member1065(j);
        n.member8261(k);
    };
    return d;
}();