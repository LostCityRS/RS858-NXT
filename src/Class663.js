import { Class421 } from 'Class421.js';
import { VarDomainType } from 'Class465.js';
import { BaseVarType } from 'Class462.js';
import { Class633 } from 'Class633.js';
import { Class451 } from 'Class451.js';
export var Class663 = function () {
    var b = {};
    var a;
    b.member25 = function (c) {
        a = c;
    };
    Class421.member6022.member867 = function (c) {
        c.member6100[c.member6099++] = a.member8846.member8444() === undefined ? 0 : 1;
    };
    Class421.member6023.member867 = function (c) {
        c.member6100[c.member6099++] = a.member8846.member8444().member8413().length;
    };
    Class421.member6024.member867 = function (h) {
        h.member6099 -= 3;
        var d = h.member6100[h.member6099];
        var c = h.member6100[h.member6099 + 1] === 1;
        var g = h.member6100[h.member6099 + 2];
        var e = a.member8846.member8444().member8419(d);
        if (e.member3020() === undefined) {
            e.member3023();
        }
        if (c) {
            var j = a.member2970.getVarType(VarDomainType.PLAYER, g);
            if (j === NULL) {
                h.member6099 += 3;
                return true;
            }
            switch (j.member8041().baseVarType) {
            case BaseVarType.INTEGER:
                h.member6100[h.member6099++] = e.member3020().getVarInt(j.id);
                break;
            case BaseVarType.LONG:
                h.member8877[h.member8878++] = e.member3020().getVarInt(j.id);
                break;
            default:
                h.member6142[h.member6143++] = e.member3020().getVarInt(j.id);
                break;
            }
        } else {
            var i = a.member2970.getVarBitType(g);
            if (i === NULL) {
                h.member6099 += 3;
                return true;
            }
            h.member6100[h.member6099++] = i.member2948(e.member3020().getVarInt(i.member2949()));
        }
    };
    Class421.member6025.member867 = function (d) {
        var c = d.member6100[--d.member6099];
        d.member6100[d.member6099++] = a.member8846.member8444().member8419(c).member3016();
    };
    Class421.member6026.member867 = function (d) {
        var c = d.member6100[--d.member6099];
        d.member6100[d.member6099++] = a.member8846.member8444().member8419(c).getTeam();
    };
    Class421.member6027.member867 = function (d) {
        var c = d.member6100[--d.member6099];
        d.member6100[d.member6099++] = a.member8846.member8444().member8419(c).member3011();
    };
    Class421.member6028.member867 = function (d) {
        var c = d.member6100[--d.member6099];
        d.member6100[d.member6099++] = a.member8846.member8444().member8419(c).member2723();
    };
    Class421.member6029.member867 = function (d) {
        var c = d.member6100[--d.member6099];
        d.member6100[d.member6099++] = a.member8846.member8444().member8419(c).member3013() ? 1 : 0;
    };
    Class421.member6030.member867 = function (d) {
        var c = d.member6100[--d.member6099];
        d.member6100[d.member6099++] = a.member8846.member8444().member8419(c).member3008() ? 1 : 0;
    };
    Class421.member6031.member867 = function (d) {
        var c = d.member6100[--d.member6099];
        d.member6142[d.member6143++] = a.member8846.member8444().member8419(c).member3009();
    };
    Class421.member6032.member867 = function (e) {
        e.member6099 -= 3;
        var c = e.member6100[e.member6099];
        var d = e.member6100[e.member6099 + 1];
        var h = e.member6100[e.member6099 + 2] === 1;
        var g = a.member8846.member8444().member8419(c).member3007(d);
        e.member6100[e.member6099++] = h ? g.member3006() : g.member3000();
    };
    Class421.member6033.member867 = function (d) {
        var c = d.member6100[--d.member6099];
        d.member6100[d.member6099++] = a.member8846.member8444().member8415() == c ? 1 : 0;
    };
    Class421.member6034.member867 = function (c) {
        c.member6100[c.member6099++] = a.member8846.member8444().member8414().length;
    };
    Class421.member6035.member867 = function (d) {
        var c = d.member6100[--d.member6099];
        d.member6142[d.member6143++] = a.member8846.member8444().member8414().get(c).member3009();
    };
    Class421.member6036.member867 = function (c) {
        c.member6142[c.member6143++] = a.member8846.member8444().member3009();
    };
    Class421.member6037.member867 = function (c) {
        c.member6100[c.member6099++] = a.member8846.member8444().member8411();
    };
    Class421.member6038.member867 = function (c) {
        c.member6100[c.member6099++] = a.member8846.member8444().member8410() / Class633.member9457;
    };
    Class421.member6039.member867 = function (c) {
        c.member6100[c.member6099++] = (Class451.member7178() - a.member8846.member8444().member8410() - a.member7135().member8219()) / Class633.member9456;
    };
    Class421.member6040.member867 = function (c) {
        c.member6100[c.member6099++] = a.member8846.member8444().member2981() ? 1 : 0;
    };
    Class421.member6041.member867 = function (c) {
        c.member6100[c.member6099++] = a.member8846.member8444().member8418();
    };
    Class421.member6042.member867 = function (c) {
        c.member6100[c.member6099++] = a.member8846.member8444().member8415();
    };
    return b;
}();