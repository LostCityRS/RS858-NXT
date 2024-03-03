export var Class6 = {
    member126: {
        id: 0,
        member127: function () {
            return new Float32Array(9);
        },
        member128: function (c, b) {
            for (var a = 0; a < 9; a++) {
                c[a] = b[a];
            }
        },
        member129: function (c, b) {
            var d = true;
            for (var a = 0; a < 9; a++) {
                if (c[a] !== b[a]) {
                    c[a] = b[a];
                    d = false;
                }
            }
            return d;
        }
    },
    member130: {
        id: 1,
        member127: function () {
            return undefined;
        },
        member128: function () {
        },
        member129: function () {
            return false;
        }
    },
    member131: {
        id: 2,
        member127: function () {
            return new Float32Array(16);
        },
        member128: function (c, b) {
            for (var a = 0; a < 16; a++) {
                c[a] = b[a];
            }
        },
        member129: function (c, b) {
            var d = true;
            for (var a = 0; a < 16; a++) {
                if (c[a] !== b[a]) {
                    c[a] = b[a];
                    d = false;
                }
            }
            return d;
        }
    },
    member132: {
        id: 3,
        member127: function () {
            return undefined;
        },
        member128: function () {
        },
        member129: function () {
            return false;
        }
    },
    member133: {
        id: 10,
        member134: new Float32Array(1),
        member127: function () {
            return new Float32Array(1);
        },
        member128: function (b, a) {
            b[0] = a;
        },
        member129: function (b, a) {
            this.member134[0] = a;
            if (b[0] !== this.member134[0]) {
                b[0] = this.member134[0];
                return false;
            } else {
                return true;
            }
        }
    },
    member135: {
        id: 11,
        member127: function () {
            return new Float32Array(2);
        },
        member128: function (b, a) {
            b[0] = a[0];
            b[1] = a[1];
        },
        member129: function (b, a) {
            var c = true;
            if (b[0] !== a[0]) {
                b[0] = a[0];
                c = false;
            }
            if (b[1] !== a[1]) {
                b[1] = a[1];
                c = false;
            }
            return c;
        }
    },
    member136: {
        id: 12,
        member127: function () {
            return new Float32Array(3);
        },
        member128: function (b, a) {
            b[0] = a[0];
            b[1] = a[1];
            b[2] = a[2];
        },
        member129: function (b, a) {
            var c = true;
            if (b[0] !== a[0]) {
                b[0] = a[0];
                c = false;
            }
            if (b[1] !== a[1]) {
                b[1] = a[1];
                c = false;
            }
            if (b[2] !== a[2]) {
                b[2] = a[2];
                c = false;
            }
            return c;
        }
    },
    member137: {
        id: 13,
        member127: function () {
            return new Float32Array(4);
        },
        member128: function (b, a) {
            b[0] = a[0];
            b[1] = a[1];
            b[2] = a[2];
            b[3] = a[3];
        },
        member129: function (b, a) {
            var c = true;
            if (b[0] !== a[0]) {
                b[0] = a[0];
                c = false;
            }
            if (b[1] !== a[1]) {
                b[1] = a[1];
                c = false;
            }
            if (b[2] !== a[2]) {
                b[2] = a[2];
                c = false;
            }
            if (b[3] !== a[3]) {
                b[3] = a[3];
                c = false;
            }
            return c;
        }
    },
    member138: {
        id: 14,
        member127: function () {
            return undefined;
        },
        member128: function () {
        },
        member129: function () {
            return false;
        }
    },
    member139: {
        id: 15,
        member127: function () {
            return undefined;
        },
        member128: function () {
        },
        member129: function () {
            return false;
        }
    },
    member140: {
        id: 20,
        member134: new Int32Array(1),
        member127: function () {
            return new Int32Array(1);
        },
        member128: function (b, a) {
            b[0] = a;
        },
        member129: function (b, a) {
            this.member134[0] = a;
            if (b[0] !== this.member134[0]) {
                b[0] = this.member134[0];
                return false;
            } else {
                return true;
            }
        }
    },
    member141: {
        id: 21,
        member127: function () {
            return undefined;
        },
        member128: function () {
        },
        member129: function () {
            return false;
        }
    }
};