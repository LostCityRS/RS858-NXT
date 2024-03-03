export var CursorType = function (j) {
    var CursorType = {};
    var c;
    var g = -1;
    if (j.member625 !== undefined && j.myList !== undefined) {
        g = j.member625;
        c = j.myList;
    } else {
        throw new Error('911 ');
    }
    var graphic = 0;
    CursorType.getGraphic = function () {
        return graphic;
    };
    var hotspot_x = 0;
    CursorType.getHotspotX = function () {
        return hotspot_x;
    };
    var hotspot_y = 0;
    CursorType.getHotspotY = function () {
        return hotspot_y;
    };
    var decode = function (m) {
        while (true) {
            var k = m.g1();
            if (k === undefined) {
                throw new Error('912 ');
                break;
            }
            if (k === 0) {
                break;
            }
            a(m, k);
        }
    };
    CursorType.decode = decode;
    var a = function (m, k) {
        if (k === 1) {
            graphic = m.gSmart2or4null();
        } else if (k === 2) {
            hotspot_x = m.g1();
            hotspot_y = m.g1();
        } else if (false) {
        }
    };
    j = undefined;
    return CursorType;
};