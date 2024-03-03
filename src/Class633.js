import { Class316 } from 'Class316.js';
import { Class451 } from 'Class451.js';
export var Class633 = function () {
    var j = {};
    var q = [
        [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ],
        [
            'Januar',
            'Februar',
            'März',
            'April',
            'Mai',
            'Juni',
            'Juli',
            'August',
            'September',
            'Oktober',
            'November',
            'Dezember'
        ],
        [
            'janvier',
            'février',
            'mars',
            'avril',
            'mai',
            'juin',
            'juillet',
            'août',
            'septembre',
            'octobre',
            'novembre',
            'décembre'
        ],
        [
            'janeiro',
            'fevereiro',
            'março',
            'abril',
            'maio',
            'junho',
            'julho',
            'agosto',
            'setembro',
            'outubro',
            'novembro',
            'dezembro'
        ],
        [
            'januari',
            'februari',
            'maart',
            'april',
            'mei',
            'juni',
            'juli',
            'augustus',
            'september',
            'oktober',
            'november',
            'december'
        ],
        [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ],
        [
            'enero',
            'febrero',
            'marzo',
            'abril',
            'mayo',
            'junio',
            'julio',
            'agosto',
            'septiembre',
            'octubre',
            'noviembre',
            'diciembre'
        ]
    ];
    var z = [
        [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        [
            'Jan',
            'Feb',
            'Mär',
            'Apr',
            'Mai',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Okt',
            'Nov',
            'Dez'
        ],
        [
            'jan',
            'fév',
            'mars',
            'avr',
            'mai',
            'juin',
            'juil',
            'août',
            'sept',
            'oct',
            'nov',
            'déc'
        ],
        [
            'jan',
            'fev',
            'mar',
            'abr',
            'mai',
            'jun',
            'jul',
            'ago',
            'set',
            'out',
            'nov',
            'dez'
        ],
        [
            'jan',
            'feb',
            'mrt',
            'apr',
            'mei',
            'jun',
            'jul',
            'aug',
            'sep',
            'okt',
            'nov',
            'dec'
        ],
        [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        [
            'ene',
            'feb',
            'mar',
            'abr',
            'may',
            'jun',
            'jul',
            'ago',
            'sep',
            'oct',
            'nov',
            'dic'
        ]
    ];
    var a = [
        31,
        28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ];
    var h = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ];
    var v = 1000;
    j.member9456 = v;
    var s = 60000;
    j.member9457 = s;
    var r = 3600000;
    j.member9458 = r;
    var o = 86400000;
    j.member9459 = o;
    var n = 604800000;
    j.member9460 = n;
    var c = new Date();
    var x = function (B, C) {
        return formatRealDay(B + 11745, C);
    };
    var t = function (B, C) {
        return member9461(B * 60000 * 60 * 24, C);
    };
    j.member9461 = function (D, F) {
        y(D);
        var C = c.getDate();
        var E = c.getMonth();
        var B = c.getFullYear();
        if (Class316.getByID(F) === Class316.member3705) {
            return k(D, F);
        }
        return u(C, 2) + '-' + z[F.id][E] + '-' + B;
    };
    var m = function (E, I, G) {
        y(E);
        var D, F, C, B, H;
        if (G) {
            D = c.getUTCDate();
            F = c.getUTCMonth();
            C = c.getUTCFullYear();
            B = c.getUTCHours();
            H = c.getUTCMinutes();
        } else {
            D = c.getDate();
            F = c.getMonth();
            C = c.getFullYear();
            B = c.getHours();
            H = c.getMinutes();
        }
        if (Class316.getByID(I) === Class316.member3705) {
            return g(E, I, G);
        }
        return u(D, 2) + '-' + z[I.id][F] + '-' + C + ' ' + u(B, 2) + ':' + u(H, 2);
    };
    j.member9462 = m;
    var g = function (E, I, G) {
        y(E);
        var D, F, C, B, H;
        if (G) {
            D = c.getUTCDate();
            F = c.getUTCMonth() + 1;
            C = c.getUTCFullYear();
            B = c.getUTCHours();
            H = c.getUTCMinutes();
        } else {
            D = c.getDate();
            F = c.getMonth() + 1;
            C = c.getFullYear();
            B = c.getHours();
            H = c.getMinutes();
        }
        return u(D, 2) + '/' + u(F, 2) + '/' + u(C % 100, 2) + ' ' + u(B, 2) + ':' + u(H, 2);
    };
    var k = function (D, F) {
        y(D);
        var C = c.getDate();
        var E = c.getMonth() + 1;
        var B = c.getFullYear();
        return u(C, 2) + '/' + u(E, 2) + '/' + u(B % 100, 2);
    };
    var A = function (F) {
        y(F);
        var D = c.getDate();
        var G = c.getMonth();
        var C = c.getFullYear();
        var B = c.getHours();
        var H = c.getMinutes();
        var E = c.getSeconds();
        return C + '-' + u(G, 2) + '-' + u(D, 2) + '_' + u(B, 2) + '-' + u(H, 2) + '-' + u(E, 2);
    };
    j.member9463 = function (D) {
        y(D);
        var B = c.getHours();
        var E = c.getMinutes();
        var C = c.getSeconds();
        return u(B, 2) + ':' + u(E, 2) + ':' + u(C, 2);
    };
    j.member9464 = function () {
        return Math.floor(Class451.member7178() / 86400000 - 11745);
    };
    j.member9464 = function (B) {
        return Math.floor(B / 86400000 - 11745);
    };
    var b = function (B) {
        if (B < 0) {
            return (B + 1) % 4 === 0;
        }
        if (B < 1582) {
            return B % 4 === 0;
        }
        if (B % 4 != 0) {
            return false;
        }
        if (B % 100 != 0) {
            return true;
        }
        if (B % 400 != 0) {
            return false;
        }
        return true;
    };
    var y = function (B) {
        c.setTime(B);
    };
    var i = function (C) {
        var B = new Array(3);
        y(e(C));
        B[0] = c.getDate();
        B[1] = c.getMonth();
        B[2] = c.getFullYear();
        return B;
    };
    j.member9465 = i;
    j.member9466 = function (E, G, C, D, F, B) {
        c.setFullYear(B);
        c.setMonth(F);
        c.setDate(D);
        c.setHours(C);
        c.setMinutes(G);
        c.setSeconds(E);
        return c.getTime();
    };
    var e = function (B) {
        return (B + 11745) * 86400000;
    };
    j.member9467 = e;
    var d = function (B) {
        y(B);
        return c.getFullYear();
    };
    j.member9468 = d;
    var u = function (C, D) {
        var B = C.toString();
        var E = D - B.length;
        while (E > 0) {
            B = '0' + B;
            E--;
        }
        return B;
    };
    return j;
}();