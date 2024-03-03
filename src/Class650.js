import { Class421 } from 'Class421.js';
import { Js5ConfigGroup } from 'Class131.js';
export var Class650 = function () {
    var c = {};
    var a;
    var b;
    var d = function (e, g) {
        a = e;
        b = g;
    };
    c.member25 = d;
    Class421.member5974.member867 = function (g) {
        var e = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, g.member6100[g.member6099 - 1]);
        if (e === NULL) {
            return true;
        }
        g.member6099--;
        g.member6142[g.member6143++] = e.getName();
    };
    Class421.member5975.member867 = function (g) {
        var e = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, g.member6100[g.member6099 - 1]);
        if (e === NULL) {
            return true;
        }
        g.member6099--;
        g.member6142[g.member6143++] = e.member9631();
    };
    Class421.member5976.member867 = function (g) {
        var e = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, g.member6100[g.member6099 - 1]);
        if (e === NULL) {
            return true;
        }
        g.member6100[g.member6099 - 1] = e.member2794();
    };
    Class421.member5977.member867 = function (g) {
        var e = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, g.member6100[g.member6099 - 1]);
        if (e === NULL) {
            return true;
        }
        g.member6100[g.member6099 - 1] = e.member9632();
    };
    Class421.member5978.member867 = function (g) {
        var e = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, g.member6100[g.member6099 - 1]);
        if (e === NULL) {
            return true;
        }
        g.member6100[g.member6099 - 1] = e.member8413() ? 1 : 0;
    };
    Class421.member5979.member867 = function (g) {
        var e = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, g.member6100[g.member6099 - 1]);
        if (e === NULL) {
            return true;
        }
        g.member6100[g.member6099 - 1] = e.member2977();
    };
    Class421.member5980.member867 = function (h) {
        var g = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, h.member6100[h.member6099 - 1]);
        if (g === NULL) {
            return true;
        }
        var e = g.member9633();
        if (e) {
            h.member6100[h.member6099 - 1] = e.length;
        } else {
            h.member6100[h.member6099 - 1] = 0;
        }
    };
    Class421.member5981.member867 = function (g) {
        var e = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, g.member6100[g.member6099 - 2]);
        if (e === NULL) {
            return true;
        }
        var h = g.member6100[g.member6099 - 1];
        g.member6100[g.member6099 - 2] = e.member9633()[h];
        g.member6099 -= 1;
    };
    Class421.member5982.member867 = function (g) {
        var e = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, g.member6100[g.member6099 - 2]);
        if (e === NULL) {
            return true;
        }
        var h = g.member6100[g.member6099 - 1];
        g.member6100[g.member6099 - 2] = e.member9634(a.getVarValueProvider(), h) ? 1 : 0;
        g.member6099 -= 1;
    };
    Class421.member5983.member867 = function (g) {
        var e = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, g.member6100[g.member6099 - 1]);
        if (e === NULL) {
            return true;
        }
        g.member6100[g.member6099 - 1] = e.member9635();
    };
    Class421.member5984.member867 = function (g) {
        var e = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, g.member6100[g.member6099 - 1]);
        if (e === NULL) {
            return true;
        }
        g.member6100[g.member6099 - 1] = e.member9636(a.getVarValueProvider()) ? 1 : 0;
    };
    Class421.member5985.member867 = function (g) {
        var e = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, g.member6100[g.member6099 - 1]);
        if (e === NULL) {
            return true;
        }
        var h = e.member9637();
        if (h) {
            g.member6100[g.member6099 - 1] = h.length;
        } else {
            g.member6100[g.member6099 - 1] = 0;
        }
    };
    Class421.member5986.member867 = function (g) {
        var e = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, g.member6100[g.member6099 - 2]);
        if (e === NULL) {
            return true;
        }
        var h = g.member6100[g.member6099 - 1];
        g.member6100[g.member6099 - 2] = e.member9637()[h];
        g.member6099 -= 1;
    };
    Class421.member5987.member867 = function (g) {
        var e = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, g.member6100[g.member6099 - 2]);
        if (e === NULL) {
            return true;
        }
        var h = g.member6100[g.member6099 - 1];
        g.member6100[g.member6099 - 2] = e.member9638()[h];
        g.member6099 -= 1;
    };
    Class421.member5988.member867 = function (g) {
        var e = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, g.member6100[g.member6099 - 2]);
        if (e === NULL) {
            return true;
        }
        var h = g.member6100[g.member6099 - 1];
        g.member6100[g.member6099 - 2] = e.member9639(a.member6116.member8789(), h) ? 1 : 0;
        g.member6099 -= 1;
    };
    Class421.member5989.member867 = function (g) {
        var e = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, g.member6100[g.member6099 - 1]);
        if (e === NULL) {
            return true;
        }
        var h = e.member9640();
        if (h) {
            g.member6100[g.member6099 - 1] = h.length;
        } else {
            g.member6100[g.member6099 - 1] = 0;
        }
    };
    Class421.member5990.member867 = function (g) {
        var e = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, g.member6100[g.member6099 - 2]);
        if (e === NULL) {
            return true;
        }
        var h = g.member6100[g.member6099 - 1];
        g.member6142[g.member6143++] = e.member9641()[h];
        g.member6099 -= 2;
    };
    Class421.member5991.member867 = function (g) {
        var e = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, g.member6100[g.member6099 - 2]);
        if (e === NULL) {
            return true;
        }
        var h = g.member6100[g.member6099 - 1];
        g.member6100[g.member6099 - 2] = e.member9642(a.getVarValueProvider(), h) ? 1 : 0;
        g.member6099 -= 1;
    };
    Class421.member5992.member867 = function (h) {
        var e = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, h.member6100[h.member6099 - 1]);
        if (e === NULL) {
            return true;
        }
        var g = e.member9643();
        if (g) {
            h.member6100[h.member6099 - 1] = g.length;
        } else {
            h.member6100[h.member6099 - 1] = 0;
        }
    };
    Class421.member5993.member867 = function (g) {
        var e = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, g.member6100[g.member6099 - 2]);
        if (e === NULL) {
            return true;
        }
        var h = g.member6100[g.member6099 - 1];
        g.member6142[g.member6143++] = e.member9644()[h];
        g.member6099 -= 2;
    };
    Class421.member5994.member867 = function (g) {
        var e = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, g.member6100[g.member6099 - 2]);
        if (e === NULL) {
            return true;
        }
        var h = g.member6100[g.member6099 - 1];
        g.member6100[g.member6099 - 2] = e.member9645(a.getVarValueProvider(), h) ? 1 : 0;
        g.member6099 -= 1;
    };
    Class421.member5995.member867 = function (g) {
        var e = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, g.member6100[g.member6099 - 1]);
        if (e === NULL) {
            return true;
        }
        g.member6100[g.member6099 - 1] = e.member9646(a.getVarValueProvider(), a.member6116.member8789()) ? 1 : 0;
    };
    Class421.member5996.member867 = function (g) {
        var e = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, g.member6100[g.member6099 - 1]);
        if (e === NULL) {
            return true;
        }
        g.member6100[g.member6099 - 1] = e.member9647(a.getVarValueProvider()) ? 1 : 0;
    };
    Class421.member5997.member867 = function (g) {
        var e = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, g.member6100[g.member6099 - 1]);
        if (e === NULL) {
            return true;
        }
        g.member6100[g.member6099 - 1] = e.member2976(a.getVarValueProvider()) ? 1 : 0;
    };
    Class421.member5998.member867 = function (h) {
        var g = b.getConfigType(Js5ConfigGroup.QUESTTYPE.member1204, h.member6100[h.member6099 - 2]);
        var e = h.member6100[h.member6099 - 1];
        var i = b.getConfigType(Js5ConfigGroup.PARAMTYPE.member1204, e);
        if (g === NULL || i == NULL) {
            return true;
        }
        if (i.member6141()) {
            h.member6142[h.member6143++] = g.getParam(e, i.member6144());
            h.member6099 -= 2;
        } else {
            h.member6100[h.member6099 - 2] = g.getParam(e, i.member6145());
            h.member6099 -= 1;
        }
    };
    return c;
}();