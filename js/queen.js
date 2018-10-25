$(function() {
    $(".preload").fadeOut(2000, function() {
        $(".content").fadeIn(1000);        
    });
});


time=261,timer=document.getElementById('timer'),tmp=time;
setInterval(function(){
var c=tmp--,s=(c*1)+'';
timer.textContent=(s.length>1?'':'0')+s
tmp!=0||(tmp=time);
},1000);

