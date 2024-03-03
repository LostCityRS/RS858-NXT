import { Class421 } from 'Class421.js';
import { BaseVarType } from 'Class462.js';
import { VarDomainType } from 'Class465.js';
import { Class468 } from 'Class468.js';
import { Class464 } from 'Class464.js';
import { ScriptVarType } from 'Class463.js';
export var Class646 = function () {
    var b = {};
    var a;
    b.member25 = function (c) {
        a = c;
    };
    Class421.member4870.member867 = function (c) {
        c.member6100[c.member6099++] = c.member7383[c.member7370];
    };
    Class421.member4873.member867 = function (e) {
        var g = e.member7384[e.member7370];
        var i;
        if (e.member7383[e.member7370] === 0) {
            i = e.member8888[g.member9621().serialID];
        } else {
            i = e.member8889[g.member9621().serialID];
        }
        var d = g.member8041().baseVarType;
        if (d === BaseVarType.INTEGER) {
            e.member6100[e.member6099++] = i.getVarInt(g);
        } else if (d === BaseVarType.LONG) {
            var h = i.getVarInt(g);
            e.member8877[e.member8878++] = i.getVarInt(g);
        } else if (d === BaseVarType.STRING) {
            var c = i.getVarInt(g);
            if (c === null) {
                c = 'null';
            }
            e.member6142[e.member6143++] = c;
        } else {
            throw new Error('1425 ');
        }
    };
    Class421.member4874.member867 = function (d) {
        var e = d.member7384[d.member7370];
        var g;
        if (d.member7383[d.member7370] === 0) {
            g = d.member8888[e.member9621().serialID];
        } else {
            g = d.member8889[e.member9621().serialID];
        }
        var c = e.member8041().baseVarType;
        if (c === BaseVarType.INTEGER) {
            if (e.member9621() === VarDomainType.CLIENT) {
                a.delayedStateChange.member9622(false, e);
            }
            g.member2945(e, d.member6100[--d.member6099]);
        } else if (c === BaseVarType.LONG) {
            g.member2945(e, d.member8877[--d.member8878]);
        } else if (c === BaseVarType.STRING) {
            if (e.member9621() === VarDomainType.CLIENT) {
                a.delayedStateChange.member9623(false, e);
            }
            g.member2945(e, d.member6142[--d.member6143]);
        } else {
            throw new Error('1426 ');
        }
    };
    Class421.member4877.member867 = function (c) {
        c.member6142[c.member6143++] = c.member7384[c.member7370];
    };
    Class421.member4878.member867 = function (c) {
        c.member7370 += c.member7383[c.member7370];
    };
    Class421.member4879.member867 = function (c) {
        c.member6099 -= 2;
        if (c.member6100[c.member6099] !== c.member6100[c.member6099 + 1]) {
            c.member7370 += c.member7383[c.member7370];
        }
    };
    Class421.member4880.member867 = function (c) {
        c.member6099 -= 2;
        if (c.member6100[c.member6099] === c.member6100[c.member6099 + 1]) {
            c.member7370 += c.member7383[c.member7370];
        }
    };
    Class421.member4881.member867 = function (c) {
        c.member6099 -= 2;
        if (c.member6100[c.member6099] < c.member6100[c.member6099 + 1]) {
            c.member7370 += c.member7383[c.member7370];
        }
    };
    Class421.member4882.member867 = function (c) {
        c.member6099 -= 2;
        if (c.member6100[c.member6099] > c.member6100[c.member6099 + 1]) {
            c.member7370 += c.member7383[c.member7370];
        }
    };
    Class421.member5177.member867 = function (c) {
        if (c.member8879 === 0) {
            return;
        }
        var d = c.member8880[--c.member8879];
        c.member7369 = d.member7369;
        c.member7382 = c.member7369.member7397();
        c.member7383 = c.member7369.member7398();
        c.member7384 = c.member7369.member7399();
        c.member7370 = d.member7370;
        c.member7371 = d.member7371;
        c.member7372 = d.member7372;
        c.member7373 = d.member7373;
    };
    Class421.member4875.member867 = function (c) {
        var d = c.member7384[c.member7370];
        var e;
        if (c.member7383[c.member7370] === 0) {
            e = c.member8888[d.member2949().member9621().serialID];
        } else {
            e = c.member8889[d.member2949().member9621().serialID];
        }
        c.member6100[c.member6099++] = e.getVarBit(d);
    };
    Class421.member4876.member867 = function (c) {
        var d = c.member7384[c.member7370];
        var e;
        if (c.member7383[c.member7370] === 0) {
            e = c.member8888[d.member2949().member9621().serialID];
        } else {
            e = c.member8889[d.member2949().member9621().serialID];
        }
        e.member2952(d, c.member6100[--c.member6099]);
    };
    Class421.member4883.member867 = function (c) {
        c.member6099 -= 2;
        if (c.member6100[c.member6099] <= c.member6100[c.member6099 + 1]) {
            c.member7370 += c.member7383[c.member7370];
        }
    };
    Class421.member4884.member867 = function (c) {
        c.member6099 -= 2;
        if (c.member6100[c.member6099] >= c.member6100[c.member6099 + 1]) {
            c.member7370 += c.member7383[c.member7370];
        }
    };
    Class421.member4885.member867 = function (c) {
        c.member6100[c.member6099++] = c.member7371[c.member7383[c.member7370]];
    };
    Class421.member4886.member867 = function (c) {
        c.member7371[c.member7383[c.member7370]] = c.member6100[--c.member6099];
    };
    Class421.member4887.member867 = function (c) {
        c.member6142[c.member6143++] = c.member7372[c.member7383[c.member7370]];
    };
    Class421.member4888.member867 = function (c) {
        c.member7372[c.member7383[c.member7370]] = c.member6142[--c.member6143];
    };
    Class421.member4889.member867 = function (g) {
        var e = g.member7383[g.member7370];
        g.member6143 -= e;
        var d = '';
        for (var c = 0; c < e; c++) {
            d = d + g.member6142[g.member6143 + c];
        }
        g.member6142[g.member6143++] = d;
    };
    Class421.member4890.member867 = function (c) {
        c.member6099--;
    };
    Class421.member4891.member867 = function (c) {
        c.member6143--;
    };
    Class421.member4892.member7395 = function (d, c) {
        Class468.member7430(c[d], false);
    };
    Class421.member4892.member867 = function (c) {
        var j = c.member7383[c.member7370];
        var o = Class468.getByID(j);
        if (o === undefined) {
            throw new Error('1427 ' + j);
            return;
        }
        if (o === null) {
            return true;
        }
        var d = new Array(o.member7400());
        var q = new Array(o.member7401());
        var h = new Array(o.member7402());
        var m = o.member7403();
        for (var g = 0; g < m; g++) {
            d[g] = c.member6100[c.member6099 - m + g];
        }
        var k = o.member7404();
        for (g = 0; g < k; g++) {
            q[g] = c.member6142[c.member6143 - k + g];
        }
        var i = o.member7405();
        for (g = 0; g < i; g++) {
            h[g] = c.member8877[c.member8878 - i + g];
        }
        if (c.member6099 < 0) {
            throw new Error('1428 ' + o.member6193());
        }
        if (c.member6143 < 0) {
            throw new Error('1429 ');
        }
        if (c.member8878 < 0) {
            throw new Error('1430 ');
        }
        c.member6099 -= m;
        c.member6143 -= k;
        c.member8878 -= i;
        var e = Class464();
        e.member7369 = c.member7369;
        e.member7370 = c.member7370;
        e.member7371 = c.member7371;
        e.member7372 = c.member7372;
        e.member7373 = c.member7373;
        if (c.member8879 >= c.member8880.length) {
            throw new Error('1431 ' + c.member8880.length + '1431 ');
        }
        c.member8880[c.member8879++] = e;
        c.member7369 = o;
        c.member7382 = o.member7397();
        c.member7383 = o.member7398();
        c.member7384 = o.member7399();
        c.member7370 = -1;
        c.member7371 = d;
        c.member7372 = q;
        c.member7373 = h;
    };
    Class421.member4893.member867 = function (d) {
        var g = d.member7383[d.member7370] >> 16;
        var e = d.member7383[d.member7370] & 65535;
        var c = d.member6100[--d.member6099];
        if (c < 0 || c > 5000) {
            throw new Error('1432 ' + c + '1432 ' + g);
        }
        d.arraySize[g] = c;
        var h = -1;
        if (e === ScriptVarType.INT.serialID) {
            h = 0;
        }
        for (var i = 0; i < c; i++) {
            d.arrayData[g][i] = h;
        }
    };
    Class421.member4894.member867 = function (c) {
        var e = c.member7383[c.member7370];
        var d = c.member6100[--c.member6099];
        if (d < 0 || d >= c.arraySize[e]) {
            throw new Error('1433 ' + d + '1433 ' + e);
        }
        c.member6100[c.member6099++] = c.arrayData[e][d];
    };
    Class421.member4895.member867 = function (c) {
        var e = c.member7383[c.member7370];
        c.member6099 -= 2;
        var d = c.member6100[c.member6099];
        if (d < 0 || d >= c.arraySize[e]) {
            throw new Error('1434 ' + d + '1434 ' + e);
        }
        c.arrayData[e][d] = c.member6100[c.member6099 + 1];
    };
    Class421.member4896.member867 = function (d) {
        var e = d.member7369.member7406()[d.member7383[d.member7370]];
        var c = e[d.member6100[--d.member6099]];
        if (c !== undefined) {
            d.member7370 += c;
        }
    };
    Class421.member4897.member867 = function (c) {
        c.member8877[c.member8878++] = c.member7384[c.member7370];
    };
    Class421.member4898.member867 = function (c) {
        c.member8878--;
    };
    Class421.member4899.member867 = function (c) {
        c.member8877[c.member8878++] = c.member7373[c.member7383[c.member7370]];
    };
    Class421.member4900.member867 = function (c) {
        c.member7373[c.member7383[c.member7370]] = c.member8877[--c.member8878];
    };
    Class421.member4901.member867 = function (c) {
        c.member8878 -= 2;
        if (c.member8877[c.member8878] != c.member8877[c.member8878 + 1]) {
            c.member7370 += c.member7383[c.member7370];
        }
    };
    Class421.member4902.member867 = function (c) {
        c.member8878 -= 2;
        if (c.member8877[c.member8878] == c.member8877[c.member8878 + 1]) {
            c.member7370 += c.member7383[c.member7370];
        }
    };
    Class421.member4903.member867 = function (c) {
        c.member8878 -= 2;
        if (c.member8877[c.member8878] < c.member8877[c.member8878 + 1]) {
            c.member7370 += c.member7383[c.member7370];
        }
    };
    Class421.member4904.member867 = function (c) {
        c.member8878 -= 2;
        if (c.member8877[c.member8878] > c.member8877[c.member8878 + 1]) {
            c.member7370 += c.member7383[c.member7370];
        }
    };
    Class421.member4905.member867 = function (c) {
        c.member8878 -= 2;
        if (c.member8877[c.member8878] <= c.member8877[c.member8878 + 1]) {
            c.member7370 += c.member7383[c.member7370];
        }
    };
    Class421.member4906.member867 = function (c) {
        c.member8878 -= 2;
        if (c.member8877[c.member8878] >= c.member8877[c.member8878 + 1]) {
            c.member7370 += c.member7383[c.member7370];
        }
    };
    Class421.member4907.member867 = function (c) {
        var e = c.member7383[c.member7370];
        var d = c.member6100[c.member6099 - 1];
        if (d < 0 || d >= c.arraySize[e]) {
            throw new Error('1435 ' + d + '1435 ' + e);
        }
        c.member6100[c.member6099++] = c.arrayData[e][d];
    };
    Class421.member4908.member867 = function (c) {
        var e = c.member7383[c.member7370];
        var d = c.member6100[--c.member6099];
        if (d < 0 || d >= c.arraySize[e]) {
            throw new Error('1436 ' + d + '1436 ' + e);
        }
        c.member6100[c.member6099++] = c.arrayData[e][d];
        c.member6100[c.member6099++] = d;
    };
    Class421.member4909.member867 = function (c) {
        var e = c.member7383[c.member7370];
        c.member6099 -= 2;
        var d = c.member6100[c.member6099];
        var g = c.member6100[c.member6099 + 1];
        if (d < 0 || d >= c.arraySize[e]) {
            throw new Error('1437 ' + d + '1437 ' + e);
        }
        c.arrayData[e][d] = g;
        c.member6100[c.member6099++] = g;
    };
    Class421.member4910.member867 = function (c) {
        if (c.member6100[--c.member6099] == 1) {
            c.member7370 += c.member7383[c.member7370];
        }
    };
    Class421.member4911.member867 = function (c) {
        if (c.member6100[--c.member6099] == 0) {
            c.member7370 += c.member7383[c.member7370];
        }
    };
    Class421.member5893.member867 = function (c) {
        c.member6100[c.member6099++] = a.member7887.member9624();
    };
    return b;
}();