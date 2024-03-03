import { Class421 } from 'Class421.js';
import { Class501 } from 'Class501.js';
import { Packet } from 'Class124.js';
import { Class443 } from 'Class443.js';
import { Class450 } from 'Class450.js';
import { Class430 } from 'Class430.js';
import { Class317 } from 'Class317.js';
import { Class630 } from 'Class630.js';
export var Class631 = function () {
    var e = {};
    var a;
    var g;
    var c = function (m, k) {
        a = m;
        g = k;
    };
    e.member25 = c;
    Class421.member5563.member867 = function (k) {
        if (g.member7250() === g.member7247) {
            k.member6100[k.member6099++] = -2;
        } else if (g.member7250() === g.member7248) {
            k.member6100[k.member6099++] = -1;
        } else {
            k.member6100[k.member6099++] = g.member7223();
        }
    };
    Class421.member5564.member867 = function (m) {
        var k = m.member6100[--m.member6099];
        if (g.member7250() === g.member7249 && k < g.member7223()) {
            var n = g.member7220(k);
            m.member6142[m.member6143++] = n.member7233;
            if (n.member7234 !== null) {
                m.member6142[m.member6143++] = n.member7234;
            } else {
                m.member6142[m.member6143++] = '';
            }
        } else {
            m.member6142[m.member6143++] = '';
            m.member6142[m.member6143++] = '';
        }
    };
    Class421.member5565.member867 = function (m) {
        if (g.member7250() === g.member7249) {
            var k = m.member6100[--m.member6099];
            if (k < g.member7223()) {
                m.member6100[m.member6099++] = g.member7220(k).status;
                return;
            }
        }
        m.member6100[m.member6099++] = 0;
    };
    Class421.member5566.member867 = function (m) {
        if (g.member7250() === g.member7249) {
            var k = m.member6100[--m.member6099];
            if (k < g.member7223()) {
                m.member6100[m.member6099++] = g.member7220(k).member8438;
                return;
            }
        }
        m.member6100[m.member6099++] = 0;
    };
    Class421.member5568.member867 = function (m) {
        if (g.member7250() === g.member7249) {
            var k = m.member6100[--m.member6099];
            if (k < g.member7223()) {
                m.member6100[m.member6099++] = g.member7220(k).member9442;
                return;
            }
        }
        m.member6100[m.member6099++] = 0;
    };
    Class421.member5567.member867 = function (m) {
        if (g.member7250() === g.member7249) {
            var k = m.member6100[--m.member6099];
            if (k < g.member7223()) {
                m.member6142[m.member6143++] = g.member7220(k).member7260;
                return;
            }
        }
        m.member6142[m.member6143++] = 0;
    };
    Class421.member5207.member867 = function (m) {
        var k = m.member6142[--m.member6143];
        var n = m.member6100[--m.member6099];
        b(k, n);
    };
    var b = function (k, n) {
        var o = a.member8252.member8259();
        var m = o.member8260(Class501.member8125);
        m.packet.p1(1 + Packet.member1152(k));
        m.packet.p1_alt3(n);
        m.packet.pjstr(k);
        o.member8261(m);
    };
    e.member9443 = b;
    Class421.member5209.member867 = function (m) {
        var k = m.member6142[--m.member6143];
        j(k);
    };
    var j = function (o) {
        var m = 0;
        var n = g.member7209();
        if (o === undefined) {
            return;
        }
        if (g.member7223() >= g.member7224) {
            var k = a.member7135().member8191() ? Class443.member6850[a.clientParameters.member7138.value.id] : Class443.member6849[a.clientParameters.member7138.value.id];
            a.member8023.member7186(Class450.member7147, 0, '', '', '', k);
            a.member7259.member7211({
                member8871: Class430.member6223.id,
                member3492: k
            });
            return;
        }
        var r = Class317.member3718(o, n);
        if (g.member7257(a.member7135().member3009(), o)) {
            a.member8023.member7186(Class450.member7147, 0, '', '', '', Class443.member6966[a.clientParameters.member7138.value.id]);
            a.member7259.member7211({
                member8871: Class430.member6221.id,
                member3492: Class443.member6966[a.clientParameters.member7138.value.id]
            });
            return;
        }
        if (g.member7232(o)) {
            a.member8023.member7186(Class450.member7147, 0, '', '', '', o.concat(Class443.member6962[a.clientParameters.member7138.value.id]));
            a.member7259.member7211({
                member8871: Class430.member6222.id,
                member3492: o.concat(Class443.member6962[a.clientParameters.member7138.value.id])
            });
            return;
        }
        if (g.member7242(o)) {
            a.member8023.member7186(Class450.member7147, 0, '', '', '', Class443.member6969[a.clientParameters.member7138.value.id].concat(o, Class443.member6970[a.clientParameters.member7138.value.id]));
            a.member7259.member7211({
                member8871: Class430.member6224.id,
                member3492: Class443.member6969[a.clientParameters.member7138.value.id].concat(o, Class443.member6970[a.clientParameters.member7138.value.id])
            });
            return;
        }
        var s = a.member8252.member8259();
        var q = s.member8260(Class501.member8135);
        q.packet.p1(o.length + 1);
        q.packet.pjstr(o);
        s.member8261(q);
    };
    e.member9444 = j;
    Class421.member5210.member867 = function (m) {
        var k = m.member6142[--m.member6143];
        i(k);
    };
    var i = function (n) {
        var m = g.member7209();
        if (n === null) {
            a.member7259.member7213({
                member8871: Class630.member6838.id,
                member3492: Class443.member6852[a.clientParameters.member7138.value.id]
            });
            return;
        }
        var r = Class317.member3718(n, m);
        if (r === null) {
            a.member7259.member7213({
                member8871: Class630.member6838.id,
                member3492: Class443.member6852[a.clientParameters.member7138.value.id]
            });
            return;
        }
        for (var k = 0; k < g.member7223(); k++) {
            var q = g.member7220(k);
            if (g.member7257(n, q.member7233)) {
                g.member7222(k);
                a.member7187.member7261();
                a.member6452.member6456(d);
                g.member7255();
                var s = a.member8252.member8259();
                var o = s.member8260(Class501.member8134);
                o.packet.p1(n.length + 1);
                o.packet.pjstr(n);
                s.member8261(o);
                return;
            }
        }
        a.member7259.member7213({
            member8871: Class630.member8868.id,
            member3492: Class443.member6852[a.clientParameters.member7138.value.id]
        });
    };
    e.member9445 = i;
    var d = function (k) {
        k.member8028();
    };
    Class421.member5569.member867 = function (m) {
        var k = m.member6142[--m.member6143];
        if (k.indexOf(Class317.member3724(0)) === 0 || k.indexOf(Class317.member3724(1)) === 0) {
            k = k.slice(7, k.length);
        }
        m.member6100[m.member6099++] = g.member7232(k) ? 1 : 0;
    };
    Class421.member5570.member867 = function (m) {
        if (g.member7250() === g.member7249) {
            var k = m.member6100[--m.member6099];
            if (k < g.member7223()) {
                m.member6142[m.member6143++] = g.member7220(k).member9446;
                return;
            }
        } else {
            m.member6142[m.member6143++] = '';
        }
    };
    Class421.member5585.member867 = function (m) {
        if (g.member7250() === g.member7249) {
            var k = m.member6100[--m.member6099];
            if (k < g.member7223()) {
                m.member6100[m.member6099++] = g.member7220(k).member9447;
                return;
            }
        } else {
            m.member6142[m.member6143++] = '';
        }
    };
    Class421.member5592.member867 = function (m) {
        if (g.member7250() === g.member7249) {
            var k = m.member6100[--m.member6099];
            if (k < g.member7223()) {
                m.member6100[m.member6099++] = g.member7220(k).member7229;
                return;
            }
        }
        m.member6142[m.member6143++] = '';
    };
    Class421.member5593.member867 = function (m) {
        if (g.member7250() === g.member7249) {
            var k = m.member6100[--m.member6099];
            if (k < g.member7223()) {
                m.member6100[m.member6099++] = g.member7220(k).member7230;
                return;
            }
        }
        m.member6142[m.member6143++] = '';
    };
    Class421.member5586.member867 = function (m) {
        var k = m.member6142[--m.member6143];
        if (k.indexOf(Class317.member3724(0)) === 0 || k.indexOf(Class317.member3724(1)) === 0) {
            k = k.slice(7, k.length);
        }
        m.member6100[m.member6099++] = h(k);
    };
    var h = function (m) {
        for (var k = 0; k < g.member7223(); k++) {
            if (g.member7220(k).member7233 == m) {
                return k;
            }
        }
        return -1;
    };
    e.member9448 = h;
    Class421.member5208.member867 = function (o) {
        o.member6143 -= 2;
        var m = o.member6142[o.member6143];
        var k = o.member6142[o.member6143 + 1];
        var q = a.member8252.member8259();
        var n = q.member8260(Class501.member8126);
        if (k.length > 30) {
            k = k.substring(0, 30);
        }
        n.packet.p1(Packet.member1152(m) + Packet.member1152(k));
        n.packet.pjstr(k);
        n.packet.pjstr(m);
        q.member8261(n);
    };
    return e;
}();