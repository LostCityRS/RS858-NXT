import { Class421 } from 'Class421.js';
import { Class131 } from 'Class131.js';
export var Class658 = function () {
    var b = {};
    var a;
    var c = function (d) {
        a = d;
    };
    b.member25 = c;
    Class421.member5894.member867 = function (e) {
        var g = e.member6100[--e.member6099];
        var d = a.member2970.member3227(Class131.member1230.member1204, g);
        if (d === member47) {
            e.member6099++;
            return true;
        }
        if (d.member3637() === undefined) {
            e.member6142[e.member6143++] = '';
        } else {
            e.member6142[e.member6143++] = d.member3637();
        }
    };
    Class421.member5895.member867 = function (e) {
        var g = e.member6100[--e.member6099];
        var d = a.member2970.member3227(Class131.member1230.member1204, g);
        if (d === member47) {
            e.member6099++;
            return true;
        }
        e.member6100[e.member6099++] = d.member7027();
    };
    Class421.member5896.member867 = function (e) {
        var g = e.member6100[--e.member6099];
        var d = a.member2970.member3227(Class131.member1230.member1204, g);
        if (d === member47) {
            e.member6099++;
            return true;
        }
        e.member6100[e.member6099++] = d.member9338();
    };
    Class421.member5897.member867 = function (e) {
        var g = e.member6100[--e.member6099];
        var d = a.member2970.member3227(Class131.member1230.member1204, g);
        if (d === member47) {
            e.member6099++;
            return true;
        }
        e.member6100[e.member6099++] = d.member8472();
    };
    Class421.member5898.member867 = function (e) {
        e.member6099 -= 2;
        var g = e.member6100[e.member6099];
        var h = e.member6100[e.member6099 + 1];
        var i = a.member2970.member3227(Class131.member1215.member1204, h);
        var d = a.member2970.member3227(Class131.member1230.member1204, g);
        if (i === member47 || d === member47) {
            e.member6099 += 2;
            return true;
        }
        if (i.member6141()) {
            e.member6142[e.member6143++] = d.getParam(h, i.member6144());
        } else {
            e.member6100[e.member6099++] = d.getParam(h, i.member6145());
        }
    };
    return b;
}();