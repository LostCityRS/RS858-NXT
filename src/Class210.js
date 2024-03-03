import { Class140 } from 'Class140.js';
import { Class41 } from 'Class41.js';
import { Class121 } from 'Class121.js';
import { Class188 } from 'Class188.js';
import { Class32 } from 'Class32.js';
import { Class198 } from 'Class198.js';
import { Class170 } from 'Class170.js';
import { Class86 } from 'Class86.js';
export var Class210 = function () {
    var d = {};
    var c = Class140.create();
    var b = Class41.create();
    var a = new Float32Array([
        0,
        1,
        0
    ]);
    var e = function (g) {
        this.member2502;
        this.member2503;
        this.member2504 = Class121.member778;
        this.member2505(g);
    };
    e.prototype.member2505 = function (j) {
        this.member2504 = j.member609();
        var r = j.member608();
        this.member2502 = new Array(r);
        for (var k = 0; k < r; k++) {
            var t = this.member2502[k] = {};
            t.member2506 = j.member1073();
            t.level = j.member609();
            t.member2507 = j.member609();
            t.member2508 = j.member609();
            t.member2509 = j.member609();
            t.member2510 = j.member1071();
            t.member2511 = j.member1071();
            t.member2512 = j.member1071();
            t.member2513 = j.member1071();
            t.member2514 = j.member608();
            t.member2515 = j.member608();
            t.member2516 = j.g3();
            t.member2517 = j.g3();
            t.member2241 = j.member608();
            t.member2242 = j.member608();
            t.member2518 = j.member608();
            t.member2519 = j.member609();
            t.member2520 = j.member609();
            t.member2521 = j.member609() === 1;
            t.member2522 = !t.member2521;
            t.member2523 = j.member1070();
            if (t.member2523 === -1) {
                t.member2523 = undefined;
            }
            t.member2524 = j.member609() === 1;
            t.member2525 = j.member609() === 1;
            t.member2526 = j.member609() === 1;
            t.member2527 = j.member609() === 1;
            t.member2528 = j.member609() === 1;
            t.member2529 = j.member609();
            t.member2530 = j.member609();
            t.member2531 = j.member1071();
            t.member2532 = j.member609() === 1;
            if (j.member609() === 1) {
                t.member2533 = {};
                t.member2533.member2534 = new Array(j.member609());
                var q = j.member609();
                for (var s = 0; s < t.member2533.member2534.length; s++) {
                    t.member2533.member2534[s] = new Int32Array(q);
                    for (var g = 0; g < q; g++) {
                        t.member2533.member2534[s][g] = j.member1071();
                    }
                }
            }
            if (j.member609() === 1) {
                if (t.member2533 === undefined) {
                    t.member2533 = {};
                }
                t.member2533.member2371 = new Array(j.member609());
                var q = j.member609();
                for (var s = 0; s < t.member2533.member2371.length; s++) {
                    t.member2533.member2371[s] = new Int32Array(q);
                    for (var g = 0; g < q; g++) {
                        t.member2533.member2371[s][g] = j.member1071();
                    }
                }
            }
            t.member2535 = j.member608();
            t.member2536 = j.member609() === 1;
            var n = j.member609();
            if (n > 0) {
                t.member2537 = new Array(n);
                for (var i = 0; i < n; i++) {
                    t.member2537[i] = j.member608();
                }
            }
            t.member2538 = j.member608();
            t.member2539 = j.member608();
            t.member2540 = j.member608();
            t.member2541 = j.member609();
            t.member2542 = j.member608();
            t.member2543 = j.member608();
            t.member2544 = j.member608();
            t.member2545 = j.member609();
            t.member2546 = j.member608();
            t.member2547 = j.member608();
            t.member2548 = j.member320();
            var m = j.member609();
            if (m > 0) {
                t.member2549 = new Int32Array(m);
                for (var h = 0; h < m; h++) {
                    t.member2549[h] = j.member608();
                }
                t.member2550 = j.g3();
                t.member2551 = j.g3();
                t.member2552 = j.member609();
                t.member2553 = j.member609();
                t.member2554 = j.member608();
                t.member2555 = j.member608();
                t.member2556 = j.member320();
            }
        }
        var o = j.member608();
        this.member2503 = new Array(o);
        for (var k = 0; k < o; k++) {
            var u = j.member1073();
            this.member2503[u] = Class188(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, j);
        }
        if (false) {
        } else {
            this.name = '';
        }
    };
    e.prototype.member2557 = function (i, g, h) {
    };
    e.prototype.member2558 = function (h, g) {
    };
    e.prototype.member78 = function (h, g) {
        return true;
    };
    e.prototype.member2559 = function (g) {
        return g.member2519 | (g.member2527 ? 1 : 0) << 8 | g.member2506 << 9;
    };
    e.prototype.member2560 = function (F) {
        var h = new Array(0);
        var D = new Array(0);
        for (var E = 0; E < this.member2502.length; E++) {
            var g = this.member2502[E];
            var x = this.member2559(g);
            var y = this.member2503[x];
            if (y === undefined) {
                throw new Error('1784 ');
            }
            var n = y.member2097().member1527();
            var i = y.member2097().member1528();
            var C = 0;
            var o = false;
            var q = y.member2099();
            for (var v = 0; v < q.length; v++) {
                if (q[v].member1937) {
                    o = true;
                }
                C += q[v].member1568;
            }
            g.member2561 = true;
            if (g.member2525) {
                D.push(g);
                g.member2561 = false;
            }
            var r = false;
            for (var m = 0; m < h.length; m++) {
                var s = h[m];
                if (n !== -1 && s.member1518 !== -1 && n !== s.member1518) {
                    continue;
                }
                if (i !== -1 && s.member1519 !== -1 && i !== s.member1519) {
                    continue;
                }
                if (g.member2526 !== s.member2526) {
                    continue;
                }
                if (g.member2522 !== s.member2522) {
                    continue;
                }
                if (g.member2537 !== undefined) {
                    var B = new Array(0);
                    member2562:
                        for (var t = 0; t < g.member2537.length; t++) {
                            if (s.member2537 !== undefined) {
                                for (var k = 0; k < s.member2537.length; k++) {
                                    if (s.member2537[k] === g.member2537[t]) {
                                        continue member2562;
                                    }
                                }
                            }
                            B.push(g.member2537[t]);
                        }
                    if (B.length > 0) {
                        if (s.member2537 !== undefined && B.length > Class32.member310 - s.member2537.length) {
                            continue;
                        }
                        for (var u = 0; u < B.length; u++) {
                            if (s.member2537 === undefined) {
                                s.member2537 = new Array(1);
                                s.member2537[0] = B[u];
                            } else {
                                s.member2537.push(B[u]);
                            }
                        }
                    }
                }
                if ((C + s.member1568) * 3 > 65535) {
                    continue;
                }
                s.member1568 += C;
                if (s.member1518 === -1) {
                    s.member1518 = n;
                }
                if (s.member1519 === -1) {
                    s.member1519 = i;
                }
                s.member2563.push(g);
                this.member2564(g, s.member2565, s.member2566);
                r = true;
                break;
            }
            if (!r) {
                var A = new Array(0);
                var z = new Array(0);
                this.member2564(g, A, z);
                var j = {
                    level: g.level,
                    member2507: g.member2507,
                    member2523: g.member2523,
                    member1518: n,
                    member1519: i,
                    member2567: y.member2122(),
                    member2568: y.member2121(),
                    member2526: g.member2526,
                    member2522: g.member2522,
                    member2537: g.member2537,
                    member1568: C,
                    member2563: [g],
                    member2565: A,
                    member2566: z,
                    member2569: g.member2524 ? 1 : 0,
                    member2570: g.member2561 ? 0 : 1
                };
                h.push(j);
            }
        }
        this.member2571(h, F);
        this.member2572(D, F);
    };
    e.prototype.member2564 = function (h, i, k) {
        if (h.member2540 >= 0) {
            var j = Class41.create();
            j[0] = h.member2516;
            j[1] = h.member2511;
            j[2] = h.member2517;
            var m = {
                member2573: h.member2540,
                member2574: j,
                member2538: h.member2538,
                member2539: h.member2539,
                member2542: h.member2542,
                member2543: h.member2543,
                member2544: h.member2544,
                member2575: h.member2541,
                member2576: h.member2545,
                member2577: h.member2546,
                member2578: h.member2547,
                member2579: h.member2548
            };
            i.push(m);
        }
        if (h.member2549 !== undefined && h.member2549.length > 0) {
            var j = Class41.create();
            j[0] = h.member2516;
            j[1] = h.member2511;
            j[2] = h.member2517;
            var g = {
                member2549: h.member2549,
                member2550: h.member2550,
                member2551: h.member2551,
                member2574: j,
                member2538: h.member2538,
                member2539: h.member2539,
                member2542: h.member2542,
                member2543: h.member2543,
                member2544: h.member2544,
                member2575: h.member2541,
                member2576: h.member2553,
                member2577: h.member2554,
                member2578: h.member2555,
                member2579: h.member2556
            };
            k.push(g);
        }
    };
    e.prototype.member2571 = function (j, E) {
        var F = E.member1047();
        E.member607(F + 2);
        var k = 0;
        for (var m = 0; m < j.length; m++) {
            var v = j[m];
            var B = new Array(v.member2563.length);
            var i = new Array(v.member2563.length);
            var s = 0;
            for (var D = 0; D < v.member2563.length; D++) {
                var g = v.member2563[D];
                if (g.member2528) {
                    B.length--;
                    i.length--;
                    s++;
                    continue;
                }
                var A = this.member2503[this.member2559(g)];
                var h = g.level + 1;
                var q = h | g.member2508 << 3 | g.member2509 << 9 | g.member2520 << 15 | g.member2519 << 17 | (g.inRemoveRoofArea ? 1 : 0) << 22 | (g.member2561 ? 1 : 0) << 23;
                var C = Class188(undefined, undefined, undefined, undefined, A, undefined, undefined, q);
                Class198.member2361(g.member2519, g.member2520, g.member2535, g.member2536, d);
                if (d.member2362 !== g.member2520 * Math.PI / 2) {
                    C.rotate(Class140.member1353(a, d.member2362, c), true);
                } else if (g.member2520 !== 0) {
                    C.member1668(g.member2520, true);
                }
                if (g.member2532 === false && g.member2530 !== Class170.member1852 && g.member2533 !== undefined) {
                    this.member2580(g, C, 0);
                }
                b[0] = g.member2510 + d.member2363;
                b[1] = g.member2511 + g.member2512;
                b[2] = g.member2513 + d.member2364;
                C.translate(b);
                B[D - s] = C;
                i[D - s] = {
                    member2079: q,
                    level: g.level,
                    member2507: g.member2507,
                    member2523: g.member2523,
                    member2518: g.member2518,
                    member2514: g.member2514,
                    member2515: g.member2515,
                    member1794: C.member2098().member681(),
                    member2581: Class41.create(b),
                    member2243: g.member2241 / Class86.member718,
                    member2244: g.member2242 / Class86.member718
                };
                if (g.member2524) {
                    i[D - s].member2524 = true;
                    i[D - s].member2506 = g.member2506;
                    i[D - s].member2519 = g.member2519;
                    i[D - s].member2520 = g.member2520;
                    i[D - s].member2522 = g.member2522;
                }
                if (!g.member2561) {
                    i[D - s].member2582 = true;
                }
            }
            if (B.length === 0) {
                continue;
            }
            var r = Class188(undefined, undefined, undefined, undefined, undefined, B);
            E.member1051(r.member2122() ? 1 : 0);
            E.member1051(r.member2121() ? 1 : 0);
            E.member1051(v.member2526 ? 1 : 0);
            E.member1051(v.member2522 ? 1 : 0);
            if (v.member2537 !== undefined) {
                E.member1054(v.member2537.length);
                for (var n = 0; n < v.member2537.length; n++) {
                    E.member1054(v.member2537[n]);
                }
            } else {
                E.member1054(0);
            }
            E.member1054(v.member2565.length);
            for (var x = 0; x < v.member2565.length; x++) {
                var o = v.member2565[x];
                E.member1054(o.member2573);
                E.member1055(o.member2574[0]);
                E.member1055(o.member2574[1]);
                E.member1055(o.member2574[2]);
                E.member1054(o.member2538);
                E.member1054(o.member2539);
                E.member1054(o.member2542);
                E.member1054(o.member2543);
                E.member1054(o.member2544);
                E.member1051(o.member2575);
                E.member1051(o.member2576);
                E.member1054(o.member2577);
                E.member1054(o.member2578);
                E.member1063(o.member2579);
            }
            E.member1054(v.member2566.length);
            for (var x = 0; x < v.member2566.length; x++) {
                var o = v.member2566[x];
                E.member1051(o.member2549.length);
                for (var u = 0; u < o.member2549.length; u++) {
                    E.member1054(o.member2549[u]);
                }
                E.member1055(o.member2550);
                E.member1055(o.member2551);
                E.member1055(o.member2574[0]);
                E.member1055(o.member2574[1]);
                E.member1055(o.member2574[2]);
                E.member1054(o.member2538);
                E.member1054(o.member2539);
                E.member1054(o.member2542);
                E.member1054(o.member2543);
                E.member1054(o.member2544);
                E.member1051(o.member2575);
                E.member1051(o.member2576);
                E.member1054(o.member2577);
                E.member1054(o.member2578);
                E.member1063(o.member2579);
            }
            E.member1054(i.length);
            for (var y = 0; y < i.length; y++) {
                var t = i[y];
                E.member1056(t.member2079);
                E.member1051(t.level);
                E.member1051(t.member2507);
                E.member1051(t.member2523 === undefined ? -1 : t.member2523);
                E.member1054(t.member2518);
                E.member1054(t.member2514);
                E.member1054(t.member2515);
                t.member1794.member1318(E);
                E.member1054(t.member2581[0]);
                E.member1054(t.member2581[1]);
                E.member1054(t.member2581[2]);
                E.member1051(t.member2243);
                E.member1051(t.member2244);
                if (t.member2524) {
                    E.member1051(1);
                    E.member1056(t.member2506);
                    E.member1051(t.member2519);
                    E.member1051(t.member2520);
                    E.member1051(t.member2522 ? 1 : 0);
                } else {
                    E.member1051(0);
                }
                if (t.member2582) {
                    E.member1051(1);
                } else {
                    E.member1051(0);
                }
            }
            r.member1318(E);
            k++;
            for (var D = 0; D < B.length; D++) {
                B[D].member512();
            }
            r.member512();
        }
        var z = E.member1047();
        E.member607(F);
        E.member1054(k);
        E.member607(z);
    };
    e.prototype.member2572 = function (j, k) {
        k.member1054(j.length);
        for (var g = 0; g < j.length; g++) {
            var i = j[g];
            var m = this.member2503[this.member2559(i)];
            m = Class188(undefined, undefined, undefined, undefined, m);
            if (i.member2532 === false && i.member2530 !== Class170.member1852 && i.member2533 !== undefined) {
                this.member2580(i, m, i.member2520);
            }
            k.member1051(i.level);
            k.member1051(i.member2523 === undefined ? -1 : i.member2523);
            k.member1056(i.member2506);
            k.member1051(i.member2522 ? 1 : 0);
            k.member1051(i.member2519);
            k.member1051(i.member2520);
            k.member1051(i.member2527 ? 1 : 0);
            k.member1054(i.member2535);
            k.member1051(i.member2536 ? 1 : 0);
            k.member1054(i.member2514);
            k.member1054(i.member2515);
            k.member1051(i.member2529);
            if (i.member2537 !== undefined) {
                k.member1051(i.member2537.length);
                for (var h = 0; h < i.member2537.length; h++) {
                    k.member1054(i.member2537[h]);
                }
            } else {
                k.member1051(0);
            }
            m.member1318(k);
            m.member512();
        }
    };
    e.prototype.member2580 = function (q, n, m) {
        var j = function (z, y) {
            var D = q.member2241;
            var v = q.member2242;
            if (m === 1) {
                var F = z;
                z = y;
                y = -F;
            } else if (m === 2) {
                z = -z;
                y = -y;
            } else if (m === 3) {
                var F = z;
                z = -y;
                y = F;
            }
            z += D / 2;
            if (z < 0) {
                z = 0;
            } else if (z > D) {
                z = D;
            }
            y += v / 2;
            if (y < 0) {
                y = 0;
            } else if (y > v) {
                y = v;
            }
            var C = 512;
            var s = Math.floor(z / C);
            var E = Math.floor(y / C);
            var x = z & C - 1;
            var u = y & C - 1;
            if (x === 0 && u === 0) {
                return q.member2533.member2534[s][E] - q.member2511;
            }
            var B, A;
            if (x === 0) {
                B = q.member2533.member2534[s][E];
                A = q.member2533.member2534[s][E + 1];
                return (B * (C - u) + A * u) / C - q.member2511;
            } else if (u === 0) {
                return (q.member2533.member2534[s][E] * (C - x) + q.member2533.member2534[s + 1][E] * x) / C - q.member2511;
            } else {
                B = (q.member2533.member2534[s][E] * (C - x) + q.member2533.member2534[s + 1][E] * x) / C;
                A = (q.member2533.member2534[s][E + 1] * (C - x) + q.member2533.member2534[s + 1][E + 1] * x) / C;
                return (B * (C - u) + A * u) / C - q.member2511;
            }
        };
        var g = function (z, y) {
            if (q.member2533.member2371 === undefined) {
                return undefined;
            }
            var D = q.member2241;
            var v = q.member2242;
            if (m === 1) {
                var F = z;
                z = y;
                y = -F;
            } else if (m === 2) {
                z = -z;
                y = -y;
            } else if (m === 3) {
                var F = z;
                z = -y;
                y = F;
            }
            z += D / 2;
            if (z < 0) {
                z = 0;
            } else if (z > D) {
                z = D;
            }
            y += v / 2;
            if (y < 0) {
                y = 0;
            } else if (y > v) {
                y = v;
            }
            var C = 512;
            var s = Math.floor(z / C);
            var E = Math.floor(y / C);
            var x = z & C - 1;
            var u = y & C - 1;
            if (x === 0 && u === 0) {
                return q.member2533.member2371[s][E] - q.member2511;
            }
            var B, A;
            if (x === 0) {
                B = q.member2533.member2371[s][E];
                A = q.member2533.member2371[s][E + 1];
                return (B * (C - u) + A * u) / C - q.member2511;
            } else if (u === 0) {
                return (q.member2533.member2371[s][E] * (C - x) + q.member2533.member2371[s + 1][E] * x) / C - q.member2511;
            } else {
                B = (q.member2533.member2371[s][E] * (C - x) + q.member2533.member2371[s + 1][E] * x) / C;
                A = (q.member2533.member2371[s][E + 1] * (C - x) + q.member2533.member2371[s + 1][E + 1] * x) / C;
                return (B * (C - u) + A * u) / C - q.member2511;
            }
        };
        if (q.member2530 === Class170.member1855) {
            var i = (q.member2531 & 255) * 4;
            var h = (q.member2531 >> 8 & 255) * 4;
            var r = (q.member2531 >> 16 & 255) << 2;
            var o = (q.member2531 >> 24 & 255) << 2;
            var k = n.member2120(i, h, r, o, j);
            if (k !== undefined) {
                n.transform(k);
            }
        } else {
            n.member1725(q.member2530, q.member2531, j, g);
        }
    };
    e.prototype.tidyup = function () {
        for (var g in this.member2503) {
            var h = this.member2503[g];
            if (h !== undefined) {
                h.member512();
            }
        }
    };
    return function (g) {
        return new e(g);
    };
}();