 



function PcsTime(){
let WorkDate = [],Count = [];

 console.log($("#select_sj").val())
  $.ajax({
		type: 'post',
		async:false,
		dataType: 'json',
		url: 'AllState',
		data:{
			YearMonthDay:$("#select_sj").val(),
		},
		success: function (message) {
			console.log(message)
			for(var i=0;i<message.length;i++){
				WorkDate.push(message[i].day)
				Count.push(message[i].num);
			}
		       }
		});



console.log(Count)

  var MyChartMaterial = echarts.init(document.getElementById('test'));
  MyChartMaterial.clear();
  MyChartMaterial.setOption ({
 
    title: {
        text: 'AGV送料'
    },
    tooltip: {
        trigger: 'axis'
    },
    color: ["#16D9F0","#ff6820"],
    legend: {
    /*	selected: {
    	    'Actual rate of utilization': false,
    	},*/
     textStyle:{    //图例文字的样式
        color:'#ffffff',
       // fontSize:12
   		 },
        data:['Number of trays']
    },
    dataZoom: [
        {
        	 type: 'inside',
            show: false,
//            realtime: true,
            start: 70,
            end: 100,
        },
    ],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
//    toolbox: {
//        feature: {
//         magicType: {type: ['line', 'bar']},
//            saveAsImage: {}
//        }
//    },
    xAxis: {
    
     axisLine: {
             
            },
            axisLabel: {
               color:'#ffffff'
            },
        type: 'category',
        boundaryGap: true,
      
        data: WorkDate,
       
    },
    yAxis: {
//        min:0,
//        max:100,
//        type: 'value',
           axisLabel: {
                formatter: '{value} 盘',
                color:'#ffffff'
            },
            splitLine: {
                show: false
            },
//         splitArea: {
//              show: true
//          }
    },
    series: [
        {
            name:'Number of trays',
            type:'line',
             symbolSize: 10,
             addDataAnimation: true,
            smooth: true,
            showAllSymbol: true,
        animationDuration: 2000,
            data: Count,
          
             lineStyle: {
            normal: {
                width: 7,
                shadowColor: 'rgba(255,255,255,1)',
                shadowBlur: 10,
                shadowOffsetY: 0
		            }
		        },
             label: {
                normal: {
                    formatter: '{c}',
                    show: true,
                    position: 'top',
               
                    }},
//                    markLine: {
//                        silent: true,
//                        data: [{
//                            yAxis: 75
//                        }]
//                    },
        }, 
    ]
},true);

 window.addEventListener("resize",function() {
	 MyChartMaterial.resize();
              
            });
    	
}
PcsTime()