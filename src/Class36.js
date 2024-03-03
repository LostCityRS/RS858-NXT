import { Class5 } from 'Class5.js';
import { Class243 } from 'Class243.js';
import { Class242 } from 'Class242.js';
import { Class241 } from 'Class241.js';
import { Class239 } from 'Class239.js';
import { Class238 } from 'Class238.js';
import { Class237 } from 'Class237.js';
import { Class240 } from 'Class240.js';
import { Class7 } from 'Class7.js';
export var Class36 = function () {
    var a = {};
    a.member283 = function () {
        if (false) {
        } else {
            return '';
        }
    };
    a.member284 = function (b) {
        var c = '';
        c += 'precision mediump float;\n';
        c += 'varying vec4 _wv;\n';
        c += 'varying vec4 _la;\n';
        c += 'varying vec3 _wx;\n';
        if (b.member291(Class5.member95)) {
            c += 'varying vec4 _le;\n';
        }
        c += 'varying vec4 _kz;\n';
        c += 'varying vec4 _wz;\n';
        if (b.member291(Class5.member118)) {
            c += Class243.member2837(b);
        }
        if (b.member291(Class5.member89)) {
            if (b.member291(Class5.member90)) {
                c += 'uniform vec3 _o;\n';
                c += 'uniform float _s;\n';
                c += 'uniform float _gw;\n';
                c += 'uniform vec3 _gx;\n';
            }
        }
        if (b.member291(Class5.member93)) {
            c += 'uniform sampler2D _w;\n';
            c += 'uniform vec3 _y;\n';
            if (b.member291(Class5.member94)) {
                c += 'uniform sampler2D _z;\n';
                c += 'uniform vec3 _ba;\n';
            }
        }
        if (b.member291(Class5.member95)) {
            c += 'uniform sampler2D _bp;\n';
            c += 'uniform float _bm;\n';
            c += 'uniform vec4 _bq;\n';
        }
        c += 'uniform vec4 _fv;\n';
        c += 'uniform vec4 _fw;\n';
        c += 'uniform vec4 _fx;\n';
        c += 'uniform vec4 _gs;\n';
        c += 'uniform float _gc;\n';
        c += 'uniform float _gf;\n';
        if (b.member291(Class5.member112) || b.member291(Class5.member113)) {
            c += 'uniform float _gk;\n';
            c += 'uniform float _gz;\n';
        } else {
            c += 'uniform float _gm;\n';
        }
        c += 'uniform float _go;\n';
        c += 'uniform vec4 _gd;\n';
        c += 'uniform float _ft;\n';
        c += 'uniform float _gq;\n';
        if (b.member291(Class5.member112)) {
            c += 'uniform sampler2D _ed;\n';
            c += 'uniform vec2 _ef;\n';
        }
        if (b.member291(Class5.member113)) {
            c += 'uniform sampler2D _eg;\n';
        }
        if (b.member291(Class5.member100)) {
            c += 'uniform vec4 _cj;\n';
            c += 'uniform float _cl;\n';
            c += 'uniform float _cn;\n';
        }
        c += 'uniform vec3 _ei;\n';
        c += 'uniform float _ek;\n';
        c += 'uniform float _em;\n';
        if (b.member291(Class5.member103)) {
            c += 'uniform samplerCube _da;\n';
        }
        c += 'const float _xb=-0.1137254901960784;\n';
        c += 'const float _xc=0.30;\n';
        c += 'const vec3 _xd=vec3(-0.5,0.0,-0.5);\n';
        c += 'const vec3 _xe=vec3(2.0,1.0,2.0);\n';
        '\n';
        c += Class242.member284(b);
        c += Class241.member284(b);
        if (b.member291(Class5.member93)) {
            c += Class239.member284(b, Class238.member288);
        }
        if (b.member291(Class5.member95)) {
            c += Class237.member284(b);
        }
        if (b.member291(Class5.member100)) {
            c += Class240.member284(b);
        }
        if (b.member291(Class5.member118)) {
            c += Class243.member2839(b);
        }
        c += 'float _xf(float _xg, float _xh, float _ki) {\n';
        c += '\t_ki=clamp((_ki-_xg)/(_xh-_xg),0.0,1.0);\n';
        c += '\treturn _ki*_ki*_ki*(_ki*(_ki*6.0-15.0)+10.0);\n';
        c += '}';
        c += 'float _xj(vec3 _xo, vec3 _xp, float _xl, float _xm) {\n';
        c += '\tfloat _xr=1.0-clamp(dot(_xo,_xp),0.0,1.0);\n';
        c += '\tfloat _xs=_xr*_xr;\n';
        c += '\t_xs*=_xs;\n';
        c += '\t_xs*=_xr;\n';
        c += '\treturn clamp(_xs*(1.0-clamp(_xl,0.0,1.0))+_xl-_xm,0.0,1.0);\n';
        c += '}';
        c += 'void main(void) {\n';
        c += 'vec3 _iz=_wv.xyz-_kz.xyz;\n';
        c += 'float _lx=0.0;\n';
        c += '_lx=(_ek-_kz.w)/(_ek-_em);\n';
        c += '_lx=clamp(_lx,0.0,1.0);\n';
        c += 'vec4 _mg=vec4(mix(_la.rgb,_ei,_lx),_la.a);\n';
        if (b.member291(Class5.member124)) {
            if (b.member291(Class5.member94)) {
                c += 'vec4 _xu=_wc(vec4(_wz.pq,_fv.y,_fv.x),_w,_z,0.0,_y,_ba).rgba;\n';
                c += 'vec4 _xw=_wc(vec4(_wz.pq,_fw.y,_fw.x),_w,_z,0.0,_y,_ba).rgba;\n';
            } else {
                c += 'vec4 _xu=_wc(vec4(_wz.pq,_fv.y,_fv.x),_w,_y).rgba;\n';
                c += 'vec4 _xw=_wc(vec4(_wz.pq,_fw.y,_fw.x),_w,_y).rgba;\n';
            }
            c += 'float _xy=_wv.w;\n';
            c += '_xu.a*=_xy;\n';
            c += '_xw.a*=_xy;\n';
            c += 'vec4 _xz=mix(_mg,_xu,clamp(_fv.y,0.0,1.0));\n';
            c += 'vec4 _ya=mix(_mg,_xw,clamp(_fw.y,0.0,1.0));\n';
        } else {
            c += 'vec4 _xz=_mg;\n';
            c += 'vec4 _ya=_mg;\n';
        }
        if (b.member291(Class5.member94)) {
            c += 'float _yb=_wc(vec4(_wz.st,_gs.y,_gs.x),_w,_z,0.0,_y,_ba).r;\n';
            c += 'vec3 _yd=_vp(vec4(_wz.pq,_fv.z,_fv.x),_w,_z,0.0,_y,_ba,1.0).rgb;\n';
            c += 'vec3 _yf=_vp(vec4(_wz.pq,_fw.z,_fw.x),_w,_z,0.0,_y,_ba,1.0).rgb;\n';
        } else {
            c += 'float _yb=_wc(vec4(_wz.st,_gs.y,_gs.x),_w,_y).r;\n';
            c += 'vec3 _yd=_vp(vec4(_wz.pq,_fv.z,_fv.x),_w,_y,1.0).rgb;\n';
            c += 'vec3 _yf=_vp(vec4(_wz.pq,_fw.z,_fw.x),_w,_y,1.0).rgb;\n';
        }
        c += '_yd.rg+=_xb;\n';
        c += '_yd.rgb=_yd.rgb*2.0-1.0;\n';
        c += '_yd.xyz=_yd.xzy;\n';
        c += '_yf.rg+=_xb;\n';
        c += '_yf.rgb=_yf.rgb*2.0-1.0;\n';
        c += '_yf.xyz=_yf.xzy;\n';
        c += 'float _yh=mix(1.0,0.0,smoothstep(0.0,0.5,_gq));\n';
        c += 'float _yi=mix(0.0,1.0,smoothstep(0.5,1.0,_gq));\n';
        c += 'float _yj=mix(_yh,_yi,step(0.5,_gq));\n';
        c += 'float _yk=mix(_yj,_yb*_yj,smoothstep(0.0,0.5,_gq));\n';
        c += 'float _ym=mix((1.0-_yb)*_yj,_yj,smoothstep(0.5,1.0,_gq));\n';
        c += 'float _yn=mix(_yk,_ym,step(0.5,_gq));\n';
        c += '_yd=mix(_yd,_yf,_yn);\n';
        if (b.member291(Class5.member112) || b.member291(Class5.member113)) {
            c += 'vec3 _xo=normalize(mix(_wx,_yd,_gk));\n';
        } else {
            c += 'vec3 _xo=normalize(mix(_wx,_yd,_gm));\n';
        }
        c += '_xz=mix(_xz,_ya,_yn);\n';
        if (b.member291(Class5.member95)) {
            c += 'float _kq=length(_iz);\n';
            c += 'float _kg=_kp(vec4(_le.xy+_xo.xz*0.009,_le.zw),_bp,_bm,_bq,_kq);\n';
        } else {
            c += 'float _kg=1.0;\n';
        }
        c += '_iz=normalize(_iz);\n';
        if (b.member291(Class5.member112) || b.member291(Class5.member113)) {
            c += 'float _yo=min(_kz.w,64.0)/4.0;\n';
            if (b.member291(Class5.member112)) {
                c += 'vec4 _yq=texture2D(_ed,(gl_FragCoord.xy+(_xo.xz*_yo+vec2(0.0,-6.0)))*_ef);\n';
                c += 'vec3 _ys=reflect(vec3(-_iz.x,-_iz.y,_iz.z),vec3(0.0,1.0,0.0));\n';
                c += '_yq=_yq*(_gz)+textureCube(_da,_ys)*(1.0-_gz);\n';
                c += '_yq=_yq*_gf+_xz*max(0.0,1.0-(_gf)); _yq.a=0.0;\n';
            } else {
                c += 'vec4 _yq=vec4(0.0,0.0,0.0,0.0);\n';
            }
            if (b.member291(Class5.member113)) {
                c += 'vec4 _yt=texture2D(_eg,(gl_FragCoord.xy+(_xo.xz*_yo+vec2(0.0,-6.0)))*_ef);\n';
            } else {
                c += 'vec4 _yt=vec4(0.0,0.0,0.0,0.0);\n';
            }
        } else if (b.member291(Class5.member103)) {
            c += 'vec3 _ys=reflect(vec3(-_iz.x,-_iz.y,_iz.z),vec3(0.0,1.0,0.0));\n';
            c += 'vec4 _yq=textureCube(_da,_ys);\n';
            c += '_yq=_yq*_gf+_xz*max(0.0,1.0-(_gf)); _yq.a=0.0;\n';
            c += 'vec4 _yt=vec4(0.0,0.0,0.0,1.0);\n';
        } else {
            c += 'vec4 _yq=vec4(0.0,0.0,0.0,0.0);\n';
            c += 'vec4 _yt=vec4(0.0,0.0,0.0,0.0);\n';
        }
        c += 'float _yv=max(0.0,sign(_gc))*min(1.0, 1.0-min(_kz.w/_gc,1.0));\n';
        if (b.member291(Class5.member94)) {
            c += 'vec4 _yx=(_gd/255.0)*_wc(vec4(_wz.pq*_fx.w,_fx.y,_fx.x),_w,_z,0.0,_y,_ba)*_yv;\n';
        } else {
            c += 'vec4 _yx=(_gd/255.0)*_wc(vec4(_wz.pq*_fx.w,_fx.y,_fx.x),_w,_y)*_yv;\n';
        }
        c += 'float _yy=-clamp(_go,0.0,1.0);\n';
        c += 'float _yz=1.0-_xj(_xo,_iz,_xc,_yy);\n';
        c += '_yz=_xf(0.0,1.0,_yz);\n';
        if (b.member291(Class5.member90)) {
            c += 'vec3 _za=normalize(_o);\n';
            c += 'vec3 _zc=normalize(_za+_iz);\n';
            c += 'float _zd=dot(_zc,_xo);\n';
            c += 'float _zf=clamp(_zd*0.5+0.5,0.0,1.0);\n';
            c += 'vec3 _zg=_yz*clamp(_za.y,0.0,1.0)*(pow(_zf,_s)*(_gw*1.8+0.2))*_gx;\n';
            c += '_zg+=_zg*25.0*clamp(_gw-0.05,0.0,1.0)*_gx;\n';
            c += 'vec3 _zh=(1.0-_yv)*clamp(_xz.a,0.0,1.0)*_zg.rgb;\n';
        } else {
            c += 'vec3 _zh=vec3(0.0,0.0,0.0);\n';
        }
        c += 'float _zi=950.0;\n';
        c += 'float _zk=min(1.0,1.0-min(_kz.w/_zi,1.0));\n';
        c += '_zk=pow(clamp(_zk*_zk*_zk*(_zk*(_zk*6.0-15.0)+10.0),0.0,1.0),15.0);';
        c += 'vec3 _zl=mix(_yq.rgb,_xz.rgb*0.5,_yz);\n';
        c += 'vec3 _zn=mix(_yq.rgb,_yt.rgb,_yz);\n';
        c += 'vec4 _ix=vec4(mix(_zl,_zn,_zk)*_xz.rgb*_kg,_xz.a);\n';
        if (b.member291(Class5.member103) && b.member308(Class5.member112)) {
            c += '_ix.a*=(1.0-_zk*0.5);\n';
        }
        c += '_ix=clamp(_ix,0.0,1.0);\n';
        c += '_ix+=clamp(vec4(_yx.rgb,_yx.a),0.0,1.0);\n';
        c += '_ix+=step(1.0,_kg)*vec4(_zh,0.0);\n';
        if (b.member291(Class5.member118)) {
            c += '_ix.xyz=_ss(_ix.xyz, _rk, _rl);\n';
        }
        if (b.member291(Class5.member100)) {
            c += '_ix=_zs(_ix,_cj,_cn,_cl);\n';
        }
        c += 'gl_FragColor=_ix;\n';
        c += '}';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        if (b.member291(Class5.member89)) {
            if (b.member291(Class5.member90)) {
                c.push(Class7.member150);
                c.push(Class7.member153);
                c.push(Class7.member251);
                c.push(Class7.member252);
            }
        }
        if (b.member291(Class5.member93)) {
            c.push(Class7.member155);
            c.push(Class7.member156);
            if (b.member291(Class5.member94)) {
                c.push(Class7.member157);
                c.push(Class7.member158);
            }
        }
        if (b.member291(Class5.member95)) {
            c.push(Class7.member166);
            c.push(Class7.member164);
            c.push(Class7.member167);
        }
        if (b.member291(Class5.member100)) {
            c.push(Class7.member179);
            c.push(Class7.member180);
            c.push(Class7.member181);
        }
        c.push(Class7.member210);
        c.push(Class7.member211);
        c.push(Class7.member212);
        if (b.member291(Class5.member112)) {
            c.push(Class7.member207);
            c.push(Class7.member208);
        }
        if (b.member291(Class5.member113)) {
            c.push(Class7.member209);
        }
        if (b.member291(Class5.member103)) {
            c.push(Class7.member188);
        }
        c.push(Class7.member235);
        c.push(Class7.member236);
        c.push(Class7.member237);
        c.push(Class7.member249);
        c.push(Class7.member240);
        c.push(Class7.member241);
        c.push(Class7.member234);
        c.push(Class7.member248);
        c.push(Class7.member242);
        if (b.member291(Class5.member112) || b.member291(Class5.member113)) {
            c.push(Class7.member245);
            c.push(Class7.member254);
        } else {
            c.push(Class7.member246);
        }
        c.push(Class7.member247);
        return c;
    };
    return a;
}();