export var FloorUnderlayType = function (m) {
    var FloorUnderlayType = {};
    var d;
    var j = -1;
    if (m.member625 !== undefined && m.myList !== undefined) {
        j = m.member625;
        d = m.myList;
    } else {
        throw new Error('1350 ');
    }
    var colour = 0;
    FloorUnderlayType.getColour = function () {
        return colour;
    };
    var material = -1;
    FloorUnderlayType.getMaterial = function () {
        return material;
    };
    var materialscale = 1;
    FloorUnderlayType.getMaterialScale = function () {
        return materialscale;
    };
    var hardshadow = true;
    var i = function () {
        return {
            member625: j,
            member546: colour,
            member651: material,
            member743: materialscale,
            member2526: hardshadow
        };
    };
    FloorUnderlayType.member681 = i;
    var decode = function (o) {
        while (true) {
            var n = o.g1();
            if (n === undefined) {
                throw new Error('1351 ');
                break;
            }
            if (n === 0) {
                break;
            }
            decodeNext(o, n);
        }
    };
    FloorUnderlayType.decode = decode;
    var decodeNext = function (packet, opcode) {
        if (opcode === 1) {
            var n = packet.g3();
            if (n === 16711935) {
                colour = 0;
            } else {
                colour = n << 8 | 255;
            }
        } else if (opcode === 2) {
            material = packet.g2();
            if (material === 65535) {
                material = -1;
            }
        } else if (opcode === 3) {
            materialscale = packet.g2() / 128;
        } else if (opcode === 4) {
            hardshadow = false;
        } else if (opcode === 5) {
        } else if (false) {
        }
    };
    m = undefined;
    return FloorUnderlayType;
};