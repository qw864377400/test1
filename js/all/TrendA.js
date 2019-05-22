// console.log('-------------->'+$("#select_01").val());
 function site_Location_details(site){
  
	 
//	 $('.modal-body').css({"height":"665px","background-image":"url('"+result[0].images+"')"})
	 
   let sql = "select * from kanban_pictures order by time desc limit 1" ;
     $.ajax({
		type: 'post',
		async:false,
		dataType: 'json',
		url: 'http://10.167.194.139:8080/Whole_ApiA/select_hh',
		data:{
		'orcl':'2',
		'table_name': '0',
		'sql':sql
		},
		success: function (message) {
				  $.ajax({
						type : "post",
						async : false, 
						url : "select_images", 
						dataType : "json",
					 	success : function(result) {
					 	    $('.modal-dialog').css({"width":""+result[0].y+"px","height":""+result[0].x+"px;"});    
					         $('.modal-body').css({"height":"665px","background-image":"url('"+result[0].images+"')"});  
					 	}
				  	});
		       }
		});
  
  
  
//     console.log(site);
    site = site.replace("\"","");
    site = site.replace("\"","");
    site = site.replace(".",",");
    sql = "select * from landmark_spot_copy where landmark = '"+site+"' " ;
    
//    console.log(sql);
    let mmstate = false;
        $.ajax({
		type: 'post',
		async:false,
		dataType: 'json',
		url: 'http://10.167.194.139:8080/Whole_ApiA/select_hh',
		data:{
		'orcl':'2',
		'table_name': '0',
		'sql':sql
		},
		success: function (message) {
//			console.log(message.length)
			if(message.length===0){alert('暫系統未加入此站點信息,請聯繫相關人員進行新增或修改,謝謝!');mmstate=true;return;}
			  $('.img-circle').css({"left":(parseInt(message[0].x)-11)+"px","top":(parseInt(message[0].y)-10)+"px"});
			  $('.img-circle').attr("title",site);
			}
		});
  if(mmstate===true){return;}
    $('#button_01').click();
  } 

