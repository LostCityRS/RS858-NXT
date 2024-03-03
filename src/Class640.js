import { Class131 } from 'Class131.js';
import { Class421 } from 'Class421.js';
export var Class640 = function () {
    var h = {};
    var a;
    var i;
    var j;
    var b = function (m, o, n) {
        a = m;
        i = o;
        j = n;
    };
    h.member25 = b;
    var g = function (o) {
        var n = o.member6100[--o.member6099];
        var m = i.member3227(Class131.member1214.member1204, n);
        if (m === member47) {
            o.member6099++;
        }
        return m;
    };
    Class421.member5689.member867 = function (n) {
        var m = g(n);
        if (m === member47) {
            return true;
        }
        n.member6142[n.member6143++] = m.getName();
    };
    Class421.member5690.member867 = function (q) {
        q.member6099 -= 2;
        var n = q.member6100[q.member6099];
        var r = q.member6100[q.member6099 + 1];
        var m = i.member3227(Class131.member1214.member1204, n);
        if (m === member47) {
            q.member6099 += 2;
            return true;
        }
        var o = m.member9577();
        if (r >= 1 && r <= 5 && o[r - 1] !== undefined && o[r - 1] !== null) {
            q.member6142[q.member6143++] = o[r - 1];
        } else {
            q.member6142[q.member6143++] = '';
        }
    };
    Class421.member5691.member867 = function (o) {
        o.member6099 -= 2;
        var n = o.member6100[o.member6099];
        var q = o.member6100[o.member6099 + 1];
        var m = i.member3227(Class131.member1214.member1204, n);
        if (m === member47) {
            o.member6099 += 2;
            return true;
        }
        var r = m.member9578();
        if (q >= 1 && q <= 5 && r[q - 1] !== undefined && r[q - 1] !== null) {
            o.member6142[o.member6143++] = r[q - 1];
        } else {
            o.member6142[o.member6143++] = '';
        }
    };
    Class421.member5692.member867 = function (n) {
        var m = g(n);
        if (m === member47) {
            return true;
        }
        n.member6100[n.member6099++] = m.member9579();
    };
    Class421.member5693.member867 = function (n) {
        var m = g(n);
        if (m === member47) {
            return true;
        }
        n.member6100[n.member6099++] = m.member7079() === 1 ? 1 : 0;
    };
    Class421.member5696.member867 = function (n) {
        var m = g(n);
        if (m === member47) {
            return true;
        }
        if (m.member7083() === -1 && m.member7084() >= 0) {
            n.member6100[n.member6099++] = m.member7084();
        } else {
            n.member6100[n.member6099++] = m.member444();
        }
    };
    Class421.member5697.member867 = function (n) {
        var m = g(n);
        if (m === member47) {
            return true;
        }
        if (m.member7083() >= 0 && m.member7084() >= 0) {
            n.member6100[n.member6099++] = m.member7084();
        } else {
            n.member6100[n.member6099++] = m.member444();
        }
    };
    Class421.member5698.member867 = function (n) {
        var m = g(n);
        if (m === member47) {
            return true;
        }
        if (m.member7085() === -1 && m.member7086() >= 0) {
            n.member6100[n.member6099++] = m.member7086();
        } else {
            n.member6100[n.member6099++] = m.member444();
        }
    };
    Class421.member5699.member867 = function (n) {
        var m = g(n);
        if (m === member47) {
            return true;
        }
        if (m.member7085() >= 0 && m.member7086() >= 0) {
            n.member6100[n.member6099++] = m.member7086();
        } else {
            n.member6100[n.member6099++] = m.member444();
        }
    };
    Class421.member5700.member867 = function (n) {
        var m = g(n);
        if (m === member47) {
            return true;
        }
        n.member6100[n.member6099++] = m.member9580();
    };
    Class421.member5701.member867 = function (n) {
        var m = g(n);
        if (m === member47) {
            return true;
        }
        n.member6100[n.member6099++] = m.member9581();
    };
    Class421.member5702.member867 = function (n) {
        var m = g(n);
        if (m === member47) {
            return true;
        }
        n.member6100[n.member6099++] = m.member9582();
    };
    Class421.member5703.member867 = function (n) {
        var m = g(n);
        if (m === member47) {
            return true;
        }
        n.member6100[n.member6099++] = m.member9583();
    };
    Class421.member5704.member867 = function (n) {
        var m = g(n);
        if (m === member47) {
            return true;
        }
        n.member6100[n.member6099++] = m.member9584() ? 1 : 0;
    };
    Class421.member5705.member867 = function (q) {
        q.member6099 -= 2;
        var o = q.member6100[q.member6099];
        var n = q.member6100[q.member6099 + 1];
        var m = i.member3227(Class131.member1214.member1204, o);
        var r = i.member3227(Class131.member1215.member1204, n);
        if (m === member47 || r === member47) {
            q.member6099 += 2;
            return true;
        }
        if (r.member6141()) {
            q.member6142[q.member6143++] = m.member2941(n, r.member6144());
        } else {
            q.member6100[q.member6099++] = m.getParam(n, r.member6145());
        }
    };
    Class421.member5706.member867 = function (o) {
        o.member6099 -= 2;
        var n = o.member6100[o.member6099];
        var q = o.member6100[o.member6099 + 1] - 1;
        var m = i.member3227(Class131.member1214.member1204, n);
        if (m === member47) {
            o.member6099 += 2;
            return true;
        }
        o.member6100[o.member6099++] = m.member9585(q);
    };
    Class421.member5707.member867 = function (n) {
        var m = g(n);
        if (m === member47) {
            return true;
        }
        n.member6100[n.member6099++] = m.member9586();
    };
    Class421.member5710.member867 = function (n) {
        var m = g(n);
        if (m === member47) {
            return true;
        }
        n.member6100[n.member6099++] = m.member9587() ? 1 : 0;
    };
    Class421.member5711.member867 = function (n) {
        var m = g(n);
        if (m === member47) {
            return true;
        }
        var o;
        if (m.member9587()) {
            o = m.member9588();
        } else if (m.member9584()) {
            o = j.member9589().member9590();
        } else {
            o = j.member9589().member9591();
        }
        n.member6100[n.member6099++] = o;
    };
    var k = [];
    var e = 0;
    Class421.member5708.member867 = function (m) {
        if (i.member9592() === undefined) {
            return true;
        }
        if (!i.member9592().member9593()) {
            return true;
        }
        var n = m.member6142[--m.member6143].toLowerCase();
        var o = m.member6100[--m.member6099] === 1;
        m.member6100[m.member6099++] = c(n, o);
    };
    Class421.member5709.member867 = function (m) {
        if (e >= k.length) {
            m.member6100[m.member6099++] = -1;
            return;
        }
        m.member6100[m.member6099++] = k[e++].id;
    };
    Class421.member5221.member867 = function (m) {
        e = 0;
    };
    var c = function (o, q) {
        k = [];
        e = 0;
        var r = i.member9592();
        for (var n = 0; n < r.member9594(); n++) {
            var m = r.member9595(n);
            if (m === null || m === undefined) {
                continue;
            }
            if (q && !m.member9596) {
                continue;
            }
            if (m.name.toLowerCase().indexOf(o) === -1) {
                continue;
            }
            if (k.length >= 250) {
                k.length = 0;
                return -1;
            }
            k[k.length] = m;
        }
        k.sort(d);
        return k.length;
    };
    var d = function (q, o) {
        var n = q.name;
        var m = o.name;
        if (n > m) {
            return 1;
        } else if (n < m) {
            return -1;
        } else {
            return 0;
        }
    };
    Class421.member5694.member867 = function (n) {
        var m = g(n);
        if (m === member47) {
            return true;
        }
        n.member6100[n.member6099++] = m.member8472();
    };
    Class421.member5695.member867 = function (n) {
        var m = g(n);
        if (m === member47) {
            return true;
        }
        n.member6100[n.member6099++] = m.member7079() === 2 ? 1 : 0;
    };
    return h;
}();