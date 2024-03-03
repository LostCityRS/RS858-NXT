import { Class143 } from 'Class143.js';
export var Class146 = function () {
    var c = {
        member1360: {
            type: member53.member12,
            member38: -1
        },
        size: {
            type: member53.member13,
            member38: 0
        },
        member1361: {
            type: member53.member13,
            member38: 0
        },
        member1362: {
            type: member53.member13,
            member38: 0
        },
        member1363: {
            type: member53.member13,
            member38: 0
        },
        member1364: {
            type: member53.member13,
            member38: 0
        },
        member1365: {
            type: member53.member13,
            member38: 0
        },
        member1368: {
            type: member53.member10,
            member38: 0
        },
        member1369: {
            type: member53.member10,
            member38: 0
        },
        member1366: {
            type: member53.member13,
            member38: 0
        },
        member1367: {
            type: member53.member13,
            member38: 0
        },
        member1384: {
            type: member53.member13,
            member38: 0
        },
        member1385: {
            type: member53.member13,
            member38: 0
        },
        member1378: {
            type: member53.member13,
            member38: 0
        },
        member1370: {
            type: member53.member10,
            member38: 0
        },
        member1371: {
            type: member53.member10,
            member38: 0
        },
        member1455: {
            type: member53.member13,
            member38: 0
        },
        member1379: {
            type: member53.member13,
            member38: 0
        },
        member1380: {
            type: member53.member13,
            member38: 0
        },
        member1338: {
            type: member53.member13,
            member38: 0
        },
        member1381: {
            type: member53.member13,
            member38: 0
        },
        member1382: {
            type: member53.member13,
            member38: 0
        },
        member1383: {
            type: member53.member13,
            member38: 0
        },
        member1456: {
            type: member53.member13,
            member38: 0
        },
        member1457: {
            type: member53.member13,
            member38: 0
        },
        member1458: {
            type: member53.member13,
            member38: 0
        },
        member1459: {
            type: member53.member13,
            member38: 0
        },
        member1460: {
            type: member53.member13,
            member38: 0
        },
        member1461: {
            type: member53.member13,
            member38: 0
        },
        member1462: {
            type: member53.member13,
            member38: 0
        },
        member1463: {
            type: member53.member13,
            member38: 0
        },
        member1395: {
            type: member53.member13,
            member38: 0
        },
        member1394: {
            type: member53.member13,
            member38: 0
        },
        member1464: {
            type: member53.member13,
            member38: 0
        }
    };
    var a = undefined;
    var b = function (e, d) {
        if (a === undefined) {
            a = member53.member34(c);
        }
        if (e !== undefined) {
            this.member679 = member53.member29(a);
            member53.member37(c, this.member679);
            this.member25(e);
        } else if (d !== undefined) {
            this.member679 = member53.member29(d.byteLength);
            member53.member24.set(d, this.member679.member31);
        } else {
            throw new Error('1288 ');
        }
    };
    b.prototype.set = function (e, d) {
        e.member21[this.member679.member31 + e.member31] = d;
    };
    b.prototype.get = function (d) {
        return d.member21[this.member679.member31 + d.member31];
    };
    b.prototype.member25 = function (d) {
        this.set(c.member1360, d.getID());
        this.set(c.size, d.getSize());
        this.set(c.member1361, d.member1398() ? 1 : 0);
        this.set(c.member1362, d.member1399() ? 1 : 0);
        this.set(c.member1363, d.member1400() ? 1 : 0);
        this.set(c.member1364, d.member1401() ? 1 : 0);
        this.set(c.member1365, d.member1402() ? 1 : 0);
        this.set(c.member1368, d.member1404() / 64);
        this.set(c.member1369, d.member1405() / 64);
        this.set(c.member1366, d.member1406() ? 1 : 0);
        this.set(c.member1367, d.member1407() ? 1 : 0);
        this.set(c.member1384, d.member1408() ? 1 : 0);
        this.set(c.member1385, d.member1409() ? 1 : 0);
        this.set(c.member1378, d.member1410() ? 1 : 0);
        this.set(c.member1370, d.member1411());
        this.set(c.member1371, d.member1412());
        this.set(c.member1455, (d.member1413() & 16777215) << 8 | d.member1413() >> 24 & 255);
        this.set(c.member1458, (d.member1014() & 16777215) << 8 | d.member1014() >> 24 & 255);
        this.set(c.member1459, (d.member1015() & 16777215) << 8 | d.member1015() >> 24 & 255);
        this.set(c.member1460, (d.member1013() & 16777215) << 8 | d.member1013() >> 24 & 255);
        this.set(c.member1461, (d.member1414() & 16777215) << 8 | d.member1414() >> 24 & 255);
        this.set(c.member1379, d.member1415());
        this.set(c.member1380, d.member1416());
        this.set(c.member1338, d.member1417());
        this.set(c.member1381, d.member1418());
        this.set(c.member1382, d.member1419());
        this.set(c.member1383, d.member1420());
        this.set(c.member1456, d.member1428() ? 0 : 1);
        this.set(c.member1457, 0);
        this.set(c.member1462, d.member1421() ? 1 : 0);
        this.set(c.member1463, Class143.member1441(d.member1432()) << 8 | 255);
        this.set(c.member1395, d.member1430());
        this.set(c.member1394, d.member1429());
        this.set(c.member1464, d.member1427() ? 1 : 0);
    };
    b.prototype.member681 = function () {
        return new Uint32Array(member53.member21.slice(this.member679.member31 * 4, this.member679.member31 * 4 + this.member679.member30));
    };
    b.prototype.getID = function () {
        return this.get(c.member1360);
    };
    b.prototype.getSize = function () {
        return this.get(c.size);
    };
    b.prototype.member1361 = function () {
        return this.get(c.member1361) === 1;
    };
    b.prototype.member1362 = function () {
        return this.get(c.member1362) === 1;
    };
    b.prototype.member1363 = function () {
        return this.get(c.member1363) === 1;
    };
    b.prototype.member1364 = function () {
        return this.get(c.member1364) === 1;
    };
    b.prototype.member1365 = function () {
        return this.get(c.member1365) === 1;
    };
    b.prototype.member1404 = function () {
        return this.get(c.member1368);
    };
    b.prototype.member1405 = function () {
        return this.get(c.member1369);
    };
    b.prototype.member1465 = function () {
        return this.get(c.member1366) === 1;
    };
    b.prototype.member1466 = function () {
        return this.get(c.member1367) === 1;
    };
    b.prototype.member1467 = function () {
        return this.get(c.member1384) === 1;
    };
    b.prototype.member1468 = function () {
        return this.get(c.member1385) === 1;
    };
    b.prototype.member1469 = function () {
        return this.get(c.member1378) === 1;
    };
    b.prototype.member1411 = function () {
        return this.get(c.member1370);
    };
    b.prototype.member1412 = function () {
        return this.get(c.member1371);
    };
    b.prototype.member1470 = function () {
        return this.get(c.member1455);
    };
    b.prototype.member1471 = function () {
        return this.get(c.member1458);
    };
    b.prototype.member1472 = function () {
        return this.get(c.member1459);
    };
    b.prototype.member1473 = function () {
        return this.get(c.member1460);
    };
    b.prototype.member1474 = function () {
        return this.get(c.member1461);
    };
    b.prototype.member1415 = function () {
        return this.get(c.member1379);
    };
    b.prototype.member1416 = function () {
        return this.get(c.member1380);
    };
    b.prototype.member1417 = function () {
        return this.get(c.member1338);
    };
    b.prototype.member1418 = function () {
        return this.get(c.member1381);
    };
    b.prototype.member1419 = function () {
        return this.get(c.member1382);
    };
    b.prototype.member1420 = function () {
        return this.get(c.member1383);
    };
    b.prototype.member1337 = function () {
        return this.get(c.member1456) === 1;
    };
    b.prototype.member1475 = function () {
        return this.get(c.member1457) === 1;
    };
    b.prototype.member1386 = function () {
        return this.get(c.member1462) === 1;
    };
    b.prototype.member1476 = function () {
        return this.get(c.member1463);
    };
    b.prototype.member1430 = function () {
        return this.get(c.member1395);
    };
    b.prototype.member1429 = function () {
        return this.get(c.member1394);
    };
    b.prototype.member1477 = function () {
        return this.get(c.member1464) === 1;
    };
    return function (e, d) {
        return new b(e, d);
    };
}();