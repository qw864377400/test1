 function  select_Frequency()
   {
//	 alert('進來了');
	 $('#select_Frequency_title').css("display", "block");$('#main06').css("display", "block");
       	 $.ajax({
			type : "post",
			async : true, 
			url : "select_Frequency?machine_name="+$('#select_01').val()+"", 
		    //url : "TestServletsTableau", 
			dataType : "json",
	
		 	success : function(result) {
		 		 var select_Frequency_time = [];
		 		 var select_Frequency_second = [];
              
              for(var i=0;i<result.length;i++){
            	  select_Frequency_time.push(result[i].startTime);
            	  select_Frequency_second.push(result[i].feedingTime);
            	  }
           
            
		     var myChart06 = echarts.init(document.getElementById('main06'));
		     myChart06.clear();
		     myChart06.setOption ({
		 
		    tooltip: {
		        trigger: 'axis'
		    },
		    color: ["#027fff"],
		    legend: {
		     textStyle:{    //图例文字的样式
		        color:'#ffffff',
		   		 },
		        data:['Feeding times']
		    },
		    dataZoom: [
		        {
		        
		        	 type: 'inside',
		            show: false,
//		            realtime: true,
		            start: 50,
		            end: 100,
		        },
		    ],
		    grid: {
		        left: '3%',
		        right: '3%',
		        bottom: '3%',
		        containLabel: true
		    },
//		    toolbox: {
//		        feature: {
//		         magicType: {type: ['line', 'bar']},
//		            saveAsImage: {}
//		        }
//		    },
		    xAxis: {
		    
		     axisLine: {
		                lineStyle: {
		                    color: '#ffffff',
		                }
		            },
		        type: 'category',
		        boundaryGap: true,
		      
		        data: select_Frequency_time,
		       
		    },
		    yAxis: {
		    
		     axisLine: {
		                lineStyle: {
		                    color: '#ffffff',
		                }
		            },
		        type: 'value',
		           axisLabel: {
		                formatter: '{value} 次'
		            },
		            splitLine: {
		                show: false
		            },
//		         splitArea: {
//		              show: true
//		          }
		    },
		    series: [
		        {
		            name:'Feeding times',
		            type:'line',
		             symbolSize: 10,
		             addDataAnimation: true,
		            smooth: true,
		        animationDuration: 2000,
		        showAllSymbol: true,
		            data: select_Frequency_second,
		          
		             lineStyle: {
		            normal: {
		                width: 7,
		                shadowColor: 'rgba(255,0,0,0.8)',
		                shadowBlur: 5,
		                shadowOffsetY: 0
				            }
				        },
		             label: {
		                normal: {
		                    formatter: '{c} 次',
		                    show: true,
		                    position: 'top',
		                    color:'#ffffff',
		                    }},
		        }, 
		      
		
		    ]
		});
		     myChart06.off('click');
		     myChart06.on('click', function (params) {
		      select_Frequency_day(params.name);
		        $('#boder_04').css("display","block");
		        $('#boder_05').css("display","none");
		        $('#boder_06').css("display","none");
		        $('#boder_07').css("display","none");
		});
		
		 window.addEventListener("resize",function() {
			 myChart06.resize();
		            });
		  	 	}});  
   }
 
 //送料次数分布By Hour
 function select_Frequency_day(work_date)
 {
	 if(document.getElementById("select_Frequency_day_hour_title").style.display.indexOf('block')!=-1){
		 $('#select_Frequency_day_title').css("display", "block");$('#main07').css("display", "block"); $('#select_Frequency_day_titles').css("display", "none")}
	 else{
		 $('#select_Frequency_day_title').css("display", "block");$('#main07').css("display", "block"); $('#select_Frequency_day_titles').css("display", "block")}
	
 	$('#select_Frequency_day_title').html('送料次数分佈(By Hour)('+work_date+')');
 	 $.ajax({
 			type : "post",
 			async : true, 
 			url : "select_Frequency_day",
 			data:{
 				"work_date": work_date,
 				"machine_name": $("#select_01").val()
 			},
 			dataType : "json",
 		 	success : function(result) {
               
 		 		let select_Frequency_day_time = [];
               let select_Frequency_day_second = [];
               
 		 	for(var i=0;i<result.length;i++)
 		 		{
 		 		select_Frequency_day_time.push(result[i].startTime);
 		 		select_Frequency_day_second.push(result[i].feedingTime);
 		 		}
 		 		
 		 	 var myChart07 = echarts.init(document.getElementById('main07'));
 		 	myChart07.setOption ( {
 		  
 		    "tooltip": {	
 		        "trigger": "axis",
 		        "axisPointer": {
 		            "type": "shadow",

 		        },
 		    },
 		    
 		    legend: {
 		        data:['Feeding times'],
 		       textStyle:{
 		        	color:'#ffffff',
 		        }
 		    },
 		    xAxis: [{
 		    	
 	            splitLine: {
 	                show: false
 	            },
 	           axisLabel: {
	                color:'#ffffff'
	            },
 		        data: select_Frequency_day_time
 		    }],
 		    yAxis: [
 		        {
 		            type: 'value',
// 		              splitArea: {
// 			                show: true
// 			            },
 		            axisLabel: {
 		                formatter: '{value} min',
 		               color:'#ffffff'
 		            },
 		            splitLine: {
 		                show: false
 		            },
 		        },
 		      
 		    ],
 		    series: [
 		        {name: 'Feeding times',
 		            type:'bar',
 		           itemStyle: {
		                normal: {
		                	 barBorderRadius: [8, 8, 2, 2],
			                	shadowColor: 'rgba(255,255,255,1)',
			                    shadowBlur: 5,
			                    shadowOffsetY: 0 ,
		                    color: new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
		                                offset: 0,
		                                color: '#00feff'
		                            },
		                            {
		                                offset: 0.5,
		                                color: '#027eff'
		                            },
		                            {
		                                offset: 1,
		                                color: '#0286ff'
		                            }
		                        ]
		                    )
		                }
		            },
 		            label: {
 		                normal: {
 		                    show: true,
 		                    position: 'top',
 		                   color:'#ffffff'
 		                    }},
 		            data: select_Frequency_day_second
 		        },
 	
 		      ]
 		},true);
 		 	myChart07.off('click');
 		 	myChart07.on('click', function (params) {	
 		 		select_Frequency_day_hour(work_date+" "+params.name);
		        $('#boder_05').css("display","block");
		        $('#boder_06').css("display","none");
		        $('#boder_07').css("display","none");
 		 		});
 		 	 window.addEventListener("resize",function() {
 		 		myChart07.resize();
 	              
 	            });
 		 	}
 		 	});	

 }
 
 