function test()
    {
    errors();
	select_utilization();
	error_bhb();
	error_bhb_hour();
    $('#boder_01').css("display","none");
    $('#boder_02').css("display","none");
    $('#boder_03').css("display","none");
    $('#boder_04').css("display","none");
    $('#boder_05').css("display","none");
    $('#boder_06').css("display","none");
    $('#boder_07').css("display","none");
	
    }
  var tuntime_dates;
  function errors(tuntime_date)
  {
     
       if(tuntime_dates == tuntime_date)
       {
       tuntime_date = undefined;
       tuntime_dates = undefined;
       }else
       {
          tuntime_dates = tuntime_date;
       }
     

     
     
   
     
// 	  int RunTime = 0;//运行
//   	  int FeeDing = 0;//上料
//   	  int CutTing = 0;//下料
//   	  int RunWait = 0;//运行等待
//   	  int Error = 0;//异常
//   	  int CharGing = 0;//充电
//   	  int Lost = 0; //丢失
    
    var RunTime = [],FeeDing = [],CutTing = [],Error = [],RunWait = [],work_dates = [],CharGing = []
    ,Lost = [],Waiting = [];
//         	 $.ajax({
//  			type : "post",
//  			async : true, 
//  			url : "select_utilization?tuntime_date="+tuntime_date+"&machine_name="+$('#select_01').val()+"", 
////  			url : "select_utilization?tuntime_date="+tuntime_date+"&machine_name=07", 
//  		    //url : "TestServletsTableau", 
//  			dataType : "json",
//  	
//  		 	success : function(result) {
//  		 	 console.log('main01-------------------->');
        
  		 	let result  = [{"agv_name":null,"runtime":"842","feeding":"277","cutting":"56","runwait":"93","error":"27","charging":"109","waiting":null,"lost":"36","time":"2019-04-29 00:00:00.0","utilization":"0.59","counts":null},{"agv_name":null,"runtime":"558","feeding":"168","cutting":"35","runwait":"110","error":"16","charging":"89","waiting":null,"lost":"4","time":"2019-04-30 00:00:00.0","utilization":"0.52","counts":null},{"agv_name":null,"runtime":"520","feeding":"119","cutting":"82","runwait":"23","error":"2","charging":"93","waiting":null,"lost":"4","time":"2019-05-02 00:00:00.0","utilization":"0.36","counts":null},{"agv_name":null,"runtime":"803","feeding":"288","cutting":"76","runwait":"78","error":"16","charging":"114","waiting":null,"lost":"65","time":"2019-05-03 00:00:00.0","utilization":"0.57","counts":null},{"agv_name":null,"runtime":"821","feeding":"296","cutting":"58","runwait":"93","error":"3","charging":"111","waiting":null,"lost":"54","time":"2019-05-04 00:00:00.0","utilization":"0.58","counts":null},{"agv_name":null,"runtime":"788","feeding":"339","cutting":"68","runwait":"77","error":"11","charging":"101","waiting":null,"lost":"50","time":"2019-05-05 00:00:00.0","utilization":"0.56","counts":null},{"agv_name":null,"runtime":"838","feeding":"325","cutting":"56","runwait":"107","error":"14","charging":"87","waiting":null,"lost":"8","time":"2019-05-06 00:00:00.0","utilization":"0.59","counts":null},{"agv_name":null,"runtime":"848","feeding":"308","cutting":"53","runwait":"107","error":"18","charging":"109","waiting":"0","lost":"0","time":"2019-05-07 00:00:00.0","utilization":"0.60","counts":null},{"agv_name":null,"runtime":"796","feeding":"361","cutting":"42","runwait":"112","error":"23","charging":"106","waiting":"0","lost":"0","time":"2019-05-08 00:00:00.0","utilization":"0.56","counts":null},{"agv_name":null,"runtime":"842","feeding":"18","cutting":"35","runwait":"127","error":"12","charging":"116","waiting":"286","lost":"0","time":"2019-05-09 00:00:00.0","utilization":"0.59","counts":null},{"agv_name":null,"runtime":"835","feeding":"20","cutting":"39","runwait":"113","error":"7","charging":"102","waiting":"323","lost":"0","time":"2019-05-10 00:00:00.0","utilization":"0.59","counts":null},{"agv_name":null,"runtime":"846","feeding":"14","cutting":"27","runwait":"120","error":"23","charging":"104","waiting":"307","lost":"0","time":"2019-05-11 00:00:00.0","utilization":"0.60","counts":null},{"agv_name":null,"runtime":"941","feeding":"18","cutting":"30","runwait":"120","error":"8","charging":"109","waiting":"208","lost":"0","time":"2019-05-12 00:00:00.0","utilization":"0.66","counts":null},{"agv_name":null,"runtime":"871","feeding":"15","cutting":"29","runwait":"107","error":"10","charging":"106","waiting":"302","lost":"0","time":"2019-05-13 00:00:00.0","utilization":"0.61","counts":null},{"agv_name":null,"runtime":"934","feeding":"12","cutting":"30","runwait":"163","error":"18","charging":"103","waiting":"176","lost":"0","time":"2019-05-14 00:00:00.0","utilization":"0.66","counts":null},{"agv_name":null,"runtime":"821","feeding":"3","cutting":"28","runwait":"145","error":"31","charging":"107","waiting":"304","lost":"0","time":"2019-05-15 00:00:00.0","utilization":"0.58","counts":null},{"agv_name":null,"runtime":"866","feeding":"13","cutting":"19","runwait":"132","error":"25","charging":"133","waiting":"252","lost":"0","time":"2019-05-16 00:00:00.0","utilization":"0.60","counts":null},{"agv_name":null,"runtime":"845","feeding":"94","cutting":"32","runwait":"130","error":"24","charging":"101","waiting":"210","lost":"0","time":"2019-05-17 00:00:00.0","utilization":"0.59","counts":null},{"agv_name":null,"runtime":"936","feeding":"140","cutting":"10","runwait":"115","error":"12","charging":"112","waiting":"110","lost":"0","time":"2019-05-18 00:00:00.0","utilization":"0.66","counts":null},{"agv_name":null,"runtime":"974","feeding":"83","cutting":"15","runwait":"117","error":"10","charging":"124","waiting":"116","lost":"0","time":"2019-05-19 00:00:00.0","utilization":"0.69","counts":null},{"agv_name":null,"runtime":"839","feeding":"195","cutting":"19","runwait":"145","error":"6","charging":"98","waiting":"133","lost":"0","time":"2019-05-20 00:00:00.0","utilization":"0.58","counts":null},{"agv_name":null,"runtime":"1013","feeding":"73","cutting":"14","runwait":"125","error":"13","charging":"105","waiting":"94","lost":"-0","time":"2019-05-21 00:00:00.0","utilization":"0.71","counts":null},{"agv_name":null,"runtime":"646","feeding":"61","cutting":"8","runwait":"72","error":"24","charging":"94","waiting":"64","lost":"-1","time":"2019-05-22 00:00:00.0","utilization":"0.45","counts":null}]
  	      console.log(result);
  		 	for(var i=0;i<result.length;i++)
  		 	{
  		 		RunTime.push(result[i].runtime)
  		 		FeeDing.push(result[i].feeding)
  		 		CutTing.push(result[i].cutting)
  		 		Error.push(result[i].error)
  		 		RunWait.push(result[i].runwait)
  		 		work_dates.push(result[i].time.substring(0, 10))
  		 		CharGing.push(result[i].charging)
  		 		Lost.push(result[i].lost)
  		 		Waiting.push(result[i].waiting)
  		 	}
     var myChart3 = echarts.init(document.getElementById('main01'));
     myChart3.clear();
      myChart3.setOption ({
   
      tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
      },
      color: ['#33d533','#ccd500',' #ffd500','#ff8000','#cc8000','#8000ff','#ff0000','#00aaff'],
      legend: {
    	  textStyle:{
    		color:'#ffffff'  
    	  },
          data: ['運行時間', '上料時間','下料時間','充電時間','中途等待时间','候車時間','異常時間','丟失時間'],
//          selected:{'丢失时间':false}
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      dataZoom: [
	        {
	        	 type: 'inside',
	            show: false,
//	            realtime: true,
//	            start: 80,
//	            end: 100,
	        },
	    ],
      xAxis:  {
          type: 'category',
          axisLabel:{
           color:'#ffffff',        	  
          },
           data: work_dates,
      },
      yAxis: {
      min:'0',
      max:'1440',
          type: 'value',
//             splitArea: {
//                show: true
//            },
             axisLabel: {
                  formatter: '{value} min',
                  color:'#ffffff'
              },
              splitLine: {
                  show: false
              },
         
      },
      series: [
          {
             addDataAnimation: true,
              smooth: true,
          animationDuration: 2000,
              name: '運行時間',
              type: 'bar',
              stack: '总量', 
              label: {
                  normal: {
                      show: true,
//                      show: false,
                      fontWeight:'bold',
//                      position: 'insideTop'
                    	  position: 'insideBottom'
                  }
              },
              itemStyle: {
                  normal: {
                	  shadowColor: 'rgba(255,255,255,1)',
                      shadowBlur: 5,
                      shadowOffsetY: 0 
                  }
              },
              data: RunTime
          },
          {
             addDataAnimation: true,
              smooth: true,
          animationDuration: 2000,
              name: '上料時間',
              type: 'bar',
              stack: '总量',
              label: {
                  normal: {
                      show: true,
//                	  show: false,
                      fontWeight:'bold',
//                      position: 'insideBottom'
                      position: 'insideBottom'
                  }
              },
              itemStyle: {
                  normal: {
                	  shadowColor: 'rgba(255,255,255,1)',
                      shadowBlur: 5,
                      shadowOffsetY: 0 
                  }
              },
              data: FeeDing
          },
      
          {
              addDataAnimation: true,
               smooth: true,
           animationDuration: 2000,
               name: '下料時間',
               type: 'bar',
               stack: '总量',
               label: {
                   normal: {
                       show: true, 	
//                	   show: false,
                       fontWeight:'bold',
//                       position: 'insideBottom'
                       position: 'insideBottom'
                   }
               },
               itemStyle: {
                   normal: {
                 	  shadowColor: 'rgba(255,255,255,1)',
                       shadowBlur: 5,
                       shadowOffsetY: 0 
                   }
               },
               data: CutTing
           },{
             addDataAnimation: true,
              smooth: true,
          animationDuration: 2000,
              name: '充電時間',
              type: 'bar',
              stack: '总量',
              label: {
                  normal: {
//                	  color:'orange',
                	  color:'#ffffff',
                	  fontWeight:'#ffffff',
                      show: true,
//                	  show: false,
//                      position: 'top'
                      position: 'insideBottom'
                  }
              },
              itemStyle: {
                  normal: {
//               	barBorderRadius:[8, 8, 2, 2],
               	shadowColor: 'rgba(255,255,255,1)',
                shadowBlur: 5,
                shadowOffsetY: 0 
             }},	
              data: CharGing
          },
//        var RunTime = [],FeeDing = [],CutTing = [],Error = [],RunWait = [],work_dates = [],CharGing = []
        {
           addDataAnimation: true,
            smooth: true,
        animationDuration: 2000,
            name: '中途等待时间',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
              	  color:'#ffffff',
              	  fontWeight:'bold',
                    show: true,
//              	  show: false,
//                    position: 'top'
                    position: 'insideBottom'
                }
            },
            itemStyle: {
                normal: {
//             	barBorderRadius:[8, 8, 2, 2],
             	shadowColor: 'rgba(255,255,255,1)',
              shadowBlur: 5,
              shadowOffsetY: 0 
           }},	
            data: RunWait
        },
        {
            addDataAnimation: true,
           smooth: true,
       animationDuration: 2000,
           name: '候車時間',
           type: 'bar',
           stack: '总量',
           label: {
               normal: {
             	  fontWeight:'bold',
                   show: true,
//             	 show: false,
//                   position: 'top'
//                  	  position: 'insideTop'
               }
           },
           itemStyle: {
               normal: {
             	  shadowColor: 'rgba(255,255,255,1)',
                   shadowBlur: 5,
                   shadowOffsetY: 0 
               }
           },
           data: Waiting
       },
          {
              addDataAnimation: true,
             smooth: true,
         animationDuration: 2000,
             name: '異常時間',
             type: 'bar',
             stack: '总量',
             label: {
                 normal: {
               	  fontWeight:'bold',
                     show: true,
//               	 show: false,
//                     position: 'top'
//                    	  position: 'insideTop'
                 }
             },
             itemStyle: {
                 normal: {
               	  shadowColor: 'rgba(255,255,255,1)',
                     shadowBlur: 5,
                     shadowOffsetY: 0 
                 }
             },
             data: Error
         },{
             addDataAnimation: true,
              smooth: true,
          animationDuration: 2000,
              name: '丟失時間',
              type: 'bar',  
              stack: '总量',
              label: {
                  normal: {
                	  color:'#ffffff',
                	  fontWeight:'bold',
                      show: true,
//                	  show: false,
//                      position: 'top'
                      position: 'top'
                  }
              },
              itemStyle: {
                  normal: {
               	barBorderRadius:[8, 8, 2, 2],
               	shadowColor: 'rgba(255,255,255,1)',
                shadowBlur: 5,
                shadowOffsetY: 0 
             }},	
              data: Lost
          },
      
      ]
  },true);
      
      myChart3.off('click');
      myChart3.on('click', function (params) {
  		error_bhb(params.name);
  		error_bhb_hour(params.name);
  	});
      window.addEventListener("resize",function() {
    	  myChart3.resize();
            
          });
	 
