import { Class421 } from 'Class421.js';
import { Class450 } from 'Class450.js';
import { Class501 } from 'Class501.js';
import { Class633 } from 'Class633.js';
import { Class443 } from 'Class443.js';
import { Packet } from 'Class124.js';
import { Js5ConfigGroup } from 'Class131.js';
import { Class540 } from 'Class540.js';
export var Class667 = function () {
    var d = {};
    var a;
    var h = 0;
    var c = function (n) {
        a = n;
        h = a.clientParameters.member7138.value.id;
    };
    d.member25 = c;
    Class421.member5722.member867 = function (r) {
        var o, n;
        var q = a.member7135();
        if (q !== undefined) {
            n = q.member6453();
        }
        if (n !== undefined) {
            o = n.member7791(true);
        } else {
            o = '';
        }
        r.member6142[r.member6143++] = o;
    };
    Class421.member5176.member867 = function (o) {
        var n = o.member6142[--o.member6143];
        a.member8023.member7184(n);
        if (false) {
        }
    };
    Class421.member5190.member867 = function (q) {
        q.member6099 -= 2;
        var r = q.member6100[q.member6099];
        var n = q.member6100[q.member6099 + 1];
        var o = q.member6142[--q.member6143];
        if (r === Class450.member7176) {
            a.member9219.member9734(o);
        } else if (r === Class450.member7175) {
            a.member9219.member9735(o);
        } else {
            a.member8023.member7186(r, n, '', '', '', o);
        }
    };
    Class421.member5718.member867 = function (n) {
        n.member6100[n.member6099++] = a.member8023.member7179();
    };
    Class421.member5723.member867 = function (n) {
        n.member6100[n.member6099++] = a.member8023.member7181();
    };
    Class421.member5721.member867 = function (n) {
        n.member6100[n.member6099++] = a.member7259.member7252();
    };
    Class421.member5222.member867 = function (t) {
        var r = t.member6100[--t.member6099];
        var n = t.member6100[--t.member6099];
        var o = t.member6100[--t.member6099];
        a.member8023.member7180(o);
        a.member7259.member7253(n);
        a.member8023.member7182(r);
        var s = a.member8252.member8259();
        var q = s.member8260(Class501.member8133);
        q.packet.p1(o);
        q.packet.p1(n);
        q.packet.p1(r);
        s.member8261(q);
    };
    Class421.member5719.member867 = function (o) {
        o.member6099 -= 2;
        var q = o.member6100[o.member6099];
        var r = o.member6100[o.member6099 + 1];
        var n = a.member8023.member7190(q, r);
        if (n !== undefined) {
            o.member6100[o.member6099++] = n.getID();
            o.member6142[o.member6143++] = Class633.member9463(n.member2793());
            o.member6100[o.member6099++] = n.member304();
            o.member6142[o.member6143++] = n.member2795() !== undefined ? n.member2795() : '';
            o.member6142[o.member6143++] = n.member2796() !== undefined ? n.member2796() : '';
            o.member6142[o.member6143++] = n.member2797() !== undefined ? n.member2797() : '';
            o.member6142[o.member6143++] = n.member2798() !== undefined ? n.member2798() : '';
            o.member6100[o.member6099++] = n.member2799();
            o.member6142[o.member6143++] = n.member2800() !== undefined ? n.member2800() : '';
            o.member6100[o.member6099++] = n.member2801() !== undefined ? n.member2801().serialID : -1;
        } else {
            o.member6100[o.member6099++] = -1;
            o.member6142[o.member6143++] = '';
            o.member6100[o.member6099++] = 0;
            o.member6142[o.member6143++] = '';
            o.member6142[o.member6143++] = '';
            o.member6142[o.member6143++] = '';
            o.member6142[o.member6143++] = '';
            o.member6100[o.member6099++] = 0;
            o.member6142[o.member6143++] = '';
            o.member6100[o.member6099++] = -1;
        }
    };
    Class421.member5720.member867 = function (q) {
        q.member6099 -= 1;
        var o = q.member6100[q.member6099];
        var n = a.member8023.member7191(o);
        if (n !== undefined) {
            q.member6100[q.member6099++] = n.member2794();
            q.member6142[q.member6143++] = Class633.member9463(n.member2793());
            q.member6100[q.member6099++] = n.member304();
            q.member6142[q.member6143++] = n.member2795() !== undefined ? n.member2795() : '';
            q.member6142[q.member6143++] = n.member2796() !== undefined ? n.member2796() : '';
            q.member6142[q.member6143++] = n.member2797() !== undefined ? n.member2797() : '';
            q.member6142[q.member6143++] = n.member2798() !== undefined ? n.member2798() : '';
            q.member6100[q.member6099++] = n.member2799();
            q.member6142[q.member6143++] = n.member2800() !== undefined ? n.member2800() : '';
            q.member6100[q.member6099++] = n.member2801() !== undefined ? n.member2801().serialID : -1;
        } else {
            q.member6100[q.member6099++] = -1;
            q.member6142[q.member6143++] = '';
            q.member6100[q.member6099++] = 0;
            q.member6142[q.member6143++] = '';
            q.member6142[q.member6143++] = '';
            q.member6142[q.member6143++] = '';
            q.member6142[q.member6143++] = '';
            q.member6100[q.member6099++] = 0;
            q.member6142[q.member6143++] = '';
            q.member6100[q.member6099++] = -1;
        }
    };
    Class421.member5724.member867 = function (n) {
        n.member6099--;
        var o = n.member6100[n.member6099];
        n.member6100[n.member6099++] = a.member8023.member7189(o);
    };
    Class421.member5725.member867 = function (o) {
        o.member6099--;
        var n = o.member6100[o.member6099];
        o.member6100[o.member6099++] = a.member8023.member7193(n);
    };
    Class421.member5726.member867 = function (o) {
        o.member6099--;
        var n = o.member6100[o.member6099];
        o.member6100[o.member6099++] = a.member8023.member7192(n);
    };
    Class421.member5224.member867 = function (o) {
        var n = o.member6100[--o.member6099];
        m(n);
    };
    var m = function (n) {
        var q = a.member8252.member8259();
        var o = q.member8260(Class501.member8140);
        o.packet.p1(n);
        q.member8261(o);
    };
    d.member9736 = m;
    Class421.member5225.member867 = function (n) {
        if (!a.member9737.readyanim()) {
            return true;
        }
        var o = n.member6142[--n.member6143];
        j(o);
    };
    var j = function (v) {
        var r = a.member7135();
        if (r !== undefined && r.member8026() === 0 && (r.member8175() && !r.member8181() || a.member8782().member8786())) {
            return;
        }
        var u = b(v);
        v = u.member2810;
        var q = u.member9738;
        var n = u.member9739;
        var t = a.member8252.member8259();
        var o = t.member8260(Class501.member6365);
        o.packet.p1(0);
        var s = o.packet.getPos();
        o.packet.p1(q);
        o.packet.p1(n);
        a.member9737.member9740(o.packet, v);
        o.packet.member1068(o.packet.getPos() - s);
        t.member8261(o);
    };
    d.member9741 = j;
    var k = [
        Class443.member6973[h],
        Class443.member6974[h],
        Class443.member6975[h],
        Class443.member6976[h],
        Class443.member6977[h],
        Class443.member6978[h],
        Class443.member6979[h],
        Class443.member6980[h],
        Class443.member6981[h],
        Class443.member6982[h],
        Class443.member6983[h],
        Class443.member6984[h]
    ];
    var i = [
        Class443.member6985[h],
        Class443.member6986[h],
        Class443.member6987[h],
        Class443.member6988[h],
        Class443.member6989[h]
    ];
    var b = function (s) {
        var q = {
            member2810: s,
            member9738: 0,
            member9739: 0
        };
        var u = 0;
        for (var t = 0; t < s.length; t++) {
            if (s.charAt(t) === ':') {
                var r = false;
                var o = s.slice(u, t + 1).toLowerCase();
                for (var n = 0; n < k.length; n++) {
                    if (o === k[n]) {
                        if (q.member9738 !== 0) {
                            return q;
                        }
                        q.member9738 = n;
                        u = t + 1;
                        q.member2810 = s.slice(u, s.length);
                        r = true;
                    }
                }
                if (!r) {
                    for (var n = 0; n < i.length; n++) {
                        if (o === i[n]) {
                            if (q.member9739 !== 0) {
                                return q;
                            }
                            q.member9739 = n + 1;
                            u = t + 1;
                            q.member2810 = s.slice(u, s.length);
                            r = true;
                        }
                    }
                }
                if (!r) {
                    return q;
                }
                if (q.member9739 !== 0 && q.member9738 !== 0) {
                    return q;
                }
            }
        }
        return q;
    };
    Class421.member5226.member867 = function (o) {
        if (!a.member9737.readyanim()) {
            return true;
        }
        var q = o.member6142[--o.member6143];
        var n = o.member6142[--o.member6143];
        g(n, q);
    };
    var g = function (r, t) {
        var o = a.member7135();
        if (o !== undefined && o.member8026() === 0 && (o.member8175() && !o.member8181() || a.member8782().member8786())) {
            return;
        }
        var s = a.member8252.member8259();
        var n = s.member8260(Class501.member6252);
        n.packet.p2(0);
        var q = n.packet.getPos();
        n.packet.pjstr(r);
        a.member9737.member9740(n.packet, t);
        n.packet.member1069(n.packet.getPos() - q);
        s.member8261(n);
    };
    d.member9742 = g;
    Class421.member5223.member867 = function (o) {
        o.member6143 -= 2;
        var n = o.member6142[o.member6143];
        var s = o.member6142[o.member6143 + 1];
        o.member6099 -= 2;
        var q = o.member6100[o.member6099];
        var r = o.member6100[o.member6099 + 1];
        e(n, s, q, r);
    };
    var e = function (o, t, r, s) {
        if (t === undefined) {
            t = '';
        }
        if (t.length > 80) {
            t = t.substring(0, 80);
        }
        var q = a.member8252.member8259();
        var n = q.member8260(Class501.member8128);
        n.packet.p1(Packet.member1152(o) + 2 + Packet.member1152(t));
        n.packet.pjstr(o);
        n.packet.p1(r - 1);
        n.packet.p1(s);
        n.packet.pjstr(t);
        q.member8261(n);
    };
    d.member9743 = e;
    Class421.member5227.member867 = function (o) {
        var q = o.member6100[--o.member6099];
        var n = a.member2970.getConfigType(Js5ConfigGroup.CHATPHRASETYPE.member1204, q);
        if (n === NULL) {
            o.member6099++;
            return true;
        }
        o.member8881 = Class540({
            member8588: q,
            member8589: n,
            member8590: new Array(n.member8724())
        });
    };
    Class421.member5229.member867 = function (s) {
        var q = s.member6142[--s.member6143];
        var r = a.member8252.member8259();
        var n = r.member8260(Class501.member6287);
        n.packet.p1(0);
        var o = n.packet.getPos();
        n.packet.pjstr(q);
        n.packet.p2(s.member8881.member8584());
        s.member8881.member8585().member8732(n.packet, s.member8881.member8586());
        n.packet.member1068(n.packet.getPos() - o);
        r.member8261(n);
    };
    Class421.member5228.member867 = function (s) {
        var n = s.member6100[--s.member6099];
        var r = a.member8252.member8259();
        var o = r.member8260(Class501.member8119);
        o.packet.p1(0);
        var q = o.packet.getPos();
        o.packet.p1(n);
        o.packet.p2(s.member8881.member8584());
        s.member8881.member8585().member8732(o.packet, s.member8881.member8586());
        o.packet.member1068(o.packet.getPos() - q);
        r.member8261(o);
    };
    Class421.member5230.member867 = function (n) {
        n.member6099 -= 2;
        var o = n.member6100[n.member6099];
        var q = n.member6100[n.member6099 + 1];
        n.member8881.member8587(o, q);
    };
    Class421.member5231.member867 = function (n) {
        n.member6099 -= 2;
        var o = n.member6100[n.member6099];
        var q = n.member6100[n.member6099 + 1];
        n.member8881.member8587(o, q);
    };
    Class421.member5739.member867 = function (n) {
        n.member6099 -= 2;
        var r = n.member6100[n.member6099];
        var o = n.member6100[n.member6099 + 1];
        if (o === -1) {
            n.member6100[n.member6099++] = -1;
        } else {
            var q = a.member2970.getConfigType(Js5ConfigGroup.CHATCATTYPE.member1204, r);
            if (q === NULL) {
                n.member6099 += 2;
                return true;
            }
            n.member6100[n.member6099++] = q.member8745(o);
        }
    };
    Class421.member5738.member867 = function (n) {
        n.member6099 -= 2;
        var r = n.member6100[n.member6099];
        var o = n.member6100[n.member6099 + 1];
        if (o === -1) {
            n.member6100[n.member6099++] = -1;
        } else {
            var q = a.member2970.getConfigType(Js5ConfigGroup.CHATCATTYPE.member1204, r);
            if (q === NULL) {
                n.member6099 += 2;
                return true;
            }
            n.member6100[n.member6099++] = q.member8744(o);
        }
    };
    Class421.member5728.member867 = function (n) {
        var q = n.member6100[--n.member6099];
        var o = a.member2970.getConfigType(Js5ConfigGroup.CHATCATTYPE.member1204, q);
        if (o === NULL) {
            n.member6099++;
            return true;
        }
        n.member6142[n.member6143++] = o.member8742();
    };
    Class421.member5732.member867 = function (n) {
        n.member6099 -= 2;
        var r = n.member6100[n.member6099];
        var o = n.member6100[n.member6099 + 1];
        var q = a.member2970.getConfigType(Js5ConfigGroup.CHATCATTYPE.member1204, r);
        if (q === NULL) {
            n.member6099 += 2;
            return true;
        }
        n.member6100[n.member6099++] = q.member8584(o);
    };
    Class421.member5731.member867 = function (n) {
        var q = n.member6100[--n.member6099];
        var o = a.member2970.getConfigType(Js5ConfigGroup.CHATCATTYPE.member1204, q);
        if (o === NULL) {
            n.member6099++;
            return true;
        }
        n.member6100[n.member6099++] = o.member8747();
    };
    Class421.member5737.member867 = function (n) {
        n.member6099 -= 2;
        var r = n.member6100[n.member6099];
        var o = n.member6100[n.member6099 + 1];
        var q = a.member2970.getConfigType(Js5ConfigGroup.CHATCATTYPE.member1204, r);
        if (q === NULL) {
            n.member6099 += 2;
            return true;
        }
        n.member6100[n.member6099++] = q.member8750(o);
    };
    Class421.member5730.member867 = function (n) {
        n.member6099 -= 2;
        var r = n.member6100[n.member6099];
        var o = n.member6100[n.member6099 + 1];
        var q = a.member2970.getConfigType(Js5ConfigGroup.CHATCATTYPE.member1204, r);
        if (q === NULL) {
            n.member6099 += 2;
            return true;
        }
        n.member6100[n.member6099++] = q.member8743(o);
    };
    Class421.member5729.member867 = function (n) {
        var q = n.member6100[--n.member6099];
        var o = a.member2970.getConfigType(Js5ConfigGroup.CHATCATTYPE.member1204, q);
        if (o === NULL) {
            n.member6099++;
            return true;
        }
        n.member6100[n.member6099++] = o.member8748();
    };
    Class421.member5736.member867 = function (n) {
        n.member6099 -= 2;
        var r = n.member6100[n.member6099];
        var o = n.member6100[n.member6099 + 1];
        var q = a.member2970.getConfigType(Js5ConfigGroup.CHATCATTYPE.member1204, r);
        if (q === NULL) {
            n.member6099 += 2;
            return true;
        }
        n.member6100[n.member6099++] = q.member8749(o);
    };
    Class421.member5743.member867 = function (o) {
        var q = o.member6142[--o.member6143];
        var n = o.member6100[--o.member6099] === 1;
        if (!a.member2970.member9744().member9745()) {
            o.member6099++;
            o.member6143++;
            return true;
        }
        a.member9746.member9747(q, n);
        o.member6100[o.member6099++] = a.member9746.member9748();
    };
    Class421.member5744.member867 = function (n) {
        n.member6100[n.member6099++] = a.member9746.member9749();
    };
    Class421.member5232.member867 = function (n) {
        a.member9746.member9750();
    };
    Class421.member5735.member867 = function (q) {
        q.member6099 -= 2;
        var s = q.member6100[q.member6099];
        var r = q.member6100[q.member6099 + 1];
        var n = a.member2970.getConfigType(Js5ConfigGroup.CHATPHRASETYPE.member1204, s);
        if (n === NULL) {
            q.member6099 += 2;
            return true;
        }
        var o = n.member8727(r);
        if (o < 0) {
            throw new Error('1660 ');
        }
        q.member6100[q.member6099++] = o;
    };
    Class421.member5734.member867 = function (o) {
        var q = o.member6100[--o.member6099];
        var n = a.member2970.getConfigType(Js5ConfigGroup.CHATPHRASETYPE.member1204, q);
        if (n === NULL) {
            o.member6099++;
            return true;
        }
        o.member6100[o.member6099++] = n.member8728();
    };
    Class421.member5741.member867 = function (o) {
        o.member6099 -= 2;
        var r = o.member6100[o.member6099];
        var q = o.member6100[o.member6099 + 1];
        var n = a.member2970.getConfigType(Js5ConfigGroup.CHATPHRASETYPE.member1204, r);
        if (n === NULL) {
            o.member6099 += 2;
            return true;
        }
        var s = n.member8725(q);
        if (s === undefined) {
            throw new Error('1661 ');
        }
        o.member6100[o.member6099++] = s.id;
    };
    Class421.member5740.member867 = function (o) {
        var q = o.member6100[--o.member6099];
        var n = a.member2970.getConfigType(Js5ConfigGroup.CHATPHRASETYPE.member1204, q);
        if (n === NULL) {
            o.member6099++;
            return true;
        }
        o.member6100[o.member6099++] = n.member8724();
    };
    Class421.member5742.member867 = function (q) {
        q.member6099 -= 3;
        var s = q.member6100[q.member6099];
        var o = q.member6100[q.member6099 + 1];
        var r = q.member6100[q.member6099 + 2];
        var n = a.member2970.getConfigType(Js5ConfigGroup.CHATPHRASETYPE.member1204, s);
        if (n === NULL) {
            q.member6099 += 3;
            return true;
        }
        var t = n.member8725(o);
        if (t === undefined) {
            throw new Error('1662 ');
        }
        if (t.id !== 0) {
            throw new Error('1663 ' + t.id);
        }
        q.member6100[q.member6099++] = n.member8726(o, r);
    };
    Class421.member5733.member867 = function (o) {
        var q = o.member6100[--o.member6099];
        var n = a.member2970.getConfigType(Js5ConfigGroup.CHATPHRASETYPE.member1204, q);
        if (n === NULL) {
            o.member6099++;
            return true;
        }
        o.member6142[o.member6143++] = n.member8731();
    };
    Class421.member6091.member867 = function (n) {
        n.member6099 -= 2;
    };
    Class421.member6092.member867 = function (n) {
        --n.member6099;
    };
    Class421.member6093.member867 = function (n) {
    };
    Class421.member6094.member867 = function (n) {
    };
    Class421.member6095.member867 = function (n) {
        --n.member6099;
    };
    return d;
}();