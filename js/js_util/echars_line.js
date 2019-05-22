
      var option = {
	       title:{
	       show:true,
	       text:'订单总数趋势(BY DAY)',
	       textStyle:{
	        color:'#ffffff',
	        fontWeight:'bold',
	         textShadowColor:'rgba(255, 255, 255, 1)',
		     textShadowBlur :10
	       }
	       },
	       grid:{
//	            width:'90%',
//	             left:'5%',
//	    	   containLabel:true,
	       },
	       legend:{
	    	   selected:{
	    		    // 选中'系列1'
	    		    '實際稼動率 07': false	,
	    		    // 不选中'系列2'
	    		    '實際稼動率 08': false
	    		},
	    	   textStyle:{
	    		   color:'#ffffff',
	    		   fontSize:20
	    	   }
	       },
	       dataZoom: [
	           {
	        	   type: 'inside',
	               show: true,
	               start: 80,
	               end: 100,
	           },
	          
	       ],

	       tooltip : {
	    	   trigger: 'axis',
	    	   axisPointer:{
	    		   type:'shadow'
	    	   }
	       },
		    xAxis: [] ,
		    yAxis: {
//		    	offset:30,
		     axisLabel:{
		         color:'#ffffff',
		          fontWeight:'bold',
		          fontSize:20,
//		          textShadowColor:'rgba(255, 255, 255, 1)',
//		          textShadowBlur :10
		        },
		         splitLine:{
		         show:false
		        },
		         axisLine:{
		         show:true,
		         lineStyle:{
		        	 color:'#ffffff'
		         }
		         },
		         axisTick:{
		         show:true,
		         },
		        type: 'value'
		    },
		    series: [],
		    color: ["#16D9F0","#ff6820"],
		};
		
		let series_line = {
		        data: [820, 932, 901, 934, 1290, 1330, 1320] ,
		        type: 'line',
		        smooth: true,
		        symbolSize:10,
		        label:{
		          normal:{
		              show:true,
//		              color:'#16d9f0',
		              fontWeight:'blod',
		              fontSize:20,
		              textShadowColor:'rgba(20, 217, 240, 1)',
		        	  textShadowBlur :10
		          }
		        },
		        lineStyle:{
		        normal:{
//		           color:'#16d9f0',
		                 type:'solid',
			            width:7
			            }
			        },
		      }
		
		
		let xAxis_line = {
		        type: 'category',
		        axisLabel:{
		         color:'#ffffff',
		         fontWeight:'bold',
		         fontSize:20,
//		         textShadowColor:'rgba(255, 255, 255, 1)',
//		         textShadowBlur :10
		        },
		        splitLine:{
		         show:false,
		        },
		        axisTick:{
		         show:true,
		         },
		        axisLine:{
		         show:true,
		         lineStyle:{
		        	 color:'#ffffff'
		         }
		        },
		        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		    }
		