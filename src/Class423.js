import { Class148 } from 'Class148.js';
import { Class95 } from 'Class95.js';
import { Class96 } from 'Class96.js';
import { Class80 } from 'Class80.js';
export var Class423 = function () {
    var g = {};
    var b;
    var d = {};
    var a = {
        member6105: { member1204: -1 },
        member6106: { member1204: -1 },
        member6107: { member1204: -1 },
        member6108: { member1204: -1 },
        member6109: {
            member1204: -1,
            member1288: member47
        },
        member6110: {
            member1204: -1,
            member1288: member47
        },
        otherLevel: {
            member1204: -1,
            member1288: member47
        },
        member325: {
            member1204: -1,
            member1288: member47
        },
        member6111: {
            member1204: -1,
            member1288: member47
        },
        member6112: {
            member1204: -1,
            member1288: member47
        },
        member6113: {
            member1204: -1,
            member1288: member47
        },
        member6114: {
            member1204: -1,
            member1288: member47
        }
    };
    g.member6115 = a;
    var i = false;
    var c = function (k) {
        b = k;
        Class148.member1500(e);
    };
    g.member25 = c;
    var h = function () {
        if (i) {
            return;
        }
        var k = b.member6116.member6117();
        if (k === member47) {
            return;
        }
        a.member6105.member1204 = k.member6118();
        a.member6106.member1204 = k.member6119();
        a.member6107.member1204 = k.member6120();
        a.member6108.member1204 = k.member6121();
        a.member6109.member1204 = k.member6122();
        a.member6110.member1204 = k.member6123();
        a.otherLevel.member1204 = k.member6124();
        a.member325.member1204 = k.member6125();
        a.member6111.member1204 = k.member6126();
        a.member6112.member1204 = k.member6127();
        a.member6113.member1204 = k.member6128();
        a.member6114.member1204 = k.member6129();
        i = true;
    };
    g.member486 = h;
    g.member6130 = function (k) {
        if (k.member1288 !== member47) {
            return k.member1288;
        }
        if (!i) {
            return member47;
        }
        k.member1288 = j(k.member1204);
        return k.member1288;
    };
    var e = function () {
        for (var n in a) {
            var m = a[n];
            if (m !== undefined && m.member1288 !== undefined && m.member1288 !== member47) {
                for (var k = 0; k < m.member1288.length; k++) {
                    m.member1288[k].member3606.member512();
                }
                m.member1288 = member47;
            }
        }
    };
    g.member6131 = function (q, m) {
        if (m === true && d[q] !== undefined) {
            return d[q];
        }
        var n = b.member995.getFile(Class95.member811, q, 0, Class96.member841);
        if (n === undefined) {
            throw new Error('1781 ' + q);
        }
        if (n === member47) {
            return member47;
        }
        var r = Class80.member606(n);
        var o = new Array(r.length);
        for (var k = 0; k < r.length; k++) {
            o[k] = {
                member3606: Class148.member1495(r[k].member600(), r[k].member556(), r[k].member557(), 0),
                width: r[k].member556(),
                height: r[k].member557()
            };
        }
        if (m === true) {
            d[q] = o;
        }
        return o;
    };
    var j = g.member6131;
    return g;
}();