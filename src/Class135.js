import { Class134 } from 'Class134.js';
import { Class76 } from 'Class76.js';
export var Class135 = function () {
    var a = function (e) {
        var t = {};
        var u;
        var b;
        var j = 2048;
        var c = 15000;
        var i;
        var s;
        t.getID = function () {
            return s;
        };
        var o = {};
        var g = {};
        var d = {};
        var m;
        t.member1277 = function () {
            return m;
        };
        t.member1278 = function () {
            return false;
        };
        t.member1276 = function () {
            return i.member1276();
        };
        t.member1279 = function (z) {
            var A = z.member1280;
            if (g[A] === undefined) {
                g[A] = new Array(0);
            } else if (g[A].length === 0 && d[A] !== undefined) {
                delete d[A];
            }
            g[A].push(z);
        };
        t.member1281 = function (A) {
            var B = A.member1280;
            if (--o[B].member1282 < 1) {
                v(B);
            }
            for (var z = 0; z < g[B].length; z++) {
                if (g[B][z] === A) {
                    g[B].splice(z, 1);
                    break;
                }
            }
            if (g[B].length === 0) {
                v(B);
            }
        };
        var k = function (z) {
            return o[z] !== undefined;
        };
        t.member1283 = k;
        t.member1284 = function (A, z) {
            return i.member1271(A, z);
        };
        t.member1285 = function (z) {
            return o[z];
        };
        t.member1286 = function () {
            var A = new Array(0);
            for (var z in o) {
                if (d[z] === undefined) {
                    A.push({
                        member1280: z,
                        member1287: o[z],
                        member1288: g[z]
                    });
                }
            }
            return A;
        };
        t.member1289 = function (A, z, B) {
            m.member569(A.x, A.y, A.w, A.member1272, false, new Uint8Array(B.member546));
            o[z] = {
                member1290: A.x,
                member1291: A.y,
                member1292: A.w,
                member1293: A.member1272,
                member493: (A.x + B.member1294) / j,
                member495: (A.x + A.w - B.member1294) / j,
                member494: (A.y + B.member1294) / j,
                member496: (A.y + A.member1272 - B.member1294) / j,
                member1295: B.member1295,
                member1294: B.member1294,
                member1296: A.id
            };
        };
        var v = function (z) {
            d[z] = Date.now() + c;
        };
        var h = function (A) {
            var z = o[A];
            i.member1273(z.member1296);
            delete o[A];
        };
        t.member1297 = function () {
            var B = new Array(0);
            var z = new Array(0);
            for (var A in o) {
                if (d[A] !== undefined) {
                    B.push(o[A].member1296);
                } else {
                    z.push(o[A].member1296);
                }
            }
            return {
                available: i.member1274(),
                member1298: i.member1275(z),
                member1299: i.member1275(B)
            };
        };
        t.member487 = function (z) {
            for (var A in d) {
                if (d[A] < z) {
                    h(A);
                    delete d[A];
                }
            }
        };
        var r = function () {
        };
        var n = function () {
            return m.member558();
        };
        t.member558 = n;
        var y = function () {
            i = Class134({
                width: j,
                height: j
            });
        };
        t.member512 = function () {
            m.member512();
        };
        if (e.member433 !== undefined && e.member1300 !== undefined && e.id !== undefined) {
            u = e.member433;
            b = e.member1300;
            s = e.id;
            y();
            var x = j * j;
            var q = new Uint32Array(x);
            m = Class76(u, j, j, q.buffer, false, true, true, false);
            m.member563();
        } else {
            throw new Error('1562 ');
        }
        e = undefined;
        return t;
    };
    return a;
}();