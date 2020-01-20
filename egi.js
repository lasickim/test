var i = 0;
var basicimg = ['https://imgur.com/jpLWTnQ.png','https://imgur.com/g1zEeXn.png','https://imgur.com/eAHrL2J.png','https://imgur.com/lYAd3N7.png','https://imgur.com/bAJ3LO5.png','https://imgur.com/T6APsqP.png','https://imgur.com/H7z9IFs.png','https://imgur.com/fE3CHmJ.png','https://imgur.com/5YjSvmM.png'];
var basicglow_main = ['https://imgur.com/hfzzpiB.png','https://imgur.com/LZSUtNP.png','https://imgur.com/y4ueatX.png','https://imgur.com/MQ4k4Ga.png','https://imgur.com/bjecSTQ.png','https://imgur.com/HZGCsqo.png','https://imgur.com/dtLtxJl.png','https://imgur.com/VN0cfxw.png','https://imgur.com/OeWiyxg.png'];
var shalimg = ['https://imgur.com/fVqUa2e.png','https://imgur.com/snhy13g.png','https://imgur.com/6qdGzzD.png','https://imgur.com/rjJqX2n.png','https://imgur.com/unZd0M2.png'];
var shalglow_main = ['https://imgur.com/hfzzpiB.png','https://imgur.com/LZSUtNP.png','https://imgur.com/y4ueatX.png','https://imgur.com/HZGCsqo.png','https://imgur.com/MQ4k4Ga.png'];
var basic = ['B01','B02','B03','B04','B05','B06','B07','B08','B09'];
var shal = ['S01','S02','S03','S04','S05'];
var basicstn = ['https://imgur.com/7o0hr1O.png','https://imgur.com/a01kr1K.png','https://imgur.com/b2SePPP.png','https://imgur.com/1mk2C1j.png','https://imgur.com/OqvxNXf.png','https://imgur.com/OIvL3h1.png','https://imgur.com/BZPv5Ef.png','https://imgur.com/lC9CK5N.png','https://imgur.com/lzdeKRR.png'];
var basicglow = ['https://imgur.com/Jbcl4Y3.png','https://imgur.com/elStOGt.png','https://imgur.com/7MfCcI3.png','https://imgur.com/LZZBMzt.png','https://imgur.com/FyINDpq.png','https://imgur.com/xtB3cIw.png','https://imgur.com/L37qXAi.png','https://imgur.com/u6BkqEi.png','https://imgur.com/m0Ff6cu.png'];
var shal_tiny = ['https://imgur.com/6mGaB9V.png','https://imgur.com/feUsieE.png','https://imgur.com/ASPuQ4J.png','https://imgur.com/jOIWIdF.png','https://imgur.com/IJU7rEM.png'];
var shalglow_tiny = ['https://imgur.com/Jbcl4Y3.png','https://imgur.com/elStOGt.png','https://imgur.com/7MfCcI3.png','https://imgur.com/xtB3cIw.png','https://imgur.com/LZZBMzt.png'];
var snum;
function click2(name){
  i = name;
  var obj = document.getElementById('a');
  var url = "url(" + basicimg[i] + ")";
  obj.style.background = url;
  var objnum = document.getElementById('num').innerHTML=basic[i];
}
function click3(name){
  i = name;
  var obj = document.getElementById('a');
  var url = "url(" + shalimg[i] + ")";
  obj.style.background = url;
  var objnum = document.getElementById('num').innerHTML=shal[i];
}
function click4(name){
  i = name;
  var obj = document.getElementById('a');
  var url = "url(" + basicglow_main[i] + ")";
  obj.style.background = url;
  var objnum = document.getElementById('num').innerHTML=basic[i];
}
function click5(name){
  i = name;
  var obj = document.getElementById('a');
  var url = "url(" + shalglow_main[i] + ")";
  obj.style.background = url;
  var objnum = document.getElementById('num').innerHTML=shal[i];
}
function addnight(){
if( snum == 0){
  for(var i = 0; i < basicglow.length; i++){
    var jbBtn = document.createElement( 'div' );
    jbBtn.className = "bg1";
    var div1 = '<input type="image"  src=' + basicglow[i] + ' onclick="click4(' + i + ')">';
    jbBtn.innerHTML = div1;
    document.getElementById('bgh').appendChild(jbBtn);
  }
  for( var i = 0; i < shalglow_tiny.length; i++){
    var shallow = document.createElement('div');
    shallow.className = "bg1";
    var div1 = '<input type="image"  src=' + shalglow_tiny[i] + ' onclick="click5(' + i + ')">';
    shallow.innerHTML = div1;
    document.getElementById('bgs').appendChild(shallow);
  }
  snum = 1;
}else{
  removesum();
  for(var i = 0; i < basicglow.length; i++){
    var jbBtn = document.createElement( 'div' );
    jbBtn.className = "bg1";
    var div1 = '<input type="image"  src=' + basicglow[i] + ' onclick="click4(' + i + ')">';
    jbBtn.innerHTML = div1;
    document.getElementById('bgh').appendChild(jbBtn);
}
for( var i = 0; i < shalglow_tiny.length; i++){
  var shallow = document.createElement('div');
  shallow.className = "bg1";
  var div1 = '<input type="image"  src=' + shalglow_tiny[i] + ' onclick="click5(' + i + ')">';
  shallow.innerHTML = div1;
  document.getElementById('bgs').appendChild(shallow);
}
}
}
function addday(){
if( snum == 0){
for(var i = 0; i < basicglow.length; i++){
  var jbBtn = document.createElement( 'div' );
  jbBtn.className = "bg";
  var div1 = '<input type="image"  src=' + basicstn[i] + ' onclick="click2(' + i + ')">';
  jbBtn.innerHTML = div1;
  document.getElementById('bgh').appendChild(jbBtn);
}
for(var i = 0; i < shal_tiny.length; i++){
  var jbBtn = document.createElement( 'div' );
  jbBtn.className = "bg";
  var div1 = '<input type="image"  src=' + shal_tiny[i] + ' onclick="click3(' + i + ')">';
  jbBtn.innerHTML = div1;
  document.getElementById('bgs').appendChild(jbBtn);
}
snum = 1;
}else{
removesum();
for(var i = 0; i < basicglow.length; i++){
  var jbBtn = document.createElement( 'div' );
  jbBtn.className = "bg";
  var div1 = '<input type="image"  src=' + basicstn[i] + ' onclick="click2(' + i + ')">';
  jbBtn.innerHTML = div1;
  document.getElementById('bgh').appendChild(jbBtn);
}
for(var i = 0; i < shal_tiny.length; i++){
var jbBtn = document.createElement( 'div' );
jbBtn.className = "bg";
var div1 = '<input type="image"  src=' + shal_tiny[i] + ' onclick="click3(' + i + ')">';
jbBtn.innerHTML = div1;
document.getElementById('bgs').appendChild(jbBtn);
}
}
}
function removesum(){
document.getElementById('bgh').innerHTML = "";
document.getElementById('bgs').innerHTML = "";
}
