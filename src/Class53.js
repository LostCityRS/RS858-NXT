import { Class5 } from 'Class5.js';
import { Class50 } from 'Class50.js';
import { Class7 } from 'Class7.js';
export var Class53 = function () {
    var a = {};
    a.member283 = function () {
        if (false) {
        } else {
            return '';
        }
    };
    a.member284 = function (b) {
        var c = '';
        c += 'attribute vec4 _hl;\n';
        c += 'attribute vec4 _ho;\n';
        c += 'attribute vec4 _hx;\n';
        c += 'attribute vec4 _in;\n';
        if (b.member291(Class5.member105) || b.member291(Class5.member94)) {
            c += 'attribute vec4 _hs;\n';
        }
        c += 'attribute vec4 _ip;\n';
        c += 'const float _pp=3.14159265358979323846264;\n';
        c += 'uniform mat4 _e;\n';
        c += 'uniform mat4 _d;\n';
        c += 'uniform mat4 _c;\n';
        c += 'uniform vec4 _fo;\n';
        if (b.member291(Class5.member105)) {
            c += 'uniform vec4 _bg[' + 3 * Class50.member361 + '];\n';
            c += 'uniform vec4 _bi[' + Class50.member362 + '];\n';
            c += 'uniform vec4 _bk[' + Class50.member363 * 2 + '];\n';
        }
        c += 'varying vec4 _la;\n';
        c += 'varying vec4 _lb;\n';
        c += 'varying vec4 _ox;\n';
        if (b.member291(Class5.member94)) {
            c += 'varying float _ly;\n';
        }
        c += 'void main(void) {\n';
        c += 'vec2 _jx=_hx.xy;\n';
        c += 'float _pq=_ip.x;\n';
        if (b.member291(Class5.member105)) {
            c += 'int _oz=int(_hs.y*3.0);\n';
            c += 'mat4 _pr=mat4(';
            c += 'vec4(_bg[_oz].xyz,0.0),';
            c += 'vec4(_bg[_oz].w,_bg[_oz+1].xy,0.0),';
            c += 'vec4(_bg[_oz+1].zw,_bg[_oz+2].x,0.0),';
            c += 'vec4(_bg[_oz+2].yzw,1.0));\n';
            c += 'vec4 _ps=_d*_e*_pr*vec4(_hl.xyz,1.0);\n';
            c += '_ps.xy+=_bk[int(_hs.w)].xy;\n';
            c += '_jx.xy*=_bk[int(_hs.w)].zw;\n';
            c += '_pq+=_bk[int(_hs.w)+1].x;\n';
        } else {
            c += 'vec4 _ps=_d*_e*vec4(_hl.xyz,1.0);\n';
        }
        c += '_pq=(_pq*2.0*_pp)/256.0;\n';
        c += '_jx.x*=cos(_pq);\n';
        c += '_jx.y*=sin(_pq);\n';
        c += '_ps.xy+=_jx.xy;\n';
        c += '_ps.z+=_hl.w;\n';
        c += 'gl_Position=_c*_ps;\n';
        c += '_la=_ho;\n';
        if (b.member291(Class5.member105)) {
            c += '_la.a+=_bi[int(_hs.z)].a;\n';
            c += '_la.a=clamp(_la.a,0.0,1.0);\n';
        }
        c += '_la+=_fo;\n';
        c += '_lb=_hx;\n';
        c += '_lb.x=_ip.y;\n';
        c += '_lb.y=_ip.z;\n';
        c += '_ox=_in;\n';
        if (b.member291(Class5.member94)) {
            c += '_ly=_hs.x;\n';
        }
        c += '}\n';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        c.push(Class7.member262);
        c.push(Class7.member265);
        c.push(Class7.member270);
        c.push(Class7.member280);
        if (b.member291(Class5.member105) || b.member291(Class5.member94)) {
            c.push(Class7.member267);
        }
        c.push(Class7.member282);
        c.push(Class7.member143);
        c.push(Class7.member144);
        c.push(Class7.member142);
        c.push(Class7.member230);
        if (b.member291(Class5.member105)) {
            c.push(Class7.member161);
            c.push(Class7.member162);
            c.push(Class7.member163);
        }
        return c;
    };
    return a;
}();