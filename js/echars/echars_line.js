
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
	       legend:{
	    	   
	       },
	       dataZoom: [
	           {
	        	   type: 'inside',
	               show: true,
	               start: 98,
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
		     axisLabel:{
		         color:'#FFFFFF',
		          fontWeight:'bold',
		          fontSize:20,
		          textShadowColor:'rgba(255, 255, 255, 1)',
		          textShadowBlur :10
		        },
		         splitLine:{
		         show:false
		        },
		         axisLine:{
		         show:false,
		         },
		         axisTick:{
		         show:false,
		         },
		        type: 'value'
		    },
		    series: [],
		};
		
		
		let series_line = {
		        data: [820, 932, 901, 934, 1290, 1330, 1320] ,
		        type: 'line',
		        smooth: true,
		        symbolSize:20,
		        label:{
		          normal:{
		              show:true,
		              color:'#16d9f0',
		              fontWeight:'blod',
		              fontSize:20,
		              textShadowColor:'rgba(20, 217, 240, 1)',
		        	  textShadowBlur :10
		          }
		        },
		        lineStyle:{
		        normal:{
		           color:'#16d9f0',
		                 type:'solid',
			            width:7
			            }
			        },
		      }
		
		
		let xAxis_line = {
		        type: 'category',
		        axisLabel:{
		         color:'#FFFFFF',
		         fontWeight:'bold',
		         fontSize:20,
		         textShadowColor:'rgba(255, 255, 255, 1)',
		         textShadowBlur :10
		        },
		        splitLine:{
		         show:false,
		        },
		        axisTick:{
		         show:false,
		         },
		        axisLine:{
		         show:false,
		        },
		        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		    }
		