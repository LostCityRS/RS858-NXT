import { Class421 } from 'Class421.js';
import { Js5ConfigGroup } from 'Class131.js';
import { ScriptVarType } from 'Class463.js';
export var Class632 = function () {
    var b = {};
    var a;
    var c = function (d) {
        a = d;
    };
    b.member25 = c;
    Class421.member5554.member867 = function (g) {
        g.member6099 -= 2;
        var e = g.member6100[g.member6099];
        var h = g.member6100[g.member6099 + 1];
        var d = a.getConfigType(Js5ConfigGroup.ENUMTYPE.member1204, e);
        if (d === NULL) {
            g.member6099 += 2;
            return true;
        }
        if (d.getOutputType() !== ScriptVarType.STRING) {
            throw new Error('1028 ');
        }
        g.member6142[g.member6143++] = d.member9450(h);
    };
    Class421.member5555.member867 = function (h) {
        h.member6099 -= 4;
        var d = h.member6100[h.member6099];
        var j = h.member6100[h.member6099 + 1];
        var g = h.member6100[h.member6099 + 2];
        var i = h.member6100[h.member6099 + 3];
        var e = a.getConfigType(Js5ConfigGroup.ENUMTYPE.member1204, g);
        if (e === NULL) {
            h.member6099 += 4;
            return true;
        }
        if (e.getInputType().serialID !== d || e.getOutputType().serialID !== j) {
            throw new Error('1029 ' + g + '1029 ' + i);
        }
        if (j === ScriptVarType.STRING.serialID) {
            h.member6142[h.member6143++] = e.member9450(i);
        } else {
            h.member6100[h.member6099++] = e.member9452(i);
        }
    };
    Class421.member5556.member867 = function (g) {
        g.member6099 -= 3;
        var i = g.member6100[g.member6099];
        var e = g.member6100[g.member6099 + 1];
        var h = g.member6100[g.member6099 + 2];
        if (e === -1) {
            throw new Error('1030 ');
        }
        var d = a.getConfigType(Js5ConfigGroup.ENUMTYPE.member1204, e);
        if (d === NULL) {
            g.member6099 += 3;
            return true;
        }
        if (d.getOutputType().serialID !== i) {
            throw new Error('1031 ');
        }
        g.member6100[g.member6099++] = d.member9453(h) ? 1 : 0;
    };
    Class421.member5557.member867 = function (g) {
        var e = g.member6100[--g.member6099];
        var h = g.member6142[--g.member6143];
        if (e === -1) {
            throw new Error('1032 ');
        }
        var d = a.getConfigType(Js5ConfigGroup.ENUMTYPE.member1204, e);
        if (d === NULL) {
            g.member6099++;
            g.member6143++;
            return true;
        }
        if (d.getOutputType() !== ScriptVarType.STRING) {
            throw new Error('1033 ');
        }
        g.member6100[g.member6099++] = d.member9453(h) ? 1 : 0;
    };
    Class421.member5558.member867 = function (g) {
        var e = g.member6100[--g.member6099];
        var d = a.getConfigType(Js5ConfigGroup.ENUMTYPE.member1204, e);
        if (d === NULL) {
            g.member6099++;
            return true;
        }
        g.member6100[g.member6099++] = d.getOutputCount();
    };
    Class421.member5559.member867 = function (h) {
        h.member6099 -= 3;
        var k = h.member6100[h.member6099];
        var g = h.member6100[h.member6099 + 1];
        var j = h.member6100[h.member6099 + 2];
        if (g == -1) {
            throw new Error('1034 ');
        }
        var e = a.getConfigType(Js5ConfigGroup.ENUMTYPE.member1204, g);
        if (e === NULL) {
            h.member6099 += 3;
            return true;
        }
        if (e.getOutputType().serialID !== k) {
            throw new Error('1035 ');
        }
        var i = e.member9455(j);
        var d = 0;
        if (i !== undefined) {
            d = i.length;
        }
        h.member6100[h.member6099++] = d;
    };
    Class421.member5560.member867 = function (h) {
        var g = h.member6100[--h.member6099];
        var j = h.member6142[--h.member6143];
        if (g == -1) {
            throw new Error('1036 ');
        }
        var e = a.getConfigType(Js5ConfigGroup.ENUMTYPE.member1204, g);
        if (e === NULL) {
            h.member6099++;
            h.member6143++;
            return true;
        }
        if (e.getOutputType() !== ScriptVarType.STRING) {
            throw new Error('1037 ');
        }
        var i = e.member9455(j);
        var d = 0;
        if (i !== undefined) {
            d = i.length;
        }
        h.member6100[h.member6099++] = d;
    };
    Class421.member5561.member867 = function (h) {
        h.member6099 -= 5;
        var m = h.member6100[h.member6099];
        var d = h.member6100[h.member6099 + 1];
        var g = h.member6100[h.member6099 + 2];
        var k = h.member6100[h.member6099 + 3];
        var i = h.member6100[h.member6099 + 4];
        if (g == -1) {
            throw new Error('1038 ');
        }
        var e = a.getConfigType(Js5ConfigGroup.ENUMTYPE.member1204, g);
        if (e === NULL) {
            h.member6099 += 5;
            return true;
        }
        if (e.getInputType().serialID !== d) {
            throw new Error('1039 ');
        }
        if (e.getOutputType().serialID !== m) {
            throw new Error('1040 ');
        }
        var j = e.member9455(k);
        if (i < 0 || j === undefined || j.length <= i) {
            throw new Error('1041 ' + i);
        }
        h.member6100[h.member6099++] = j[i];
    };
    Class421.member5562.member867 = function (h) {
        h.member6099 -= 3;
        var d = h.member6100[h.member6099];
        var g = h.member6100[h.member6099 + 1];
        var i = h.member6100[h.member6099 + 2];
        var k = h.member6142[--h.member6143];
        if (g == -1) {
            throw new Error('1042 ');
        }
        var e = a.getConfigType(Js5ConfigGroup.ENUMTYPE.member1204, g);
        if (e === NULL) {
            h.member6099 += 3;
            h.member6143++;
            return true;
        }
        if (e.getInputType().serialID !== d) {
            throw new Error('1043 ');
        }
        if (e.getOutputType() !== ScriptVarType.STRING) {
            throw new Error('1044 ');
        }
        var j = e.member9455(k);
        if (i < 0 || j === undefined || j.length <= i) {
            throw new Error('1045 ' + i);
        }
        h.member6100[h.member6099++] = j[i];
    };
    return b;
}();