import { Class252 } from 'Class252.js';
import { Class41 } from 'Class41.js';
import { Class86 } from 'Class86.js';
import { Class95 } from 'Class95.js';
import { Class96 } from 'Class96.js';
import { Class93 } from 'Class93.js';
import { Class209 } from 'Class209.js';
import { Class188 } from 'Class188.js';
import { Class704 } from 'Class704.js';
import { Class443 } from 'Class443.js';
export var Class705 = function () {
    var a = 6;
    var b = 5;
    var d = Class252({});
    var c = function (h, e, j, i, g) {
        this.member2896;
        this.member625;
        this.member9935 = null;
        this.member9936 = null;
        this.member9937 = g;
        if (h !== undefined && e !== undefined && j !== undefined && i !== undefined) {
            this.member625 = h;
            this.member2896 = e;
            this.member9935 = j;
            this.member9936 = i;
        } else {
            throw new Error('1284 ');
        }
        this.name = 'null';
        this.member8376 = false;
        this.member8603 = null;
        this.member9938 = null;
        this.member8605 = null;
        this.member9939 = 0;
        this.member9940 = -1;
        this.member8611 = true;
        this.member9941 = false;
        this.member9942 = 1;
        this.member9943 = null;
        this.member9944 = null;
        this.member7996 = 0;
        this.member9945 = false;
        this.member9946 = 0;
        this.member9947 = false;
        this.member9948;
        this.member9329 = -1;
        this.params = null;
        this.member9949 = -1;
        this.member2615 = null;
        this.member2616 = null;
        this.member8617 = null;
        this.member8618 = null;
        this.member8619 = null;
        this.member8620 = null;
        this.member8621 = null;
        this.member8630 = 0;
        this.member8626 = 0, this.member8627 = 0;
        this.resize = null;
        this.member9950 = 2000;
        this.member9951 = Class41.create();
        this.member9952 = Class41.create();
        this.member9953 = -1;
        this.member9954 = -1;
        this.member9955 = -1;
        this.member9956 = undefined;
        this.member9957 = undefined;
        this.member9958 = -1;
        this.member9959 = -1;
        this.member9960 = -1;
        this.member9961 = -1;
        this.member9962 = -1;
        this.member9963 = -1;
        this.member9964 = -1;
        this.member9965 = -1;
        this.member9966 = 0;
        this.member9967 = 'null';
    };
    c.prototype.member444 = function () {
        return this.member625;
    };
    c.prototype.member9577 = function () {
        return this.member9935;
    };
    c.prototype.member9968 = function (e) {
        this.member9935 = e;
    };
    c.prototype.member9578 = function () {
        return this.member9936;
    };
    c.prototype.member9969 = function (e) {
        this.member9936 = e;
    };
    c.prototype.getName = function () {
        return this.name;
    };
    c.prototype.member9584 = function () {
        return this.member8376;
    };
    c.prototype.member8657 = function (e) {
        if (this.member8603 === null) {
            return -1;
        } else {
            return this.member8603[e];
        }
    };
    c.prototype.member9585 = function (e) {
        if (this.member9938 === null) {
            return -1;
        } else {
            return this.member9938[e];
        }
    };
    c.prototype.member8660 = function () {
        return this.member8605;
    };
    c.prototype.member9970 = function (e) {
        this.member8605 = e;
    };
    c.prototype.member7079 = function () {
        return this.member9939;
    };
    c.prototype.member9586 = function () {
        return this.member9940;
    };
    c.prototype.member9579 = function () {
        return this.member9942;
    };
    c.prototype.member3018 = function () {
        return this.member7996;
    };
    c.prototype.member3019 = function (e) {
        this.member7996 = e;
    };
    c.prototype.member9596 = function () {
        return this.member9945;
    };
    c.prototype.member9971 = function (e) {
        this.member9945 = e;
    };
    c.prototype.member9972 = function () {
        return this.member9946;
    };
    c.prototype.member9587 = function () {
        return this.member9947;
    };
    c.prototype.member9588 = function () {
        return this.member9948;
    };
    c.prototype.member8472 = function () {
        return this.member9329;
    };
    c.prototype.member4494 = function () {
        return this.member8611;
    };
    c.prototype.member9973 = function () {
        return this.member9941;
    };
    c.prototype.member9344 = function () {
        return this.params;
    };
    c.prototype.member9974 = function (e) {
        this.params = e;
    };
    c.prototype.member7607 = function () {
        return this.member2616;
    };
    c.prototype.member7661 = function () {
        return this.member8619;
    };
    c.prototype.member7608 = function () {
        return this.member8620;
    };
    c.prototype.member8600 = function () {
        return this.resize;
    };
    c.prototype.member7076 = function () {
        return this.member9950;
    };
    c.prototype.member7077 = function () {
        return this.member9951;
    };
    c.prototype.member7078 = function () {
        return this.member9952;
    };
    c.prototype.member9581 = function () {
        return this.member9953;
    };
    c.prototype.member9582 = function () {
        return this.member9954;
    };
    c.prototype.member9583 = function () {
        return this.member9955;
    };
    c.prototype.member7935 = function () {
        if (this.member9956 === undefined) {
            return d;
        } else {
            return this.member9956;
        }
    };
    c.prototype.member7936 = function () {
        if (this.member9957 === undefined) {
            return d;
        }
        return this.member9957;
    };
    c.prototype.member7084 = function () {
        return this.member9958;
    };
    c.prototype.member7083 = function () {
        return this.member9959;
    };
    c.prototype.member7088 = function () {
        return this.member9960;
    };
    c.prototype.member7087 = function () {
        return this.member9961;
    };
    c.prototype.member7090 = function () {
        return this.member9962;
    };
    c.prototype.member7089 = function () {
        return this.member9963;
    };
    c.prototype.member7086 = function () {
        return this.member9964;
    };
    c.prototype.member7085 = function () {
        return this.member9965;
    };
    c.prototype.member9580 = function () {
        return this.member9966;
    };
    c.prototype.decode = function (h) {
        var g = -1;
        while (true) {
            var e = h.member609();
            if (e === undefined) {
                throw new Error('1285 ' + g);
                break;
            }
            if (e === 0) {
                break;
            }
            this.member2932(h, e, g);
            g = e;
        }
    };
    c.prototype.member2932 = function (C, i, x) {
        if (i === 1) {
            this.member9949 = C.member1086();
        } else if (i === 2) {
            this.name = C.member1089();
        } else if (i === 4) {
            this.member9950 = C.member608();
        } else if (i === 5) {
            this.member9951[0] = C.member608();
        } else if (i === 6) {
            this.member9951[1] = C.member608();
        } else if (i === 7) {
            this.member9952[0] = C.member608();
            if (this.member9952[0] > 32767) {
                this.member9952[0] -= 65536;
            }
        } else if (i === 8) {
            this.member9952[1] = C.member608();
            if (this.member9952[1] > 32767) {
                this.member9952[1] -= 65536;
            }
        } else if (i === 11) {
            this.member9939 = 1;
        } else if (i === 12) {
            this.member9942 = C.member1074();
        } else if (i === 13) {
            this.member9953 = C.member609();
        } else if (i === 14) {
            this.member9954 = C.member609();
        } else if (i === 16) {
            this.member8376 = true;
        } else if (i === 18) {
            this.member9940 = C.member608();
        } else if (i === 23) {
            if (this.member9956 === undefined) {
                this.member9956 = Class252({});
            }
            this.member9956.member2959(C.member1086());
        } else if (i === 24) {
            if (this.member9956 === undefined) {
                this.member9956 = Class252({});
            }
            this.member9956.member2961(C.member1086());
        } else if (i === 25) {
            if (this.member9957 === undefined) {
                this.member9957 = Class252({});
            }
            this.member9957.member2959(C.member1086());
        } else if (i === 26) {
            if (this.member9957 === undefined) {
                this.member9957 = Class252({});
            }
            this.member9957.member2961(C.member1086());
        } else if (i === 27) {
            this.member9955 = C.member609();
        } else if (i >= 30 && i < 35) {
            this.member9935[i - 30] = C.member1089();
        } else if (i >= 35 && i < 40) {
            this.member9936[i - 35] = C.member1089();
        } else if (i === 40) {
            var t = C.member609();
            this.member2615 = new Array(t);
            this.member2616 = new Array(t);
            for (var o = 0; o < t; o++) {
                this.member2615[o] = C.member608();
                this.member2616[o] = C.member608();
            }
        } else if (i === 41) {
            var D = C.member609();
            this.member8619 = new Array(D);
            this.member8620 = new Array(D);
            for (var m = 0; m < D; m++) {
                this.member8619[m] = C.member1071();
                this.member8620[m] = C.member1071();
            }
        } else if (i === 42) {
            var e = C.member609();
            this.member8617 = new Array(e);
            for (var j = 0; j < e; j++) {
                this.member8617[j] = C.member1070();
            }
        } else if (i === 43) {
            this.member9948 = C.member1074();
            this.member9947 = true;
        } else if (i === 44) {
            var B = C.member608();
            var h = 0;
            for (var u = B; u > 0; u = u >> 1) {
                h++;
            }
            this.member8618 = new Array(h);
            var q = 0;
            for (var u = 0; u < h; u++) {
                if ((B & 1 << u) > 0) {
                    this.member8618[u] = q++;
                } else {
                    this.member8618[u] = -1;
                }
            }
        } else if (i === 45) {
            var y = C.member608();
            var A = 0;
            for (var u = y; u > 0; u = u >> 1) {
                A++;
            }
            this.member8621 = new Array(A);
            var q = 0;
            for (var u = 0; u < A; u++) {
                if ((y & 1 << u) > 0) {
                    this.member8621[u] = q++;
                } else {
                    this.member8621[u] = -1;
                }
            }
        } else if (i === 65) {
            this.member9945 = true;
        } else if (i === 78) {
            if (this.member9956 === undefined) {
                this.member9956 = Class252({});
            }
            this.member9956.member2963(C.member1086());
        } else if (i === 79) {
            if (this.member9957 === undefined) {
                this.member9957 = Class252({});
            }
            this.member9957.member2963(C.member1086());
        } else if (i === 90) {
            if (this.member9956 === undefined) {
                this.member9956 = Class252({});
            }
            this.member9956.member2965(C.member1086());
        } else if (i === 91) {
            if (this.member9957 === undefined) {
                this.member9957 = Class252({});
            }
            this.member9957.member2965(C.member1086());
        } else if (i === 92) {
            if (this.member9956 === undefined) {
                this.member9956 = Class252({});
            }
            this.member9956.member2967(C.member1086());
        } else if (i === 93) {
            if (this.member9957 === undefined) {
                this.member9957 = Class252({});
            }
            this.member9957.member2967(C.member1086());
        } else if (i === 94) {
            this.member9329 = C.member608();
        } else if (i === 95) {
            this.member9951[2] = C.member608();
        } else if (i === 96) {
            this.member9946 = C.member609();
        } else if (i === 97) {
            this.member9958 = C.member608();
        } else if (i === 98) {
            this.member9959 = C.member608();
        } else if (i >= 100 && i < 110) {
            if (this.member9943 === null) {
                this.member9943 = new Array(10);
                this.member9944 = new Array(10);
            }
            this.member9943[i - 100] = C.member608();
            this.member9944[i - 100] = C.member608();
        } else if (i >= 110 && i <= 112) {
            if (this.resize === null) {
                this.resize = new Float32Array([
                    128,
                    128,
                    128
                ]);
            }
            this.resize[i - 110] = C.member608();
        } else if (i === 113) {
            this.member8626 = C.member1070();
        } else if (i === 114) {
            this.member8627 = C.member1070() * 5;
        } else if (i === 115) {
            this.member7996 = C.member609();
        } else if (i === 121) {
            this.member9960 = C.member608();
        } else if (i === 122) {
            this.member9961 = C.member608();
        } else if (i === 125) {
            if (this.member9956 === undefined) {
                this.member9956 = Class252({});
            }
            this.member9956.member2968()[0] = C.member1070() << Class86.member719;
            this.member9956.member2968()[1] = C.member1070() << Class86.member719;
            this.member9956.member2968()[2] = C.member1070() << Class86.member719;
        } else if (i === 126) {
            if (this.member9957 === undefined) {
                this.member9957 = Class252({});
            }
            this.member9957.member2968()[0] = C.member1070() << Class86.member719;
            this.member9957.member2968()[1] = C.member1070() << Class86.member719;
            this.member9957.member2968()[2] = C.member1070() << Class86.member719;
        } else if (i === 132) {
            var z = C.member609();
            this.member8605 = new Array(z);
            for (var v = 0; v < z; v++) {
                this.member8605[v] = C.member608();
            }
        } else if (i === 134) {
            this.member8630 = C.member609();
        } else if (i === 139) {
            this.member9962 = C.member608();
        } else if (i === 140) {
            this.member9963 = C.member608();
        } else if (i >= 142 && i < 147) {
            if (this.member8603 === null) {
                this.member8603 = new Array(a);
                for (var E = 0; E < a; E++) {
                    this.member8603[E] = -1;
                }
            }
            this.member8603[i - 142] = C.member608();
        } else if (i >= 150 && i < 155) {
            if (this.member9938 === null) {
                this.member9938 = new Array(b);
                for (var E = 0; E < b; E++) {
                    this.member9938[E] = -1;
                }
            }
            this.member9938[i - 150] = C.member608();
        } else if (i === 156) {
            this.member8611 = false;
        } else if (i === 157) {
            this.member9941 = true;
        } else if (i === 161) {
            this.member9964 = C.member608();
        } else if (i === 162) {
            this.member9965 = C.member608();
        } else if (i === 163) {
            this.member9966 = C.member608();
        } else if (i === 164) {
            this.member9967 = C.member1089();
        } else if (i === 165) {
            this.member9939 = 2;
        } else if (i === 249) {
            var g = C.member609();
            if (this.params === null) {
                this.params = {};
            }
            for (var k = 0; k < g; k++) {
                var s = C.member609() === 1;
                var r = C.g3();
                if (s) {
                    this.params[r] = C.member1089();
                } else {
                    this.params[r] = C.member1074();
                }
            }
        } else if (false) {
        }
    };
    c.prototype.member2934 = function () {
    };
    c.prototype.getParam = function (h, g) {
        if (this.params === null) {
            return g;
        }
        var e = this.params[h];
        if (e === undefined) {
            return g;
        } else {
            return e;
        }
    };
    c.prototype.member2941 = function (h, g) {
        if (this.params === null) {
            return g;
        }
        var e = this.params[h];
        if (e === undefined) {
            return g;
        } else {
            return e;
        }
    };
    c.prototype.member9975 = function (e, h) {
        var g = null;
        if (e) {
            if (h !== undefined && h.member7936() !== null) {
                g = h.member7936();
            } else {
                g = this.member7936();
            }
        } else if (h !== undefined && h.member7935() !== null) {
            g = h.member7935();
        } else {
            g = this.member7935();
        }
        return g;
    };
    c.prototype.member7082 = function (e) {
        if (this.member9943 !== null && e > 1) {
            var g = -1;
            for (var h = 0; h < 10; h++) {
                if (e >= this.member9944[h] && this.member9944[h] !== 0) {
                    g = this.member9943[h];
                }
            }
            if (g !== -1) {
                return this.member2896.list(g);
            }
        }
        return this;
    };
    if (true) {
        c.prototype.member7662 = function (e, j) {
            var g = this.member9975(e, j);
            if (g === null || g.member2958() === -1) {
                return true;
            }
            var i = true;
            var h = this.member2896.member7535();
            if (!h.member1438(Class95.member810, g.member2958())) {
                i = false;
            }
            if (g.member2960() !== -1 && !h.member1438(Class95.member810, g.member2960())) {
                i = false;
            }
            if (g.member2962() !== -1 && !h.member1438(Class95.member810, g.member2962())) {
                i = false;
            }
            return i;
        };
        c.prototype.member7534 = function (h) {
            var e = this.member2896.member7535().getFile(Class95.member810, h, 0, Class96.member840, Class93.member796);
            if (e === null || e === undefined) {
                return null;
            }
            var g = Class209(e);
            if (g.member2463() < 13) {
                g.member2495(2);
            }
            return g;
        };
        c.prototype.member9976 = function (e, g) {
            if (this.member2615 !== null) {
                if (g !== undefined && g.member7607() !== null) {
                    e.member2497(this.member2615, g.member7607());
                } else if (this.member2616 !== null) {
                    e.member2497(this.member2615, this.member2616);
                }
            }
            if (this.member8619 !== null) {
                if (g !== undefined && g.member7608() !== null) {
                    e.member2499(this.member8619, g.member7608());
                } else if (this.member8620 !== null) {
                    e.member2499(this.member8619, this.member8620);
                }
            }
        };
        c.prototype.member7546 = function (g, m) {
            var i = this.member9975(g, m);
            if (i === null || i.member2958() === -1) {
                return null;
            }
            var k = null;
            var j = this.member7534(i.member2958());
            if (j === null) {
                return null;
            }
            if (i.member2960() !== -1) {
                var h = this.member7534(i.member2960());
                if (h === null) {
                    return null;
                }
                if (i.member2962() !== -1) {
                    var e = this.member7534(i.member2962());
                    if (e === null) {
                        return null;
                    }
                    k = Class209(undefined, [
                        j,
                        h,
                        e
                    ]);
                } else {
                    k = Class209(undefined, [
                        j,
                        h
                    ]);
                }
            } else {
                k = j;
            }
            k.translate(i.member2968());
            this.member9976(k, m);
            return k;
        };
        c.prototype.member7663 = function (e, j) {
            var g = this.member9975(e, j);
            if (g === null || g.member2964() === -1) {
                return true;
            }
            var i = true;
            var h = this.member2896.member7535();
            if (!h.member1438(Class95.member810, g.member2964())) {
                i = false;
            }
            if (g.member2966() !== -1 && !h.member1438(Class95.member810, g.member2966())) {
                i = false;
            }
            return i;
        };
        c.prototype.member7544 = function (e, m) {
            var h = this.member9975(e, m);
            if (h === null || h.member2964() === -1) {
                return null;
            }
            var k = null;
            var j = this.member2896.member7535();
            var i = this.member7534(h.member2964());
            if (h.member2966() !== -1) {
                var g = this.member7534(h.member2966());
                k = Class209(undefined, [
                    i,
                    g
                ]);
            } else {
                k = i;
            }
            this.member9976(k, m);
            return k;
        };
        c.prototype.member9977 = function (e) {
            if (e !== undefined) {
                if (e.member7929(this.member9949) !== null) {
                    return true;
                }
            } else if (this.member2896.member9978().find(this.member9949) !== null) {
                return true;
            }
            if (this.member2896.member9979().find(this.member9949) !== null) {
                return true;
            }
            var g = this.member2896.member7535();
            return g.member1438(Class95.member810, this.member9949);
        };
        c.prototype.member2008 = function (h) {
            var g = this.member2896.member9979().find(this.member625);
            if (g === null) {
                g = this.member7534(this.member9949);
                if (g === null) {
                    return null;
                }
                if (this.resize !== null) {
                    g.scale(this.resize[0] / 128, this.resize[1] / 128, this.resize[2] / 128);
                }
                if (this.member2615 !== null) {
                    if (this.member8617 !== null) {
                        throw new Error('1286 ' + this.member625);
                    } else {
                        g.member2497(this.member2615, this.member2616);
                    }
                }
                if (this.member8619 !== null) {
                    g.member2499(this.member8619, this.member8620);
                }
                this.member2896.member9979().put(g, 1, this.member625);
            }
            if (h !== undefined) {
                var e = g.member1319();
                h.member7919(e);
                h.member7922(e);
                return e;
            }
            return g;
        };
        c.prototype.member7075 = function (i, g) {
            if (g !== undefined) {
                var e = g.member7929(this.member625);
                if (e !== null) {
                    return e;
                }
            } else {
                var e = this.member2896.member9978().find(this.member625);
                if (e !== null) {
                    return e;
                }
            }
            var h = this.member2008(g);
            if (h === null) {
                return null;
            }
            var e = Class188(h, undefined, i);
            if (g !== undefined) {
                g.member7930(this.member625, e);
            } else {
                this.member2896.member9978().put(e, 1, this.member625);
            }
            return e;
        };
        c.prototype.member9980 = function (e, g) {
            var h = this.member7082(e);
            if (h === null) {
                return null;
            }
            return h.member9977(g);
        };
        c.prototype.member9981 = function (i, e, g) {
            var h = this.member7082(e);
            if (h === null) {
                return null;
            }
            return h.member7075(i, g);
        };
        c.prototype.member7540 = function (e, g) {
            var h = this.member7082(e);
            if (h === null) {
                return null;
            }
            return h.member2008(g);
        };
    } else {
    }
    c.prototype.member9982 = function (j, i, e, g) {
        this.member9949 = i.member9949;
        this.member9950 = i.member9950;
        this.member9951 = i.member9951;
        this.member9952 = i.member9952;
        this.name = e.name;
        this.member8376 = e.member8376;
        var h = g === undefined;
        var k = j === Class704.member9931 ? i : e;
        this.member2615 = k.member2615;
        this.member2616 = k.member2616;
        this.member8617 = k.member8617;
        this.member8619 = k.member8619;
        this.member8620 = k.member8620;
        if (j === Class704.member9931) {
            this.member9942 = e.member9942;
            this.member9939 = true;
            return;
        } else if (j === Class704.member9934) {
            this.name = this.member9967;
            this.member9942 = Math.floor(e.member9942 / e.member9966);
            this.member9939 = true;
            this.member9945 = e.member9945;
            this.member9329 = i.member9329;
            this.member8603 = i.member8603;
            this.member9938 = i.member9938;
            this.member9936 = e.member9936.slice(0);
            this.member9936[0] = Class443.member6825[this.member9937];
            this.member9936[4] = g;
            return;
        } else {
            this.member9942 = 0;
            this.member9939 = e.member9939;
        }
        this.member9953 = e.member9953;
        this.member9954 = e.member9954;
        this.member9955 = e.member9955;
        this.member9956 = e.member9956;
        this.member9957 = e.member9957;
        this.member9329 = e.member9329;
        this.member7996 = e.member7996;
        this.member9935 = e.member9935.slice(0);
        this.member9936 = e.member9936.slice(0);
        this.member9936[4] = g;
        this.params = e.params;
    };
    return function (h, e, j, i, g) {
        return new c(h, e, j, i, g);
    };
}();