//  }});
         	 
	
         	 
   	}

   function  select_utilization()
   {
		 let work_date = [];
         let utilization = [];
         let utilizations = [];
	
         if($('#select_01').val()!=="04"){
//       	 $.ajax({
//			type : "post",
//			async : false, 
//			url : "utilization_all?machine_name="+$('#select_01').val()+"", 
////			url : "utilization_all?machine_name=07", 
//		    //url : "TestServletsTableau", 
//			dataType : "json",
//	
//		 	success : function(result) {
//		 		console.log(result)
		 		console.log('main------>');
		 	
		 		
		 	let result = [{work_date: "2019-04-29", utilization: "83.96", utilizations: "0.59"},
		 	{work_date: "2019-04-30", utilization: "58.54", utilizations: "0.52"},
		 	{work_date: "2019-05-02", utilization: "43.61", utilizations: "0.36"},
		 	{work_date: "2019-05-03", utilization: "84.58", utilizations: "0.57"},
		 	{work_date: "2019-05-04", utilization: "83.68", utilizations: "0.58"},
		 	{work_date: "2019-05-05", utilization: "80.56", utilizations: "0.56"},
		 	{work_date: "2019-05-06", utilization: "82.22", utilizations: "0.59"},
		 	{work_date: "2019-05-07", utilization: "82.43", utilizations: "0.60"},
		 	{work_date: "2019-05-08", utilization: "73.54", utilizations: "0.56"},
		 	{work_date: "2019-05-09", utilization: "74.44", utilizations: "0.59"},
		 	{work_date: "2019-05-10", utilization: "73.82", utilizations: "0.59"},
		 	{work_date: "2019-05-11", utilization: "72.92", utilizations: "0.60"},
		 	{work_date: "2019-05-12", utilization: "81.04", utilizations: "0.66"},
		 	{work_date: "2019-05-13", utilization: "75.69", utilizations: "0.61"},
		 	{work_date: "2019-05-14", utilization: "80.69", utilizations: "0.66"},
		 	{work_date: "2019-05-15", utilization: "72.29", utilizations: "0.58"},
		 	{work_date: "2019-05-16", utilization: "70.00", utilizations: "0.60"},
		 	{work_date: "2019-05-17", utilization: "72.43", utilizations: "0.59"},
		 	{work_date: "2019-05-18", utilization: "82.99", utilizations: "0.66"},
		 	{work_date: "2019-05-19", utilization: "83.96", utilizations: "0.69"},
		 	{work_date: "2019-05-20", utilization: "75.14", utilizations: "0.58"},
		 	{work_date: "2019-05-21", utilization: "88.13", utilizations: "0.71"},
		 	{work_date: "2019-05-22", utilization: "86.00", utilizations: "67.58"}];
		 		
			console.log(result);
		 	for(var i=0;i<result.length;i++)
		 	{
		 		work_date.push(result[i].work_date);
		 		if(i+1===result.length){
		 			utilization.push(Math.round(result[i].utilizations));
		 		}else{
		 			utilization.push(Math.round(result[i].utilizations*100));
		 		}
		 		
		 		utilizations.push(Math.round(result[i].utilization));
		 	   }
//		 	}});
       	 
       	 
       	 
       	 
       	 
         }else{
        	 $.ajax({
       			type : "post",
       			async : false, 
       			url : "select_utilization?machine_name=04", 
       		    //url : "TestServletsTableau", 
       			dataType : "json",
       	
       		 	success : function(result) {
       		 		
       		 		console.log('main------>'+result);
       		 		
       		 	for(var i=0;i<result.length;i++){
		       		  work_date.push(result[i].time.substring(0,10));
				 		utilizations.push(0);
				 		utilization.push(Math.round((result[i].runtime/(19*60))*100));
          		 	}
       	 	 	  }
       		 	});
         }
     var myChart2 = echarts.init(document.getElementById('main'));
     myChart2.clear();
    myChart2.setOption ({
 
   /* title: {
        text: '折线图堆叠'
    },*/
    tooltip: {
        trigger: 'axis'
    },
    color: ["#16D9F0","#ff6820"],
    legend: {
    	selected: {
    	    '實際稼動率': false,
    	},
     textStyle:{    //图例文字的样式
        color:'#ffffff',
       // fontSize:12
   		 },
        data:['實際稼動率','有效稼動率']
    },
    dataZoom: [
        {
        	 type: 'inside',
            show: false,
//            realtime: true,
//            start: 70,
//            end: 100,
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
      
        data: work_date,
       
    },
    yAxis: {
        min:0,
        max:100,
        type: 'value',
           axisLabel: {
                formatter: '{value} %',
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
            name:'實際稼動率',
            type:'line',
             symbolSize: 10,
             addDataAnimation: true,
            smooth: true,
            showAllSymbol: true,
        animationDuration: 2000,
            data: utilization,
          
             lineStyle: {
            normal: {
                width: 5,
                shadowColor: 'rgba(255,255,255,1)',
                shadowBlur: 10,
                shadowOffsetY: 0
		            }
		        },
             label: {
                normal: {
                    formatter: '{c} %',
                    show: true,
                    position: 'top',
                    }},
                    markLine: {
                        silent: true,
                        data: [{
                            yAxis: 50
                        }]
                    },
        }, 
        {
            name:'有效稼動率',
            type:'line',
             symbolSize: 10,
             addDataAnimation: true,
            smooth: true,
            showAllSymbol: true,
        animationDuration: 2000,
            data: utilizations,
          
             lineStyle: {
            normal: {
                width: 5,
                shadowColor: 'rgba(255,255,255,1)',
                shadowBlur: 10,
                shadowOffsetY: 0
		            }
		        },
             label: {
                normal: {
                    formatter: '{c} %',
                    show: true,
                    position: 'top',
               
                    }},
                    markLine: {
                        silent: true,
                        label: {
                            normal: {
                        	formatter:'{c} %'
                            }
                        },
                        lineStyle:{
	                	 normal: {
	                		 	type:'solid',
	                		    color:'#33cc33',
	                            width:2
	                         }
                        },
                        data: [{
                            yAxis: 75
                        }],
                    },
        }, 
      

    ]
},true);
    myChart2.off('click');
myChart2.on('click', function (params) {
    errors(params.name);
});

 window.addEventListener("resize",function() {
                myChart2.resize();
              
            });
    
   }
  	 	
errors();
select_utilization()














function error_bhb(work_date)
{ 
   if(work_date===undefined){work_date = moment(new Date()).format("YYYY-MM-DD")};
   $('#title_day').html('異常狀態分佈(By Day)('+work_date+')')
//	 $.ajax({
//			type : "post",
//			async : true, 
//			url : "select_table_pth?work_date="+work_date+"&machine_name="+$("#select_01").val()+"", 
//		    //url : "TestServletsTableau", 
//			dataType : "json",
//	
//		 	success : function(result) {
		 	
		 		
		 let result = [{"error_name":"红外防撞","error_time":"24.68","error_ahp":100.0,"work_date":"2019-05-22"}];		
		 
	console.log('main02------------+-+-+-+-+-+-+-+-+-+-+->');
		console.log(result);
   
   			var bfb = [];
		 	var times = [];
		 	var num = 0;
		 	var x_name = [];
        for(var i=0;i<result.length;i++)
        {
         num += result[i].error_ahp;
         bfb.push(num.toFixed(2));
         x_name.push(result[i].error_name==='红外防撞'?"异常":result[i].error_name);
         times.push({value:result[i].error_time,name:result[i].work_date});
        }
		 	
		 	 var myChart4 = echarts.init(document.getElementById('main02'));
		 	myChart4.clear();
		 	myChart4.setOption ( {
		  
		    "tooltip": {
		        "trigger": "axis",
		        "axisPointer": {
		            "type": "shadow",

		        },
		    },
		    
		    legend: {
		    	textStyle:{
		    	 color:'#ffffff'
		    	},
		        data:['異常時間','異常比例'],
		        
		    },
		     "calculable": true,
		    xAxis: [{
	            splitLine: {
	                show: false
	            },
	            axisLabel:{
	            	color:'#ffffff',
	            },
		        data: x_name
		    }],
		    yAxis: [
		        {
		            type: 'value',
		            name: '',
		           
		            position: 'left',
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
		        {
		            type: 'value',
		            name: '',
		            min: 0,
		            max: 100,
		            position: 'right',
		            axisLabel: {
		                formatter: '{value} %',
		                color:'#ffffff'
		            },
		            splitLine: {
		                show: false
		            },
		        }
		    ],
		    series: [
		        {name:'異常時間',
		            type:'bar',
		            barWidth : 30,
		            itemStyle: {
		                normal: {
		                    barBorderRadius: [8, 8, 2, 2],
		                	shadowColor: 'rgba(255,255,255,1)',
		                    shadowBlur: 5,
		                    shadowOffsetY: 0 ,
		                    color: new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
		                                offset: 0,
		                                color: 'red'
		                            },
		                            {
		                                offset: 0.5,
		                                color: 'red'
		                            },
		                            {
		                                offset: 1,
		                                color: 'red'
		                            }
		                        ]
		                    )
		                }
		            },
		            label: {
		                normal: {
		                    show: true,
		                    position: 'top',
		                    color:'ffffff'
		                    }},
		            data: times
		        },
		        {
		        name:'異常比例',
		         yAxisIndex: 1,
		            type:'line',
		            lineStyle: {
		                normal: {
		                    width: 3,
		                    shadowColor: 'rgba(255,255,255,10)',
		                    shadowBlur: 5,
		                    shadowOffsetY: 0
		    		            }
		    		        },
		    		        label: {
				                normal: {
				                	  formatter: '{c} %',
				                    show: true,
				                    position: 'top',
				                    color:'ffffff'
				                    }},
		        data: bfb
		        
		    }]
		},true);
		 	
			 myChart4.off('click');
			 myChart4.on('click', function (params) {
			        select_state_hours(params.data.name,params.name==="异常"?"红外防撞":params.name);
			        $('#boder_01').css("display","block");
			        $('#boder_02').css("display","none");
			        $('#boder_03').css("display","none");
			        $('#boder_04').css("display","none");
			        $('#boder_05').css("display","none");
			        $('#boder_06').css("display","none");
			        $('#boder_07').css("display","none");
			    });
		 	
		 	 window.addEventListener("resize",function() {
		 		myChart4.resize();
	              
	            });
	  	 
		 	
		 	}
	 
