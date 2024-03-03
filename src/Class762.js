import { Class143 } from 'Class143.js';
export var FloorOverlayType = function () {
    var a = 74;
    return function (i) {
        var FloorOverlayType = {};
        var u;
        var b = -1;
        if (i.member625 !== undefined && i.myList !== undefined) {
            b = i.member625;
            u = i.myList;
        } else {
            throw new Error('1102 ');
        }
        var q = 0;
        FloorOverlayType.getColour = function () {
            return q;
        };
        var y = -1;
        FloorOverlayType.getMaterial = function () {
            return y;
        };
        var materialscale = 1;
        FloorOverlayType.getMaterialScale = function () {
            return materialscale;
        };
        var colour = 0;
        FloorOverlayType.getColour = function () {
            return colour;
        };
        var priority = 8;
        FloorOverlayType.getPriority = function () {
            return priority;
        };
        var blend = false;
        FloorOverlayType.getBlend = function () {
            return blend;
        };
        var hardshadow = true;
        var waterfogcolour = 0;
        var waterfogscale = 64;
        var waterfogoffset = 255;
        var z = 63;
        var d = 0;
        var k = 64;
        var h = function () {
            return {
                member625: b,
                member546: q,
                member10266: colour,
                member651: y,
                member743: materialscale,
                priority: priority,
                member10267: blend,
                member2526: hardshadow
            };
        };
        FloorOverlayType.member681 = h;
        var n = function (B) {
            while (true) {
                var A = B.g1();
                if (A === undefined) {
                    throw new Error('1103 ');
                    break;
                }
                if (A === 0) {
                    break;
                }
                m(B, A);
            }
        };
        FloorOverlayType.decode = n;
        var m = function (packet, opcode) {
            if (opcode === 1) {
                var B = packet.g3();
                if (B === 16711935) {
                    q = 0;
                } else {
                    q = convertColour(B);
                }
            } else if (opcode === 2) {
                y = packet.g1();
            } else if (opcode === 3) {
                y = packet.g2();
                if (y === 65535) {
                    y = -1;
                }
            } else if (opcode === 5) {
            } else if (opcode === 7) {
                var A = packet.g3();
                if (A === 16711935) {
                    colour = 0;
                } else {
                    colour = convertColour(A);
                }
            } else if (opcode === 8) {
            } else if (opcode === 9) {
                materialscale = packet.g2() / 128;
            } else if (opcode === 10) {
                hardshadow = false;
            } else if (opcode === 11) {
                priority = packet.g1();
            } else if (opcode === 12) {
                blend = true;
            } else if (opcode === 13) {
                waterfogcolour = packet.g3();
            } else if (opcode === 14) {
                waterfogscale = packet.g1() * 4;
            } else if (opcode === 16) {
                waterfogoffset = packet.g1();
            } else if (opcode === 20) {
                z = packet.g2();
            } else if (opcode === 21) {
                d = packet.g1();
            } else if (opcode === 22) {
                k = packet.g2();
            } else if (false) {
            }
        };
        var convertColour = function (B) {
            var A = Class143.member1443(B);
            A = (A & 127) * a / 127 | A & ~127;
            return Class143.member1441(A) << 8 | 255;
        };
        i = undefined;
        return FloorOverlayType;
    };
}();