//送料详细信息分布By Second
function select_Frequency_day_hour(work_date)
{
	$('#select_Frequency_day_hour_title').css("display", "block");$('#main08').css("display", "block"); $('#select_Frequency_day_titles').css("display", "none")
	$('#select_Frequency_day_hour_title').html('送料次数分佈(By Hour)('+work_date+')');
	 $.ajax({
			type : "post",
			async : true, 
			url : "select_Frequency_day_hour",
			data:{
				"work_date": work_date,
				"machine_name": $("#select_01").val()
			},
			dataType : "json",
		 	success : function(result) {
		 	  let select_Frequency_day_hour_time = [];
              let select_Frequency_day_hour_second = [];
		 	for(var i=0;i<result.length;i++)
		 		{
		 		select_Frequency_day_hour_time.push('第 '+(i+1)+' 次');
		 		select_Frequency_day_hour_second.push({'value':result[i].feedingTime,
                    'startTime':result[i].startTime.substring(0,result[i].startTime.length-2),
                    'EndTime':result[i].arrivalTime.substring(0,result[i].arrivalTime.length-2)});
		 		}
		 	 var myChart08 = echarts.init(document.getElementById('main08'));
		 	myChart08.setOption ( {
		  
		    "tooltip": {	
		        "trigger": "axis",
		        "axisPointer": {
		            "type": "shadow",

		        },
		        formatter: function (params) {
		        	 var data =
		        	    ''+params[0].name+'<br/>'+ 
		        	   'Feeding_Time：'+ params[0].value+' min'+'<br/>'+ 
		        	   'Start_Time：'+params[0].data.startTime +'<br/>'+
		        	   'End_Time：'+params[0].data.EndTime;
		        	return data;
		        }
		    },
		    
		    legend: {
		        data:['Feeding times'],
		        textStyle:{
		        	color:'#ffffff'
		        }
		        
		    },
		    xAxis: [{
		    	
	            splitLine: {
	                show: false
	            },
	            axisLabel: {
	                color:'#ffffff'
	            },
		        data: select_Frequency_day_hour_time
		    }],
		    yAxis: [
		        {
		            type: 'value',
//		              splitArea: {
//			                show: true
//			            },
		            axisLabel: {
		                formatter: '{value} min',
		                color:'#ffffff'
		            },
		            splitLine: {
		                show: false
		            },
		        },
		      
		    ],
		    series: [
		        {name: 'Feeding times',
		            type:'line',
		            symbolSize: 15,
		             addDataAnimation: true,
		            smooth: true,
		        animationDuration: 2000,
		            itemStyle: {
		                normal: {
		                	 barBorderRadius: [8, 8, 2, 2],
			                	shadowColor: 'rgba(255,255,255,1)',
			                    shadowBlur: 5,
			                    shadowOffsetY: 0 ,
		                    color: new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
		                                offset: 0,
		                                color: 'orange'
		                            },
		                            {
		                                offset: 0.5,
		                                color: 'orange'
		                            },
		                            {
		                                offset: 1,
		                                color: 'orange'
		                            }
		                        ]
		                    )
		                }
		            },
		            lineStyle: {
		                normal: {
		                   width:8,  	 
		                }
		            },
		            label: {
		                normal: {
		                    show: true,
		                    position: 'top',
		                    color:'#ffffff'
		                    }},
		            data: select_Frequency_day_hour_second
		        },
	
		      ]
		},true);
		 	myChart08.off('click');
		 	myChart08.on('click', function (params) {	
		 		select_Frequency_day_state(params.data.startTime,params.data.EndTime);
			        $('#boder_06').css("display","block");
			        $('#boder_07').css("display","none");
 		 		});
		 	 window.addEventListener("resize",function() {
		 		myChart08.resize();
	              
	            });
		 	}
		 	});	

}
 
 
 
 
 
 
//运行状态详细分布 BY 状态
function select_Frequency_day_state(left_time,right_time)
{
	 if(document.getElementById("select_Frequency_day_position_title").style.display.indexOf('block')!=-1){
		 $('#select_Frequency_day_state_title').css("display", "block");$('#main09').css("display", "block"); $('#select_Frequency_day_state_titles').css("display", "none")
	 }
	 else{
		 $('#select_Frequency_day_state_title').css("display", "block");$('#main09').css("display", "block"); $('#select_Frequency_day_state_titles').css("display", "block")
		 }
	$('#select_Frequency_day_state_title').html('運行狀態詳細分佈(BY State)('+left_time+'->'+right_time+')');
	 $.ajax({
			type : "post",
			async : true, 
			url : "select_Frequency_day_state",
			data:{
				"left_time": left_time,
				"right_time": right_time,
				"machine_name": $("#select_01").val()
			},
			dataType : "json",
		 	success : function(result) {
		 	  let select_Frequency_day_state_time = [];
            let select_Frequency_day_state_second = [];
		
		 	for(var i=0;i<result.length;i++)
		 		{
		 		select_Frequency_day_state_time.push(result[i].state);
		 		select_Frequency_day_state_second.push(result[i].target);
		 		}
		 	
		 	 var myChart09 = echarts.init(document.getElementById('main09'));
		 	myChart09.setOption ( {
		  
		    "tooltip": {	
		        "trigger": "axis",
		        "axisPointer": {
		            "type": "shadow",

		        },
		    },
		    
		    legend: {
		        data:['Feeding times'],
		        textStyle:{
		        	color:'#ffffff'
		        }
		    },
		    xAxis: [{
		    	
	            splitLine: {
	                show: false
	            },
	            axisLabel: {
	            	color:'#ffffff'
	            },
		        data: select_Frequency_day_state_time
		    }],
		    yAxis: [
		        {
		            type: 'value',
//		              splitArea: {
//			                show: true
//			            },
		            axisLabel: {
		                formatter: '{value} min',
		                color:'#ffffff'
		            },
		            splitLine: {
		                show: false
		            },
		        },
		      
		    ],
		    series: [
		        {name: 'Feeding times',
		            type:'bar',
		            itemStyle: {
		                normal: {
		                	 barBorderRadius: [8, 8, 2, 2],
			                	shadowColor: 'rgba(255,255,255,1)',
			                    shadowBlur: 5,
			                    shadowOffsetY: 0 ,
		                    color: new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
		                                offset: 0,
		                                color: 'orange'
		                            },
		                            {
		                                offset: 0.5,
		                                color: 'orange'
		                            },
		                            {
		                                offset: 1,
		                                color: 'orange'
		                            }
		                        ]
		                    )
		                }
		            },
		            label: {
		                normal: {
		                    show: true,
		                    position: 'top',
		                    color:'#ffffff'
		                    }},
		            data: select_Frequency_day_state_second
		        },
	
		      ]
		},true);
		 	myChart09.off('click');
		 	myChart09.on('click', function (params) {	
		 		select_Frequency_day_position(left_time,right_time,params.name);
			        $('#boder_07').css("display","block");
 		 		});
		 	 window.addEventListener("resize",function() {
		 		myChart09.resize();
	              
	            });
		 	}
		 	});	

}

 //狀態分佈時間(By Site)
