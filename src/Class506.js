import { Class421 } from 'Class421.js';
export var Class506 = function () {
    var b = {};
    var a;
    var d;
    var c = function (g, e) {
        a = g;
        d = e;
    };
    b.member25 = c;
    Class421.member5572.member867 = function (e) {
        e.member6100[e.member6099++] = d.member8285() ? d.member8286() : 0;
    };
    Class421.member5571.member867 = function (e) {
        e.member6142[e.member6143++] = d.member8285() ? d.member8287() : '';
    };
    Class421.member5576.member867 = function (e) {
        e.member6100[e.member6099++] = d.member8285() ? d.member8288() : -1;
    };
    Class421.member5583.member867 = function (e) {
        e.member6142[e.member6143++] = d.member8285() ? d.member8289() : '';
    };
    Class421.member5577.member867 = function (e) {
        e.member6100[e.member6099++] = d.member8285() ? d.member8290() : -1;
    };
    Class421.member5573.member867 = function (g) {
        var e = g.member6100[--g.member6099];
        if (d.member8285() && e >= 0 && e < d.member8286()) {
            g.member6142[g.member6143++] = d.member8291()[e].member3009();
        } else {
            g.member6142[g.member6143++] = '';
        }
    };
    Class421.member5590.member867 = function (g) {
        var e = g.member6100[--g.member6099];
        if (d.member8285() && e >= 0 && e < d.member8286()) {
            g.member6142[g.member6143++] = d.member8291()[e].member3009();
        } else {
            g.member6142[g.member6143++] = '';
        }
    };
    Class421.member5575.member867 = function (g) {
        var e = g.member6100[--g.member6099];
        if (d.member8285() && e >= 0 && e < d.member8286()) {
            g.member6100[g.member6099++] = d.member8291()[e].member3016();
        } else {
            g.member6100[g.member6099++] = 0;
        }
    };
    Class421.member5574.member867 = function (g) {
        var e = g.member6100[--g.member6099];
        if (d.member8285() && e >= 0 && e < d.member8286()) {
            g.member6100[g.member6099++] = d.member8291()[e].member4085();
        } else {
            g.member6100[g.member6099++] = 0;
        }
    };
    Class421.member5584.member867 = function (g) {
        var e = g.member6100[--g.member6099];
        if (d.member8285() && e >= 0 && e < d.member8286()) {
            g.member6142[g.member6143++] = d.member8291()[e].member8292();
        } else {
            g.member6142[g.member6143++] = '';
        }
    };
    Class421.member5582.member867 = function (g) {
        var e = g.member6100[--g.member6099];
        if (d.member8285() && e >= 0 && e < d.member8286() && d.member8291()[e].member3009() === a.member7135().member3009()) {
            g.member6100[g.member6099++] = 1;
        } else {
            g.member6100[g.member6099++] = 0;
        }
    };
    Class421.member5215.member867 = function (g) {
        var e = g.member6142[--g.member6143];
        d.member8293(e);
    };
    Class421.member5214.member867 = function (e) {
        var g = e.member6142[--e.member6143];
        d.member8294(g);
    };
    Class421.member5216.member867 = function (e) {
        d.member8295();
    };
    return b;
}();