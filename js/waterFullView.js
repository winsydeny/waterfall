   // 项目名称：瀑布流
             // 设备：适用pc、iPad、移动端
   //        说明：采用jQuery和原生js开发
   //        思路：1、确定img的width，具有响应式，要知道可用页面的大小
   //              2、把每一个img的height放入到数组中，求出数组中的最小值和在数组中的位置
   //              3、写求最小值(minHeight)和最小值的位置(minposition)的函数
   //              4、用jquery的css方法来缺地当前页面第二排的第一个img放的位置
   //              5、css中top和width的值分别为第一行高度最小的和minposition*width；
   //              6、一直保持第一行不变，一直寻找第一行高度最低的img，并且添加新的img，把两个img相加，使之为一个img，
   //              以此类推，直到最后一个

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
    var minnum = minposition(wentHeight,number);
    var minheight = minHeight(wentHeight,number);
    // console.log(min)
    // console.log(min+"----"+minh+"---"+width);
    var offsetwidth = minnum*width;
    for(var j = 6;j<het.length;j++){
    	het.eq(j).css({
    		'position':"absolute",
            'left':offsetwidth+'px',
            'top':minheight+'px',

    	});
    	
        wentHeight[minnum]=minheight+het.eq(j).height();
       // console.log(wentHeight)
       minnum = minposition(wentHeight,number);
       // console.log(j+'高度最小的为第：'+min+'项')
       offsetwidth = minnum*width;
       // console.log('width:'+pos);
       minheight = minHeight(wentHeight,number);
       // console.log('height:'+minh);
      }
  }


function minHeight(wentHeight,number){//取height最小值
	var min = wentHeight[0];
   // console.log(wentHeight)
   for(var i = 1;i < number;i++){
   	if (min>wentHeight[i]) {
   		min = wentHeight[i];
   		}
   }
   return min;
}

function minposition(wentHeight,number){//取height最小的位置
	var min = wentHeight[0];
	var n = 0;
	for(var i =1;i<number;i++){
		if(min>wentHeight[i]){
			min=wentHeight[i];
			n = i;
		}
	}
	return n;
}

