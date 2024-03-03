export var Class264 = function () {
    var B = {};
    var d = false;
    var q;
    var a = new Array(512);
    var t = false;
    var k = false;
    var m = false;
    var v = false;
    var J = new Array(10);
    var D = 0;
    var h = 0;
    var b = new Array(10);
    var i = 0;
    var g = 0;
    var r = false;
    B.member3046 = 13;
    B.member3047 = 1;
    B.member3048 = 2;
    B.member3049 = 3;
    B.member3050 = 4;
    B.member3051 = 5;
    B.member3052 = 6;
    B.member3053 = 7;
    B.member3054 = 8;
    B.member3055 = 9;
    B.member3056 = 10;
    B.member3057 = 11;
    B.member3058 = 12;
    B.member3059 = 16;
    B.member3060 = 17;
    B.member3061 = 18;
    B.member3062 = 19;
    B.member3063 = 20;
    B.member3064 = 21;
    B.member3065 = 22;
    B.member3066 = 23;
    B.member3067 = 24;
    B.member3068 = 25;
    B.member3069 = 26;
    B.member3070 = 27;
    B.member3071 = 32;
    B.member3072 = 33;
    B.member3073 = 34;
    B.member3074 = 35;
    B.member3075 = 36;
    B.member3076 = 37;
    B.member3077 = 38;
    B.member3078 = 39;
    B.member3079 = 40;
    B.member3080 = 41;
    B.member3081 = 42;
    B.member3082 = 43;
    B.member3083 = 48;
    B.member3084 = 49;
    B.member3085 = 50;
    B.member3086 = 51;
    B.member3087 = 52;
    B.member3088 = 53;
    B.member3089 = 54;
    B.member3090 = 55;
    B.member3091 = 56;
    B.member3092 = 57;
    B.member3093 = 58;
    B.member3094 = 64;
    B.member3095 = 65;
    B.member3096 = 66;
    B.member3097 = 67;
    B.member3098 = 68;
    B.member3099 = 69;
    B.member3100 = 70;
    B.member3101 = 71;
    B.member3102 = 72;
    B.member3103 = 73;
    B.member3104 = 80;
    B.member3105 = 81;
    B.member3106 = 82;
    B.member3107 = 83;
    B.member3108 = 84;
    B.member3109 = 85;
    B.member3110 = 86;
    B.member3111 = 59;
    B.member3112 = 74;
    B.member3113 = 28;
    B.member3114 = 87;
    B.member3115 = 88;
    B.member3116 = 89;
    B.member3117 = 90;
    B.member3118 = 91;
    B.member3119 = 96;
    B.member3120 = 97;
    B.member3121 = 98;
    B.member3122 = 99;
    B.member3123 = 100;
    B.member3124 = 101;
    B.member3125 = 102;
    B.member3126 = 103;
    B.member3127 = 104;
    B.member3128 = 105;
    var j = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        B.member3109,
        B.member3104,
        B.member3108,
        0,
        B.member3118,
        B.member3108,
        0,
        0,
        B.member3105,
        B.member3106,
        B.member3110,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        B.member3046,
        0,
        0,
        0,
        0,
        B.member3107,
        B.member3127,
        B.member3128,
        B.member3126,
        B.member3125,
        B.member3119,
        B.member3121,
        B.member3120,
        B.member3122,
        0,
        0,
        0,
        0,
        B.member3123,
        B.member3124,
        0,
        B.member3068,
        B.member3059,
        B.member3060,
        B.member3061,
        B.member3062,
        B.member3063,
        B.member3064,
        B.member3065,
        B.member3066,
        B.member3067,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        B.member3083,
        B.member3098,
        B.member3096,
        B.member3085,
        B.member3073,
        B.member3086,
        B.member3087,
        B.member3088,
        B.member3078,
        B.member3089,
        B.member3090,
        B.member3091,
        B.member3100,
        B.member3099,
        B.member3079,
        B.member3080,
        B.member3071,
        B.member3074,
        B.member3084,
        B.member3075,
        B.member3077,
        B.member3097,
        B.member3072,
        B.member3095,
        B.member3076,
        B.member3094,
        0,
        0,
        0,
        0,
        0,
        B.member3068,
        B.member3059,
        B.member3060,
        B.member3061,
        B.member3062,
        B.member3118,
        B.member3064,
        B.member3065,
        B.member3066,
        B.member3067,
        B.member3116,
        B.member3114,
        0,
        B.member3115,
        B.member3124,
        B.member3117,
        B.member3047,
        B.member3048,
        B.member3049,
        B.member3050,
        B.member3051,
        B.member3052,
        B.member3053,
        B.member3054,
        B.member3055,
        B.member3056,
        B.member3057,
        B.member3058,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        B.member3092,
        B.member3070,
        B.member3101,
        B.member3069,
        B.member3102,
        B.member3103,
        B.member3113,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        B.member3081,
        B.member3112,
        B.member3082,
        B.member3093,
        B.member3113,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        B.member3111
    ];
    var E = function (K, M, N) {
        var L = document;
        if (K !== undefined) {
            L = document.getElementById(K);
        }
        if (L === undefined) {
            throw new Error('1007 ' + K);
        }
        r = M;
        d = N;
        L.onkeydown = e;
        L.onkeyup = c;
        L.onkeypress = s;
        window.onblur = n;
    };
    B.member25 = E;
    var I = function (K) {
        if (a[K] !== undefined) {
            return true;
        } else {
            return false;
        }
    };
    B.member3129 = I;
    var H = function () {
        return t;
    };
    B.member3130 = H;
    var G = function () {
        return k;
    };
    B.member3131 = G;
    var F = function () {
        return m;
    };
    B.member3132 = F;
    var C = function () {
        return v;
    };
    B.member3133 = C;
    var A = function () {
        if (D === h) {
            return null;
        } else {
            return J[D];
        }
    };
    B.member3134 = A;
    var z = function () {
        if (D !== h) {
            D++;
            if (D >= J.length) {
                D = 0;
            }
        }
    };
    B.member3135 = z;
    var y = function () {
        if (i === g) {
            return null;
        } else {
            return b[i];
        }
    };
    B.member3136 = y;
    var x = function () {
        if (i !== g) {
            i++;
            if (i >= b.length) {
                i = 0;
            }
        }
    };
    B.member3137 = x;
    var o = 0;
    var u = function () {
        return o;
    };
    B.member3138 = u;
    var e = function (L) {
        if (d) {
            if (L.keyCode === 8) {
                L.preventDefault();
            }
            if (L.keyCode === 9) {
                L.preventDefault();
            }
            if (L.keyCode === 190) {
                L.preventDefault();
            }
            if (L.keyCode >= 112 && L.keyCode <= 121) {
                L.preventDefault();
            }
            if (L.keyCode === 123) {
                L.preventDefault();
            }
        }
        if (L.keyCode === 16) {
            t = true;
        } else if (L.keyCode === 17) {
            m = true;
        } else if (L.keyCode === 18) {
            k = true;
        } else if (L.keyCode === 32) {
            v = true;
        }
        var K = L.keyCode;
        if (r) {
            K = j[K];
        }
        if (K === 0) {
            return;
        }
        q = K;
        if (a[K] === undefined) {
            o++;
        }
        a[K] = true;
        J[h] = {
            keyCode: K,
            timeStamp: Date.now()
        };
        h++;
        if (h >= J.length) {
            h = 0;
        }
        if (h === D) {
            D++;
            if (D >= J.length) {
                D = 0;
            }
        }
        if (L.keyCode >= 33 && L.keyCode <= 40) {
            s(L);
        }
        if (L.keyCode === 46 || L.keyCode === 8 || L.keyCode === 9 || L.keyCode === 27) {
            s(L);
        }
        if (L.keyCode >= 112 && L.keyCode <= 123) {
            s(L);
        }
        if (L.keyCode === 190) {
            s({ charCode: 46 });
        }
    };
    var c = function (L) {
        if (L.keyCode === 16) {
            t = false;
        } else if (L.keyCode === 17) {
            m = false;
        } else if (L.keyCode === 18) {
            k = false;
        } else if (L.keyCode === 32) {
            v = false;
        }
        var K = L.keyCode;
        if (r) {
            K = j[K];
        }
        if (K === 0) {
            return;
        }
        if (a[K] !== undefined) {
            o--;
        }
        a[K] = undefined;
    };
    var s = function (K) {
        b[g] = {
            keyCode: q,
            keyChar: K.charCode,
            member3139: t,
            member3140: m,
            member3141: k,
            timeStamp: Date.now()
        };
        g++;
        if (g >= b.length) {
            g = 0;
        }
        if (g === i) {
            i++;
            if (i >= b.length) {
                i = 0;
            }
        }
    };
    var n = function (K) {
        t = false;
        k = false;
        m = false;
        a = new Array(512);
        o = 0;
        D = h = 0;
        i = g = 0;
    };
    return B;
}();