export var InvType = function (j) {
    var InvType = {};
    var e;
    var i = -1;
    if (j.member625 !== undefined && j.myList !== undefined) {
        i = j.member625;
        e = j.myList;
    } else {
        throw new Error('884 ');
    }
    var size = 0;
    InvType.getSize = function () {
        return size;
    };
    var stock_length = 0;
    InvType.getStockLength = function () {
        return stock_length;
    };
    var stock_obj = null;
    InvType.getStockObjs = function () {
        return stock_obj;
    };
    var stock_count = null;
    InvType.getStockCounts = function (m) {
        return stock_count[m];
    };
    var decode = function (n) {
        while (true) {
            var m = n.g1();
            if (m === undefined) {
                throw new Error('885 ');
                break;
            }
            if (m === 0) {
                break;
            }
            decodeNext(n, m);
        }
    };
    InvType.decode = decode;
    var decodeNext = function (packet, opcode) {
        if (opcode === 2) {
            size = packet.g2();
        } else if (opcode === 4) {
            stock_length = packet.g1();
            stock_obj = new Array(stock_length);
            stock_count = new Array(stock_length);
            for (var m = 0; m < stock_length; m++) {
                stock_obj[m] = packet.g2();
                stock_count[m] = packet.g2();
            }
        } else if (false) {
        }
    };
    j = undefined;
    return InvType;
};