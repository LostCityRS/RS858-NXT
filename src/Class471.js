import { Class442 } from 'Class442.js';
import { Class461 } from 'Class461.js';
import { Class385 } from 'Class385.js';
import { Class95 } from 'Class95.js';
import { Class96 } from 'Class96.js';
import { Class93 } from 'Class93.js';
import { Class209 } from 'Class209.js';
import { Class131 } from 'Class131.js';
import { Class387 } from 'Class387.js';
import { Class188 } from 'Class188.js';
import { Class288 } from 'Class288.js';
import { Class386 } from 'Class386.js';
export var Class471 = function () {
    var c = [
        { member7470: -1 },
        { member7470: -1 },
        { member7470: -1 }
    ];
    var d = 5;
    var a = 5;
    var b = function (i, h, q, r, j, k, m, e, o, g, n) {
        this.member7002();
        member46(this, Class442, i, h, q, r, j, k, m, e, o, g, n);
    };
    member45(Class442, b);
    b.prototype.member7003 = function (e, h, j, i, g) {
        this.member6680(e, h, j, i, g);
    };
    b.prototype.member7002 = function () {
        this.member4250 = Class461.member6636;
        this.member7471 = -1;
        this.member7472 = -1;
        this.member7473 = new Float32Array(3);
        this.member7474 = new Float32Array(3);
        this.member7475 = 100;
        this.member7476 = 0;
        this.member4572 = 0;
        this.member7477 = false;
        this.member7478 = false;
        this.member7479 = null;
        this.member7480 = null;
        this.member7481 = null;
        this.member7482 = null;
        this.member7483 = 0;
        this.member7484 = 0;
        this.member7485 = 0;
        this.member7486 = 0;
        this.member7487 = false;
        this.member7488 = -1;
        this.member7013 = -1;
        this.member7014 = 0;
        this.member7016 = false;
        this.member3434 = null;
        this.member7489 = undefined;
        this.member7490 = new Float32Array(2);
        this.member7491 = true;
        this.member2621 = null;
        this.member2619 = null;
        this.member7492 = null;
        this.member3434 = null;
        this.member1728 = Class385();
        this.member7493 = null;
        this.member7494 = null;
        this.member7495 = null;
        this.member7496 = -1;
    };
    b.prototype.member7026 = function () {
        this.member7002();
        this.member6681();
    };
    b.prototype.member6797 = function (j, g, h, e) {
        this.member4250 = Class461.member6636;
        this.member7471 = j.member1086();
        var i = j.member609();
        var k = (i & 1) === 1;
        this.member7487 = (i & 2) === 2;
        this.member7477 = (i & 4) === 4;
        this.member7478 = (i & 8) === 8;
        if (k) {
            this.member7474[0] = j.member1071();
            this.member7474[1] = j.member1071();
            this.member7473[0] = j.member608();
            this.member7473[1] = j.member608();
            this.member7473[2] = j.member608();
            this.member7475 = j.member608();
        } else if (member7487) {
            this.member7474[0] = j.member1071();
            this.member7474[1] = j.member1071();
            this.member7474[2] = j.member1071();
            this.member7473[0] = j.member608();
            this.member7473[1] = j.member608();
            this.member7473[2] = j.member608();
            this.member7475 = j.member1071();
        }
        this.member7488 = j.member1086();
        if (h !== 0) {
            this.member7476 = j.member608();
        }
        if (e !== 0) {
            this.member4572 = j.member608();
        }
        return {
            member4638: 0,
            alpha: 255
        };
    };
    b.prototype.member7497 = function (e) {
        if (this.member4250 !== e) {
            this.member7498();
            this.member7499(null);
            this.member4250 = e;
        }
    };
    b.prototype.member1886 = function () {
        return this.member4250;
    };
    b.prototype.member7500 = function (e) {
        if (this.member7471 !== e) {
            this.member7498();
            this.member7499(null);
            this.member7471 = e;
        }
    };
    b.prototype.member7501 = function () {
        return this.member7471;
    };
    b.prototype.member7502 = function (e) {
        if (this.member7472 !== e) {
            this.member7498();
            this.member7499(null);
            this.member7472 = e;
        }
    };
    b.prototype.member7503 = function () {
        return this.member7472;
    };
    b.prototype.member7504 = function (e) {
        this.member7473 = e;
    };
    b.prototype.member7505 = function () {
        return this.member7473;
    };
    b.prototype.member7506 = function () {
        return this.member7475;
    };
    b.prototype.member7507 = function (e) {
        this.member7475 = e;
    };
    b.prototype.member7508 = function () {
        return this.member7474;
    };
    b.prototype.member7509 = function (e) {
        this.member7474 = e;
    };
    b.prototype.member7510 = function () {
        return this.member7476;
    };
    b.prototype.member7511 = function (e) {
        this.member7476 = e;
    };
    b.prototype.member7512 = function () {
        return this.member4572;
    };
    b.prototype.member7513 = function (e) {
        this.member4572 = e;
    };
    b.prototype.member7514 = function () {
        return this.member7477;
    };
    b.prototype.member7515 = function (e) {
        this.member7477 = e;
    };
    b.prototype.member7516 = function () {
        return this.member7478;
    };
    b.prototype.member7517 = function (h, e, g) {
        if (h >= a) {
            return;
        }
        if (this.member7479 === null) {
            this.member7479 = new Array(a);
            this.member7480 = new Array(a);
        }
        this.member7479[h] = e;
        this.member7480[h] = g;
        this.member7498();
    };
    b.prototype.member7518 = function (g, e, h) {
        if (g >= d) {
            return;
        }
        if (this.member7481 === null) {
            this.member7481 = new Array(d);
            this.member7482 = new Array(d);
        }
        this.member7481[g] = e;
        this.member7482[g] = h;
        this.member7498();
    };
    b.prototype.member7519 = function () {
        return this.member7483;
    };
    b.prototype.member7520 = function (e) {
        this.member7483 = e;
    };
    b.prototype.member7521 = function () {
        return this.member7484;
    };
    b.prototype.member7522 = function (e) {
        this.member7484 = e;
    };
    b.prototype.member7523 = function () {
        return this.member7485;
    };
    b.prototype.member7524 = function (e) {
        this.member7485 = e;
    };
    b.prototype.member7525 = function () {
        return this.member7486;
    };
    b.prototype.member7526 = function (e) {
        this.member7486 = e;
    };
    b.prototype.member7527 = function () {
        return this.member7487;
    };
    b.prototype.member7528 = function () {
        return this.member7489;
    };
    b.prototype.member7529 = function (e) {
        if (this.member7489 !== e) {
            this.member7498();
            this.member7489 = e;
        }
    };
    b.prototype.member6807 = function () {
        return this.member7013;
    };
    b.prototype.member7043 = function (e) {
        if (this.member7013 !== e) {
            this.member7498();
            this.member7499(null);
            this.member7013 = e;
        }
    };
    b.prototype.member7044 = function () {
        return this.member7014;
    };
    b.prototype.member7045 = function (e) {
        if (this.member7014 !== e) {
            this.member7498();
            this.member7014 = e;
        }
    };
    b.prototype.member7048 = function () {
        return this.member7016;
    };
    b.prototype.member7049 = function (e) {
        this.member7016 = e;
    };
    b.prototype.member7530 = function (e) {
        if (this.member7488 !== e) {
            this.member7488 = e;
            this.member7498();
        }
    };
    b.prototype.member7531 = function () {
        return this.member7488;
    };
    b.prototype.member7532 = function () {
        return this.member7490;
    };
    b.prototype.member7533 = function (e) {
        this.member7490 = e;
    };
    b.prototype.member7534 = function (h) {
        var g = this.member6682().member7535().getFile(Class95.member810, h, 0, Class96.member840, Class93.member796);
        if (g === null || g === undefined) {
            return member47;
        }
        var e = Class209(g);
        if (e.member2463() < 13) {
            e.member2495(2);
        }
        return e;
    };
    b.prototype.member7536 = function (e) {
        if (e !== null && e !== undefined) {
            e.member510();
        }
        if (this.member7493 !== null && this.member7493 !== undefined) {
            this.member7493.member511();
        }
        this.member7493 = e;
    };
    b.prototype.member7499 = function (e) {
        if (e !== null && e !== undefined) {
            e.member510();
        }
        if (this.member2621 !== null && this.member2621 !== undefined) {
            this.member2621.member511();
        }
        this.member2621 = e;
    };
    b.prototype.member7498 = function () {
        this.member7491 = true;
        this.member7536(null);
        this.member7494 = null;
        this.member7495 = null;
    };
    b.prototype.member7537 = function () {
        this.member7536(undefined);
        this.member7494 = this.member7495 = null;
    };
    b.prototype.member7538 = function (g) {
        if (!this.member7491) {
            return true;
        }
        var e = this.member6682().member7539().member3227(Class131.member1214.member1204, this.member7013);
        if (e === member47) {
            return false;
        }
        this.member7494 = e.member7540(this.member7014, this.member7016 ? g : undefined);
        if (this.member7494 === member47) {
            return false;
        }
        this.member7496 = e.member7082(this.member7014).member444();
        return true;
    };
    b.prototype.member7541 = function () {
        if (this.member7471 === -1) {
            this.member7537();
            return true;
        }
        if (!this.member7491) {
            return true;
        }
        this.member7494 = this.member7534(this.member7471);
        if (this.member7494 === member47) {
            return false;
        }
        if (this.member7479 !== null) {
            this.member7494.member2497(this.member7479, this.member7480);
        }
        if (this.member7481 !== null) {
            this.member7494.member2499(this.member7481, this.member7482);
        }
        this.member7496 = this.member7471;
        return true;
    };
    b.prototype.member7542 = function (h, g) {
        this.member7496 = this.member7471;
        var e = this.member6682().member7539().member3227(Class131.member1213.member1204, this.member7471);
        if (e === member47) {
            return false;
        }
        if (this.member4250 === Class461.member7274) {
            this.member7536(e.member7543(h, this.member7489));
            if (this.member7493 === member47) {
                return false;
            }
            if (this.member7491) {
                this.member7494 = e.member7544(this.member7489);
            }
        } else {
            this.member7536(e.member7545(h, g, Class387.member4402, this.member7489));
            if (this.member7493 === member47) {
                return false;
            }
            if (this.member7491) {
                this.member7494 = e.member7546(h, g, Class387.member4402, this.member7489);
            }
        }
        if (!this.member7491) {
            this.member7499(this.member7493);
            this.member7536(member47);
        }
        return true;
    };
    b.prototype.member7547 = function (m, k) {
        var e = k.member7136();
        if (e === member47) {
            return false;
        }
        var g = e.member7546();
        if (g === member47) {
            return false;
        }
        var j = g.member4299();
        if (j !== this.member7496) {
            this.member7491 = true;
            this.member7496 = j;
        }
        if (this.member4250 === Class461.member7275) {
            this.member7536(e.member7543(m));
            if (this.member7493 === member47) {
                return false;
            }
            if (this.member7491) {
                this.member7494 = e.member7544();
                if (this.member7494 === member47) {
                    return false;
                }
            }
        } else if (this.member4250 === Class461.member7276) {
            if (this.member7492 !== member47) {
                e.member7548(this.member7492);
            } else {
                e.member7549();
            }
            this.member7536(e.member7545(m));
            if (this.member7493 === member47) {
                return false;
            }
            if (this.member7491) {
                this.member7494 = e.member7546();
                if (this.member7494 === member47) {
                    return false;
                }
            }
        } else {
            this.member7496 |= this.member7472 << 16;
            if (!this.member7491) {
                return true;
            }
            var n = this.member7471 >>> 16, i = this.member7471 & 65535, h = this.member7472;
            c[0].member7470 = n;
            c[1].member7470 = i;
            c[2].member7470 = h;
            this.member7494 = e.member7544(c);
            if (this.member7494 === member47) {
                return false;
            }
        }
        if (!this.member7491) {
            this.member7499(this.member7493);
            this.member7536(null);
        }
        return true;
    };
    b.prototype.member7550 = function (g) {
        if (!this.member7491) {
            return true;
        }
        var e = this.member6682().member7539().member3227(Class131.member1214.member1204, this.member7471);
        if (e === member47) {
            return false;
        }
        this.member7494 = e.member7540(10, g);
        if (this.member7494 === member47) {
            return false;
        }
        this.member7496 = e.member7082(10).member444();
        return true;
    };
    b.prototype.member7551 = function (e, g) {
        if (!this.member7491) {
            return true;
        }
        var h = e.member7552(this.member7471, false);
        if (this.inventory === null) {
            this.member7537();
            return true;
        }
        this.member7494 = h.member7546(this.member4250 === member7280, this.member7016 ? g : undefined);
        if (this.member7494 === member47) {
            return false;
        }
        this.member7496 = this.member7471 | (this.member4250 === member7280 ? 1 : 0) << 16;
        return true;
    };
    b.prototype.member7075 = function (m, k, e, j, i) {
        var h = j === undefined ? undefined : j.member7136();
        if (this.member7013 !== -1) {
            if (!this.member7538(h)) {
                return this.member2621;
            }
        } else {
            switch (this.member4250) {
            case Class461.member6636:
                if (!this.member7541()) {
                    return this.member2621;
                }
                break;
            case Class461.member7274:
            case Class461.member7277:
                if (!this.member7542(m, k)) {
                    return this.member2621;
                }
                break;
            case Class461.member7275:
            case Class461.member7276:
            case Class461.member7278:
                if (!this.member7547(m, j)) {
                    return this.member2621;
                }
                break;
            case Class461.member4135:
                if (!this.member7550(h)) {
                    return this.member2621;
                }
                break;
            case Class461.member7279:
            case Class461.member7280:
                if (!this.member7551(e, h)) {
                    return this.member2621;
                }
                break;
            default:
                this.member7537();
                return undefined;
            }
        }
        if (this.member7491) {
            var g = false;
            if (this.member7494 !== undefined && this.member7494 !== member47) {
                if (this.member7488 !== -1 && !this.member7553(k, this.member7496, i)) {
                    return this.member2621;
                }
                if (this.member7493 === member47) {
                    this.member7536(Class188(this.member7494, undefined, m));
                }
                if (this.member7493.member2101() !== undefined) {
                    if (this.member3434 === null) {
                        this.member3434 = Class288({ member433: m });
                    }
                } else {
                    g = true;
                }
            } else {
                g = true;
            }
            if (g && this.member3434 !== null) {
                this.member3434.member512();
                this.member3434 = null;
            }
            this.member7491 = false;
            this.member7499(this.member7493);
            this.member2619 = this.member7494;
            this.member7492 = this.member7495;
            this.member7536(null);
            this.member7494 = null;
            this.member7495 = null;
        }
        return this.member2621;
    };
    b.prototype.member7553 = function (h, g, e) {
        if (this.member7495 === member47) {
            this.member7495 = Class386({
                id: this.member7488,
                member2970: this.member6682().member7539()
            });
        }
        if (this.member7494 === member47 || g === -1) {
            return false;
        } else {
            return this.member7495.member4380(this.member6682().member7539(), h, Class387.member104, g, this.member7494, e);
        }
    };
    b.prototype.member4446 = function (e) {
        if (this.member7492 === member47 || !this.member7492.member1540()) {
            return member47;
        }
        if (this.member7492.member1999()) {
            this.member7492.member4388(e);
        }
        this.member7492.member4224(e);
        this.member7492.member1998(this.member1728, false);
        return this.member1728;
    };
    b.prototype.member4447 = function (g, e) {
        if (this.member3434 === null || this.member2621 === null || this.member2621 === undefined) {
            return;
        }
        if (this.member7492 !== member47) {
            this.member7492.member1998(this.member1728, false);
            this.member2621.member2128(this.member3434, g, this.member1728);
        } else {
            this.member2621.member2128(this.member3434, g, null);
        }
        this.member3434.member486(e);
    };
    b.prototype.member7554 = function (e) {
        if (this.member7492 !== member47) {
            this.member7492.member4388(e);
        }
    };
    b.prototype.member512 = function () {
        this.member7499(null);
        this.member7536(null);
    };
    return b;
}();