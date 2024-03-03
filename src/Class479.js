import { Class95 } from 'Class95.js';
import { Priority } from 'Class96.js';
import { Class209 } from 'Class209.js';
export var IDKType = function () {
    var IDKType = function (k) {
        var u = {};
        var myList;
        var b = -1;
        if (k.member625 !== undefined && k.myList !== undefined) {
            b = k.member625;
            myList = k.myList;
        } else {
            throw new Error('1214 ');
        }
        var model = null;
        var head = [
            -1,
            -1,
            -1,
            -1,
            -1
        ];
        var recol_s = null;
        var recol_d = null;
        var recolindex = null;
        var retex_s = null;
        u.getRetexS = function () {
            return retex_s;
        };
        var retex_d = null;
        u.getRetexD = function () {
            return retex_d;
        };
        var retexindex = null;
        var j = function () {
            return {
                member625: b,
                member546: member546,
                texture: texture,
                member743: member743,
                member2526: member2526
            };
        };
        u.member681 = j;
        var decode = function (packet) {
            while (true) {
                var opcode = packet.g1();
                if (opcode === undefined) {
                    throw new Error('1215 ');
                    break;
                }
                if (opcode === 0) {
                    break;
                }
                decodeNext(packet, opcode);
            }
        };
        u.decode = decode;
        var decodeNext = function (packet, opcode) {
            if (opcode === 1) {
                packet.g1();
            } else if (opcode === 2) {
                var count = packet.g1();
                model = new Array(count);
                for (var i = 0; i < count; i++) {
                    model[i] = packet.gSmart2or4null();
                }
            } else if (opcode === 40) {
                var count = packet.g1();
                recol_s = new Array(count);
                recol_d = new Array(count);
                for (var y = 0; y < count; y++) {
                    recol_s[y] = packet.g2();
                    recol_d[y] = packet.g2();
                }
            } else if (opcode === 41) {
                var I = packet.g1();
                retex_s = new Array(I);
                retex_d = new Array(I);
                for (var E = 0; E < I; E++) {
                    retex_s[E] = packet.g2s();
                    retex_d[E] = packet.g2s();
                }
            } else if (opcode === 44) {
                var G = packet.g2();
                var J = 0;
                for (var B = G; B > 0; B = B >> 1) {
                    J++;
                }
                recolindex = new Array(J);
                var C = 0;
                for (var B = 0; B < J; B++) {
                    if ((G & 1 << B) > 0) {
                        recolindex[B] = C++;
                    } else {
                        recolindex[B] = -1;
                    }
                }
            } else if (opcode === 45) {
                var K = packet.g2();
                var D = 0;
                for (var B = K; B > 0; B = B >> 1) {
                    D++;
                }
                retexindex = new Array(D);
                var C = 0;
                for (var B = 0; B < D; B++) {
                    if ((K & 1 << B) > 0) {
                        retexindex[B] = C++;
                    } else {
                        retexindex[B] = -1;
                    }
                }
            } else if (opcode >= 60 && opcode < 65) {
                head[opcode - 60] = packet.gSmart2or4null();
            } else if (false) {
            }
        };
        if (true) {
            var h = function () {
                if (model === null) {
                    return true;
                }
                var z = true;
                var y = myList.member7535();
                for (var A = 0; A < model.length; A++) {
                    if (y.getFile(Class95.member810, model[A], 0, Priority.member840) === null) {
                        z = false;
                    }
                }
                return z;
            };
            u.member7662 = h;
            var g = function () {
                if (model == null) {
                    return null;
                }
                var z = myList.member7535();
                var C = new Array(model.length);
                for (var B = 0; B < model.length; B++) {
                    var y = z.getFile(Class95.member810, model[B], 0, Priority.member840);
                    if (y === null) {
                        return null;
                    }
                    C[B] = Class209(y);
                }
                for (var B = 0; B < model.length; B++) {
                    if (C[B].member2463() < 13) {
                        C[B].member2495(2);
                    }
                }
                var A = null;
                if (C.length === 1) {
                    A = C[0];
                } else {
                    A = Class209(undefined, C);
                }
                if (A === null) {
                    return null;
                }
                if (recol_s !== undefined && recol_s !== null) {
                    A.member2497(recol_s, recol_d);
                }
                if (retex_s !== null) {
                    A.member2499(retex_s, retex_d);
                }
                return A;
            };
            u.member7546 = g;
            var d = function () {
                var z = myList.member7535();
                var y = true;
                for (var A = 0; A < head.length; A++) {
                    if (head[A] != -1 && z.getFile(Class95.member810, head[A], 0, Priority.member840) === null) {
                        y = false;
                    }
                }
                return y;
            };
            u.member7663 = d;
            var c = function () {
                var z = myList.member7535();
                var C = new Array(0);
                for (var B = 0; B < head.length; B++) {
                    if (head[B] === -1) {
                        continue;
                    }
                    var y = z.getFile(Class95.member810, head[B], 0, Priority.member840);
                    if (y === null) {
                        return null;
                    }
                    C[C.length] = Class209(y);
                }
                for (var B = 0; B < C.length; B++) {
                    if (C[B].member2463() < 13) {
                        C[B].member2495(2);
                    }
                }
                var A = null;
                if (C.length === 1) {
                    A = C[0];
                } else {
                    A = Class209(undefined, C);
                }
                if (A === null) {
                    return null;
                }
                if (recol_s !== undefined && recol_s !== null) {
                    A.member2497(recol_s, recol_d);
                }
                if (retex_s !== null) {
                    A.member2499(retex_s, retex_d);
                }
                return A;
            };
            u.member7544 = c;
        } else {
        }
        k = undefined;
        return u;
    };
    IDKType.member7664 = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        14
    ];
    IDKType.member7665 = [
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        15
    ];
    return IDKType;
}();