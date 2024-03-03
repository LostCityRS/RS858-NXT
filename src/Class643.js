import { Class421 } from 'Class421.js';
import { Class642 } from 'Class642.js';
import { Class453 } from 'Class453.js';
import { Class501 } from 'Class501.js';
import { Class124 } from 'Class124.js';
export var Class643 = function () {
    var b = {};
    var a;
    var c = function (d) {
        a = d;
    };
    b.member25 = c;
    Class421.member5824.member867 = function (d) {
        if (a.clientParameters.member9619.value !== undefined) {
            d.member6142[d.member6143++] = a.clientParameters.member9619.value;
        } else {
            d.member6142[d.member6143++] = '';
        }
    };
    Class421.member5809.member867 = function (d) {
        d.member6100[d.member6099++] = a.member8559.member8247();
    };
    Class421.member5810.member867 = function (d) {
        var e = a.member8559.member8248();
        d.member6100[d.member6099++] = e;
    };
    Class421.member5813.member867 = function (d) {
        d.member6100[d.member6099++] = a.member8559.member8246();
    };
    Class421.member5332.member867 = function (e) {
        var d = e.member6142[--e.member6143];
        a.member8559.member8262(d);
    };
    Class421.member5336.member867 = function (d) {
        a.member8559.member8237();
    };
    Class421.member5335.member867 = function (d) {
        d.member6143 -= 3;
        d.member6099 -= 2;
        a.member8559.member8265(d.member6142[d.member6143], d.member6142[d.member6143 + 1], d.member6100[d.member6099], d.member6100[d.member6099 + 1] === 1, d.member6142[d.member6143 + 2]);
    };
    Class421.member5341.member867 = function (d) {
        a.member8559.member8232(true);
        a.member8559.member8257();
    };
    Class421.member5337.member867 = function (d) {
        a.member8559.member8266(d.member6100[--d.member6099]);
    };
    Class421.member5819.member867 = function (d) {
        d.member6100[d.member6099++] = a.member8559.member8231() ? 1 : 0;
    };
    Class421.member5333.member867 = function (d) {
        a.member8559.member8263(d.member6142[--d.member6143]);
    };
    Class421.member5334.member867 = function (d) {
        a.member8559.member8264();
    };
    Class421.member5812.member867 = function (e) {
        e.member6100[e.member6099++] = a.member8559.member8244();
        var d = a.member8559.member8245();
        e.member6142[e.member6143++] = d === undefined ? '' : d;
    };
    Class421.member5811.member867 = function (d) {
        d.member6100[d.member6099++] = a.member8559.member8241();
    };
    Class421.member5268.member867 = function (d) {
        Class642.member9618(Class642.member9608);
    };
    Class421.member5269.member867 = function (d) {
        Class642.member9618(Class642.member9609);
    };
    Class421.member5204.member867 = function (g) {
        var h = g.member6142[--g.member6143];
        if (a.member8233() !== Class453.member7199 && a.member8233() !== Class453.member7200) {
            return;
        }
        var e = a.member8252.member8253();
        var d = e.member8260(Class501.member8159);
        d.member2698.member1051(Class124.member1152(h));
        d.member2698.member1065(h);
        e.member8261(d);
    };
    Class421.member5205.member867 = function (g) {
        var i = g.member6142[--g.member6143];
        var h = g.member6142[--g.member6143];
        if (a.member8233() !== Class453.member7199 && a.member8233() !== Class453.member7200) {
            return;
        }
        var e = a.member8252.member8253();
        var d = e.member8260(Class501.member8160);
        d.member2698.member1054(Class124.member1152(i) + Class124.member1152(h));
        d.member2698.member1065(i);
        d.member2698.member1065(h);
        e.member8261(d);
    };
    Class421.member5206.member867 = function (j) {
        j.member6143 -= 1;
        j.member6099 -= 3;
        var k = j.member6142[j.member6143];
        var m = j.member6100[j.member6099] === 1;
        var e = j.member6100[j.member6099 + 1] === 1;
        var h = j.member6100[j.member6099 + 2] === 1;
        if (a.member8233() !== Class453.member7199 && a.member8233() !== Class453.member7200) {
            return;
        }
        var i = a.member8252.member8253();
        var g = i.member8260(Class501.member8161);
        g.member2698.member1054(Class124.member1152(k) + 1);
        g.member2698.member1065(k);
        var d = 0;
        if (m) {
            d |= 1;
        }
        if (e) {
            d |= 2;
        }
        if (h) {
            d |= 4;
        }
        g.member2698.member1051(d);
        i.member8261(g);
    };
    return b;
}();