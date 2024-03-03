export var ObjWearModels = function () {
    var ObjWearModels = function (b) {
        this.wear1 = -1;
        this.wear2 = -1;
        this.wear3 = -1;
        this.head1 = -1;
        this.head2 = -1;
        this.offset = new Float32Array(3);
        if (b !== undefined) {
            if (b.wear1 !== undefined) {
                this.wear1 = b.wear1;
            }
            if (b.wear2 !== undefined) {
                this.wear2 = b.wear2;
            }
            if (b.wear3 !== undefined) {
                this.wear3 = b.wear3;
            }
            if (b.head1 !== undefined) {
                this.head1 = b.head1;
            }
            if (b.head2 !== undefined) {
                this.head2 = b.head2;
            }
            if (b.offset !== undefined) {
                this.offset = b.offset;
            }
        }
    };
    ObjWearModels.prototype.getWear1 = function () {
        return this.wear1;
    };
    ObjWearModels.prototype.setWear1 = function (wear1) {
        this.wear1 = wear1;
    };
    ObjWearModels.prototype.getWear2 = function () {
        return this.wear2;
    };
    ObjWearModels.prototype.setWear2 = function (wear2) {
        this.wear2 = wear2;
    };
    ObjWearModels.prototype.getWear3 = function () {
        return this.wear3;
    };
    ObjWearModels.prototype.setWear3 = function (wear3) {
        this.wear3 = wear3;
    };
    ObjWearModels.prototype.getHead1 = function () {
        return this.head1;
    };
    ObjWearModels.prototype.setHead1 = function (head1) {
        this.head1 = head1;
    };
    ObjWearModels.prototype.getHead2 = function () {
        return this.head2;
    };
    ObjWearModels.prototype.setHead2 = function (head2) {
        this.head2 = head2;
    };
    ObjWearModels.prototype.getOffset = function () {
        return this.offset;
    };
    ObjWearModels.prototype.clone = function () {
        return new ObjWearModels({
            wear1: this.wear1,
            wear2: this.wear2,
            wear3: this.wear3,
            head1: this.head1,
            head2: this.head2,
            offset: this.offset
        });
    };
    ObjWearModels.prototype.equals = function (b) {
        if (this.wear1 !== b.getWear1()) {
            return false;
        }
        if (this.wear2 !== b.getWear2()) {
            return false;
        }
        if (this.wear3 !== b.getWear3()) {
            return false;
        }
        if (this.head1 !== b.getHead1()) {
            return false;
        }
        if (this.head2 !== b.getHead2()) {
            return false;
        }
        var c = b.getOffset();
        if (this.offset[0] !== c[0] || this.offset[1] !== c[1] || this.offset[2] !== c[2]) {
            return false;
        }
        return true;
    };
    return function (b) {
        return new ObjWearModels(b);
    };
}();