function select_Frequency_day_position(left_time,right_time,state)
{
	$('#select_Frequency_day_position_title').css("display", "block");$('#main10').css("display", "block"); $('#select_Frequency_day_state_titles').css("display", "none")
	$('#select_Frequency_day_position_title').html('狀態分佈時間(By Site)('+left_time+'->'+right_time+')');
	 $.ajax({
			type : "post",
			async : true, 
			url : "select_Frequency_day_position",
			data:{
				"left_time": left_time,
				"right_time": right_time,
				"state": state,
				"machine_name": $("#select_01").val()
			},
			dataType : "json",
		 	success : function(result) {
		 		
		 	  let select_Frequency_day_position_time = [];
              let select_Frequency_day_position_second = [];
              
		 	for(var i=0;i<result.length;i++)
		 		{
		 		select_Frequency_day_position_time.push(result[i].agv_position);
		 		select_Frequency_day_position_second.push(result[i].target);
		 		}
		 		
		 	 var myChart10 = echarts.init(document.getElementById('main10'));
		 	myChart10.setOption ( {
		  
		    "tooltip": {	
		        "trigger": "axis",
		        "axisPointer": {
		            "type": "shadow",

		        },
		    },
		    
		    legend: {
		        data:['Feeding times'],
		        textStyle:{
		        	color:'#ffffff',
		        }
		    },
		    xAxis: [{
		    	
	            splitLine: {
	                show: false
	            },
	            axisLabel: {
	            	color:'#ffffff'
	            },
		        data: select_Frequency_day_position_time
		    }],
		    yAxis: [
		        {
		            type: 'value',
//		              splitArea: {
//			                show: true
//			            },
		            axisLabel: {
		                formatter: '{value} min',
		                color:'#ffffff'
		            },
		            splitLine: {
		                show: false
		            },
		        },
		      
		    ],
		    series: [
		        {name: 'Feeding times',
		            type:'bar',
		            itemStyle: {
		                normal: {
		                	 barBorderRadius: [8, 8, 2, 2],
			                	shadowColor: 'rgba(255,255,255,1)',
			                    shadowBlur: 5,
			                    shadowOffsetY: 0 ,
		                    color: new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
		                                offset: 0,
		                                color: 'orange'
		                            },
		                            {
		                                offset: 0.5,
		                                color: 'orange'
		                            },
		                            {
		                                offset: 1,
		                                color: 'orange'
		                            }
		                        ]
		                    )
		                }
		            },
		            label: {
		                normal: {
		                    show: true,
		                    position: 'top',
		                    color:'#ffffff'
		                    }},
		            data: select_Frequency_day_position_second
		        },
	
		      ]
		},true);
		 	
		 	myChart10.off('click');
		 	myChart10.on('click', function (params) {	
		 		site_Location_details(params.name);
		 		console.log(params.name);
 		 		});
		 	 window.addEventListener("resize",function() {
		 		myChart10.resize();
	              
	            });
		 	}
		 	});	

}
 
 
// select_Frequency();
// select_Frequency_day();
// select_Frequency_day_hour();
// select_Frequency_day_state();
// select_Frequency_day_position();
 
 
 
 
 