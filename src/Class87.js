export var Class87 = function () {
    var d = {};
    d.member734 = 0;
    d.member735 = 1;
    d.member736 = 2;
    d.member737 = 3;
    d.member738 = 4;
    d.member739 = 5;
    d.member740 = 6;
    d.member741 = 7;
    d.member742 = {
        priority: -1,
        member546: 0,
        member651: -1,
        member743: 512,
        member744: -1,
        member745: -1,
        member746: 0,
        member747: 0
    };
    var a = [
        [
            -1,
            0
        ],
        [
            0,
            1
        ],
        [
            1,
            0
        ],
        [
            0,
            -1
        ]
    ];
    var g = [
        [
            0,
            0
        ],
        [
            0,
            1
        ],
        [
            1,
            1
        ],
        [
            1,
            0
        ]
    ];
    d.member748 = 0;
    d.member749 = 1;
    d.member750 = 2;
    d.member751 = function (h, i) {
        return g[i + h & 3];
    };
    d.member752 = function (h, i) {
        return a[h + i & 3];
    };
    d.member753 = function (h, i) {
        i.member546 = h.member546;
        i.member754 = h.member754;
        i.member651 = h.member651;
        i.member743 = h.member743;
        i.member746 = h.member746;
        i.member747 = h.member747;
    };
    var c = d.member753;
    d.member755 = function (h, i) {
        i.x = h.x;
        i.y = h.y;
        i.member756 = h.member756;
        i.member757[0] = h.member757[0];
        i.member757[1] = h.member757[1];
        i.member757[2] = h.member757[2];
    };
    var b = d.member755;
    d.member758 = function (h, i) {
        b(h, i);
        c(h, i);
    };
    var e = function (h, i) {
        i.member546 = h.member546;
        i.member651 = h.member651;
        i.member743 = h.member743;
        i.priority = h.priority;
        i.member759 = h.member759;
        i.member760 = h.member760;
    };
    d.member761 = function (h, i, j) {
        var k;
        if (h) {
            k = {};
            e(i, k);
        } else if (j !== null) {
            k = {};
            e(j, k);
        }
        return k;
    };
    d.member762 = function (k) {
        var j = arguments[1];
        var i;
        for (var h = 2; h < arguments.length; h++) {
            i = arguments[h];
            if (i === undefined || i === null) {
                continue;
            }
            if (j !== undefined && j !== null) {
                if (!i.member759) {
                    continue;
                }
                if (i.priority < j.priority) {
                    continue;
                }
                if (i.priority === j.priority && !k) {
                    continue;
                }
            }
            j = i;
        }
        return j;
    };
    return d;
}();