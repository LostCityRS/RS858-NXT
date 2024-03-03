import { Class410 } from 'Class410.js';
export var LightType = function (k) {
    var LightType = {};
    var myList;
    var g = -1;
    if (k.member625 !== undefined && k.myList !== undefined) {
        g = k.member625;
        myList = k.myList;
    } else {
        throw new Error('1752 ');
    }
    var function0 = Class410.member4704;
    LightType.getFunction = function () {
        return function0;
    };
    var offset = 0;
    LightType.getOffset = function () {
        return offset;
    };
    var amplitude = 2048;
    LightType.getAmplitude = function () {
        return amplitude;
    };
    var frequency = 2048;
    LightType.getFrequency = function () {
        return frequency;
    };
    var b = function (packet) {
        while (true) {
            var opcode = packet.g1();
            if (opcode === undefined) {
                throw new Error('1753 ');
                break;
            }
            if (opcode === 0) {
                break;
            }
            decodeNext(packet, opcode);
        }
    };
    LightType.decode = b;
    var decodeNext = function (packet, opcode) {
        if (opcode === 1) {
            function0 = packet.g1();
        } else if (opcode === 2) {
            frequency = packet.g2();
        } else if (opcode === 3) {
            amplitude = packet.g2();
        } else if (opcode === 4) {
            offset = packet.g2s();
        } else if (false) {
        }
    };
    k = undefined;
    return LightType;
};