//		 	});



//}

error_bhb();

function error_bhb_hour(work_date)
{ 
	if(work_date===undefined){work_date = moment(new Date()).format("YYYY-MM-DD")};
	   $('#title_hour_dd').html('等待時間分佈(By Hour)('+work_date+')(綠色預計等待時間)')
//	 $.ajax({
//			type : "post",
//			async : true, 
//			url : "select_hour?work_date="+work_date+"&machine_name="+$("#select_01").val()+"", 
////			url : "select_hour?work_date="+work_date+"&machine_name=07", 
//			dataType : "json",
//	
//		 	success : function(result) {
	   
	     let result = [{"agv_name":null,"runtime":"46.82","feeding":"1.08","cutting":"0.32","runwait":"3.18","error":"0.25","charging":"6.53","waiting":"2.53","lost":"-0.72","time":"2019-05-22 00:00:00.0","utilization":"0.78","counts":"15"},{"agv_name":null,"runtime":"34.98","feeding":"0.13","cutting":"0.70","runwait":"3.93","error":"0.00","charging":"17.58","waiting":"3.57","lost":"-0.90","time":"2019-05-22 01:00:00.0","utilization":"0.58","counts":"9"},{"agv_name":null,"runtime":"47.77","feeding":"0.92","cutting":"0.33","runwait":"5.72","error":"3.23","charging":"0.00","waiting":"2.03","lost":"0.00","time":"2019-05-22 02:00:00.0","utilization":"0.80","counts":"13"},{"agv_name":null,"runtime":"51.82","feeding":"0.75","cutting":"0.87","runwait":"2.58","error":"0.47","charging":"0.00","waiting":"3.52","lost":"0.00","time":"2019-05-22 03:00:00.0","utilization":"0.86","counts":"15"},{"agv_name":null,"runtime":"48.25","feeding":"0.10","cutting":"0.25","runwait":"5.50","error":"0.45","charging":"2.60","waiting":"2.85","lost":"0.00","time":"2019-05-22 04:00:00.0","utilization":"0.80","counts":"9"},{"agv_name":null,"runtime":"41.23","feeding":"2.73","cutting":"0.50","runwait":"3.02","error":"0.08","charging":"7.60","waiting":"4.83","lost":"0.00","time":"2019-05-22 05:00:00.0","utilization":"0.69","counts":"15"},{"agv_name":null,"runtime":"43.23","feeding":"0.32","cutting":"0.18","runwait":"2.83","error":"0.13","charging":"9.72","waiting":"3.58","lost":"0.00","time":"2019-05-22 06:00:00.0","utilization":"0.72","counts":"11"},{"agv_name":null,"runtime":"35.93","feeding":"6.77","cutting":"0.83","runwait":"4.07","error":"0.00","charging":"8.50","waiting":"3.90","lost":"0.00","time":"2019-05-22 07:00:00.0","utilization":"0.60","counts":"10"},{"agv_name":null,"runtime":"38.05","feeding":"6.10","cutting":"0.75","runwait":"5.65","error":"2.82","charging":"0.00","waiting":"6.60","lost":"0.03","time":"2019-05-22 08:00:00.0","utilization":"0.63","counts":"6"},{"agv_name":null,"runtime":"39.20","feeding":"8.90","cutting":"0.60","runwait":"3.02","error":"0.27","charging":"0.00","waiting":"8.02","lost":"0.00","time":"2019-05-22 09:00:00.0","utilization":"0.65","counts":"15"},{"agv_name":null,"runtime":"34.67","feeding":"4.22","cutting":"0.13","runwait":"9.38","error":"1.12","charging":"7.13","waiting":"3.93","lost":"-0.58","time":"2019-05-22 10:00:00.0","utilization":"0.58","counts":"7"},{"agv_name":null,"runtime":"42.35","feeding":"5.05","cutting":"0.62","runwait":"4.18","error":"3.03","charging":"0.00","waiting":"4.77","lost":"0.00","time":"2019-05-22 11:00:00.0","utilization":"0.71","counts":"12"},{"agv_name":null,"runtime":"24.18","feeding":"6.45","cutting":"0.07","runwait":"1.85","error":"10.53","charging":"15.22","waiting":"1.75","lost":"-0.05","time":"2019-05-22 12:00:00.0","utilization":"0.40","counts":"8"},{"agv_name":null,"runtime":"38.20","feeding":"4.97","cutting":"0.53","runwait":"11.17","error":"1.92","charging":"0.00","waiting":"3.20","lost":"0.02","time":"2019-05-22 13:00:00.0","utilization":"0.64","counts":"10"},{"agv_name":null,"runtime":"41.75","feeding":"9.20","cutting":"0.58","runwait":"3.13","error":"0.18","charging":"0.00","waiting":"5.12","lost":"0.03","time":"2019-05-22 14:00:00.0","utilization":"0.70","counts":"13"},{"agv_name":null,"runtime":"34.20","feeding":"3.13","cutting":"0.25","runwait":"2.90","error":"0.00","charging":"16.12","waiting":"3.40","lost":"0.00","time":"2019-05-22 15:00:00.0","utilization":"0.57","counts":"9"}];
		    var work_date_hour = []; 
		    var standbytime = [];
		    var standbytimes = [];
		    var standbytimess = [];
		    var feedingCnut = [];
		    var NotfeediCnut = [];
		    
		    let CuttingT = [];
		    console.log(result)
		 	for(var i=0;i<result.length;i++)
		 		{
		 		work_date_hour.push((result[i].time).substring(11,13));
		 		standbytime.push({'value':Math.round(result[i].feeding),'leftT':(result[i].time).substring(0,10)});
		 		standbytimes.push({'value':Math.round(parseFloat(result[i].cutting)),'leftT':(result[i].time).substring(0,10)});
		 		standbytimess.push({'value':Math.round(parseFloat(result[i].runwait)),'leftT':(result[i].time).substring(0,10)});
		 		CuttingT.push({'value':Math.round(parseFloat(result[i].cutting)),'leftT':(result[i].time).substring(0,10)})
		 		feedingCnut.push({'value':Math.round(parseFloat(result[i].counts*20)/60.0),'leftT':(result[i].time).substring(0,10)})
		 		NotfeediCnut.push({'value':Math.round(parseFloat(result[i].counts*10)/60.0),'leftT':(result[i].time).substring(0,10)})
		 		}
		 	 var myChart5 = echarts.init(document.getElementById('main03'));
		 	myChart5.clear();
		 	myChart5.setOption ( {
		  
		    "tooltip": {
		        "trigger": "axis",
		        "axisPointer": {
		            "type": "shadow",

		        },
		    },
		    
		    legend: {
		        data:['上料等待','下料等待','中途等待'],
		        selected:{'上料等待':false,'下料等待':false},
		        textStyle:{
		        	color:'#ffffff'
		        }
		    },
//		    dataZoom: [
//		        {
//		        	 type: 'inside',
//		            show: false,
////		            realtime: true,
////		            start: 0,
////		            end: 100,
//		        },
//		    ],
		    xAxis: [{
		    	 type: 'category',
	            splitLine: {
	                show: false
	            },
	            axisLabel:{
	            	color:'#ffffff'
	            },
		        data: work_date_hour
		    }, {
	            type: 'category',
	            axisLine: {
	                show: false
	            },
	            axisTick: {
	                show: false
	            },
	            axisLabel: {
	                show: false
	            },
	            splitArea: {
	                show: false
	            },
	            splitLine: {
	                show: false
	            },
	            data: work_date_hour
	        },],
		    
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
		        {name:'上料等待',
		            type:'bar',
		            xAxisIndex: 1,
		            itemStyle: {
		                normal: {
		                	 barBorderRadius: [8, 8, 2, 2],
			                	shadowColor: 'rgba(255,255,255,1)',
			                    shadowBlur: 5,
			                    shadowOffsetY: 0 ,
		                    color: new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
		                                offset: 0,
		                                color: '#ccd500'
		                            },
		                            {
		                                offset: 0.5,
		                                color: '#ccd500'
		                            },
		                            {
		                                offset: 1,
		                                color: '#ccd500'
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
		            data: standbytime
		        },
		        {name:'下料等待',
		            type:'bar',
		            xAxisIndex: 1,
		            itemStyle: {
		                normal: {
		                    barBorderRadius: [8, 8, 2, 2],
		                	shadowColor: 'rgba(255,255,255,1)',
		                    shadowBlur: 5,
		                    shadowOffsetY: 0 ,
		                    color: new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
		                                offset: 0,
		                                color: '#ffd500'
		                            },
		                            {
		                                offset: 0.5,
		                                color: '#ffd500'
		                            },
		                            {
		                                offset: 1,
		                                color: '#ffd500'
		                            }
		                        ]
		                    )
		                }
		            },
		            label: {
		                normal: {
		                    show: true,
		                    position: 'top',
		                    color:'#ffffff',
		                    }},
		            data: standbytimes
		        },
		        {name:'中途等待',
		            type:'bar',
		            xAxisIndex: 1,
		            itemStyle: {
		                normal: {
		                    barBorderRadius: [8, 8, 2, 2],
		                	shadowColor: 'rgba(255,255,255,1)',
		                    shadowBlur: 5,
		                    shadowOffsetY: 0 ,
		                    color: new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
		                                offset: 0,
		                                color: '#cc8000'
		                            },
		                            {
		                                offset: 0.5,
		                                color: '#cc8000'
		                            },
		                            {
		                                offset: 1,
		                                color: '#cc8000'
		                            }
		                        ]
		                    )
		                }
		            },
		            label: {
		                normal: {
		                    show: true,
		                    position: 'top',
		                    color:'#ffffff',
		                    }},
		            data: standbytimess
		        },
		        {   name:'上料等待',
		        	xAxisIndex: 0,
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
		                                color: 'green'
		                            },
		                            {
		                                offset: 0.5,
		                                color: 'green'
		                            },
		                            {
		                                offset: 1,
		                                color: 'green'
		                            }
		                        ]
		                    )
		                }
		            },
		            label: {
		                normal: {
		                    show: true,
		                    position: 'top',
		                    color:'green'
		                    }},
		            data: feedingCnut
		        },
		        {name:'下料等待',
		            type:'bar',
		            xAxisIndex: 0,
		            itemStyle: {
		                normal: {
		                    barBorderRadius: [8, 8, 2, 2],
		                	shadowColor: 'rgba(255,255,255,1)',
		                    shadowBlur: 5,
		                    shadowOffsetY: 0 ,
		                    color: new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
		                                offset: 0,
		                                color: '#33cc33'
		                            },
		                            {
		                                offset: 0.5,
		                                color: '#33cc33'
		                            },
		                            {
		                                offset: 1,
		                                color: '#33cc33'
		                            }
		                        ]
		                    )
		                }
		            },
		            label: {
		                normal: {
		                    show: true,
		                    position: 'top',
		                    color:'green',
		                    }},
		            data: NotfeediCnut
		        },{name:'中途等待',
		            type:'bar',
		            xAxisIndex: 0,
		            itemStyle: {
		                normal: {
		                    barBorderRadius: [8, 8, 2, 2],
		                	shadowColor: 'rgba(255,255,255,1)',
		                    shadowBlur: 5,
		                    shadowOffsetY: 0 ,
		                    color: new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
		                                offset: 0,
		                                color: '#33cc33'
		                            },
		                            {
		                                offset: 0.5,
		                                color: '#33cc33'
		                            },
		                            {
		                                offset: 1,
		                                color: '#33cc33'
		                            }
		                        ]
		                    )
		                }
		            },
		            label: {
		                normal: {
		                    show: true,
		                    position: 'top',
		                    color:'green',
		                    }},
		            data: []
		        }
