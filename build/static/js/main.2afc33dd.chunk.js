(window["webpackJsonpprototype-app"]=window["webpackJsonpprototype-app"]||[]).push([[0],{51:function(e,a,t){e.exports=t.p+"static/media/sampah_boncos.4f3e4f58.jpeg"},52:function(e,a,t){e.exports=t.p+"static/media/sampah_botol_bening.dc74916d.jpeg"},53:function(e,a,t){e.exports=t.p+"static/media/sampah_gabruk.8010bafa.jpeg"},57:function(e,a,t){e.exports=t.p+"static/media/map_gojek2.7c43bd22.jpg"},67:function(e,a,t){e.exports=t(96)},72:function(e,a,t){e.exports=t.p+"static/media/logo.25bf045c.svg"},96:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(72);var i=t(9),o=t(59),m=t(4),s=t(115),u=t(116),d=t(130),g=t(117),p=t(118),b=t(37),f=t.n(b),E=Object(o.a)({palette:{primary:{main:"#24fc03",light:"#ff5f52",dark:"#8e0000",contrastText:"#ffffff"}}}),y=Object(m.a)((function(e){return{title:{fontFamily:"Open Sans"},button:{color:"white",fontFamily:"Open Sans"},buttonOutlined:{color:"grey",fontFamily:"Open Sans"}}}))((function(e){var a=e.classes;e.match;return r.a.createElement(s.a,null,r.a.createElement(u.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(d.a,{mt:E.spacing(3)},r.a.createElement(g.a,{color:"initial",variant:"h6",className:a.title},"Sampah apa yang mau kamu tabung ?"))),r.a.createElement(u.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(d.a,{mt:E.spacing(1)},r.a.createElement(p.a,{onClick:function(){return Object(i.navigate)("/list-products")},size:"small",color:"secondary","aria-label":"add",className:a.button},r.a.createElement(f.a,{style:{color:E.palette.primary}})))))})),h=t(39),v=t(119),k=t(120),j=t(121),x=t(122),w=t(123),O=t(124),N=t(125),C=t(126),S=t(127),I=t(56),L=t.n(I),B=t(54),P=t.n(B),z=t(55),F=t.n(z),W=function(e){return{title:{fontFamily:"Open Sans"},button:{color:"white",fontFamily:"Open Sans"},buttonOutlined:{color:"grey",fontFamily:"Open Sans"}}},A=t(51),D=t.n(A),R=t(52),T=t.n(R),G=t(53),_=t.n(G),q=Object(v.a)(W),J=Object(v.a)((function(e){return{card:{display:"flex",margin:e.spacing(1)},details:{display:"flex",flexDirection:"column"},content:{width:240,maxWidth:300},cover:{width:151},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1),marginLeft:e.spacing(1)},playIcon:{height:38,width:38},colorSecondary:{backgroundColor:"white"},colorPrimary:{backgroundColor:"green"}}})),M=function(){var e=J(),a=q(),t=Object(n.useState)([]),l=Object(h.a)(t,2),c=l[0],o=l[1];Object(n.useEffect)((function(){o(K)}),[]);var m=Object(n.useState)([]),d=Object(h.a)(m,2),p=d[0],b=(d[1],[]);console.log("List : ",c);return r.a.createElement(s.a,null,r.a.createElement(k.a,{position:"fixed",color:"secondary",classes:{colorSecondary:e.colorSecondary}},r.a.createElement(j.a,null,r.a.createElement(x.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(w.a,{className:e.margin,badgeContent:p.length,color:"primary",classes:{colorPrimary:e.colorPrimary}},r.a.createElement(P.a,{color:"secondary"}))),r.a.createElement(u.a,{container:!0,spacing:8,alignItems:"flex-end"}),r.a.createElement(O.a,{size:"small",onClick:function(){return Object(i.navigate)("/question-one")},color:"secondary",endIcon:r.a.createElement(F.a,null)},r.a.createElement(g.a,{variant:"subtitle1",className:a.title},"Lanjut")))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),c.length>0&&c.map((function(t,n){var l,i=(l=t.id,-1!==c.indexOf(l));return r.a.createElement(u.a,{container:!0,direction:"row",justify:"center",alignItems:"center",key:n},r.a.createElement(N.a,{className:e.card},r.a.createElement("div",{className:e.details},r.a.createElement(C.a,{className:e.content},r.a.createElement(g.a,{component:"h6",variant:"h6",className:a.title},t.title),r.a.createElement(g.a,{variant:"subtitle1",color:"textSecondary",className:a.title},t.price)),r.a.createElement("div",{className:e.controls},r.a.createElement(O.a,{onClick:function(e){return function(e,a){console.log("Data : ",a),e.preventDefault();var t=c.indexOf(a.id);-1===t?b=b.concat(c,a.id):0===t?b=b.concat(c.slice(1)):t===c.length-1?b=b.concat(c.slice(0,-1)):t>0&&(b=b.concat(c.slice(t+1))),console.log("NewSleelcted : ",b),o(b)}(e,t)},size:"small",variant:"outlined",className:a.buttonOutlined,endIcon:i&&r.a.createElement(L.a,{style:{color:"green"}})},"Tabung ini"))),r.a.createElement(S.a,{className:e.cover,image:t.image,title:t.title})))})))},K=[{id:1,title:"Sampah Boncos",price:"Rp 10,000,-/kg",image:D.a},{id:2,title:"Sampah Botol bening",price:"Rp 10,000,-/kg",image:T.a},{id:3,title:"Sampah Gabruk",price:"Rp 10,000,-/kg",image:_.a}],Y=Object(v.a)(W),$=Object(v.a)((function(e){return{card:{display:"flex",margin:e.spacing(1)},details:{display:"flex",flexDirection:"column"},content:{width:240,maxWidth:300},cover:{width:151},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1),marginLeft:e.spacing(1)},playIcon:{height:38,width:38},colorSecondary:{backgroundColor:"white"},colorPrimary:{backgroundColor:"green",":hover":{backgroundColor:"orange"}},primary:{backgroundColor:"#f50057"}}})),H=function(e){var a=$(),t=Y();return r.a.createElement(u.a,{container:!0},r.a.createElement(u.a,{item:!0,xs:12,md:12,style:{textAlign:"center"}},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(g.a,{variant:"subtitle2",className:t.title},"Mau di jemput Abang Gojek ?"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(O.a,{size:"small",variant:"outlined",className:t.title},"Tidak"),"\xa0",r.a.createElement(O.a,{size:"small",onClick:function(){return Object(i.navigate)("/question-scenario-jemput-gojek")},variant:"contained",color:"primary",classes:{containedPrimary:a.primary},className:t.title},"Ya")))},Q=Object(v.a)(W),U=Object(v.a)((function(e){return{card:{display:"flex",margin:e.spacing(1)},details:{display:"flex",flexDirection:"column"},content:{width:240,maxWidth:300},cover:{width:151},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1),marginLeft:e.spacing(1)},playIcon:{height:38,width:38},colorSecondary:{backgroundColor:"white"},colorPrimary:{backgroundColor:"green",":hover":{backgroundColor:"orange"}},primary:{backgroundColor:"#f50057"}}})),V=function(e){var a=U(),t=Q();return r.a.createElement(u.a,{container:!0},r.a.createElement(u.a,{item:!0,xs:12,md:12,style:{textAlign:"center"}},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(g.a,{variant:"subtitle2",className:t.title},"Jam berapa di jemput ?"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.a,{onClick:function(){return Object(i.navigate)("/map-gojek")},variant:"extended",size:"small",color:"primary",classes:{primary:a.primary}},r.a.createElement(g.a,{variant:"subtitle2",className:t.title},"09.00 pagi hari ini")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.a,{variant:"extended",size:"small",color:"primary",classes:{primary:a.primary}},r.a.createElement(g.a,{variant:"subtitle2",className:t.title},"10.00 pagi hari ini")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.a,{variant:"extended",size:"small",color:"primary",classes:{primary:a.primary}},r.a.createElement(g.a,{variant:"subtitle2",className:t.title},"Saya sibuk hari ini, mau cari waktu yang lain"))))},X=t(57),Z=t.n(X),ee=Object(v.a)(W),ae=Object(v.a)((function(e){return{card:{display:"flex",margin:e.spacing(1)},details:{display:"flex",flexDirection:"column"},content:{width:240,maxWidth:300},cover:{width:151},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1),marginLeft:e.spacing(1)},playIcon:{height:38,width:38},colorSecondary:{backgroundColor:"white"},colorPrimary:{backgroundColor:"green",":hover":{backgroundColor:"orange"}},primary:{backgroundColor:"#f50057"}}})),te=function(e){var a=ae(),t=ee();return r.a.createElement(n.Fragment,null,r.a.createElement("img",{width:"100%",height:"auto",src:Z.a,alt:"Map"}),r.a.createElement(d.a,null,r.a.createElement(O.a,{onClick:function(){return Object(i.navigate)("/loading-gojek")},variant:"contained",color:"primary",classes:{containedPrimary:a.primary},fullWidth:!0},r.a.createElement(g.a,{variant:"subtitle1",className:t.title},"Jemput"))))},ne=t(128),re=t(60),le=Object(o.a)({palette:{primary:{main:"#24fc03",light:"#ff5f52",dark:"#8e0000",contrastText:"#ffffff"}}}),ce=Object(m.a)((function(e){return{title:{fontFamily:"Open Sans"},button:{color:"white",fontFamily:"Open Sans"},buttonOutlined:{color:"grey",fontFamily:"Open Sans"}}}))((function(e){var a=e.classes;e.match;return Object(n.useEffect)((function(){setTimeout((function(){Object(i.navigate)("/congratulation")}),4e4)}),[]),r.a.createElement(s.a,null,r.a.createElement(u.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(d.a,{mt:le.spacing(3)},r.a.createElement(re.a,{adjustingSpeed:500,interval:1e4},r.a.createElement("div",null,r.a.createElement(g.a,{variant:"subtitle2",className:a.title},r.a.createElement("b",null,"Abang Gojek sedang menjemput tabungan kamu..."))),r.a.createElement("div",null,r.a.createElement(g.a,{variant:"subtitle2",className:a.title},r.a.createElement("b",null,"Abang Gojek menerima titipan tabungan kamu..."))),r.a.createElement("div",null,r.a.createElement(g.a,{variant:"subtitle2",className:a.title},r.a.createElement("b",null,"Abang Gojek sedang mengantarkan tabungan kamu",r.a.createElement("br",null),"ke ",r.a.createElement("i",null,"Bank Sampah Rawajati"),"..."))),r.a.createElement("div",null,r.a.createElement(g.a,{variant:"subtitle2",className:a.title},r.a.createElement("b",null,r.a.createElement("i",null,"Bank Sampah Rawajati")," sedang menimbang ",r.a.createElement("br",null),"tabungan kamu...")))),r.a.createElement(d.a,{mt:le.spacing(1),marginLeft:le.spacing(2.4)},r.a.createElement(ne.a,{color:"secondary",size:24})))))})),ie=t(129),oe=Object(v.a)(W),me=Object(v.a)((function(e){return{card:{display:"flex",margin:e.spacing(1)},cardCongrat:{minWidth:275,width:275,backgroundColor:ie.a[500]},details:{display:"flex",flexDirection:"column"},content:{width:240,maxWidth:300},cover:{width:151},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1),marginLeft:e.spacing(1)},playIcon:{height:38,width:38},colorSecondary:{backgroundColor:"white"},colorPrimary:{backgroundColor:"green",":hover":{backgroundColor:"orange"}},primary:{backgroundColor:"#f50057"},rounded:{color:"#fff",backgroundColor:ie.a[500]}}})),se=function(e){var a=me(),t=oe();return r.a.createElement(u.a,{container:!0},r.a.createElement(u.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(d.a,{marginTop:24,marginBottom:2},r.a.createElement(N.a,{className:a.cardCongrat,variant:"outlined"},r.a.createElement(C.a,{style:{textAlign:"center"}},r.a.createElement(g.a,{variant:"h3",className:t.title,style:{color:"white"}},"5 Kg"))))),r.a.createElement(u.a,{item:!0,xs:12,md:12,style:{textAlign:"center"}},r.a.createElement(g.a,{variant:"subtitle1",className:t.title},r.a.createElement("i",null,"Selamat tabungan kamu telah berhasil di tambah :)")),r.a.createElement("br",null),r.a.createElement(O.a,{size:"small",variant:"contained",color:"primary",classes:{containedPrimary:a.primary},className:t.title},"Lihat \xa0 ",r.a.createElement("i",null,"detail"))))},ue=function(){return r.a.createElement("h1",null,"Page Not found")},de=function(){var e={"/":function(){return r.a.createElement(y,null)},"/list-products":function(){return r.a.createElement(M,null)},"/question-one":function(){return r.a.createElement(H,null)},"/question-scenario-jemput-gojek":function(){return r.a.createElement(V,null)},"/map-gojek":function(){return r.a.createElement(te,null)},"/loading-gojek":function(){return r.a.createElement(ce,null)},"/congratulation":function(){return r.a.createElement(se,null)}};return Object(i.useRoutes)(e)||r.a.createElement(ue,null)};t(95),c.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[67,1,2]]]);
//# sourceMappingURL=main.2afc33dd.chunk.js.map