import { Class433 } from 'Class433.js';
import { VarDomainType } from 'Class465.js';
export var Class747 = function () {
    var b = {};
    var a;
    var c = undefined;
    var d = function (e) {
        a = e;
    };
    b.member25 = d;
    Class433.member6267.member6428 = function (e, g) {
        if (c === undefined) {
            c = a.getVarValueProvider();
        }
        c.member301();
        a.member7187.member9139();
    };
    Class433.member6243.member6428 = function (h, j) {
        var e = h.g2_alt1();
        var i = h.g1s_alt3();
        var g = a.member2970.getVarType(VarDomainType.PLAYER, e);
        if (g === NULL) {
            return true;
        } else {
            c.member2972(g, i);
        }
    };
    Class433.member6244.member6428 = function (h, j) {
        var e = h.g2_alt3();
        var i = h.g4s_alt3();
        var g = a.member2970.getVarType(VarDomainType.PLAYER, e);
        if (g === NULL) {
            return true;
        } else {
            c.member2972(g, i);
        }
    };
    Class433.member6348.member6428 = function (g, j) {
        var i = g.g1_alt2();
        var e = g.g2_alt2();
        var h = a.member2970.getVarBitType(e);
        if (h === NULL) {
            return true;
        } else {
            c.member2973(h, i);
        }
    };
    Class433.member6349.member6428 = function (g, j) {
        var e = g.g2_alt1();
        var i = g.g4s_alt1();
        var h = a.member2970.getVarBitType(e);
        if (h === NULL) {
            return true;
        } else {
            c.member2973(h, i);
        }
    };
    Class433.member6350.member6428 = function (h, j) {
        var i = h.g1s();
        var e = h.g2_alt2();
        var g = a.member2970.getVarType(VarDomainType.CLIENT, e);
        if (g === NULL) {
            return true;
        }
        a.delayedStateChange.incrementVerifyID();
        a.delayedStateChange.member9622(true, g, i);
    };
    Class433.member6351.member6428 = function (h, j) {
        var e = h.g2();
        var i = h.g4s_alt2();
        var g = a.member2970.getVarType(VarDomainType.CLIENT, e);
        if (g === NULL) {
            return true;
        }
        a.delayedStateChange.incrementVerifyID();
        a.delayedStateChange.member9622(true, g, i);
    };
    Class433.member6352.member6428 = function (h, j) {
        var e = h.g2();
        var i = h.g1s_alt3();
        var g = a.member2970.getVarBitType(e);
        if (g === NULL) {
            return true;
        }
        a.delayedStateChange.incrementVerifyID();
        a.delayedStateChange.member10204(true, g, i);
    };
    Class433.member6353.member6428 = function (h, j) {
        var i = h.g4s_alt3();
        var e = h.g2();
        var g = a.member2970.getVarBitType(e);
        if (g === NULL) {
            return true;
        }
        a.delayedStateChange.incrementVerifyID();
        a.delayedStateChange.member10204(true, g, i);
    };
    Class433.member6354.member6428 = function (g, j) {
        var h = g.gjstr(false);
        var e = g.g2_alt3();
        var i = a.member2970.getVarType(VarDomainType.CLIENT, e);
        if (i === NULL) {
            return true;
        }
        a.delayedStateChange.incrementVerifyID();
        a.delayedStateChange.member9623(true, i, h);
    };
    Class433.member6355.member6428 = Class433.member6354.member6428;
    Class433.member6379.member6428 = function (e, g) {
        a.member6116.member9766().member10205();
    };
    Class433.member6247.member6428 = function (e, g) {
        a.member6116.member10206();
    };
    Class433.member6246.member6428 = function (e, g) {
        a.member6116.member10207();
    };
    Class433.member6245.member6428 = function (g, j) {
        a.member6116.member10207();
        var i = a.member2970.getVarClanTypeList();
        var h = i.member3026(g);
        if (h === NULL) {
            return true;
        }
        var e = a.member6116.member9605();
        e.member2947(h.id, h.value);
        a.member7187.member9144(h.id);
    };
    Class433.member6239.member6428 = function (j) {
        var i = j.g4s_alt1();
        var h = j.g1_alt3();
        var e = a.member6116.member3024();
        var m = e.member2994(h);
        var k = j.g1_alt2();
        var g = a.member6116.member8789().member10209();
        g[h].member3002(i);
        g[h].member3005(k);
        a.member7187.member9148(h);
    };
    return b;
}();