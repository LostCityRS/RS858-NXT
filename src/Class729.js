import { HillChange } from 'Class170.js';
import { Class459 } from 'Class459.js';
import { Class188 } from 'Class188.js';
import { Class95 } from 'Class95.js';
import { Class209 } from 'Class209.js';
import { Priority } from 'Class96.js';
export var EffectAnimType = function () {
    var EffectAnimType = function (k) {
        var r = {};
        var y;
        var b;
        r.getID = function () {
            return b;
        };
        if (k.member625 !== undefined && k.myList !== undefined) {
            b = k.member625;
            y = k.myList;
        } else {
            throw new Error('1440 ');
        }
        var model;
        var anim = -1;
        r.member4609 = function () {
            return anim;
        };
        var recol_s;
        var recol_d;
        var retex_s;
        var retex_d;
        var resizeh = 1;
        var resizev = 1;
        var rotation = 0;
        var x = false;
        r.member8464 = function () {
            return x;
        };
        var hillchange_mode = HillChange.member1852;
        r.member8466 = function () {
            return hillchange_mode === HillChange.ROTATE;
        };
        var hillchange_value;
        var i = true;
        r.member4494 = function () {
            return i;
        };
        r.decode = function (B) {
            while (true) {
                var A = B.g1();
                if (A === undefined) {
                    throw new Error('1441 ');
                    break;
                }
                if (A === 0) {
                    break;
                }
                decodeNext(B, A);
            }
        };
        var q = r.decode;
        var decodeNext = function (packet, opcode) {
            if (opcode === 1) {
                model = packet.gSmart2or4null();
            } else if (opcode === 2) {
                anim = packet.gSmart2or4null();
            } else if (opcode === 4) {
                resizeh = packet.g2() / Class459.member7266;
            } else if (opcode === 5) {
                resizev = packet.g2() / Class459.member7266;
            } else if (opcode === 6) {
                rotation = packet.g2();
            } else if (opcode === 7) {
                packet.g1();
            } else if (opcode === 8) {
                packet.g1();
            } else if (opcode === 9) {
                hillchange_mode = HillChange.ROTATE;
                hillchange_value = Class459.member7267;
            } else if (opcode === 10) {
                x = true;
            } else if (opcode === 15) {
                hillchange_mode = HillChange.ROTATE;
                hillchange_value = packet.g2();
            } else if (opcode === 16) {
                hillchange_mode = HillChange.ROTATE;
                hillchange_value = packet.g4();
            } else if (opcode === 40) {
                var count = packet.g1();
                recol_s = new Float32Array(count);
                recol_d = new Float32Array(count);
                for (var A = 0; A < count; A++) {
                    recol_s[A] = packet.g2();
                    recol_d[A] = packet.g2();
                }
            } else if (opcode === 41) {
                var count = packet.g1();
                retex_s = new Float32Array(count);
                retex_d = new Float32Array(count);
                for (var i = 0; i < count; i++) {
                    retex_s[i] = packet.g2();
                    retex_d[i] = packet.g2();
                }
            } else if (opcode === 44) {
                packet.g2();
            } else if (opcode === 45) {
                packet.g2();
            } else if (opcode === 46) {
                i = false;
            } else if (false) {
            }
        };
        if (true) {
            r.member7075 = function (F, E, D) {
                var C = null;
                var C = y.member9978().find(model);
                if (C === null) {
                    var B = j();
                    if (B === null) {
                        return null;
                    }
                    var A = {};
                    A.member10111 = B;
                    C = Class188(B, undefined, F);
                    y.member9978().put(C, 1, model);
                }
                return C;
            };
            var z = r.member7075;
            r.member2008 = function () {
                var A = y.member9979().find(model);
                if (A === null) {
                    if (!y.member7535().member1551(Class95.member810, model, 0)) {
                        return null;
                    }
                    A = Class209(y.member7535().getFile(Class95.member810, model, 0, Priority.member840));
                    if (A.member2463() < 13) {
                        A.member2495(2);
                    }
                    if (recol_s !== undefined) {
                        A.member2497(recol_s, recol_d);
                    }
                    if (retex_s !== undefined) {
                        A.member2499(retex_s, retex_d);
                    }
                    if (resizeh !== 1 || resizev !== 1) {
                        A.scale(resizeh, resizev, resizeh);
                    }
                    y.member9979().put(A, 1, model);
                }
                return A;
            };
            var j = r.member2008;
        } else {
        }
        k = undefined;
        return r;
    };
    return EffectAnimType;
}();