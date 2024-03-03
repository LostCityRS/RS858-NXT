import { ObjWearModels } from 'Class252.js';
import { Class41 } from 'Class41.js';
import { Class86 } from 'Class86.js';
import { Class95 } from 'Class95.js';
import { Priority } from 'Class96.js';
import { Class93 } from 'Class93.js';
import { Class209 } from 'Class209.js';
import { Class188 } from 'Class188.js';
import { Class704 } from 'Class704.js';
import { Class443 } from 'Class443.js';
export var ObjType = function () {
    var a = 6;
    var b = 5;
    var d = ObjWearModels({});
    var ObjType = function (h, e, j, i, g) {
        this.myList;
        this.member625;
        this.op = null;
        this.iop = null;
        this.member9937 = g;
        if (h !== undefined && e !== undefined && j !== undefined && i !== undefined) {
            this.member625 = h;
            this.myList = e;
            this.op = j;
            this.iop = i;
        } else {
            throw new Error('1284 ');
        }
        this.name = 'null';
        this.members = false;
        this.cursor = null;
        this.icursor = null;
        this.quest = null;
        this.stackable = 0;
        this.member9940 = -1;
        this.member8611 = true;
        this.member9941 = false;
        this.cost = 1;
        this.count_obj = null;
        this.count_co = null;
        this.team = 0;
        this.stockmarket = false;
        this.dummyitem = 0;
        this.minimenucolour_set = false;
        this.minimenucolour;
        this.category = -1;
        this.params = null;
        this.model = -1;
        this.recol_s = null;
        this.recol_d = null;
        this.member8617 = null;
        this.recolindex = null;
        this.retex_s = null;
        this.retex_d = null;
        this.retexindex = null;
        this.picksizeshift = 0;
        this.ambient = 0, this.contrast = 0;
        this.resize = null;
        this.desc = 2000;
        this.an2d = Class41.create();
        this.of2d = Class41.create();
        this.wearpos = -1;
        this.wearpos2 = -1;
        this.wearpos3 = -1;
        this.manwear = undefined;
        this.womanwear = undefined;
        this.certlink = -1;
        this.certtemplate = -1;
        this.lentlink = -1;
        this.lenttemplate = -1;
        this.boughtlink = -1;
        this.boughttemplate = -1;
        this.shardlink = -1;
        this.shardtemplate = -1;
        this.shardcount = 0;
        this.shardname = 'null';
    };
    ObjType.prototype.getID = function () {
        return this.member625;
    };
    ObjType.prototype.member9577 = function () {
        return this.op;
    };
    ObjType.prototype.member9968 = function (e) {
        this.op = e;
    };
    ObjType.prototype.member9578 = function () {
        return this.iop;
    };
    ObjType.prototype.member9969 = function (e) {
        this.iop = e;
    };
    ObjType.prototype.getName = function () {
        return this.name;
    };
    ObjType.prototype.member9584 = function () {
        return this.members;
    };
    ObjType.prototype.getCursor = function (e) {
        if (this.cursor === null) {
            return -1;
        } else {
            return this.cursor[e];
        }
    };
    ObjType.prototype.member9585 = function (e) {
        if (this.icursor === null) {
            return -1;
        } else {
            return this.icursor[e];
        }
    };
    ObjType.prototype.getQuests = function () {
        return this.quest;
    };
    ObjType.prototype.setQuests = function (e) {
        this.quest = e;
    };
    ObjType.prototype.getStackable = function () {
        return this.stackable;
    };
    ObjType.prototype.member9586 = function () {
        return this.member9940;
    };
    ObjType.prototype.getCost = function () {
        return this.cost;
    };
    ObjType.prototype.getTeam = function () {
        return this.team;
    };
    ObjType.prototype.setTeam = function (team) {
        this.team = team;
    };
    ObjType.prototype.getStockMarket = function () {
        return this.stockmarket;
    };
    ObjType.prototype.setStockMarket = function (stockmarket) {
        this.stockmarket = stockmarket;
    };
    ObjType.prototype.getDummyItem = function () {
        return this.dummyitem;
    };
    ObjType.prototype.hasMinimenuColourOverride = function () {
        return this.minimenucolour_set;
    };
    ObjType.prototype.getMinimenuColour = function () {
        return this.minimenucolour;
    };
    ObjType.prototype.getCategory = function () {
        return this.category;
    };
    ObjType.prototype.member4494 = function () {
        return this.member8611;
    };
    ObjType.prototype.member9973 = function () {
        return this.member9941;
    };
    ObjType.prototype.getParams = function () {
        return this.params;
    };
    ObjType.prototype.setParams = function (e) {
        this.params = e;
    };
    ObjType.prototype.getRecolD = function () {
        return this.recol_d;
    };
    ObjType.prototype.getRetexS = function () {
        return this.retex_s;
    };
    ObjType.prototype.getRetexD = function () {
        return this.retex_d;
    };
    ObjType.prototype.getResize = function () {
        return this.resize;
    };
    ObjType.prototype.getDescription = function () {
        return this.desc;
    };
    ObjType.prototype.get2dAngle = function () {
        return this.an2d;
    };
    ObjType.prototype.get2dOffset = function () {
        return this.of2d;
    };
    ObjType.prototype.getWearPos = function () {
        return this.wearpos;
    };
    ObjType.prototype.getWearPos2 = function () {
        return this.wearpos2;
    };
    ObjType.prototype.getWearPos3 = function () {
        return this.wearpos3;
    };
    ObjType.prototype.getManWear = function () {
        if (this.manwear === undefined) {
            return d;
        } else {
            return this.manwear;
        }
    };
    ObjType.prototype.getWomanWear = function () {
        if (this.womanwear === undefined) {
            return d;
        }
        return this.womanwear;
    };
    ObjType.prototype.getCertLink = function () {
        return this.certlink;
    };
    ObjType.prototype.getCertTemplate = function () {
        return this.certtemplate;
    };
    ObjType.prototype.getLentLink = function () {
        return this.lentlink;
    };
    ObjType.prototype.getLentTemplate = function () {
        return this.lenttemplate;
    };
    ObjType.prototype.getBoughtLink = function () {
        return this.boughtlink;
    };
    ObjType.prototype.getBoughtTemplate = function () {
        return this.boughttemplate;
    };
    ObjType.prototype.getShardLink = function () {
        return this.shardlink;
    };
    ObjType.prototype.getShardTemplate = function () {
        return this.shardtemplate;
    };
    ObjType.prototype.getShardCount = function () {
        return this.shardcount;
    };
    ObjType.prototype.decode = function (h) {
        var g = -1;
        while (true) {
            var e = h.g1();
            if (e === undefined) {
                throw new Error('1285 ' + g);
                break;
            }
            if (e === 0) {
                break;
            }
            this.decodeNext(h, e, g);
            g = e;
        }
    };
    ObjType.prototype.decodeNext = function (packet, opcode, x) {
        if (opcode === 1) {
            this.model = packet.gSmart2or4null();
        } else if (opcode === 2) {
            this.name = packet.gjstr();
        } else if (opcode === 4) {
            this.desc = packet.g2();
        } else if (opcode === 5) {
            this.an2d[0] = packet.g2();
        } else if (opcode === 6) {
            this.an2d[1] = packet.g2();
        } else if (opcode === 7) {
            this.of2d[0] = packet.g2();
            if (this.of2d[0] > 32767) {
                this.of2d[0] -= 65536;
            }
        } else if (opcode === 8) {
            this.of2d[1] = packet.g2();
            if (this.of2d[1] > 32767) {
                this.of2d[1] -= 65536;
            }
        } else if (opcode === 11) {
            this.stackable = 1;
        } else if (opcode === 12) {
            this.cost = packet.g4s();
        } else if (opcode === 13) {
            this.wearpos = packet.g1();
        } else if (opcode === 14) {
            this.wearpos2 = packet.g1();
        } else if (opcode === 16) {
            this.members = true;
        } else if (opcode === 18) {
            this.member9940 = packet.g2();
        } else if (opcode === 23) {
            if (this.manwear === undefined) {
                this.manwear = ObjWearModels({});
            }
            this.manwear.setWear1(packet.gSmart2or4null());
        } else if (opcode === 24) {
            if (this.manwear === undefined) {
                this.manwear = ObjWearModels({});
            }
            this.manwear.setWear2(packet.gSmart2or4null());
        } else if (opcode === 25) {
            if (this.womanwear === undefined) {
                this.womanwear = ObjWearModels({});
            }
            this.womanwear.setWear1(packet.gSmart2or4null());
        } else if (opcode === 26) {
            if (this.womanwear === undefined) {
                this.womanwear = ObjWearModels({});
            }
            this.womanwear.setWear2(packet.gSmart2or4null());
        } else if (opcode === 27) {
            this.wearpos3 = packet.g1();
        } else if (opcode >= 30 && opcode < 35) {
            this.op[opcode - 30] = packet.gjstr();
        } else if (opcode >= 35 && opcode < 40) {
            this.iop[opcode - 35] = packet.gjstr();
        } else if (opcode === 40) {
            var t = packet.g1();
            this.recol_s = new Array(t);
            this.recol_d = new Array(t);
            for (var o = 0; o < t; o++) {
                this.recol_s[o] = packet.g2();
                this.recol_d[o] = packet.g2();
            }
        } else if (opcode === 41) {
            var D = packet.g1();
            this.retex_s = new Array(D);
            this.retex_d = new Array(D);
            for (var m = 0; m < D; m++) {
                this.retex_s[m] = packet.g2s();
                this.retex_d[m] = packet.g2s();
            }
        } else if (opcode === 42) {
            var e = packet.g1();
            this.member8617 = new Array(e);
            for (var j = 0; j < e; j++) {
                this.member8617[j] = packet.g1s();
            }
        } else if (opcode === 43) {
            this.minimenucolour = packet.g4s();
            this.minimenucolour_set = true;
        } else if (opcode === 44) {
            var B = packet.g2();
            var h = 0;
            for (var u = B; u > 0; u = u >> 1) {
                h++;
            }
            this.recolindex = new Array(h);
            var q = 0;
            for (var u = 0; u < h; u++) {
                if ((B & 1 << u) > 0) {
                    this.recolindex[u] = q++;
                } else {
                    this.recolindex[u] = -1;
                }
            }
        } else if (opcode === 45) {
            var y = packet.g2();
            var A = 0;
            for (var u = y; u > 0; u = u >> 1) {
                A++;
            }
            this.retexindex = new Array(A);
            var q = 0;
            for (var u = 0; u < A; u++) {
                if ((y & 1 << u) > 0) {
                    this.retexindex[u] = q++;
                } else {
                    this.retexindex[u] = -1;
                }
            }
        } else if (opcode === 65) {
            this.stockmarket = true;
        } else if (opcode === 78) {
            if (this.manwear === undefined) {
                this.manwear = ObjWearModels({});
            }
            this.manwear.setWear3(packet.gSmart2or4null());
        } else if (opcode === 79) {
            if (this.womanwear === undefined) {
                this.womanwear = ObjWearModels({});
            }
            this.womanwear.setWear3(packet.gSmart2or4null());
        } else if (opcode === 90) {
            if (this.manwear === undefined) {
                this.manwear = ObjWearModels({});
            }
            this.manwear.setHead1(packet.gSmart2or4null());
        } else if (opcode === 91) {
            if (this.womanwear === undefined) {
                this.womanwear = ObjWearModels({});
            }
            this.womanwear.setHead1(packet.gSmart2or4null());
        } else if (opcode === 92) {
            if (this.manwear === undefined) {
                this.manwear = ObjWearModels({});
            }
            this.manwear.setHead2(packet.gSmart2or4null());
        } else if (opcode === 93) {
            if (this.womanwear === undefined) {
                this.womanwear = ObjWearModels({});
            }
            this.womanwear.setHead2(packet.gSmart2or4null());
        } else if (opcode === 94) {
            this.category = packet.g2();
        } else if (opcode === 95) {
            this.an2d[2] = packet.g2();
        } else if (opcode === 96) {
            this.dummyitem = packet.g1();
        } else if (opcode === 97) {
            this.certlink = packet.g2();
        } else if (opcode === 98) {
            this.certtemplate = packet.g2();
        } else if (opcode >= 100 && opcode < 110) {
            if (this.count_obj === null) {
                this.count_obj = new Array(10);
                this.count_co = new Array(10);
            }
            this.count_obj[opcode - 100] = packet.g2();
            this.count_co[opcode - 100] = packet.g2();
        } else if (opcode >= 110 && opcode <= 112) {
            if (this.resize === null) {
                this.resize = new Float32Array([
                    128,
                    128,
                    128
                ]);
            }
            this.resize[opcode - 110] = packet.g2();
        } else if (opcode === 113) {
            this.ambient = packet.g1s();
        } else if (opcode === 114) {
            this.contrast = packet.g1s() * 5;
        } else if (opcode === 115) {
            this.team = packet.g1();
        } else if (opcode === 121) {
            this.lentlink = packet.g2();
        } else if (opcode === 122) {
            this.lenttemplate = packet.g2();
        } else if (opcode === 125) {
            if (this.manwear === undefined) {
                this.manwear = ObjWearModels({});
            }
            this.manwear.getOffset()[0] = packet.g1s() << Class86.member719;
            this.manwear.getOffset()[1] = packet.g1s() << Class86.member719;
            this.manwear.getOffset()[2] = packet.g1s() << Class86.member719;
        } else if (opcode === 126) {
            if (this.womanwear === undefined) {
                this.womanwear = ObjWearModels({});
            }
            this.womanwear.getOffset()[0] = packet.g1s() << Class86.member719;
            this.womanwear.getOffset()[1] = packet.g1s() << Class86.member719;
            this.womanwear.getOffset()[2] = packet.g1s() << Class86.member719;
        } else if (opcode === 132) {
            var z = packet.g1();
            this.quest = new Array(z);
            for (var v = 0; v < z; v++) {
                this.quest[v] = packet.g2();
            }
        } else if (opcode === 134) {
            this.picksizeshift = packet.g1();
        } else if (opcode === 139) {
            this.boughtlink = packet.g2();
        } else if (opcode === 140) {
            this.boughttemplate = packet.g2();
        } else if (opcode >= 142 && opcode < 147) {
            if (this.cursor === null) {
                this.cursor = new Array(a);
                for (var E = 0; E < a; E++) {
                    this.cursor[E] = -1;
                }
            }
            this.cursor[opcode - 142] = packet.g2();
        } else if (opcode >= 150 && opcode < 155) {
            if (this.icursor === null) {
                this.icursor = new Array(b);
                for (var E = 0; E < b; E++) {
                    this.icursor[E] = -1;
                }
            }
            this.icursor[opcode - 150] = packet.g2();
        } else if (opcode === 156) {
            this.member8611 = false;
        } else if (opcode === 157) {
            this.member9941 = true;
        } else if (opcode === 161) {
            this.shardlink = packet.g2();
        } else if (opcode === 162) {
            this.shardtemplate = packet.g2();
        } else if (opcode === 163) {
            this.shardcount = packet.g2();
        } else if (opcode === 164) {
            this.shardname = packet.gjstr();
        } else if (opcode === 165) {
            this.stackable = 2;
        } else if (opcode === 249) {
            var g = packet.g1();
            if (this.params === null) {
                this.params = {};
            }
            for (var k = 0; k < g; k++) {
                var s = packet.g1() === 1;
                var r = packet.g3();
                if (s) {
                    this.params[r] = packet.gjstr();
                } else {
                    this.params[r] = packet.g4s();
                }
            }
        } else if (false) {
        }
    };
    ObjType.prototype.postDecode = function () {
    };
    ObjType.prototype.getParam = function (h, g) {
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
    ObjType.prototype.member2941 = function (h, g) {
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
    ObjType.prototype.getWear = function (woman, obj) {
        var g = null;
        if (woman) {
            if (obj !== undefined && obj.getWomanWear() !== null) {
                g = obj.getWomanWear();
            } else {
                g = this.getWomanWear();
            }
        } else if (obj !== undefined && obj.getManWear() !== null) {
            g = obj.getManWear();
        } else {
            g = this.getManWear();
        }
        return g;
    };
    ObjType.prototype.getCountObj = function (count) {
        if (this.count_obj !== null && count > 1) {
            var g = -1;
            for (var h = 0; h < 10; h++) {
                if (count >= this.count_co[h] && this.count_co[h] !== 0) {
                    g = this.count_obj[h];
                }
            }
            if (g !== -1) {
                return this.myList.list(g);
            }
        }
        return this;
    };
    if (true) {
        ObjType.prototype.member7662 = function (e, j) {
            var g = this.getWear(e, j);
            if (g === null || g.getWear1() === -1) {
                return true;
            }
            var i = true;
            var h = this.myList.member7535();
            if (!h.member1438(Class95.member810, g.getWear1())) {
                i = false;
            }
            if (g.getWear2() !== -1 && !h.member1438(Class95.member810, g.getWear2())) {
                i = false;
            }
            if (g.getWear3() !== -1 && !h.member1438(Class95.member810, g.getWear3())) {
                i = false;
            }
            return i;
        };
        ObjType.prototype.member7534 = function (h) {
            var e = this.myList.member7535().getFile(Class95.member810, h, 0, Priority.member840, Class93.member796);
            if (e === null || e === undefined) {
                return null;
            }
            var g = Class209(e);
            if (g.member2463() < 13) {
                g.member2495(2);
            }
            return g;
        };
        ObjType.prototype.member9976 = function (e, g) {
            if (this.recol_s !== null) {
                if (g !== undefined && g.getRecolD() !== null) {
                    e.member2497(this.recol_s, g.getRecolD());
                } else if (this.recol_d !== null) {
                    e.member2497(this.recol_s, this.recol_d);
                }
            }
            if (this.retex_s !== null) {
                if (g !== undefined && g.getRetexD() !== null) {
                    e.member2499(this.retex_s, g.getRetexD());
                } else if (this.retex_d !== null) {
                    e.member2499(this.retex_s, this.retex_d);
                }
            }
        };
        ObjType.prototype.member7546 = function (g, m) {
            var i = this.getWear(g, m);
            if (i === null || i.getWear1() === -1) {
                return null;
            }
            var k = null;
            var j = this.member7534(i.getWear1());
            if (j === null) {
                return null;
            }
            if (i.getWear2() !== -1) {
                var h = this.member7534(i.getWear2());
                if (h === null) {
                    return null;
                }
                if (i.getWear3() !== -1) {
                    var e = this.member7534(i.getWear3());
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
            k.translate(i.getOffset());
            this.member9976(k, m);
            return k;
        };
        ObjType.prototype.member7663 = function (e, j) {
            var g = this.getWear(e, j);
            if (g === null || g.getHead1() === -1) {
                return true;
            }
            var i = true;
            var h = this.myList.member7535();
            if (!h.member1438(Class95.member810, g.getHead1())) {
                i = false;
            }
            if (g.getHead2() !== -1 && !h.member1438(Class95.member810, g.getHead2())) {
                i = false;
            }
            return i;
        };
        ObjType.prototype.member7544 = function (e, m) {
            var h = this.getWear(e, m);
            if (h === null || h.getHead1() === -1) {
                return null;
            }
            var k = null;
            var j = this.myList.member7535();
            var i = this.member7534(h.getHead1());
            if (h.getHead2() !== -1) {
                var g = this.member7534(h.getHead2());
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
        ObjType.prototype.member9977 = function (e) {
            if (e !== undefined) {
                if (e.member7929(this.model) !== null) {
                    return true;
                }
            } else if (this.myList.member9978().find(this.model) !== null) {
                return true;
            }
            if (this.myList.member9979().find(this.model) !== null) {
                return true;
            }
            var g = this.myList.member7535();
            return g.member1438(Class95.member810, this.model);
        };
        ObjType.prototype.member2008 = function (h) {
            var g = this.myList.member9979().find(this.member625);
            if (g === null) {
                g = this.member7534(this.model);
                if (g === null) {
                    return null;
                }
                if (this.resize !== null) {
                    g.scale(this.resize[0] / 128, this.resize[1] / 128, this.resize[2] / 128);
                }
                if (this.recol_s !== null) {
                    if (this.member8617 !== null) {
                        throw new Error('1286 ' + this.member625);
                    } else {
                        g.member2497(this.recol_s, this.recol_d);
                    }
                }
                if (this.retex_s !== null) {
                    g.member2499(this.retex_s, this.retex_d);
                }
                this.myList.member9979().put(g, 1, this.member625);
            }
            if (h !== undefined) {
                var e = g.clone();
                h.member7919(e);
                h.member7922(e);
                return e;
            }
            return g;
        };
        ObjType.prototype.member7075 = function (i, g) {
            if (g !== undefined) {
                var e = g.member7929(this.member625);
                if (e !== null) {
                    return e;
                }
            } else {
                var e = this.myList.member9978().find(this.member625);
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
                this.myList.member9978().put(e, 1, this.member625);
            }
            return e;
        };
        ObjType.prototype.member9980 = function (e, g) {
            var h = this.getCountObj(e);
            if (h === null) {
                return null;
            }
            return h.member9977(g);
        };
        ObjType.prototype.member9981 = function (i, e, g) {
            var h = this.getCountObj(e);
            if (h === null) {
                return null;
            }
            return h.member7075(i, g);
        };
        ObjType.prototype.member7540 = function (e, g) {
            var h = this.getCountObj(e);
            if (h === null) {
                return null;
            }
            return h.member2008(g);
        };
    } else {
    }
    ObjType.prototype.member9982 = function (j, i, e, g) {
        this.model = i.model;
        this.desc = i.desc;
        this.an2d = i.an2d;
        this.of2d = i.of2d;
        this.name = e.name;
        this.members = e.members;
        var h = g === undefined;
        var k = j === Class704.member9931 ? i : e;
        this.recol_s = k.recol_s;
        this.recol_d = k.recol_d;
        this.member8617 = k.member8617;
        this.retex_s = k.retex_s;
        this.retex_d = k.retex_d;
        if (j === Class704.member9931) {
            this.cost = e.cost;
            this.stackable = true;
            return;
        } else if (j === Class704.member9934) {
            this.name = this.shardname;
            this.cost = Math.floor(e.cost / e.shardcount);
            this.stackable = true;
            this.stockmarket = e.stockmarket;
            this.category = i.category;
            this.cursor = i.cursor;
            this.icursor = i.icursor;
            this.iop = e.iop.slice(0);
            this.iop[0] = Class443.member6825[this.member9937];
            this.iop[4] = g;
            return;
        } else {
            this.cost = 0;
            this.stackable = e.stackable;
        }
        this.wearpos = e.wearpos;
        this.wearpos2 = e.wearpos2;
        this.wearpos3 = e.wearpos3;
        this.manwear = e.manwear;
        this.womanwear = e.womanwear;
        this.category = e.category;
        this.team = e.team;
        this.op = e.op.slice(0);
        this.iop = e.iop.slice(0);
        this.iop[4] = g;
        this.params = e.params;
    };
    return function (h, e, j, i, g) {
        return new ObjType(h, e, j, i, g);
    };
}();