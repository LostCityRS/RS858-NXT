import { Class432 } from 'Class432.js';
import { Class41 } from 'Class41.js';
import { Cuboid } from 'Class166.js';
import { Class454 } from 'Class454.js';
import { VarDomainType } from 'Class465.js';
import { Class542 } from 'Class542.js';
import { Class188 } from 'Class188.js';
import { Class209 } from 'Class209.js';
import { Class95 } from 'Class95.js';
import { Priority } from 'Class96.js';
import { Class86 } from 'Class86.js';
export var NPCType = function () {
    var b = true;
    var a = 6;
    var NPCType = function (e, d, g) {
        this.myList;
        this.member625;
        this.op = null;
        if (e !== undefined && d !== undefined && g !== undefined) {
            this.member625 = e;
            this.myList = d;
            this.op = g;
        } else {
            throw new Error('1665 ');
        }
        this.name = 'null';
        this.members = false;
        this.cursor = null;
        this.attackcursor = -1;
        this.quest = null;
        this.headicon_id = undefined;
        this.headicon_subid = undefined;
        this.icon = -1;
        this.overlayheight = -1;
        this.reprioritiseattackop = -1;
        this.vislevel = -1;
        this.params = null;
        this.member8611 = true;
        this.spotshadowtexture = -1;
        this.spotshadowtexturealpha = 0;
        this.models = null;
        this.headmodel = null;
        this.modeloffset = undefined;
        this.recol_s = null;
        this.recol_d = null;
        this.member8617 = null;
        this.recolindex = null;
        this.retex_s = null;
        this.retex_d = null;
        this.retexindex = null;
        this.tint_hue, this.tint_saturation, this.tint_lightness;
        this.tint_strength = 0;
        this.resize = null;
        this.ambient = 64, this.contrast = 0;
        this.antimacro = true;
        this.member8629 = 0;
        this.picksizeshift = 0;
        this.clickbox = null;
        this.bas = -1;
        this.size = 1;
        this.drawabove = false;
        this.drawbelow = false;
        this.follower = false;
        this.turnspeed = 32;
        this.active = true;
        this.walksmoothing = true;
        this.spotshadow = true;
        this.member8637 = 0;
        this.respawndir = Math.PI;
        this.defaultmovemode = Class432.member6229;
        this.minimap = true;
        this.mapelement = -1;
        this.multinpc = null;
        this.multivar = -1;
        this.multivarbit = -1;
        this.bgsound_ready = -1;
        this.bgsound_crawl = -1;
        this.bgsound_walk = -1;
        this.bgsound_run = -1;
        this.bgsound_range = 0;
        this.bgsound_size = 0;
        this.bgsound_volume = 255;
        this.member8652 = false;
        this.bgsound_minrate = 256, this.bgsound_maxrate = 256;
        this.member8655 = false;
    };
    NPCType.prototype.member682 = function () {
        return this.member625;
    };
    NPCType.prototype.getOps = function () {
        return this.op;
    };
    NPCType.prototype.getName = function () {
        return this.name;
    };
    NPCType.prototype.getCursor = function (d) {
        if (this.cursor === null) {
            return -1;
        } else {
            return this.cursor[d];
        }
    };
    NPCType.prototype.getReprioritiseAttackOp = function () {
        return this.reprioritiseattackop;
    };
    NPCType.prototype.getVisLevel = function () {
        return this.vislevel;
    };
    NPCType.prototype.getQuests = function () {
        return this.quest;
    };
    NPCType.prototype.getIcon = function () {
        return this.icon;
    };
    NPCType.prototype.member4494 = function () {
        return this.member8611;
    };
    NPCType.prototype.getSpotShadowTexture = function () {
        return this.spotshadowtexture;
    };
    NPCType.prototype.getSpotShadowTextureAlpha = function () {
        return this.spotshadowtexturealpha;
    };
    NPCType.prototype.getOverlayHeight = function () {
        return this.overlayheight;
    };
    NPCType.prototype.getModels = function () {
        return this.models;
    };
    NPCType.prototype.getHeadModels = function () {
        return this.headmodel;
    };
    NPCType.prototype.getHeadIconIDs = function () {
        return this.headicon_id;
    };
    NPCType.prototype.getHeadIconSubIDs = function () {
        return this.headicon_subid;
    };
    NPCType.prototype.getRecolS = function () {
        return this.recol_s;
    };
    NPCType.prototype.getRecolD = function () {
        return this.recol_d;
    };
    NPCType.prototype.getRecolIndices = function () {
        return this.recolindex;
    };
    NPCType.prototype.getRetexS = function () {
        return this.retex_s;
    };
    NPCType.prototype.getRetexD = function () {
        return this.retex_d;
    };
    NPCType.prototype.getRetexIndices = function () {
        return this.retexindex;
    };
    NPCType.prototype.getResize = function () {
        return this.resize;
    };
    NPCType.prototype.getAmbient = function () {
        return this.ambient;
    };
    NPCType.prototype.getPickSizeShift = function () {
        return this.picksizeshift;
    };
    NPCType.prototype.getClickbox = function () {
        return this.clickbox;
    };
    NPCType.prototype.member8665 = function () {
        return this.member8629;
    };
    NPCType.prototype.getBAS = function () {
        return this.bas;
    };
    NPCType.prototype.member7795 = function () {
        return this.size;
    };
    NPCType.prototype.getTurnSpeed = function () {
        return this.turnspeed;
    };
    NPCType.prototype.getActive = function () {
        return this.active;
    };
    NPCType.prototype.getFollower = function () {
        return this.follower;
    };
    NPCType.prototype.getDrawAbove = function () {
        return this.drawabove;
    };
    NPCType.prototype.getDrawBelow = function () {
        return this.drawbelow;
    };
    NPCType.prototype.getMinimap = function () {
        return this.minimap;
    };
    NPCType.prototype.getMapElement = function () {
        return this.mapelement;
    };
    NPCType.prototype.getBackgroundSoundReady = function () {
        return this.bgsound_ready;
    };
    NPCType.prototype.getBackgroundSoundCrawl = function () {
        return this.bgsound_crawl;
    };
    NPCType.prototype.getBackgroundSoundWalk = function () {
        return this.bgsound_walk;
    };
    NPCType.prototype.getBackgroundSoundRun = function () {
        return this.bgsound_run;
    };
    NPCType.prototype.getBackgroundSoundRange = function () {
        return this.bgsound_range;
    };
    NPCType.prototype.getBackgroundSoundSize = function () {
        return this.bgsound_size;
    };
    NPCType.prototype.getBackgroundSoundVolume = function () {
        return this.bgsound_volume;
    };
    NPCType.prototype.member8677 = function () {
        return this.member8652;
    };
    NPCType.prototype.getBackgroundSoundMinRate = function () {
        return this.bgsound_minrate;
    };
    NPCType.prototype.getBackgroundSoundMaxRate = function () {
        return this.bgsound_maxrate;
    };
    NPCType.prototype.decode = function (g) {
        var e = -1;
        while (true) {
            var d = g.g1();
            if (d === 0) {
                break;
            }
            this.decodeNext(g, d, e);
            if (g.getPos() > g.getSize()) {
                throw new Error('1666 ' + this.member625 + '1666 ' + d + '1666 ' + e);
            }
            e = d;
        }
    };
    NPCType.prototype.decodeNext = function (K, i, F) {
        if (i === 1) {
            var z = K.g1();
            this.models = new Array(z);
            for (var D = 0; D < z; D++) {
                this.models[D] = K.gSmart2or4null();
            }
        } else if (i === 2) {
            this.name = K.gjstr();
        } else if (i === 12) {
            this.size = K.g1();
        } else if (i >= 30 && i < 35) {
            this.op[i - 30] = K.gjstr();
        } else if (i === 39) {
            this.contrast = K.g1s() * 5;
        } else if (i === 40) {
            var A = K.g1();
            this.recol_s = new Array(A);
            this.recol_d = new Array(A);
            for (var u = 0; u < A; u++) {
                this.recol_s[u] = K.g2();
                this.recol_d[u] = K.g2();
            }
        } else if (i === 41) {
            var M = K.g1();
            this.retex_s = new Array(M);
            this.retex_d = new Array(M);
            for (var t = 0; t < M; t++) {
                this.retex_s[t] = K.g2s();
                this.retex_d[t] = K.g2s();
            }
        } else if (i === 42) {
            var e = K.g1();
            this.member8617 = new Array(e);
            for (var m = 0; m < e; m++) {
                this.member8617[m] = K.g1s();
            }
        } else if (i === 44) {
            var J = K.g2();
            var h = 0;
            for (var B = J; B > 0; B = B >> 1) {
                h++;
            }
            this.recolindex = new Array(h);
            var v = 0;
            for (var B = 0; B < h; B++) {
                if ((J & 1 << B) > 0) {
                    this.recolindex[B] = v++;
                } else {
                    this.recolindex[B] = -1;
                }
            }
        } else if (i === 45) {
            var H = K.g2();
            var I = 0;
            for (var B = H; B > 0; B = B >> 1) {
                I++;
            }
            this.retexindex = new Array(I);
            var v = 0;
            for (var B = 0; B < I; B++) {
                if ((H & 1 << B) > 0) {
                    this.retexindex[B] = v++;
                } else {
                    this.retexindex[B] = -1;
                }
            }
        } else if (i === 60) {
            this.headmodel_count = K.g1();
            this.headmodel = new Array(z);
            for (D = 0; D < this.headmodel_count; D++) {
                this.headmodel[D] = K.gSmart2or4null();
            }
        } else if (i === 93) {
            this.minimap = false;
        } else if (i === 95) {
            this.vislevel = K.g2();
        } else if (i === 97 || i === 98) {
            if (this.resize === null) {
                this.resize = Class41.create();
                this.resize[0] = this.resize[1] = this.resize[2] = 128;
            }
            if (i === 97) {
                this.resize[0] = this.resize[2] = K.g2();
            } else {
                this.resize[1] = K.g2();
            }
        } else if (i === 99) {
            this.drawabove = true;
        } else if (i === 100) {
            this.ambient = K.g1s() + 64;
        } else if (i === 101) {
            this.contrast = K.g1s() * 5;
        } else if (i === 102) {
            var E = K.g1();
            var L = 0;
            var B = E;
            while (B !== 0) {
                L++;
                B >>= 1;
            }
            this.headicon_id = new Array(L);
            this.headicon_subid = new Array(L);
            for (var N = 0; N < L; N++) {
                if ((E & 1 << N) === 0) {
                    this.headicon_id[N] = -1;
                    this.headicon_subid[N] = -1;
                } else {
                    this.headicon_id[N] = K.gSmart2or4null();
                    this.headicon_subid[N] = K.gSmart1or2null();
                }
            }
        } else if (i === 103) {
            this.turnspeed = K.g2();
        } else if (i === 106 || i === 118) {
            this.multivarbit = K.g2();
            if (this.multivarbit === 65535) {
                this.multivarbit = -1;
            }
            this.multivar = K.g2();
            if (this.multivar === 65535) {
                this.multivar = -1;
            }
            var d = -1;
            if (i === 118) {
                d = K.g2();
                if (d === 65535) {
                    d = -1;
                }
            }
            var k = K.g1();
            this.multinpc = new Array(k + 2);
            for (var j = 0; j <= k; j++) {
                this.multinpc[j] = K.g2();
                if (this.multinpc[j] === 65535) {
                    this.multinpc[j] = -1;
                }
            }
            this.multinpc[k + 1] = d;
        } else if (i === 107) {
            this.active = false;
        } else if (i === 109) {
            this.walksmoothing = false;
        } else if (i === 111) {
            this.spotshadow = false;
        } else if (i === 113) {
            K.g2();
            K.g2();
        } else if (i === 114) {
            K.g1s();
            K.g1s();
        } else if (i === 119) {
            this.member8637 = K.g1();
        } else if (i === 121) {
            this.modeloffset = new Array(this.models.length);
            var r = K.g1();
            for (var o = 0; o < r; o++) {
                var s = K.g1();
                this.modeloffset[s] = Class41.create();
                this.modeloffset[s][0] = K.g1s();
                this.modeloffset[s][1] = K.g1s();
                this.modeloffset[s][2] = K.g1s();
            }
        } else if (i === 123) {
            this.overlayheight = K.g2();
        } else if (i === 125) {
            this.respawndir = K.g1s();
        } else if (i === 127) {
            this.bas = K.g2();
        } else if (i === 128) {
            this.defaultmovemode = K.g1();
        } else if (i === 134) {
            this.bgsound_ready = K.g2();
            if (this.bgsound_ready === 65535) {
                this.bgsound_ready = -1;
            }
            this.bgsound_crawl = K.g2();
            if (this.bgsound_crawl === 65535) {
                this.bgsound_crawl = -1;
            }
            this.bgsound_walk = K.g2();
            if (this.bgsound_walk === 65535) {
                this.bgsound_walk = -1;
            }
            this.bgsound_run = K.g2();
            if (this.bgsound_run === 65535) {
                this.bgsound_run = -1;
            }
            this.bgsound_range = K.g1();
        } else if (i === 137) {
            this.attackcursor = K.g2();
            if (this.cursor === null) {
                this.cursor = new Array(a);
                for (var N = 0; N < a; N++) {
                    this.cursor[N] = -1;
                }
            }
            this.cursor[1] = this.attackcursor;
        } else if (i === 138) {
            this.icon = K.gSmart2or4null();
        } else if (i === 139) {
            this.member8681 = K.gSmart2or4null();
        } else if (i === 140) {
            this.bgsound_volume = K.g1();
        } else if (i === 141) {
            this.follower = true;
        } else if (i === 142) {
            this.mapelement = K.g2();
        } else if (i === 143) {
            this.drawbelow = true;
        } else if (i >= 150 && i < 155) {
            this.op[i - 150] = K.gjstr();
            if (!this.myList.getAllowMembers()) {
                this.op[i - 150] = null;
            }
        } else if (i === 155) {
            this.tint_hue = K.g1s();
            this.tint_saturation = K.g1s();
            this.tint_lightness = K.g1s();
            this.tint_strength = K.g1s();
        } else if (i === 158) {
            this.reprioritiseattackop = 1;
        } else if (i === 159) {
            this.reprioritiseattackop = 0;
        } else if (i === 160) {
            var G = K.g1();
            this.quest = new Array(G);
            for (var C = 0; C < G; C++) {
                this.quest[C] = K.g2();
            }
        } else if (i === 162) {
            this.member8652 = true;
        } else if (i === 163) {
            K.g1();
        } else if (i === 164) {
            this.bgsound_minrate = K.g2();
            this.bgsound_maxrate = K.g2();
        } else if (i === 165) {
            this.picksizeshift = K.g1();
        } else if (i === 168) {
            this.bgsound_size = K.g1();
        } else if (i === 169) {
            this.antimacro = false;
        } else if (i >= 170 && i < 176) {
            if (this.cursor === null) {
                this.cursor = new Array(a);
                for (var N = 0; N < a; N++) {
                    this.cursor[N] = -1;
                }
            }
            this.cursor[i - 170] = K.g2();
        } else if (i === 178) {
            this.member8611 = false;
        } else if (i === 179) {
            this.clickbox = Cuboid({ member1795: K });
        } else if (i === 180) {
            this.member8629 = K.g1() * 1000 / 50;
        } else if (i === 181) {
            this.spotshadowtexture = p.g2();
            this.spotshadowtexturealpha = p.g1();
        } else if (i === 182) {
            this.member8655 = true;
        } else if (i === 249) {
            var g = K.g1();
            if (this.params === null) {
                this.params = {};
            }
            for (var q = 0; q < g; q++) {
                var y = K.g1() === 1;
                var x = K.g3();
                if (y) {
                    this.params[x] = K.gjstr();
                } else {
                    this.params[x] = K.g4s();
                }
            }
        } else if (false) {
        }
    };
    NPCType.prototype.postDecode = function () {
        if (this.models === null) {
            this.models = new Array(0);
        }
        if (this.reprioritiseattackop === -1) {
            if (this.myList.member8683() === Class454.member3713) {
                this.reprioritiseattackop = 1;
            } else {
                this.reprioritiseattackop = 0;
            }
        }
    };
    NPCType.prototype.isMultiNPC = function () {
        return this.multinpc !== null;
    };
    NPCType.prototype.member8685 = function () {
        return this.member8655;
    };
    NPCType.prototype.getMultiNPC = function () {
        if (this.multinpc === null || this.myList.getVarValueProvider() === null) {
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
        if (h < 0 || h >= this.multinpc.length - 1) {
            var e = this.multinpc[this.multinpc.length - 1];
            if (e !== -1) {
                return this.myList.list(e);
            } else {
                return undefined;
            }
        }
        if (this.multinpc[h] === -1) {
            return undefined;
        }
        return this.myList.list(this.multinpc[h]);
    };
    
    if (true) {
        NPCType.prototype.member8688 = function (e, n, r, j, o) {
            var k = this.member625;
            if (o !== undefined) {
                k += o.member6725() * Math.pow(2, 16);
            }
            var d = this.myList.member8689();
            var s = d.find(k);
            if (s === null) {
                var m = this.myList.member8690().find(k);
                if (m === null) {
                    if (this.myList.member8690().getRemaining() > 0) {
                        var m = Class542(r, this, o);
                        if (n.member2939(m)) {
                            this.myList.member8690().put(m, 1, k);
                        }
                        return NULL;
                    } else {
                        return NULL;
                    }
                } else {
                    var g = m.member2723();
                    if (!g.member2859) {
                        return NULL;
                    } else if (!g.member2863) {
                        this.myList.member8690().remove(k);
                        return NULL;
                    } else {
                        var i = m.member2893();
                        var h = undefined;
                        if (i !== NULL) {
                            var q = Class188(undefined, undefined, e, undefined, undefined, undefined, i.member680);
                            h = { member2621: q };
                            if (i.member2619 !== undefined) {
                                h.member2619 = Class209(undefined, undefined, i.member2619);
                            }
                            d.put(h, 1, k);
                        }
                        this.myList.member8690().remove(k);
                        m.member2885();
                        if (h !== undefined) {
                            h.member2621.member563();
                        }
                        return h;
                    }
                }
            } else {
                return s;
            }
        };
        NPCType.prototype.member7546 = function (i, h, d, j) {
            if (this.multinpc !== null) {
                var e = this.getMultiNPC();
                if (e === undefined || e === null) {
                    return NULL;
                }
                return e.member7546(i, h, d, j);
            }
            var g = this.member8688(i, h, d, this.models, j);
            if (g === undefined) {
                return undefined;
            } else if (g !== NULL) {
                return g.member2619;
            } else {
                return NULL;
            }
        };
        NPCType.prototype.member7545 = function (i, h, d, j) {
            if (this.multinpc !== null) {
                var e = this.getMultiNPC();
                if (e === undefined || e === null) {
                    return NULL;
                }
                return e.member7545(i, h, d, j);
            }
            var g = this.member8688(i, h, d, this.models, j);
            if (g === undefined) {
                return undefined;
            } else if (g !== NULL) {
                return g.member2621;
            } else {
                return NULL;
            }
        };
        NPCType.prototype.member7544 = function (e) {
            if (this.multinpc !== null) {
                var d = this.getMultiNPC();
                if (d === undefined || d === null) {
                    return null;
                }
                return d.member7544(e);
            }
            if (this.headmodel === null && (e === undefined || e.getModels() === undefined)) {
                return undefined;
            }
            return this.member2008(this.myList.member8691(), this.headmodel, e);
        };
        NPCType.prototype.member7543 = function (e, g) {
            if (this.multinpc !== null) {
                var d = this.getMultiNPC();
                if (d === undefined || d === null) {
                    return null;
                }
                return d.member7543(e, g);
            }
            if (this.headmodel === null && (g === undefined || g.getModels() === undefined)) {
                return undefined;
            }
            return this.member7075(e, this.myList.member8692(), this.myList.member8691(), this.headmodel, g);
        };
        NPCType.prototype.member2008 = function (d, e, i) {
            var g = this.member625;
            if (i !== undefined) {
                g += i.member6725() * Math.pow(2, 16);
            }
            var n = d.find(g);
            if (n === null) {
                var j = e;
                if (i !== undefined && i.getModels() !== undefined) {
                    j = i.getModels();
                }
                var m = true;
                for (var k = 0; k < j.length; k++) {
                    if (j[k] != -1) {
                        if (!this.myList.member7535().member1551(Class95.member810, j[k], 0)) {
                            m = false;
                        }
                    }
                }
                if (!m) {
                    return null;
                }
                var h = new Array(j.length);
                for (k = 0; k < j.length; k++) {
                    if (j[k] != -1) {
                        h[k] = Class209(this.myList.member7535().getFile(Class95.member810, j[k], 0, Priority.member840));
                        if (h[k].member2463() < 13) {
                            h[k].member2495(Class86.member719);
                        }
                        if (this.modeloffset !== undefined && this.modeloffset[k] !== undefined) {
                            h[k].translate(modeloffset[k]);
                        }
                    }
                }
                if (j.length === 1) {
                    n = h[0];
                } else {
                    n = Class209(undefined, h);
                }
                if (this.recol_s !== null) {
                    if (i !== undefined && i.getRecolD() !== undefined) {
                        n.member2497(this.recol_s, i.getRecolD());
                    } else if (this.member8617 !== null) {
                        throw new Error('1667 ');
                    } else if (this.recol_d !== null) {
                        n.member2497(this.recol_s, this.recol_d);
                    }
                }
                if (this.retex_s !== null) {
                    if (i !== undefined && i.getRetexD() !== undefined) {
                        n.member2499(this.retex_s, i.getRetexD());
                    } else if (this.retex_d !== null) {
                        n.member2499(this.retex_s, this.retex_d);
                    }
                }
                if (this.ambient !== undefined) {
                    n.member2500(this.ambient);
                }
                d.put(n, 1, g);
            }
            return n;
        };
        NPCType.prototype.member7075 = function (j, h, g, m, k) {
            var i = this.member625;
            if (k !== undefined) {
                i += k.member6725() * Math.pow(2, 16);
            }
            var e = h.find(i);
            if (e === null) {
                var d = this.member2008(g, m, k);
                if (d === null) {
                    return null;
                }
                e = Class188(d, undefined, j);
                h.put(e, 1, i);
            }
            return e;
        };
    } else {
    }
    NPCType.prototype.getParam = function (g, e) {
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
    NPCType.prototype.member2941 = function (g, e) {
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
        return new NPCType(e, d, g);
    };
}();