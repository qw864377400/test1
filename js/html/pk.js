   var h1,h11 = [];
     var h2,h22 = [];
     var h3,h33 = [];
     var h4,h44 = [];
     var h5,h55 = [];
     
      function checksz(){
           $('#checks').find("input").each(function(index,ele){
            if($(this).is(':checked')){
            }
           })
      }
     
  function pk_agv(){
  let kjh = "";
		$.ajax({
			type : "post",
			async : false, 
			url: 'http://10.167.194.139:8080/Whole_ApiA/select_hh',
			dataType : "json",
			data:{
				'orcl':'2',
				'table_name':'agv_ip',
				'sql':''
				},
		 	success :(result) => {
		 	
		 	for(var i=0;i<result.length;i++){
		 	      this.eval("var util"+result[i].agv_name+"=[]");
		 	      this.eval("var utils"+result[i].agv_name+"=[]");
		 	       this.eval("var Feeding"+result[i].agv_name+"=[]");
		 	       let state_check = result[i].agv_name==="07"||result[i].agv_name==="08"?'checked="checked"':'';
		 		kjh = kjh + '<li><input type="checkbox" value="'+result[i].agv_name+'" '+state_check+'>  '+result[i].agv_name+'</li>';
		 	}
		 $('#oll').append(kjh);
		 $('#checks input').off("click");
	     $('#checks input').click(function(){
	    	  console.log(utils07)
	    	  console.log(utils08)
	    	$(this).parent().parent().find("input").each(function(index,ele){
	    		 console.log($(this)[0].checked)
	    		 if($(this)[0].checked){
	    			 console.log($(this).val());
	    		 }
	    		 
	    		 console.log(index)
	    	 })
	    	  var ijh = "02";
	    	  console.log(eval("utils"+ijh));
	    	  
	    	 var kkkknn = [];
	 	     for(var i=0;i<utils07.length;i++){
	 	    	 kkkknn.push(((parseFloat(utils07[i])+parseFloat(utils08[i]))/2).toFixed(2))
	 	     }
	 	     
	 	     
	 	     PKtotle(kkkknn);
	    	  
	    	  
	      khgh();
	     })
		 
		 
		 
	 $.ajax({
		type: 'post',
		async:false,
		dataType: 'json',
		url: 'utilization_all_d',
		success: function (message) {
			
			console.log('-----------------------------------------------------------------------------')
			console.log(message)
		 	let work_date_01 = [];
		 	for(var i=0;i<message.length;i++){
		 	if(message[i].agv_name==="07"){
		 	eval('work_date_01').push(message[i].work_date)}
		 	}
		 	let zkh = [];
		 	for(var i=0;i<work_date_01.length;i++){
		 	let state = 0;
		 	  for(var j=0;j<result.length;j++){
		 	  	for(var z=0;z<message.length;z++){
		 	  	   if(work_date_01[i]===message[z].work_date&&result[j].agv_name===message[z].agv_name){
		 	  		   
		 	  		   if(z===message.length-1||z===message.length-2){
		 	  			   eval("util"+result[j].agv_name).push( Math.ceil(message[z].utilizations));
			 	  	       eval("utils"+result[j].agv_name).push(message[z].utilization);
		 	  		   }else{
		 	  			   eval("util"+result[j].agv_name).push( Math.ceil(message[z].utilizations*100));
		 	  			   eval("utils"+result[j].agv_name).push(message[z].utilization);
		 	  		   }
		 	  	       
		 	  	       state = 1;
		 	  	       break;
		 	  	   }else{
		 	  	    state = 0;
		 	  	   }
		 	  	}
		 	  	if(state===0){
		 	  	   eval("util"+result[j].agv_name).push(0);
		 	  	   eval("utils"+result[j].agv_name).push(0);
		 	  	}
            }
		 	  }
	   let kk = [];
	   let colors = [];
	   let legends = [];
       	for(var i=0;i<result.length;i++){
       	    if(result[i].agv_name==="04"||result[i].agv_name==="09"){continue;}
		 	   let testc = $.extend(true,{},series_line);
		 	   testc.data = eval('util'+result[i].agv_name);
		 	    testc.name = "實際稼動率 "+result[i].agv_name;
		 	    testc.label.normal.formatter = '{c} %'
		 	    kk.push(testc);
		 	    if(i%2===0){  colors.push("#16D9F0");}else{colors.push("yellow");}
		 	  
		 	    legends.push("實際稼動率 "+result[i].agv_name);
		 	    
		 	    
		 	     testc = $.extend(true,{},series_line);
		 	    testc.data = eval('utils'+result[i].agv_name);
		 	    testc.name = "有效稼動率 "+result[i].agv_name;
		 	      testc.label.normal.formatter = '{c} %'
		 	    kk.push(testc);
		 	   
		 	   if(i%2===0){   colors.push("#ff6820");}else{colors.push("#76EE00");}
		 	    legends.push("有效稼動率 "+result[i].agv_name);
		 	}
	  
	    
	   console.log(kk)
	    
	              h11 = kk;
		 	       h22 = work_date_01;
		 	       h33 = legends;
		 	       h55 = colors;
	 
         
         
         
		 	 }
		 	});
		 	
	
		 	
// 		 	47d5f79f2bdb39fae7e81d7828db267d
		 	
		 	
		 	
		 $.ajax({
		type: 'post',
		async:false,
		dataType: 'json',
		url: 'http://10.167.194.139:8099/Whole_ApiA/select_hh?orcl=2&table_name=&sql=47d5f79f2bdb39fae7e81d7828db267d',
		success: function (message) {
		 	let work_date_01 = [];
		 	for(var i=0;i<message.length;i++){
		 	if(message[i].agv_name==="02"){
		 	eval('work_date_01').push(message[i].start_times)}
		 	}
		 	let zkh = [];
		 	for(var i=0;i<work_date_01.length;i++){
		 	let state = 0;
		 	  for(var j=0;j<result.length;j++){
		 	  	for(var z=0;z<message.length;z++){
		 	  	   if(work_date_01[i]===message[z].start_times&&result[j].agv_name===message[z].agv_name){
		 	  	       eval("Feeding"+result[j].agv_name).push(message[z].feeding_time);
		 	  	       state = 1;
		 	  	       break;
		 	  	   }else{
		 	  	    state = 0;
		 	  	   }
		 	  	}
		 	  	if(state===0){
		 	  	   eval("Feeding"+result[j].agv_name).push(0);
		 	  	}
            }
		 	  }
	   let kk = [];
	   let colors = [];
	   let legends = [];
       	for(var i=0;i<result.length;i++){
       	    if(result[i].agv_name==='09'||result[i].agv_name==='04'){continue;}
		 	   let testc = $.extend(true,{},series_line);
		 	   testc.data = eval('Feeding'+result[i].agv_name);
		 	    testc.name = "送料次數 "+result[i].agv_name;
		 	        testc.label.normal.formatter = '{c} 次'
		 	    kk.push(testc);
		 	   
		 	    if(i%2===0){ colors.push("#16D9F0");}else{ colors.push("#F0E68C");}
//		 	    if(i%2==0){ colors.push("#16D9F0");}else{ colors.push("#CD3278");}
		 	    legends.push("送料次數 "+result[i].agv_name);
		 	  }
		 	  
		 	  
		 	       h1 = kk;
		 	       h2 = work_date_01;
		 	       h3 = legends;
		 	       h5 = colors;
		 	       
		 	 }
		 	});	
	       }
		 });
		 
//		console.log(h1);
	    console.log(utils07)
	     console.log(utils08)
	     var kkkknn = [];
	     for(var i=0;i<utils07.length;i++){
	    	 kkkknn.push(((parseFloat(utils07[i])+parseFloat(utils08[i]))/2).toFixed(2))
	     }
	     
	     
	     PKtotle(kkkknn);
	     
	     
	     
	     
	     
	     
		
		 }
