$(document).ready(function(){
     start();
});
    function start(){
    var wentHeight = [];
    var width = $('.layoutback').eq(0).width();
    var number = Math.floor(($(window).width())/width);
    var het = $('.layoutback');
    // console.log(het.length);
    for(var i = 0;i<het.length;i++)
    {
        wentHeight.push(het.eq(i).height());
    }
    var min = minfun(wentHeight);
    var minh = minHeight(wentHeight);
    // console.log(min)
    // console.log(min+"----"+minh+"---"+width);
    var pos = min*width;
    for(var j = 6;j<het.length;j++){
    	het.eq(j).css({
    		'position':"absolute",
            'left':pos+'px',
            'top':minh+'px',

    	});
    	
        wentHeight[min]=minh+het.eq(j).height();
       // console.log(wentHeight)
       min = minfun(wentHeight);
       // console.log(j+'高度最小的为第：'+min+'项')
       pos = min*width;
       // console.log('width:'+pos);
       minh = minHeight(wentHeight);
       // console.log('height:'+minh);
      }
  }


function minHeight(wentHeight){//取height最小值
	var min = wentHeight[0];
   // console.log(wentHeight)
   for(var i = 1;i < 6;i++){
   	if (min>wentHeight[i]) {
   		min = wentHeight[i];
   		}
   }
   return min;
}

function minfun(wentHeight){//取height最小的位置
	var min = wentHeight[0];
	var n = 0;
	for(var i =1;i<6;i++){
		if(min>wentHeight[i]){
			min=wentHeight[i];
			n = i;
		}
	}
	return n;
}

