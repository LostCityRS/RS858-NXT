export var Class252 = function () {
    var a = function (b) {
        this.member2953 = -1;
        this.member2954 = -1;
        this.member2955 = -1;
        this.member2956 = -1;
        this.member2957 = -1;
        this.offset = new Float32Array(3);
        if (b !== undefined) {
            if (b.member2953 !== undefined) {
                this.member2953 = b.member2953;
            }
            if (b.member2954 !== undefined) {
                this.member2954 = b.member2954;
            }
            if (b.member2955 !== undefined) {
                this.member2955 = b.member2955;
            }
            if (b.member2956 !== undefined) {
                this.member2956 = b.member2956;
            }
            if (b.member2957 !== undefined) {
                this.member2957 = b.member2957;
            }
            if (b.offset !== undefined) {
                this.offset = b.offset;
            }
        }
    };
    a.prototype.member2958 = function () {
        return this.member2953;
    };
    a.prototype.member2959 = function (b) {
        this.member2953 = b;
    };
    a.prototype.member2960 = function () {
        return this.member2954;
    };
    a.prototype.member2961 = function (b) {
        this.member2954 = b;
    };
    a.prototype.member2962 = function () {
        return this.member2955;
    };
    a.prototype.member2963 = function (b) {
        this.member2955 = b;
    };
    a.prototype.member2964 = function () {
        return this.member2956;
    };
    a.prototype.member2965 = function (b) {
        this.member2956 = b;
    };
    a.prototype.member2966 = function () {
        return this.member2957;
    };
    a.prototype.member2967 = function (b) {
        this.member2957 = b;
    };
    a.prototype.member2968 = function () {
        return this.offset;
    };
    a.prototype.member1319 = function () {
        return new a({
            member2953: this.member2953,
            member2954: this.member2954,
            member2955: this.member2955,
            member2956: this.member2956,
            member2957: this.member2957,
            offset: this.offset
        });
    };
    a.prototype.member2969 = function (b) {
        if (this.member2953 !== b.member2958()) {
            return false;
        }
        if (this.member2954 !== b.member2960()) {
            return false;
        }
        if (this.member2955 !== b.member2962()) {
            return false;
        }
        if (this.member2956 !== b.member2964()) {
            return false;
        }
        if (this.member2957 !== b.member2966()) {
            return false;
        }
        var c = b.member2968();
        if (this.offset[0] !== c[0] || this.offset[1] !== c[1] || this.offset[2] !== c[2]) {
            return false;
        }
        return true;
    };
    return function (b) {
        return new a(b);
    };
}();