function khgh(x,s,t,c){
 		let agv_state = []; 
   $('#checks').find("input").each(function(index,ele){
            if($(this).is(':checked')){
               agv_state.push($(this).val())
            }
           })
	       this.Myechar1 = echarts.init(document.getElementById("sss"))
	      Myechar1.clear();
	       Myechar1.showLoading({
                text: '數據統計中，請稍後...',
                textStyle: { fontSize : 30 , color: '#444' },
                effectOption: {backgroundColor: 'rgba(0, 0, 0, 0)'}
            }); 
	    
        let test11 = $.extend(true,[],h11);
        let test22 = $.extend(true,{},xAxis_line);
        let test33 = $.extend(true,[],h33);
         let z11 = [] ;let z22 = [] ;
         for(var i=0;i<agv_state.length;i++){
            
//            console.log(test11.filter(item => item.name.indexOf(agv_state[i])>0));
            for(var z=0;z<test11.filter(item => item.name.indexOf(agv_state[i])>0).length;z++){
              z11.push(test11.filter(item => item.name.indexOf(agv_state[i])>0)[z])
            }
         for(var z=0;z<test33.filter(item => item.indexOf(agv_state[i])>0).length;z++){
            z22.push(test33.filter(item => item.indexOf(agv_state[i])>0)[z])
            }
           
        }
        test22.data = h22
         option.series = z11;
         option.legend.data = z22;
         option.legend.top = 20
         option.title.text = "有效稼动對比(%)"
         option.xAxis = test22;
         option.color = h55;
        Myechar1.setOption(option,true);
        Myechar1.hideLoading();
        window.addEventListener("resize",function() {
                Myechar1.resize();
         });
       this.Myechar2 = echarts.init(document.getElementById("ssss"))
	    Myechar2.clear();
	       Myechar2.showLoading({
                text: '數據統計中，請稍後...',
                textStyle: { fontSize : 30 , color: '#444' },
                effectOption: {backgroundColor: 'rgba(0, 0, 0, 0)'}
            }); 
//	       console.log('---------------------------------------------------------------');
//	       console.log(h1);
	       
        let test1 = $.extend(true,[],h1);
        let test2 = $.extend(true,{},xAxis_line);
        let test3 = $.extend(true,[],h3);
         let z1 = [] ;let z2 = [] ;
        for(var i=0;i<agv_state.length;i++){
           z1.push(test1.filter(item => item.name.indexOf(agv_state[i])>0)[0])
           z2.push(test3.filter(item => item.indexOf(agv_state[i])>0)[0])
        }
        
        console.log(z2+'--------------------------------------')
          test2.data = h2
         option.series = z1;
         option.legend.data = z2;
         option.title.text = "送料次數對比(次)"
         option.legend.top = 20
         option.xAxis = test2;
         option.color = h5;
        Myechar2.setOption(option,true);
        Myechar2.hideLoading();
   
        window.addEventListener("resize",function() {
                Myechar2.resize();
         });
       }
       
       setTimeout(function() {
       	pk_agv();
       }, 1000)
       
     $('#sxk').css("display",'none');
     $('select').click(function(){
//     console.log( $('#sxk').css("display"));
     $('#sxk').css("display")==="block"?$('#sxk').css('display','none'):$('#sxk').css("display","block");
     })
     
     $('#bb').click(function(){
     setTimeout(function() {
     khgh();
     setTimeout(function() {
     	     Myechar1.resize();
      Myechar2.resize();
      Myechar333.resize();
     }, 50)
     }, 100)
     })
     
     
     
