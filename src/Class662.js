import { Class421 } from 'Class421.js';
import { Class270 } from 'Class270.js';
import { Class453 } from 'Class453.js';
import { Class501 } from 'Class501.js';
export var Class662 = function () {
    var b = {};
    var c;
    var a;
    var d = function (e) {
        c = e.member8234;
        a = e;
    };
    b.member25 = d;
    Class421.member5330.member867 = function (e) {
        if (!c.member8235()) {
            c.member9708();
        }
    };
    Class421.member5820.member867 = function (e) {
        e.member6100[e.member6099++] = c.member9709();
        e.member6100[e.member6099++] = c.member9710();
        e.member6100[e.member6099++] = c.member9711();
        c.member9712(Class270.member3144);
        c.member9713(-1);
        c.member9714(-1);
    };
    Class421.member5814.member867 = function (e) {
        e.member6100[e.member6099++] = c.member9715();
    };
    Class421.member5823.member867 = function (e) {
        e.member6100[e.member6099++] = c.member9716();
    };
    Class421.member5806.member867 = function (e) {
        e.member6100[e.member6099++] = c.member9717();
    };
    Class421.member5807.member867 = function (e) {
        e.member6100[e.member6099++] = c.member9718();
    };
    Class421.member5322.member867 = function (e) {
        e.member6143 -= 3;
        var g = e.member6142[e.member6143];
        var j = e.member6142[e.member6143 + 1];
        var h = e.member6142[e.member6143 + 2];
        var i = e.member6100[--e.member6099] === 1;
        c.member9719(g, j, h, i);
    };
    Class421.member5338.member867 = function (e) {
        e.member6143 -= 1;
        var g = e.member6142[e.member6143];
        var h = e.member6100[--e.member6099] === 1;
        c.member9720(g, h);
    };
    Class421.member5815.member867 = function (e) {
        e.member6100[e.member6099++] = c.member9717();
    };
    Class421.member5339.member867 = function (e) {
        e.member6143 -= 3;
        var g = e.member6142[e.member6143];
        var j = e.member6142[e.member6143 + 1];
        var h = e.member6142[e.member6143 + 2];
        var i = e.member6100[--e.member6099] === 1;
        c.member9721(g, j, h, i);
    };
    Class421.member5340.member867 = function (e) {
        c.member9722(false);
    };
    Class421.member5816.member867 = function (e) {
        e.member6100[e.member6099++] = c.member9723();
    };
    Class421.member5808.member867 = function (e) {
        e.member6100[e.member6099++] = member9724.member9725();
    };
    Class421.member5342.member867 = function (e) {
        c.member9726();
    };
    Class421.member5329.member867 = function (e) {
        member9724.member9727();
    };
    Class421.member5821.member867 = function (e) {
        e.member6100[e.member6099++] = c.member8235() ? 1 : 0;
    };
    Class421.member5822.member867 = function (e) {
        e.member6100[e.member6099++] = c.member9728();
    };
    Class421.member5343.member867 = function (e) {
        e.member6099 -= 2;
        var g = e.member6100[e.member6099];
        var h = e.member6142[--e.member6143];
        var i = e.member6100[e.member6099 + 1] === 1;
        c.member9729(g, h, i);
    };
    Class421.member5344.member867 = function (e) {
        e.member6099 -= 2;
        var g = e.member6100[e.member6099];
        var h = e.member6142[--e.member6143];
        var i = e.member6100[e.member6099 + 1] === 1;
        c.member9730(g, h, i);
    };
    Class421.member5331.member867 = function (h) {
        if (a.member8233() !== Class453.member7199 || c.member8235()) {
            return;
        }
        var g = a.member8252.member8253();
        var e = g.member8260(Class501.member8162);
        g.member8261(e);
    };
    Class421.member5536.member867 = function (e) {
        e.member6100[e.member6099++] = a.clientParameters.affiliate.value;
    };
    Class421.member5825.member867 = function (g) {
        var h = g.member6142[--g.member6143];
        var e = a.member9731.member9732(h);
        if (e === a.member9731.STAGE_WAITING) {
            g.member6143++;
            return true;
        }
        g.member6100[g.member6099++] = e;
    };
    return b;
}();