//		        {name:'非上料點',
//		            type:'bar',
//		            stack: '非上料',
//		            itemStyle: {
//		                normal: {
//		                    barBorderRadius: 30,
//		                    color: new echarts.graphic.LinearGradient(
//		                        0, 0, 0, 1, [{
//		                                offset: 0,
//		                                color: 'yellow'
//		                            },
//		                            {
//		                                offset: 0.5,
//		                                color: 'yellow'
//		                            },
//		                            {
//		                                offset: 1,
//		                                color: 'yellow'
//		                            }
//		                        ]
//		                    )
//		                }
//		            },
//		            label: {
//		                normal: {
//		                    show: true,
//		                    position: 'top',
//		                    color:'#ffffff',
//		                    }},
//		            data: CuttingT
//		        }
		      ]
		},true);
		 	myChart5.off('click');
		 	myChart5.on('click', function (params) {
//		 		console.log(params)
//		 		console.log(params.data.leftT+" "+params.name)
		 		
		 		
		 		console.log(params.seriesName);
		 		select_state_hours(params.data.leftT+" "+params.name,params.seriesName,"1");
		 		 $('#boder_01').css("display","block");
			        $('#boder_02').css("display","none");
			        $('#boder_03').css("display","none");
			        $('#boder_04').css("display","none");
			        $('#boder_05').css("display","none");
			        $('#boder_06').css("display","none");
			        $('#boder_07').css("display","none");
		 	});
		 	
		 	 window.addEventListener("resize",function() {
		 		myChart5.resize();
	              
	            });
	  	 
		 	
