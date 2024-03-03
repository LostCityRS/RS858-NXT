export var BASType = function () {
    var BASType = function (c, b) {
        this.myList = undefined;
        this.member625 = undefined;
        if (c !== undefined && b !== undefined) {
            this.member625 = c;
            this.myList = b;
        } else {
            throw new Error('1522 ');
        }
        this.readyanim = -1;
        this.randomreadyanim = null;
        this.randomreadyanim_weight = null;
        this.randomreadyanim_totalweight = 0;
        this.readyanim_l = -1;
        this.readyanim_r = -1;
        this.walkanim = -1;
        this.walkanim_b = -1;
        this.walkanim_l = -1;
        this.walkanim_r = -1;
        this.member10232 = -1;
        this.member10233 = -1;
        this.runanim = -1;
        this.runanim_b = -1;
        this.runanim_l = -1;
        this.runanim_r = -1;
        this.member10238 = -1;
        this.member10239 = -1;
        this.crawlanim = -1;
        this.crawlanim_b = -1;
        this.crawlanim_l = -1;
        this.crawlanim_r = -1;
        this.member10244 = -1;
        this.member10245 = -1;
        this.xof = 0, this.yof = 0;
        this.member10248 = 0, this.member10249 = 0;
        this.member10250 = -1;
        this.member8681 = -1;
        this.overlayheight = -1;
        this.spotshadow = true;
    };
    BASType.prototype.getReadyAnim = function () {
        return this.readyanim;
    };
    BASType.prototype.getRandomReadyAnims = function () {
        return this.randomreadyanim;
    };
    BASType.prototype.getRandomReadyAnimWeights = function () {
        return this.randomreadyanim_weight;
    };
    BASType.prototype.getReadyAnimL = function () {
        return this.readyanim_l;
    };
    BASType.prototype.getReadyAnimR = function () {
        return this.readyanim_r;
    };
    BASType.prototype.getWalkAnim = function () {
        return this.walkanim;
    };
    BASType.prototype.getWalkAnimB = function () {
        return this.walkanim_b;
    };
    BASType.prototype.getWalkAnimL = function () {
        return this.walkanim_l;
    };
    BASType.prototype.getWalkAnimR = function () {
        return this.walkanim_r;
    };
    BASType.prototype.member7873 = function () {
        return this.member10232;
    };
    BASType.prototype.member7874 = function () {
        return this.member10233;
    };
    BASType.prototype.getRunAnim = function () {
        return this.runanim;
    };
    BASType.prototype.getRunAnimB = function () {
        return this.runanim_b;
    };
    BASType.prototype.getRunAnimL = function () {
        return this.runanim_l;
    };
    BASType.prototype.getRunAnimR = function () {
        return this.runanim_r;
    };
    BASType.prototype.member7875 = function () {
        return this.member10238;
    };
    BASType.prototype.member7876 = function () {
        return this.member10239;
    };
    BASType.prototype.getCrawlAnim = function () {
        return this.crawlanim;
    };
    BASType.prototype.getCrawlAnimB = function () {
        return this.crawlanim_b;
    };
    BASType.prototype.getCrawlAnimL = function () {
        return this.crawlanim_l;
    };
    BASType.prototype.getCrawlAnimR = function () {
        return this.crawlanim_r;
    };
    BASType.prototype.member7877 = function () {
        return this.member10244;
    };
    BASType.prototype.member7878 = function () {
        return this.member10245;
    };
    BASType.prototype.getOffsetX = function () {
        return this.xof;
    };
    BASType.prototype.getOffsetY = function () {
        return this.yof;
    };
    BASType.prototype.member7857 = function () {
        return this.member10248;
    };
    BASType.prototype.member7858 = function () {
        return this.member10249;
    };
    BASType.prototype.getOverlayHeight = function () {
        return this.overlayheight;
    };
    BASType.prototype.decode = function (c) {
        while (true) {
            var b = c.g1();
            if (b === undefined) {
                throw new Error('1523 ');
                break;
            }
            if (b === 0) {
                break;
            }
            this.decodeNext(c, b);
        }
    };
    BASType.prototype.decodeNext = function (packet, opcode) {
        if (opcode === 1) {
            this.readyanim = packet.gSmart2or4null();
            this.walkanim = packet.gSmart2or4null();
        } else if (opcode === 2) {
            this.crawlanim = packet.gSmart2or4null();
        } else if (opcode === 3) {
            this.crawlanim_b = packet.gSmart2or4null();
        } else if (opcode === 4) {
            this.crawlanim_l = packet.gSmart2or4null();
        } else if (opcode === 5) {
            this.crawlanim_r = packet.gSmart2or4null();
        } else if (opcode === 6) {
            this.runanim = packet.gSmart2or4null();
        } else if (opcode === 7) {
            this.runanim_b = packet.gSmart2or4null();
        } else if (opcode === 8) {
            this.runanim_l = packet.gSmart2or4null();
        } else if (opcode === 9) {
            this.runanim_r = packet.gSmart2or4null();
        } else if (opcode === 26) {
            this.xof = packet.g1() * 4;
            this.yof = packet.g1() * 4;
        } else if (opcode === 27) {
            var count = packet.g1();
            packet.setPos(packet.getPos() + count * 2);
        } else if (opcode === 28) {
            count = packet.g1();
            packet.setPos(packet.getPos() + count);
        } else if (opcode === 29) {
            packet.g1();
        } else if (opcode === 30) {
            packet.g2();
        } else if (opcode === 31) {
            packet.g1();
        } else if (opcode === 32) {
            packet.g2();
        } else if (opcode === 33) {
            packet.g2s();
        } else if (opcode === 34) {
            packet.g1();
        } else if (opcode === 35) {
            packet.g2();
        } else if (opcode === 36) {
            packet.g2s();
        } else if (opcode === 37) {
            packet.g1();
        } else if (opcode === 38) {
            this.readyanim_l = packet.gSmart2or4null();
        } else if (opcode === 39) {
            this.readyanim_r = packet.gSmart2or4null();
        } else if (opcode === 40) {
            this.walkanim_b = packet.gSmart2or4null();
        } else if (opcode === 41) {
            this.walkanim_l = packet.gSmart2or4null();
        } else if (opcode === 42) {
            this.walkanim_r = packet.gSmart2or4null();
        } else if (opcode === 43) {
            this.member10250 = packet.gSmart2or4null();
        } else if (opcode === 44) {
            this.member8681 = packet.gSmart2or4null();
        } else if (opcode === 45) {
            this.overlayheight = packet.g2();
        } else if (opcode === 46) {
            this.member10244 = packet.gSmart2or4null();
        } else if (opcode === 47) {
            this.member10245 = packet.gSmart2or4null();
        } else if (opcode === 48) {
            this.member10238 = packet.gSmart2or4null();
        } else if (opcode === 49) {
            this.member10239 = packet.gSmart2or4null();
        } else if (opcode === 50) {
            this.member10232 = packet.gSmart2or4null();
        } else if (opcode === 51) {
            this.member10233 = packet.gSmart2or4null();
        } else if (opcode === 52) {
            var count = packet.g1();
            this.randomreadyanim = new Array(count);
            this.randomreadyanim_weight = new Array(count);

            for (var i = 0; i < count; i++) {
                this.randomreadyanim[i] = packet.gSmart2or4null();
                var weight = packet.g1();
                this.randomreadyanim_weight[i] = weight;
                this.randomreadyanim_totalweight += weight;
            }
        } else if (opcode === 53) {
            this.spotshadow = false;
        } else if (opcode === 54) {
            this.member10248 = packet.g1() << 2;
            this.member10249 = packet.g1() << 2;
        } else if (opcode === 55) {
            packet.setPos(packet.getPos() + 3);
        } else if (opcode === 56) {
            packet.setPos(packet.getPos() + 1 + 3 * 2);
        } else if (false) {
        }
    };
    BASType.prototype.member7828 = function () {
        if (this.readyanim !== -1) {
            return this.readyanim;
        }
        if (this.randomreadyanim !== null) {
            var c = Math.floor(Math.random() * this.randomreadyanim_totalweight);
            var b = 0;
            while (c >= this.randomreadyanim_weight[b]) {
                c -= this.randomreadyanim_weight[b];
                b++;
            }
            return this.randomreadyanim[b];
        }
        return -1;
    };
    return function (c, b) {
        return new BASType(c, b);
    };
}();