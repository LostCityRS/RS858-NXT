export var Class315 = function () {
    var a = {
        member3689: {
            id: 4,
            member3690: false ? {} : ''
        },
        member3691: {
            id: 3,
            member3690: false ? {} : ''
        },
        member3692: {
            id: 5,
            member3690: false ? {} : ''
        },
        member3693: {
            id: 2,
            member3690: false ? {} : ''
        },
        member3694: {
            id: 1,
            member3690: false ? {} : ''
        },
        member3695: {
            id: 6,
            member3690: false ? {} : ''
        },
        member3696: {
            id: 0,
            member3690: false ? {} : ''
        },
        member3697: {
            id: 10,
            member3690: false ? {} : ''
        }
    };
    a.getByID = function (c) {
        for (var d in a) {
            var b = a[d];
            if (b.id === c) {
                return b;
            }
        }
        return null;
    };
    a.member3698 = function (b) {
        return b === a.member3694 || b === a.member3693 || b === a.member3691 || b === a.member3692 || b === a.member3695 || b == a.member3697;
    };
    return a;
}();