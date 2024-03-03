import { Class150 } from 'Class150.js';
import { Class138 } from 'Class138.js';
import { Class149 } from 'Class149.js';
export var Class151 = function () {
    var a = function (b) {
        this.member1518 = -1;
        this.member1519 = -1;
        this.member1508 = undefined;
        this.member1510 = undefined;
        this.member1509 = undefined;
        this.member1511 = undefined;
        this.member1520 = undefined;
        this.member1521 = undefined;
        this.member25(b);
    };
    a.prototype.member25 = function (d) {
        if ((d.member1508 !== undefined || d.member1510 !== undefined) && (d.member1509 !== undefined || d.member1511 !== undefined)) {
            this.member1508 = d.member1508;
            this.member1510 = d.member1510;
            if (this.member1508 !== undefined) {
                this.member1518 = this.member1508.getID();
            }
            if (this.member1510 !== undefined) {
                this.member1519 = this.member1510.getID();
            }
            this.member1509 = d.member1509;
            this.member1511 = d.member1511;
            this.member1332();
        } else if (d.member1518 !== undefined && d.member1519 !== undefined && (d.member1509 !== undefined || d.member1511 !== undefined)) {
            this.member1518 = d.member1518;
            this.member1519 = d.member1519;
            this.member1508 = Class150.member1497(this.member1518);
            this.member1510 = Class150.member1497(this.member1519);
            this.member1509 = d.member1509;
            this.member1511 = d.member1511;
            this.member1332();
        } else if ((d.member1522 !== undefined || d.member1523 !== undefined) && (d.member1509 !== undefined || d.member1511 !== undefined)) {
            if (d.member1522 !== undefined) {
                this.member1508 = Class138({ member1348: d.member1522 });
                this.member1518 = this.member1508.getID();
            }
            if (d.member1523 !== undefined) {
                this.member1510 = Class138({ member1348: d.member1523 });
                this.member1519 = this.member1510.getID();
            }
            this.member1509 = d.member1509;
            this.member1511 = d.member1511;
            this.member1332();
        } else if (d.member1524 !== undefined) {
            var c = d.member1524.g1() === 0;
            if (c) {
                if (d.member1524.g1() === 1) {
                    this.member1508 = Class138({ member1349: d.member1524 });
                    this.member1518 = this.member1508.getID();
                }
                if (d.member1524.g1() === 1) {
                    this.member1510 = Class138({ member1349: d.member1524 });
                    this.member1519 = this.member1510.getID();
                }
            } else {
                this.member1518 = d.member1524.g2s();
                if (this.member1518 !== -1) {
                    this.member1508 = Class150.member1497(this.member1518);
                }
                this.member1519 = d.member1524.g2s();
                if (this.member1519 !== -1) {
                    this.member1510 = Class150.member1497(this.member1519);
                }
            }
            this.member1509 = new Array(d.member1524.g2());
            for (var b = 0; b < this.member1509.length; b++) {
                this.member1509[b] = Class149(undefined, undefined, undefined, undefined, d.member1524);
            }
            this.member1511 = new Array(d.member1524.g2());
            for (var b = 0; b < this.member1511.length; b++) {
                this.member1511[b] = Class149(undefined, undefined, undefined, undefined, d.member1524);
            }
            if (d.member1525) {
                this.member1526();
            } else {
                this.member1332();
            }
        } else if (d.empty !== undefined) {
            this.member1509 = new Array(0);
            this.member1511 = new Array(0);
        } else {
            throw new Error('1582 ');
        }
    };
    a.prototype.member1527 = function () {
        return this.member1518;
    };
    a.prototype.member1528 = function () {
        return this.member1519;
    };
    a.prototype.member1516 = function () {
        return this.member1508;
    };
    a.prototype.member1517 = function () {
        return this.member1510;
    };
    a.prototype.member1529 = function () {
        return this.member1509;
    };
    a.prototype.member1530 = function () {
        return this.member1511;
    };
    a.prototype.member1531 = function () {
        return this.member1511 !== undefined && this.member1511.length > 0;
    };
    a.prototype.member1332 = function () {
        if (this.member1508 !== undefined) {
            this.member1508.member1332(this.member1509);
        }
        if (this.member1510 !== undefined) {
            this.member1510.member1332(this.member1511);
        }
    };
    a.prototype.member512 = function () {
        if (this.member1508 !== undefined) {
            this.member1508.member1333(this.member1509);
        }
        if (this.member1510 !== undefined) {
            this.member1510.member1333(this.member1511);
        }
    };
    a.prototype.member681 = function (b, c) {
        if (b) {
            return {
                member1522: this.member1508 === undefined ? undefined : this.member1508.member1322(c ? this.member1509 : undefined),
                member1523: this.member1510 === undefined ? undefined : this.member1510.member1322(c ? this.member1511 : undefined),
                member1509: this.member1509,
                member1511: this.member1511
            };
        } else {
            return {
                member1518: this.member1518,
                member1519: this.member1519,
                member1509: this.member1509,
                member1511: this.member1511
            };
        }
    };
    a.prototype.member1318 = function (c, d, e) {
        if (d) {
            c.p1(0);
            if (this.member1508 === undefined) {
                c.p1(0);
            } else {
                c.p1(1);
                this.member1508.member1326(c, e ? this.member1509 : undefined);
            }
            if (this.member1510 === undefined) {
                c.p1(0);
            } else {
                c.p1(1);
                this.member1510.member1326(c, e ? this.member1511 : undefined);
            }
        } else {
            c.p1(1);
            c.p2(this.member1518);
            c.p2(this.member1519);
        }
        c.p2(this.member1509.length);
        for (var b = 0; b < this.member1509.length; b++) {
            this.member1509[b].member1318(c);
        }
        c.p2(this.member1511.length);
        for (var b = 0; b < this.member1511.length; b++) {
            this.member1511[b].member1318(c);
        }
    };
    a.prototype.member1532 = function (h) {
        var d = h.member1527();
        var g = h.member1528();
        if (this.member1518 === -1) {
            this.member1508 = h.member1516();
            this.member1518 = d;
        }
        if (this.member1519 === -1) {
            this.member1510 = h.member1517();
            this.member1519 = g;
        }
        if (d !== -1 && d !== this.member1518) {
            throw new Error('1583 ' + d + '1583 ' + member1518);
        }
        if (g !== -1 && g !== this.member1519) {
            throw new Error('1584 ' + g + '1584 ' + member1519);
        }
        if (d !== -1) {
            var i = h.member1529();
            member1533:
                for (var b = 0; b < i.length; b++) {
                    for (var c = 0; c < this.member1509.length; c++) {
                        if (this.member1509[c].member1325 === i[b].member1325) {
                            continue member1533;
                        }
                    }
                    this.member1509.push(i[b]);
                }
        }
        if (g !== -1) {
            var e = h.member1530();
            member1534:
                for (var b = 0; b < e.length; b++) {
                    for (var c = 0; c < this.member1511.length; c++) {
                        if (this.member1511[c].member1325 === e[b].member1325) {
                            continue member1534;
                        }
                    }
                    this.member1511.push(e[b]);
                }
        }
    };
    a.prototype.member1335 = function () {
        var b = true;
        if (this.member1508 !== undefined) {
            b = b && this.member1508.member1335(this.member1509);
        }
        if (this.member1510 !== undefined) {
            b = b && this.member1510.member1335(this.member1511);
        }
        return b;
    };
    a.prototype.member1526 = function () {
        if (this.member1509.length > 0) {
            this.member1508 = Class150.member1514(this.member1509, false);
        }
        if (this.member1511.length > 0) {
            this.member1510 = Class150.member1514(this.member1511, true);
        }
        if (this.member1508 !== undefined) {
            this.member1520 = this.member1508.member1327(this.member1509, true);
            this.member1518 = this.member1508.getID();
        } else {
            this.member1518 = -1;
        }
        if (this.member1510 !== undefined) {
            this.member1521 = this.member1510.member1327(this.member1511, true);
            this.member1519 = this.member1510.getID();
        } else {
            this.member1519 = -1;
        }
        this.member1332();
    };
    a.prototype.member1535 = function () {
        this.member1520 = undefined;
        this.member1521 = undefined;
    };
    return function (b) {
        return new a(b);
    };
}();