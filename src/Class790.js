import { HillChange } from 'Class170.js';
import { Class396 } from 'Class396.js';
import { Class690 } from 'Class690.js';
import { Class198 } from 'Class198.js';
import { Class41 } from 'Class41.js';
import { Cuboid } from 'Class166.js';
import { Class86 } from 'Class86.js';
import { VarDomainType } from 'Class465.js';
import { Class738 } from 'Class738.js';
import { Class379 } from 'Class379.js';
export var LocType = function () {
    var a = 6;
    var b = 'null';
    var LocType = function (e, d, g) {
        this.myList;
        this.member625;
        this.op = null;
        if (e !== undefined && d !== undefined && g !== undefined) {
            this.member625 = e;
            this.myList = d;
            this.op = g;
        } else {
            throw new Error('1812 ');
        }
        this.name = b;
        this.members = false;
        this.member10481 = false;
        this.cursor = null;
        this.quest = null;
        this.params = null;
        this.model_shape = null;
        this.model = null;
        this.resize = null;
        this.offset = null;
        this.member10483 = null;
        this.mirror = false;
        this.recol_s = null;
        this.recol_d = null;
        this.member8617 = null;
        this.recolindex = null;
        this.retex_s = null;
        this.retex_d = null;
        this.retexindex = null;
        this.tint_hue, this.tint_saturation, this.tint_lightness;
        this.tint_strength = 0;
        this.antimacro = false;
        this.hillchange_mode = HillChange.member1852;
        this.hillchange_value = -1;
        this.ambient = 64;
        this.contrast = 0;
        this.member10484 = false;
        this.hardshadow = true;
        this.member8611 = true;
        this.member10486 = -1;
        this.member10487 = Class396.member778;
        this.clickbox = null;
        this.anim = null;
        this.anim_weight = null;
        this.randseq = true;
        this.member4479 = false;
        this.width = 1;
        this.length = 1;
        this.blockwalk = 2;
        this.blockrange = true;
        this.active = -1;
        this.wallwidth = 64;
        this.member10493;
        this.breakroutefinding = false;
        this.raiseobject = -1;
        this.member10496 = 0;
        this.member10497 = false;
        this.member10498 = Class690.member9897;
        this.mapelement = -1;
        this.msi = -1;
        this.msirotate = false;
        this.msiangle = 0;
        this.msimirror = false;
        this.multiloc = null;
        this.multivar = -1, this.multivarbit = -1;
        this.bgsound = -1;
        this.bgsound_range = 0;
        this.bgsound_size = 0;
        this.bgsound_volume = 255;
        this.member10504 = false;
        this.bgsound_minrate = 256;
        this.bgsound_maxrate = 256;
        this.member2541 = 0;
        this.member2545 = false;
        this.member2546 = 3000;
        this.member2547 = 0;
        this.member2548 = 1;
        this.bgsound_mindelay = 0;
        this.bgsound_maxdelay = 0;
        this.bgsound_random = undefined;
        this.member2552 = 0;
        this.member2553 = false;
        this.member2554 = 3000;
        this.member2555 = 0;
        this.member2556 = 1;
    };
    LocType.prototype.member682 = function () {
        return this.member625;
    };
    LocType.prototype.getOps = function () {
        if (!this.myList.getAllowMembers() && this.members) {
            return null;
        }
        return this.op;
    };
    LocType.prototype.getName = function () {
        return this.name;
    };
    LocType.prototype.member4495 = function () {
        return this.member10481;
    };
    LocType.prototype.getCursor = function (d) {
        if (this.cursor === null) {
            return -1;
        } else {
            return this.cursor[d];
        }
    };
    LocType.prototype.getQuests = function () {
        return this.quest;
    };
    LocType.prototype.getModelShapes = function () {
        return this.model_shape;
    };
    LocType.prototype.getModels = function () {
        return this.model;
    };
    LocType.prototype.getResize = function () {
        return this.resize;
    };
    LocType.prototype.getOffset = function () {
        return this.offset;
    };
    LocType.prototype.getMirror = function () {
        return this.mirror;
    };
    LocType.prototype.getRecolS = function () {
        return this.recol_s;
    };
    LocType.prototype.getRecolD = function () {
        return this.recol_d;
    };
    LocType.prototype.getRetexS = function () {
        return this.retex_s;
    };
    LocType.prototype.getRetexD = function () {
        return this.retex_d;
    };
    LocType.prototype.getHillChangeMode = function () {
        return this.hillchange_mode;
    };
    LocType.prototype.getHillChangeValue = function () {
        return this.hillchange_value;
    };
    LocType.prototype.getAmbient = function () {
        return this.ambient;
    };
    LocType.prototype.member4581 = function () {
        return this.member10486;
    };
    LocType.prototype.member4582 = function () {
        return this.member10487;
    };
    LocType.prototype.member4494 = function (d) {
        if (!this.member8611) {
            return false;
        }
        if (d === Class198.member2352 && !this.hardshadow) {
            return false;
        }
        return true;
    };
    LocType.prototype.getClickbox = function () {
        return this.clickbox;
    };
    LocType.prototype.getAnim = function () {
        return this.anim;
    };
    LocType.prototype.member10505 = function () {
        return this.member4479;
    };
    LocType.prototype.getWidth = function (d) {
        if (d === 0 || d === 2) {
            return this.width;
        } else {
            return this.length;
        }
    };
    LocType.prototype.getLength = function (d) {
        if (d === 0 || d === 2) {
            return this.length;
        } else {
            return this.width;
        }
    };
    LocType.prototype.getActive = function () {
        return this.active === 1;
    };
    LocType.prototype.getWallWidth = function () {
        return this.wallwidth;
    };
    LocType.prototype.member4496 = function (d) {
        return d === Class198.member2352 ? this.member10496 : 0;
    };
    LocType.prototype.member4161 = function (d, e) {
        if (e) {
            return false;
        }
        return Class198.member2359(d) && this.raiseobject === 1 || d === Class198.member2352 && this.member10496 !== 0;
    };
    LocType.prototype.member4523 = function () {
        return this.member10497;
    };
    LocType.prototype.member10506 = function () {
        return this.member10498;
    };
    LocType.prototype.getMapElement = function () {
        return this.mapelement;
    };
    LocType.prototype.getMSI = function () {
        return this.msi;
    };
    LocType.prototype.getMSIRotate = function () {
        return this.msirotate;
    };
    LocType.prototype.getMSIAngle = function () {
        return this.msiangle;
    };
    LocType.prototype.getMSIMirror = function () {
        return this.msimirror;
    };
    LocType.prototype.getBackgroundSound = function () {
        return this.bgsound;
    };
    LocType.prototype.getBackgroundSoundRange = function () {
        return this.bgsound_range;
    };
    LocType.prototype.getBackgroundSoundSize = function () {
        return this.bgsound_size;
    };
    LocType.prototype.getBackgroundSoundVolume = function () {
        return this.bgsound_volume;
    };
    LocType.prototype.member8677 = function () {
        return true;
    };
    LocType.prototype.member10507 = function () {
        return this.member10504;
    };
    LocType.prototype.getBackgroundSoundMinRate = function () {
        return this.bgsound_minrate;
    };
    LocType.prototype.getBackgroundSoundMaxRate = function () {
        return this.bgsound_maxrate;
    };
    LocType.prototype.member4498 = function () {
        return this.member2541;
    };
    LocType.prototype.member4502 = function () {
        return this.member2545;
    };
    LocType.prototype.member4503 = function () {
        return this.member2546;
    };
    LocType.prototype.member4504 = function () {
        return this.member2547;
    };
    LocType.prototype.member4505 = function () {
        return this.member2548;
    };
    LocType.prototype.getBackgroundSoundMinDelay = function () {
        return this.bgsound_mindelay;
    };
    LocType.prototype.getBackgroundSoundMaxDelay = function () {
        return this.bgsound_maxdelay;
    };
    LocType.prototype.getBackgroundSoundRandom = function () {
        return this.bgsound_random;
    };
    LocType.prototype.member4507 = function () {
        return this.member2552;
    };
    LocType.prototype.member4508 = function () {
        return this.member2553;
    };
    LocType.prototype.member4509 = function () {
        return this.member2554;
    };
    LocType.prototype.member4510 = function () {
        return this.member2555;
    };
    LocType.prototype.member4511 = function () {
        return this.member2556;
    };
    LocType.prototype.decode = function (g) {
        var e = -1;
        while (true) {
            var d = g.g1();
            if (d === undefined) {
                throw new Error('1813 ' + e);
                break;
            }
            if (d === 0) {
                break;
            }
            this.decodeNext(g, d, e);
            e = d;
        }
    };
    LocType.prototype.decodeNext = function (packet, opcode, I) {
        if (opcode === 1) {
            var shapeCount = packet.g1();
            this.model_shape = new Int32Array(shapeCount);
            this.model = new Array(shapeCount);
            
            for (var i = 0; i < shapeCount; i++) {
                this.model_shape[i] = packet.g1s();
                var modelCount = packet.g1();
                this.model[i] = new Int32Array(modelCount);
                
                for (var j = 0; j < modelCount; j++) {
                    this.model[i][j] = packet.gSmart2or4null();
                }
            }
        } else if (opcode === 2) {
            this.name = packet.gjstr();
        } else if (opcode === 14) {
            this.width = packet.g1();
        } else if (opcode === 15) {
            this.length = packet.g1();
        } else if (opcode === 17) {
            this.blockwalk = 0;
            this.blockrange = false;
        } else if (opcode === 18) {
            this.blockrange = false;
        } else if (opcode === 19) {
            this.active = packet.g1();
        } else if (opcode === 21) {
            this.hillchange_mode = HillChange.FLOOR_SKEW;
        } else if (opcode === 22) {
        } else if (opcode === 23) {
        } else if (opcode === 24) {
            var D = packet.gSmart2or4null();
            if (D !== -1) {
                this.anim = [D];
            }
        } else if (opcode === 27) {
            this.blockwalk = 1;
        } else if (opcode === 28) {
            this.wallwidth = packet.g1() << 2;
        } else if (opcode === 29) {
            this.ambient = packet.g1s() + 64;
        } else if (opcode >= 30 && opcode < 35) {
            this.op[opcode - 30] = packet.gjstr();
        } else if (opcode === 39) {
            this.contrast = packet.g1s() * 5;
        } else if (opcode === 40) {
            var y = packet.g1();
            this.recol_s = new Uint32Array(y);
            this.recol_d = new Uint32Array(y);
            for (var r = 0; r < y; r++) {
                this.recol_s[r] = packet.g2();
                this.recol_d[r] = packet.g2();
            }
        } else if (opcode === 41) {
            var O = packet.g1();
            this.retex_s = new Int32Array(O);
            this.retex_d = new Int32Array(O);
            for (var q = 0; q < O; q++) {
                this.retex_s[q] = packet.g2s();
                this.retex_d[q] = packet.g2s();
            }
        } else if (opcode === 42) {
            var d = packet.g1();
            this.member8617 = new Int32Array(d);
            for (var m = 0; m < d; m++) {
                this.member8617[m] = packet.g1s();
            }
        } else if (opcode === 44) {
            var M = packet.g2();
            var g = 0;
            for (var C = M; C > 0; C = C >> 1) {
                g++;
            }
            this.recolindex = new Int32Array(g);
            var s = 0;
            for (var C = 0; C < g; C++) {
                if ((M & 1 << C) > 0) {
                    this.recolindex[C] = s++;
                } else {
                    this.recolindex[C] = -1;
                }
            }
        } else if (opcode === 45) {
            var K = packet.g2();
            var L = 0;
            for (var C = K; C > 0; C = C >> 1) {
                L++;
            }
            this.retexindex = new Int32Array(L);
            var s = 0;
            for (var C = 0; C < L; C++) {
                if ((K & 1 << C) > 0) {
                    this.retexindex[C] = s++;
                } else {
                    this.retexindex[C] = -1;
                }
            }
        } else if (opcode === 62) {
            this.mirror = true;
        } else if (opcode === 64) {
        } else if (opcode === 65 || opcode === 66 || opcode === 67) {
            if (this.resize === null) {
                this.resize = new Int32Array(3);
                this.resize[0] = this.resize[1] = this.resize[2] = 128;
            }
            this.resize[opcode - 65] = packet.g2();
        } else if (opcode === 69) {
            this.member10493 = packet.g1();
        } else if (opcode === 70 || opcode === 71 || opcode === 72) {
            if (this.offset === null) {
                this.offset = new Int32Array(3);
            }
            if (opcode === 71) {
                this.offset[opcode - 70] = -(packet.g2s() << 2);
            } else {
                this.offset[opcode - 70] = packet.g2s() << 2;
            }
        } else if (opcode === 73) {
        } else if (opcode === 74) {
            this.breakroutefinding = true;
        } else if (opcode === 75) {
            this.raiseobject = packet.g1();
        } else if (opcode === 77 || opcode === 92) {
            this.multivarbit = packet.g2();
            
            if (this.multivarbit == 65535) {
                this.multivarbit = -1;
            }
            
            this.multivar = packet.g2();
            
            if (this.multivar === 65535) {
                this.multivar = -1;
            }
            
            var multidefault = -1;
            
            if (opcode === 92) {
                multidefault = packet.gSmart2or4null();
            }
            
            var count = packet.g1();
            this.multiloc = new Int32Array(count + 2);
            
            for (var i = 0; i <= count; i++) {
                this.multiloc[i] = packet.gSmart2or4null();
            }
            
            this.multiloc[count + 1] = multidefault;
        } else if (opcode === 78) {
            this.bgsound = packet.g2();
            this.bgsound_range = packet.g1();
        } else if (opcode === 79) {
            this.bgsound_mindelay = packet.g2() * 10;
            this.bgsound_maxdelay = packet.g2() * 10;
            this.bgsound_range = packet.g1();
            var count = packet.g1();
            this.bgsound_random = new Int32Array(count);
            
            for (var z = 0; z < count; z++) {
                this.bgsound_random[z] = packet.g2();
            }
        } else if (opcode === 81) {
            this.hillchange_mode = HillChange.TREE_SKEW;
            this.hillchange_value = packet.g1() * 256;
        } else if (opcode === 82) {
            this.member10484 = true;
        } else if (opcode === 88) {
            this.hardshadow = false;
        } else if (opcode === 89) {
            this.randseq = false;
        } else if (opcode === 91) {
            this.members = true;
        } else if (opcode === 93) {
            this.hillchange_mode = HillChange.ROTATE;
            this.hillchange_value = packet.g2();
        } else if (opcode === 94) {
            this.hillchange_mode = HillChange.CEILING_SKEW;
        } else if (opcode === 95) {
            this.hillchange_mode = HillChange.SKEW_TO_FIT;
            this.hillchange_value = packet.g2s();
        } else if (opcode === 97) {
            this.msirotate = true;
        } else if (opcode === 98) {
        } else if (opcode === 101) {
            this.msiangle = packet.g1();
        } else if (opcode === 102) {
            this.msi = packet.g2();
        } else if (opcode === 103) {
        } else if (opcode === 104) {
            this.bgsound_volume = packet.g1();
        } else if (opcode === 105) {
            this.msimirror = true;
        } else if (opcode === 106) {
            var count = packet.g1();
            var totalWeight = 0;
            this.anim = new Int32Array(count);
            this.anim_weight = new Int32Array(count);
            
            for (i = 0; i < count; i++) {
                this.anim[i] = packet.gSmart2or4null();
                totalWeight += this.anim_weight[i] = packet.g1();
            }
            
            for (var i = 0; i < count; i++) {
                this.anim_weight[i] = this.anim_weight[i] * 65535 / totalWeight;
            }
        } else if (opcode === 107) {
            this.mapelement = packet.g2();
        } else if (opcode >= 150 && opcode < 155) {
            this.op[opcode - 150] = packet.gjstr();
        } else if (opcode === 160) {
            var J = packet.g1();
            this.quest = new Int32Array(J);
            for (var E = 0; E < J; E++) {
                this.quest[E] = packet.g2();
            }
        } else if (opcode === 162) {
            this.hillchange_mode = HillChange.ROTATE;
            this.hillchange_value = packet.g4s();
        } else if (opcode === 163) {
            this.tint_hue = packet.g1s();
            this.tint_saturation = packet.g1s();
            this.tint_lightness = packet.g1s();
            this.tint_strength = packet.g1s();
        } else if (opcode === 164 || opcode === 165 || opcode === 166) {
            if (this.member10483 === null) {
                this.member10483 = Class41.create();
            }
            this.member10483[opcode - 164] = packet.g2s();
        } else if (opcode === 167) {
            this.member10496 = packet.g2();
        } else if (opcode === 168) {
        } else if (opcode === 169) {
        } else if (opcode === 170) {
            packet.gSmart1or2s();
        } else if (opcode === 171) {
            packet.gSmart1or2s();
        } else if (opcode === 173) {
            this.bgsound_minrate = packet.g2();
            this.bgsound_maxrate = packet.g2();
        } else if (opcode === 177) {
        } else if (opcode === 178) {
            this.bgsound_size = packet.g1();
        } else if (opcode === 179) {
            this.member10504 = true;
        } else if (opcode === 186) {
            this.member10498 = packet.g1();
        } else if (opcode === 188) {
            this.member10497 = true;
        } else if (opcode === 189) {
            this.antimacro = true;
        } else if (opcode >= 190 && opcode < 196) {
            if (this.cursor === null) {
                this.cursor = new Int32Array(a);
                for (var P = 0; P < a; P++) {
                    this.cursor[P] = -1;
                }
            }
            this.cursor[opcode - 190] = packet.g2();
        } else if (opcode === 196) {
            this.member10486 = packet.g1();
        } else if (opcode === 197) {
            this.member10487 = packet.g1();
        } else if (opcode === 198) {
            this.member10481 = true;
        } else if (opcode === 199) {
            this.member8611 = false;
        } else if (opcode === 200) {
            this.member4479 = true;
        } else if (opcode === 201) {
            this.clickbox = Cuboid({ member1795: packet });
        } else if (opcode === 249) {
            var e = packet.g1();
            if (this.params === null) {
                this.params = {};
            }
            for (var o = 0; o < e; o++) {
                var v = packet.g1() === 1;
                var u = packet.g3();
                if (v) {
                    this.params[u] = packet.gjstr();
                } else {
                    this.params[u] = packet.g4s();
                }
            }
        } else if (opcode === 250) {
            this.member2541 = packet.g1();
        } else if (opcode === 251) {
            this.member2545 = packet.g1();
        } else if (opcode === 252) {
            this.member2546 = packet.g2();
            this.member2547 = packet.g2();
            this.member2548 = packet.g2() / 1000;
        } else if (opcode === 253) {
            this.member2552 = packet.g1();
        } else if (opcode === 254) {
            this.member2553 = packet.g1();
        } else if (opcode === 255) {
            this.member2554 = packet.g2();
            this.member2555 = packet.g2();
            this.member2556 = packet.g2() / 1000;
        } else if (false) {
        }
    };
    LocType.prototype.postDecode = function () {
        if (this.active === -1) {
            this.active = 0;
            if (this.model_shape !== null && this.model_shape.length === 1 && this.model_shape[0] === Class198.member2350) {
                this.active = 1;
            }
            for (var d = 0; d < 5; d++) {
                if (this.op[d] !== null) {
                    this.active = 1;
                    break;
                }
            }
        }
        if (this.active > 0 || this.member10498 === Class690.member9896) {
            this.member10497 = true;
        }
        if (this.raiseobject === -1) {
            this.raiseobject = this.blockwalk !== 0 ? 1 : 0;
        }
    };
    LocType.prototype.member4488 = function (s, u, g, e, r, o, m, d) {
        var q = r;
        var i = r + s.getWidth(m);
        var j = o;
        var n = o + s.getLength(m);
        var v = g.member4763(e, q, j, d);
        if (v === -1 || u !== v) {
            return false;
        }
        var k = g.member4763(e, i, j, d);
        if (k === -1 || u !== k) {
            return false;
        }
        var h = g.member4763(e, i, n, d);
        if (h === -1 || u !== h) {
            return false;
        }
        var t = g.member4763(e, q, n, d);
        if (t === -1 || u !== t) {
            return false;
        }
        return true;
    };
    LocType.prototype.member4483 = function (s, g, e, q, o, m, d) {
        var r = q + s.getWidth(m) / 2;
        var i = Math.ceil(r);
        r = Math.floor(r);
        var j = o + s.getLength(m) / 2;
        var n = Math.ceil(j);
        j = Math.floor(j);
        var u = g.member4763(e, r, j, d);
        if (u === -1) {
            return -1;
        }
        var k = g.member4763(e, i, j, d);
        if (k === -1) {
            return -1;
        }
        var h = g.member4763(e, i, n, d);
        if (h === -1) {
            return -1;
        }
        var t = g.member4763(e, r, n, d);
        if (t === -1) {
            return -1;
        }
        return (u + k + h + t) / 4;
    };
    LocType.prototype.member4489 = function (r, g, e, n, m, k, d) {
        var o = {};
        var j = r.getWidth(k);
        var i = r.getLength(k);
        if (this.hillchange_mode === HillChange.ROTATE || this.hillchange_mode === HillChange.FLOOR_SKEW || this.hillchange_mode === HillChange.TREE_SKEW || this.hillchange_mode === HillChange.SKEW_TO_FIT) {
            o.member2534 = new Array(j + 1);
            for (var q = 0; q < j + 1; q++) {
                o.member2534[q] = new Int32Array(i + 1);
                for (var h = 0; h < i + 1; h++) {
                    o.member2534[q][h] = g.member4763(e, n + q, m + h, d);
                    if (o.member2534[q][h] === -1) {
                        return undefined;
                    }
                }
            }
        }
        if (e < Class86.member414 - 1 && (this.hillchange_mode === HillChange.CEILING_SKEW || this.hillchange_mode === HillChange.SKEW_TO_FIT)) {
            o.member2371 = new Array(j + 1);
            for (var q = 0; q < j + 1; q++) {
                o.member2371[q] = new Int32Array(i + 1);
                for (var h = 0; h < i + 1; h++) {
                    if (d) {
                        o.member2371[q][h] = g.member4763(e + 1, n + q, m + h, d);
                    } else {
                        o.member2371[q][h] = g.member4763(e, n + q, m + h, true);
                    }
                    if (o.member2371[q][h] === -1) {
                        return undefined;
                    }
                }
            }
        }
        return o;
    };
    LocType.prototype.member4484 = function (o, d, m, k, i) {
        for (var j = d - 1; j >= 0; j--) {
            var h = this.getWidth(i);
            var g = this.getLength(i);
            for (var n = m - 1; n < m + h + 1; n++) {
                for (var e = k - 1; e < k + g + 1; e++) {
                    if (o.member8301(j, n, e)) {
                        if (o.member4112(n, e)) {
                            return j + 1;
                        } else {
                            return j;
                        }
                    }
                }
            }
        }
        return undefined;
    };
    LocType.prototype.member4481 = function () {
        return this.multiloc !== null;
    };
    LocType.prototype.member4482 = function () {
        if (this.multiloc === null || this.myList.getVarValueProvider() === null) {
            return this;
        }
        var h = -1;
        if (this.multivarbit !== -1) {
            var g = this.myList.getVarTypeProvider().getVarBitType(this.multivarbit);
            if (g !== NULL) {
                h = this.myList.getVarValueProvider().getVarBit(g);
            }
        } else if (this.multivar !== -1) {
            var d = this.myList.getVarTypeProvider().getVarType(VarDomainType.PLAYER, this.multivar);
            if (d !== NULL) {
                h = this.myList.getVarValueProvider().getVarInt(d);
            }
        }
        if (h < 0 || h >= this.multiloc.length - 1) {
            var e = this.multiloc[this.multiloc.length - 1];
            if (e !== -1) {
                return this.myList.list(e);
            } else {
                return undefined;
            }
        }
        if (this.multiloc[h] === -1) {
            return undefined;
        }
        return this.myList.list(this.multiloc[h]);
    };
    if (true) {
        LocType.prototype.member4487 = function (j, o, k, h, r, n, d) {
            if (this.model_shape === null) {
                return undefined;
            }
            if (k === Class198.member2351) {
                k = Class198.member2350;
            }
            if (Class198.member2354(k)) {
                k = Class198.member2335;
            }
            var g = this.member625 + (r ? 1 : 0) * Math.pow(2, 20) + k * Math.pow(2, 21) + h * Math.pow(2, 26);
            if (n !== undefined) {
                g += n.member6725() * Math.pow(2, 29);
            }
            var e = this.myList.member10508().find(g);
            if (e === null || d && e.member2619 === undefined) {
                var m = g + (d ? 1 : 0) * Math.pow(2, 28);
                var i = this.myList.member10509().find(m);
                if (i === null) {
                    if (j.member4588(o) && this.myList.member10509().getRemaining() > 0) {
                        var i = Class738(o, this, k, h, r, n, d);
                        j.member4589(i);
                        if (!i.member1999()) {
                            this.myList.member10509().put(i, 1, m);
                        }
                        return NULL;
                    } else {
                        return NULL;
                    }
                } else {
                    if (!i.member1999()) {
                        return NULL;
                    }
                    if (!i.member4242()) {
                        this.myList.member10509().remove(m);
                        var q = i.member2893();
                        if (q === Class379.member4232) {
                            if (false) {
                            }
                            return undefined;
                        } else {
                            return NULL;
                        }
                    }
                    e = i.member4241();
                    this.myList.member10508().put(e, 1, g);
                    this.myList.member10509().remove(m);
                    i.member2885();
                    return e;
                }
            } else {
                return e;
            }
        };
        LocType.prototype.member10510 = function (e) {
            if (e === Class198.member2351) {
                e = Class198.member2350;
            }
            if (Class198.member2354(e)) {
                e = Class198.member2335;
            }
            var j = -1;
            for (var d = 0; d < this.model_shape.length; d++) {
                if (this.model_shape[d] === e) {
                    j = d;
                    break;
                }
            }
            if (j === -1) {
                return -1;
            }
            var g = this.model[j];
            var i = 0;
            for (var h = 0; h < g.length; h++) {
                i += g[h] * Math.pow(2, h * 20);
            }
            return i;
        };
    } else {
    }
    LocType.prototype.member2142 = function () {
        if (this.anim !== null) {
            if (this.anim.length > 1) {
                var e = Math.floor(Math.random() * 65535);
                for (var d = 0; d < this.anim.length; d++) {
                    if (e <= this.anim_weight[d]) {
                        return this.anim[d];
                    }
                    e -= this.anim_weight[d];
                }
            } else {
                return this.anim[0];
            }
        }
        return -1;
    };
    LocType.prototype.member4425 = function () {
        return this.anim !== null && this.anim.length === 1 ? this.anim[0] : -1;
    };
    LocType.prototype.getParam = function (g, e) {
        if (this.params === null) {
            return e;
        }
        var d = this.params[g];
        if (d === undefined) {
            return e;
        } else {
            return d;
        }
    };
    LocType.prototype.member2941 = function (g, e) {
        if (this.params === null) {
            return e;
        }
        var d = this.params[g];
        if (d === undefined) {
            return e;
        } else {
            return d;
        }
    };
    return function (e, d, g) {
        return new LocType(e, d, g);
    };
}();