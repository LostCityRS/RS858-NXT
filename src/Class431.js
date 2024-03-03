export var Class431 = function (a) {
    var d = {};
    var c = undefined;
    d.member6226 = function () {
        return c;
    };
    if (a.data !== undefined) {
        var e = a.data;
        while (true) {
            var b = e.member609();
            if (b === 0) {
                break;
            } else if (b === 1) {
                c = e.member608();
            } else if (b === 10) {
                e.member608();
            } else {
                throw new Error('981 ' + b);
            }
        }
    } else {
        throw new Error('982 ');
    }
    a = undefined;
    return d;
};