//		 	}
	 
//		 	});

}
error_bhb_hour();
//console.log('-------------->'+$("#select_01").val());
//title_hour,title_site,main04,main05,select_Frequency_title,main06，select_Frequency_day_title，select_Frequency_day_hour_title
//main07,main08,select_Frequency_day_state_title,select_Frequency_day_position_title,main09,main10
function select_state_hours(work_date,state,Nt)
{
//	console.log(Nt)
//	#ccd500  #ffd500  #cc8000
		let Url = Nt===undefined?"select_state_hour":"NotFeedingItf"
		let color = "#ccd500";
		if(state==='下料等待'){color = "#ffd500"}
		if(state==='中途等待'){color = "#cc8000"}
		
		
		
		
//    console.log(Url)
	$('#title_hour').css("display", "block");$('#main04').css("display", "block");$('#title_hours').css("display", "block");
	$('#title_site').css("display", "none");$('#main05').css("display", "none");$('#select_Frequency_title').css("display", "none");$('#main06').css("display", "none");
	$('#select_Frequency_day_title').css("display", "none");$('#select_Frequency_day_hour_title').css("display", "none");$('#main07').css("display", "none");$('#main08').css("display", "none");
	$('#select_Frequency_day_state_title').css("display", "none");$('#select_Frequency_day_position_title').css("display", "none");$('#main09').css("display", "none");$('#main10').css("display", "none");
	if(work_date===undefined){work_date=moment(new Date()).format("YYYY-MM-DD");state = '红外防撞';}	
	 $.ajax({
			type : "post",
			async : true, 
			url : Url,
			data:{
				"work_date": work_date,
				"state": state,
				"machine_name": $("#select_01").val()
					//$("#select_01").val()
			},
			dataType : "json",
		 	success : function(result) {
//		 console.log(result)
		 		Nt===undefined?$('#title_hour').html('異常時間分佈(By Hour)('+work_date+')'):$('#title_hour').html(state+'詳細分佈(By Hour)('+work_date+')');
		 	
		    var state_time_hour = [];
		    var state_hour_time = [];
		 	
		 	for(var i=0;i<result.length;i++)
		 		{
		 		
		 		if(result[i].time==="充电"){continue;}
		 		state_time_hour.push({'value':result[i].utilztion});
		 		state_hour_time.push(result[i].time);
		 		}
		 	
		 	 var myChart6 = echarts.init(document.getElementById('main04'));
		 	myChart6.clear();
		 	myChart6.setOption ( {
		  
		    "tooltip": {	
		        "trigger": "axis",
		        "axisPointer": {
		            "type": "shadow",

		        },
		    },
		    
		    legend: {
		        data:[state==='红外防撞'?'異常':state],
		        textStyle:{
		        	color:'#ffffff'
		        }
		        
		    },
//		    dataZoom: [
//		        {
//		        	 type: 'inside',
//		            show: false,
//		            realtime: true,
//		            start: 50,
//		            end: 100,
//		        },
//		    ],
		    xAxis: [{
		    	
	            splitLine: {
	                show: false
	            },
	            axisLabel: {
	                color:'#ffffff'
	            },
		        data: state_hour_time
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
		        {name: state==='红外防撞'?'異常':state,
		            type:'bar',
//		            barWidth : 30,
		            itemStyle: {
		                normal: {
		                	 barBorderRadius: [8, 8, 2, 2],
			                	shadowColor: 'rgba(255,255,255,1)',
			                    shadowBlur: 5,
			                    shadowOffsetY: 0 ,
		                    color: new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
		                                offset: 0,
		                                color: Nt===undefined?'#ff1c1c':color
		                            },
		                            {
		                                offset: 0.5,
		                                color: Nt===undefined?'red':color
		                            },
		                            {
		                                offset: 1,
		                                color: Nt===undefined?'#ff3838':color
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
		            data: state_time_hour
		        },
	
		      ]
		},true);
		 	myChart6.off('click');
		 	myChart6.on('click', function (params) {
//		 		console.log(work_date+" "+params.name + " "+state);
//			        console.log(params);
			        
		 		Nt===undefined?select_state_site(work_date+" "+params.name,state):select_state_site(work_date,params.name,params.seriesName);
			        
			        $('#boder_02').css("display","block");
			        $('#boder_03').css("display","none");
			        $('#boder_04').css("display","none");
			        $('#boder_05').css("display","none");
			        $('#boder_06').css("display","none");
			        $('#boder_07').css("display","none");
			        
			    });
		 	
		 	 window.addEventListener("resize",function() {
		 		myChart6.resize();
	              
	            });
	  	 
		 	
		 	}
	 
		 	});	

}

//select_state_hours();






function select_state_site(work_date,state,Nt)
{
	console.log(Nt);

		let Url = Nt===undefined?"select_error_site":"NotFeedingx"
			let color = "#ccd500";
		if(Nt==='下料等待'){color = "#ffd500"}
		if(Nt==='中途等待'){color = "#cc8000";}
//	console.log(work_date);
	$('#title_site').css("display", "block");$('#main05').css("display", "block");$('#title_hours').css("display", "none");
	if(work_date===undefined){work_date=moment(new Date()).format("YYYY-MM-DD HH");state = '红外防撞';}	
//	work_date = '2018-08-27 05';
	 $.ajax({
			type : "post",
			async : true, 
			url : Url,
			data:{
				"work_date": work_date,
				"state": state,
				"machine_name": $("#select_01").val(),
				"statename":Nt
			},
			dataType : "json",
		 	success : function(result) {
		 		
		 		Nt===undefined?$('#title_site').html('異常點位分佈(By Site)('+work_date+')'):$('#title_site').html(state+'詳細分佈(By Site)('+work_date+')');
		    var state_site = [];
		    var state_time = [];
		 	
		 	for(var i=0;i<result.length;i++)
		 		{
		 		
//		 		state_time.push({'value':result[i].speed,'itemStyle':{'normal':{'color':DownL(result[i].agv_position)?color:'red'}}});
		 		state_time.push({'value':result[i].speed});
		 		state_site.push(result[i].agv_position);
		 		  console.log(DownL(result[i].agv_position))
		 		}
		 	
		 	 var myChart7 = echarts.init(document.getElementById('main05'));
		 	myChart7.clear();
		 	myChart7.setOption ( {
		  
		    "tooltip": {	
		        "trigger": "axis",
		        "axisPointer": {
		            "type": "shadow",

		        },
		    },
		    
		    legend: {
		        data:[state==='红外防撞'?'異常':state],
		        textStyle:{
		        	color:'#ffffff',
		        }
		    },
//		    dataZoom: [
//		        {
//		        	 type: 'inside',
//		            show: false,
//		            realtime: true,
//		            start: 50,
//		            end: 100,
//		        },
//		    ],
		    xAxis: [{
		    	
	            splitLine: {
	                show: false
	            },
	            axisLabel: {
	               color:'#ffffff',
	            },
		        data: state_site
		    }],
		    yAxis: [
		        {
		            type: 'value',
//		              splitArea: {
//			                show: true
//			            },
		            axisLabel: {
		                formatter: '{value} min',
		                color:'#ffffff',
		            },
		            splitLine: {
		                show: false
		            },
		        },
		      
		    ],
		    series: [
		        {name: state==='红外防撞'?'異常':state,
		            type:'bar',
//		            barWidth : 30,
		            itemStyle: {
		                normal: {
		                	 barBorderRadius: [8, 8, 2, 2],
			                	shadowColor: 'rgba(255,255,255,1)',
			                    shadowBlur: 5,
			                    shadowOffsetY: 0 ,
		                    color: new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
		                                offset: 0,
		                                color: Nt===undefined?'#ff1c1c':color
		                            },
		                            {
		                                offset: 0.5,
//		                                color: 'red'
		                                color: Nt===undefined?'red':color
		                            },
		                            {
		                                offset: 1,
//		                                color: '#ff3838'
		                                color: Nt===undefined?'#ff3838':color
		                            }
		                        ]
		                    )
		                }
		            },
		            label: {
		                normal: {
		                    show: true,
		                    position: 'top',
		                    color:'#ffffff',
		                    }},
		            data: state_time
		        },
	
		      ]
		},true);
		 	
		 	myChart7.off('click');
		 	myChart7.on('click', function (params) {
			        select_Frequency();
			        site_Location_details(params.name);
			        $('#boder_03').css("display","block");
			        $('#boder_04').css("display","none");
			        $('#boder_05').css("display","none");
			        $('#boder_06').css("display","none");
			        $('#boder_07').css("display","none");
			        
			    });
		 	 window.addEventListener("resize",function() {
		 		myChart7.resize();
	              
	            });
	  	 
		 	
		 	}
	 
		 	});	

}



function  DownL(State){
	if(State === "\"33.61\""){return true;}if(State === "\"33.57\""){return true;}
	if(State === "\"37.51\""){return true;}if(State === "\"36.26\""){return true;}
	if(State === "\"34.39\""){return true;}if(State === "\"31.32\""){return true;}
	if(State === "\"35.22\""){return true;}if(State === "\"37.22\""){return true;}
	if(State === "\"29.36\""){return true;}if(State === "\"25.57\""){return true;}
	if(State === "\"25.51\""){return true;}if(State === "\"25.47\""){return true;}
	if(State === "\"25.39\""){return true;}if(State === "\"25.32\""){return true;}
	if(State === "\"25.26\""){return true;}if(State === "\"25.22\""){return true;}
	if(State === "\"25.36\""){return true;}
	if(State === "\"59.26\""){return true;}if(State === "\"63.63\""){return true;}
	if(State === "\"58.57\""){return true;}if(State === "\"71.44\""){return true;}
	if(State === "\"81.69\""){return true;}if(State === "\"81.52\""){return true;}
	if(State === "\"89.52\""){return true;}if(State === "\"15.28\""){return true;}
	return false;
}


//select_state_site();