function PKtotle(kkkknn){
    	  
	     this.Myechar333 = echarts.init(document.getElementById("ss"))
		    Myechar333.clear();
	     Myechar333.showLoading({
	                text: '數據統計中，請稍後...',
	                textStyle: { fontSize : 30 , color: '#444' },
	                effectOption: {backgroundColor: 'rgba(0, 0, 0, 0)'}
	            }); 
	     
	     
	     

	      var optionzz = {
		       title:{
		       show:true,
		       text:'多機台稼動率(BY DAY)',
		       textStyle:{
		        color:'#ffffff',
		        fontWeight:'bold',
		         textShadowColor:'rgba(255, 255, 255, 1)',
			     textShadowBlur :10
		       }
		       },
		       grid:{
//		            width:'90%',
//		             left:'5%',
//		    	   containLabel:true,
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
			    xAxis: [{
			    	 type: 'category',
				        axisLabel:{
				         color:'#ffffff',
				         fontWeight:'bold',
				         fontSize:20,
//				         textShadowColor:'rgba(255, 255, 255, 1)',
//				         textShadowBlur :10
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
				        data: h22
			    	
			    }] ,
			    yAxis: {
//			    	offset:30,
			     axisLabel:{
			         color:'#ffffff',
			          fontWeight:'bold',
			          fontSize:20,
//			          textShadowColor:'rgba(255, 255, 255, 1)',
//			          textShadowBlur :10
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
			    series: [{
			        data: kkkknn ,
			        type: 'line',
			        smooth: true,
			        symbolSize:10,
			        label:{
			          normal:{
			              show:true,
//			              color:'#16d9f0',
			              formatter:'{c} %',
			              fontWeight:'blod',
			              fontSize:20,
			              textShadowColor:'rgba(20, 217, 240, 1)',
			        	  textShadowBlur :10
			          }
			        },
			        lineStyle:{
			        normal:{
//			           color:'#16d9f0',
			                 type:'solid',
				            width:7
				            }
				        },
			      }],
			    color: ["#16D9F0","#ff6820"],
			};
	     
	     
	     
	     
	     
	      Myechar333.setOption(optionzz,true);
	     
	     
	         Myechar333.hideLoading();
	   
	        window.addEventListener("resize",function() {
	        	Myechar333.resize();
	         });
    	 
     }
     
     
     