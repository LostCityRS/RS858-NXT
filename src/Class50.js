import { Class49 } from 'Class49.js';
export var Class50 = function () {
    var b = {
        member358: 400,
        member359: 400,
        member360: 400,
        member361: 56,
        member362: 32,
        member363: 10,
        member364: Class49.member313(),
        member365: new Float32Array(4),
        member366: 8,
        member367: new Float32Array([
            0,
            0,
            1,
            1,
            0,
            0,
            0,
            0
        ]),
        member368: 0,
        member369: 1,
        member370: 2,
        member371: 0,
        member372: 1,
        member373: 2,
        member374: 0,
        member375: 1,
        member376: 2,
        member377: 3
    };
    b.member378 = new Float32Array(12);
    b.member378[0] = 1;
    b.member378[4] = 1;
    b.member378[8] = 1;
    b.member379 = new Float32Array(b.member358 * 12);
    for (var a = 0; a < b.member358; a++) {
        b.member379[a * 12] = 1;
        b.member379[a * 12 + 4] = 1;
        b.member379[a * 12 + 8] = 1;
    }
    b.member380 = new Float32Array(b.member359 * 4);
    b.member381 = new Float32Array(b.member360 * b.member366);
    for (var a = 0; a < b.member360; a++) {
        b.member381[a * b.member366 + 2] = 1;
        b.member381[a * b.member366 + 3] = 1;
    }
    b.member382 = new Uint8Array(b.member358);
    b.member383 = new Uint8Array(b.member359);
    b.member384 = new Uint8Array(b.member360);
    return b;
}();