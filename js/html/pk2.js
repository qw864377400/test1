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
//		$.ajax({
//			type : "post",
//			async : false, 
//			url: 'http://10.167.194.139:8080/Whole_ApiA/select_hh',
//			dataType : "json",
//			data:{
//				'orcl':'2',
//				'table_name':'agv_ip',
//				'sql':''
//				},
//		 	success :(result) => {
            let result = [{"agv_ips":"200.168.113.1","vendor":"Speedp_white","agv_name":"01"},{"agv_ips":"200.168.113.2","vendor":"Speedp_White","agv_name":"02"},{"agv_ips":"200.168.113.3","vendor":"Speedp_white","agv_name":"03"},{"agv_ips":"200.168.113.4","vendor":"Speedp_black","agv_name":"04"},{"agv_ips":"200.168.113.48","vendor":"Speedp_white","agv_name":"05"},{"agv_ips":"200.168.113.6","vendor":"Speedp_white","agv_name":"06"},{"agv_ips":"200.168.113.7","vendor":"Haikang_Orange","agv_name":"07"},{"agv_ips":"200.168.113.8","vendor":"Haikang_Orange","agv_name":"08"}];
		 	  console.log(result)
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
		 
		 
		 
//	 $.ajax({
//		type: 'post',
//		async:false,
//		dataType: 'json',
//		url: 'utilization_all_d',
//		success: function (message) {
			let message = [{"work_date":"2019-04-22","agv_name":"07","utilization":"81.25","utilizations":"0.57"},{"work_date":"2019-04-23","agv_name":"07","utilization":"83.13","utilizations":"0.59"},{"work_date":"2019-04-24","agv_name":"07","utilization":"78.26","utilizations":"0.55"},{"work_date":"2019-04-22","agv_name":"08","utilization":"32.78","utilizations":"0.23"},{"work_date":"2019-04-23","agv_name":"08","utilization":"30.42","utilizations":"0.22"},{"work_date":"2019-04-24","agv_name":"08","utilization":"35.07","utilizations":"0.25"},{"work_date":"2019-04-25","agv_name":"07","utilization":"76.67","utilizations":"0.59"},{"work_date":"2019-04-26","agv_name":"07","utilization":"82.50","utilizations":"0.58"},{"work_date":"2019-04-27","agv_name":"07","utilization":"85.42","utilizations":"0.60"},{"work_date":"2019-04-28","agv_name":"07","utilization":"84.10","utilizations":"0.60"},{"work_date":"2019-04-25","agv_name":"08","utilization":"32.99","utilizations":"0.24"},{"work_date":"2019-04-26","agv_name":"08","utilization":"44.03","utilizations":"0.31"},{"work_date":"2019-04-27","agv_name":"08","utilization":"48.75","utilizations":"0.33"},{"work_date":"2019-04-28","agv_name":"08","utilization":"47.78","utilizations":"0.34"},{"work_date":"2019-04-29","agv_name":"07","utilization":"83.96","utilizations":"0.59"},{"work_date":"2019-04-30","agv_name":"07","utilization":"58.54","utilizations":"0.52"},{"work_date":"2019-04-29","agv_name":"08","utilization":"49.93","utilizations":"0.34"},{"work_date":"2019-04-30","agv_name":"08","utilization":"22.29","utilizations":"0.17"},{"work_date":"2019-05-02","agv_name":"07","utilization":"43.61","utilizations":"0.36"},{"work_date":"2019-05-02","agv_name":"08","utilization":"10.00","utilizations":"0.07"},{"work_date":"2019-05-03","agv_name":"07","utilization":"84.58","utilizations":"0.57"},{"work_date":"2019-05-03","agv_name":"08","utilization":"32.29","utilizations":"0.23"},{"work_date":"2019-05-04","agv_name":"07","utilization":"83.68","utilizations":"0.58"},{"work_date":"2019-05-04","agv_name":"08","utilization":"46.94","utilizations":"0.33"},{"work_date":"2019-05-05","agv_name":"07","utilization":"80.56","utilizations":"0.56"},{"work_date":"2019-05-05","agv_name":"08","utilization":"39.79","utilizations":"0.28"},{"work_date":"2019-05-06","agv_name":"07","utilization":"82.22","utilizations":"0.59"},{"work_date":"2019-05-06","agv_name":"08","utilization":"50.76","utilizations":"0.38"},{"work_date":"2019-05-07","agv_name":"08","utilization":"56.53","utilizations":"0.40"},{"work_date":"2019-05-08","agv_name":"08","utilization":"54.17","utilizations":"0.40"},{"work_date":"2019-05-07","agv_name":"07","utilization":"82.43","utilizations":"0.60"},{"work_date":"2019-05-08","agv_name":"07","utilization":"73.54","utilizations":"0.56"},{"work_date":"2019-05-09","agv_name":"07","utilization":"74.44","utilizations":"0.59"},{"work_date":"2019-05-09","agv_name":"08","utilization":"57.15","utilizations":"0.43"},{"work_date":"2019-05-10","agv_name":"07","utilization":"73.82","utilizations":"0.59"},{"work_date":"2019-05-10","agv_name":"08","utilization":"50.42","utilizations":"0.38"},{"work_date":"2019-05-11","agv_name":"07","utilization":"72.92","utilizations":"0.60"},{"work_date":"2019-05-11","agv_name":"08","utilization":"58.89","utilizations":"0.43"},{"work_date":"2019-05-12","agv_name":"07","utilization":"81.04","utilizations":"0.66"},{"work_date":"2019-05-12","agv_name":"08","utilization":"61.53","utilizations":"0.46"},{"work_date":"2019-05-13","agv_name":"07","utilization":"75.69","utilizations":"0.61"},{"work_date":"2019-05-13","agv_name":"08","utilization":"54.79","utilizations":"0.41"},{"work_date":"2019-05-14","agv_name":"07","utilization":"80.69","utilizations":"0.66"},{"work_date":"2019-05-14","agv_name":"08","utilization":"62.15","utilizations":"0.46"},{"work_date":"2019-05-15","agv_name":"07","utilization":"72.29","utilizations":"0.58"},{"work_date":"2019-05-15","agv_name":"08","utilization":"51.11","utilizations":"0.38"},{"work_date":"2019-05-16","agv_name":"07","utilization":"70.00","utilizations":"0.60"},{"work_date":"2019-05-16","agv_name":"08","utilization":"46.74","utilizations":"0.36"},{"work_date":"2019-05-17","agv_name":"07","utilization":"72.43","utilizations":"0.59"},{"work_date":"2019-05-17","agv_name":"08","utilization":"51.25","utilizations":"0.41"},{"work_date":"2019-05-18","agv_name":"07","utilization":"82.99","utilizations":"0.66"},{"work_date":"2019-05-18","agv_name":"08","utilization":"62.92","utilizations":"0.46"},{"work_date":"2019-05-19","agv_name":"07","utilization":"83.96","utilizations":"0.69"},{"work_date":"2019-05-19","agv_name":"08","utilization":"66.74","utilizations":"0.49"},{"work_date":"2019-05-20","agv_name":"07","utilization":"75.14","utilizations":"0.58"},{"work_date":"2019-05-20","agv_name":"08","utilization":"50.97","utilizations":"0.38"},{"work_date":"2019-05-21","agv_name":"07","utilization":"88.13","utilizations":"0.71"},{"work_date":"2019-05-21","agv_name":"08","utilization":"58.40","utilizations":"0.44"},{"work_date":"2019-05-22","agv_name":"07","utilization":"83.53","utilizations":"65.97"},{"work_date":"2019-05-22","agv_name":"08","utilization":"58.98","utilizations":"43.07"}];
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
	 
         
         
         
//		 	 }
//		 	});
		 	
	
		 	
// 		 	47d5f79f2bdb39fae7e81d7828db267d
		 	
		 	
		 	
//		 $.ajax({
//		type: 'post',
//		async:false,
//		dataType: 'json',
//		url: 'http://10.167.194.139:8099/Whole_ApiA/select_hh?orcl=2&table_name=&sql=47d5f79f2bdb39fae7e81d7828db267d',
//		success: function (message) {
//			console.log('pppppppppppppppppppppppppppppp')
//			console.log(message)
//			console.log('pppppppppppppppppppppppppppppp')
		    message = [{"start_times":"2018-08-31","agv_name":"01","feeding_time":"20"},{"start_times":"2018-08-31","agv_name":"02","feeding_time":"15"},{"start_times":"2018-09-01","agv_name":"01","feeding_time":"72"},{"start_times":"2018-09-01","agv_name":"02","feeding_time":"56"},{"start_times":"2018-09-01","agv_name":"03","feeding_time":"1"},{"start_times":"2018-09-02","agv_name":"01","feeding_time":"25"},{"start_times":"2018-09-02","agv_name":"02","feeding_time":"24"},{"start_times":"2018-09-03","agv_name":"01","feeding_time":"44"},{"start_times":"2018-09-03","agv_name":"02","feeding_time":"40"},{"start_times":"2018-09-03","agv_name":"03","feeding_time":"28"},{"start_times":"2018-09-04","agv_name":"01","feeding_time":"78"},{"start_times":"2018-09-04","agv_name":"02","feeding_time":"73"},{"start_times":"2018-09-04","agv_name":"03","feeding_time":"70"},{"start_times":"2018-09-05","agv_name":"01","feeding_time":"73"},{"start_times":"2018-09-05","agv_name":"02","feeding_time":"68"},{"start_times":"2018-09-05","agv_name":"03","feeding_time":"63"},{"start_times":"2018-09-06","agv_name":"01","feeding_time":"79"},{"start_times":"2018-09-06","agv_name":"02","feeding_time":"75"},{"start_times":"2018-09-06","agv_name":"03","feeding_time":"68"},{"start_times":"2018-09-07","agv_name":"01","feeding_time":"78"},{"start_times":"2018-09-07","agv_name":"02","feeding_time":"80"},{"start_times":"2018-09-07","agv_name":"03","feeding_time":"72"},{"start_times":"2018-09-08","agv_name":"01","feeding_time":"52"},{"start_times":"2018-09-08","agv_name":"02","feeding_time":"49"},{"start_times":"2018-09-08","agv_name":"03","feeding_time":"44"},{"start_times":"2018-09-09","agv_name":"01","feeding_time":"54"},{"start_times":"2018-09-09","agv_name":"02","feeding_time":"53"},{"start_times":"2018-09-09","agv_name":"03","feeding_time":"48"},{"start_times":"2018-09-10","agv_name":"01","feeding_time":"64"},{"start_times":"2018-09-10","agv_name":"02","feeding_time":"64"},{"start_times":"2018-09-10","agv_name":"03","feeding_time":"48"},{"start_times":"2018-09-11","agv_name":"01","feeding_time":"47"},{"start_times":"2018-09-11","agv_name":"02","feeding_time":"54"},{"start_times":"2018-09-11","agv_name":"03","feeding_time":"52"},{"start_times":"2018-09-12","agv_name":"01","feeding_time":"69"},{"start_times":"2018-09-12","agv_name":"02","feeding_time":"68"},{"start_times":"2018-09-12","agv_name":"03","feeding_time":"36"},{"start_times":"2018-09-13","agv_name":"01","feeding_time":"30"},{"start_times":"2018-09-13","agv_name":"02","feeding_time":"32"},{"start_times":"2018-09-13","agv_name":"03","feeding_time":"23"},{"start_times":"2018-09-14","agv_name":"01","feeding_time":"62"},{"start_times":"2018-09-14","agv_name":"02","feeding_time":"64"},{"start_times":"2018-09-14","agv_name":"03","feeding_time":"47"},{"start_times":"2018-09-15","agv_name":"01","feeding_time":"63"},{"start_times":"2018-09-15","agv_name":"02","feeding_time":"61"},{"start_times":"2018-09-15","agv_name":"03","feeding_time":"46"},{"start_times":"2018-09-16","agv_name":"01","feeding_time":"10"},{"start_times":"2018-09-16","agv_name":"02","feeding_time":"10"},{"start_times":"2018-09-16","agv_name":"03","feeding_time":"7"},{"start_times":"2018-09-17","agv_name":"01","feeding_time":"35"},{"start_times":"2018-09-17","agv_name":"02","feeding_time":"36"},{"start_times":"2018-09-17","agv_name":"03","feeding_time":"26"},{"start_times":"2018-09-18","agv_name":"01","feeding_time":"66"},{"start_times":"2018-09-18","agv_name":"02","feeding_time":"66"},{"start_times":"2018-09-18","agv_name":"03","feeding_time":"48"},{"start_times":"2018-09-20","agv_name":"01","feeding_time":"28"},{"start_times":"2018-09-20","agv_name":"02","feeding_time":"30"},{"start_times":"2018-09-20","agv_name":"03","feeding_time":"19"},{"start_times":"2018-09-21","agv_name":"01","feeding_time":"48"},{"start_times":"2018-09-21","agv_name":"02","feeding_time":"50"},{"start_times":"2018-09-21","agv_name":"03","feeding_time":"29"},{"start_times":"2018-09-22","agv_name":"01","feeding_time":"47"},{"start_times":"2018-09-22","agv_name":"02","feeding_time":"44"},{"start_times":"2018-09-22","agv_name":"03","feeding_time":"39"},{"start_times":"2018-09-23","agv_name":"01","feeding_time":"24"},{"start_times":"2018-09-23","agv_name":"02","feeding_time":"28"},{"start_times":"2018-09-23","agv_name":"03","feeding_time":"23"},{"start_times":"2018-09-25","agv_name":"01","feeding_time":"41"},{"start_times":"2018-09-25","agv_name":"02","feeding_time":"42"},{"start_times":"2018-09-25","agv_name":"03","feeding_time":"35"},{"start_times":"2018-09-26","agv_name":"01","feeding_time":"80"},{"start_times":"2018-09-26","agv_name":"02","feeding_time":"81"},{"start_times":"2018-09-26","agv_name":"03","feeding_time":"57"},{"start_times":"2018-09-27","agv_name":"01","feeding_time":"20"},{"start_times":"2018-09-27","agv_name":"02","feeding_time":"21"},{"start_times":"2018-09-27","agv_name":"03","feeding_time":"18"},{"start_times":"2018-10-04","agv_name":"01","feeding_time":"37"},{"start_times":"2018-10-04","agv_name":"02","feeding_time":"35"},{"start_times":"2018-10-05","agv_name":"01","feeding_time":"60"},{"start_times":"2018-10-05","agv_name":"02","feeding_time":"67"},{"start_times":"2018-10-06","agv_name":"01","feeding_time":"47"},{"start_times":"2018-10-06","agv_name":"02","feeding_time":"44"},{"start_times":"2018-10-07","agv_name":"01","feeding_time":"8"},{"start_times":"2018-10-07","agv_name":"02","feeding_time":"6"},{"start_times":"2018-10-08","agv_name":"01","feeding_time":"51"},{"start_times":"2018-10-08","agv_name":"02","feeding_time":"50"},{"start_times":"2018-10-09","agv_name":"01","feeding_time":"71"},{"start_times":"2018-10-09","agv_name":"02","feeding_time":"65"},{"start_times":"2018-10-10","agv_name":"01","feeding_time":"56"},{"start_times":"2018-10-10","agv_name":"02","feeding_time":"56"},{"start_times":"2018-10-11","agv_name":"01","feeding_time":"52"},{"start_times":"2018-10-11","agv_name":"02","feeding_time":"49"},{"start_times":"2018-10-12","agv_name":"01","feeding_time":"60"},{"start_times":"2018-10-12","agv_name":"02","feeding_time":"59"},{"start_times":"2018-10-12","agv_name":"03","feeding_time":"52"},{"start_times":"2018-10-13","agv_name":"01","feeding_time":"18"},{"start_times":"2018-10-13","agv_name":"02","feeding_time":"17"},{"start_times":"2018-10-13","agv_name":"03","feeding_time":"19"},{"start_times":"2018-10-15","agv_name":"01","feeding_time":"43"},{"start_times":"2018-10-15","agv_name":"02","feeding_time":"41"},{"start_times":"2018-10-15","agv_name":"03","feeding_time":"34"},{"start_times":"2018-10-16","agv_name":"01","feeding_time":"64"},{"start_times":"2018-10-16","agv_name":"02","feeding_time":"49"},{"start_times":"2018-10-16","agv_name":"03","feeding_time":"44"},{"start_times":"2018-10-17","agv_name":"01","feeding_time":"54"},{"start_times":"2018-10-17","agv_name":"02","feeding_time":"60"},{"start_times":"2018-10-17","agv_name":"03","feeding_time":"52"},{"start_times":"2018-10-18","agv_name":"01","feeding_time":"76"},{"start_times":"2018-10-18","agv_name":"02","feeding_time":"71"},{"start_times":"2018-10-18","agv_name":"03","feeding_time":"60"},{"start_times":"2018-10-19","agv_name":"01","feeding_time":"67"},{"start_times":"2018-10-19","agv_name":"02","feeding_time":"66"},{"start_times":"2018-10-19","agv_name":"03","feeding_time":"60"},{"start_times":"2018-10-20","agv_name":"01","feeding_time":"18"},{"start_times":"2018-10-20","agv_name":"02","feeding_time":"16"},{"start_times":"2018-10-20","agv_name":"03","feeding_time":"10"},{"start_times":"2018-10-22","agv_name":"01","feeding_time":"49"},{"start_times":"2018-10-22","agv_name":"02","feeding_time":"47"},{"start_times":"2018-10-22","agv_name":"03","feeding_time":"41"},{"start_times":"2018-10-23","agv_name":"01","feeding_time":"83"},{"start_times":"2018-10-23","agv_name":"02","feeding_time":"84"},{"start_times":"2018-10-23","agv_name":"03","feeding_time":"61"},{"start_times":"2018-10-24","agv_name":"01","feeding_time":"66"},{"start_times":"2018-10-24","agv_name":"02","feeding_time":"65"},{"start_times":"2018-10-24","agv_name":"03","feeding_time":"38"},{"start_times":"2018-10-25","agv_name":"01","feeding_time":"76"},{"start_times":"2018-10-25","agv_name":"02","feeding_time":"75"},{"start_times":"2018-10-25","agv_name":"03","feeding_time":"30"},{"start_times":"2018-10-26","agv_name":"01","feeding_time":"63"},{"start_times":"2018-10-26","agv_name":"02","feeding_time":"60"},{"start_times":"2018-10-26","agv_name":"03","feeding_time":"61"},{"start_times":"2018-10-27","agv_name":"01","feeding_time":"30"},{"start_times":"2018-10-27","agv_name":"02","feeding_time":"31"},{"start_times":"2018-10-27","agv_name":"03","feeding_time":"17"},{"start_times":"2018-10-28","agv_name":"01","feeding_time":"6"},{"start_times":"2018-10-28","agv_name":"02","feeding_time":"7"},{"start_times":"2018-10-28","agv_name":"03","feeding_time":"8"},{"start_times":"2018-10-29","agv_name":"01","feeding_time":"19"},{"start_times":"2018-10-29","agv_name":"02","feeding_time":"29"},{"start_times":"2018-10-29","agv_name":"03","feeding_time":"21"},{"start_times":"2018-10-30","agv_name":"01","feeding_time":"28"},{"start_times":"2018-10-30","agv_name":"02","feeding_time":"31"},{"start_times":"2018-10-30","agv_name":"03","feeding_time":"30"},{"start_times":"2018-10-31","agv_name":"01","feeding_time":"23"},{"start_times":"2018-10-31","agv_name":"02","feeding_time":"18"},{"start_times":"2018-10-31","agv_name":"03","feeding_time":"5"},{"start_times":"2018-11-01","agv_name":"02","feeding_time":"52"},{"start_times":"2018-11-02","agv_name":"01","feeding_time":"25"},{"start_times":"2018-11-02","agv_name":"02","feeding_time":"78"},{"start_times":"2018-11-03","agv_name":"01","feeding_time":"64"},{"start_times":"2018-11-03","agv_name":"02","feeding_time":"72"},{"start_times":"2018-11-05","agv_name":"01","feeding_time":"27"},{"start_times":"2018-11-05","agv_name":"02","feeding_time":"40"},{"start_times":"2018-11-06","agv_name":"01","feeding_time":"106"},{"start_times":"2018-11-06","agv_name":"02","feeding_time":"115"},{"start_times":"2018-11-07","agv_name":"01","feeding_time":"142"},{"start_times":"2018-11-07","agv_name":"02","feeding_time":"145"},{"start_times":"2018-11-08","agv_name":"01","feeding_time":"122"},{"start_times":"2018-11-08","agv_name":"02","feeding_time":"128"},{"start_times":"2018-11-09","agv_name":"01","feeding_time":"119"},{"start_times":"2018-11-09","agv_name":"02","feeding_time":"141"},{"start_times":"2018-11-10","agv_name":"01","feeding_time":"143"},{"start_times":"2018-11-10","agv_name":"02","feeding_time":"130"},{"start_times":"2018-11-11","agv_name":"01","feeding_time":"141"},{"start_times":"2018-11-11","agv_name":"02","feeding_time":"145"},{"start_times":"2018-11-12","agv_name":"01","feeding_time":"110"},{"start_times":"2018-11-12","agv_name":"02","feeding_time":"107"},{"start_times":"2018-11-13","agv_name":"01","feeding_time":"99"},{"start_times":"2018-11-13","agv_name":"02","feeding_time":"107"},{"start_times":"2018-11-14","agv_name":"01","feeding_time":"106"},{"start_times":"2018-11-14","agv_name":"02","feeding_time":"107"},{"start_times":"2018-11-14","agv_name":"03","feeding_time":"21"},{"start_times":"2018-11-15","agv_name":"01","feeding_time":"99"},{"start_times":"2018-11-15","agv_name":"02","feeding_time":"65"},{"start_times":"2018-11-15","agv_name":"03","feeding_time":"69"},{"start_times":"2018-11-16","agv_name":"01","feeding_time":"95"},{"start_times":"2018-11-16","agv_name":"02","feeding_time":"86"},{"start_times":"2018-11-16","agv_name":"03","feeding_time":"85"},{"start_times":"2018-11-17","agv_name":"01","feeding_time":"109"},{"start_times":"2018-11-17","agv_name":"02","feeding_time":"121"},{"start_times":"2018-11-17","agv_name":"03","feeding_time":"96"},{"start_times":"2018-11-18","agv_name":"01","feeding_time":"39"},{"start_times":"2018-11-18","agv_name":"02","feeding_time":"34"},{"start_times":"2018-11-19","agv_name":"01","feeding_time":"38"},{"start_times":"2018-11-19","agv_name":"02","feeding_time":"39"},{"start_times":"2018-11-19","agv_name":"03","feeding_time":"38"},{"start_times":"2018-11-20","agv_name":"01","feeding_time":"111"},{"start_times":"2018-11-20","agv_name":"02","feeding_time":"120"},{"start_times":"2018-11-20","agv_name":"03","feeding_time":"106"},{"start_times":"2018-11-21","agv_name":"01","feeding_time":"92"},{"start_times":"2018-11-21","agv_name":"02","feeding_time":"86"},{"start_times":"2018-11-21","agv_name":"03","feeding_time":"81"},{"start_times":"2018-11-22","agv_name":"01","feeding_time":"94"},{"start_times":"2018-11-22","agv_name":"02","feeding_time":"92"},{"start_times":"2018-11-22","agv_name":"03","feeding_time":"93"},{"start_times":"2018-11-23","agv_name":"01","feeding_time":"112"},{"start_times":"2018-11-23","agv_name":"02","feeding_time":"115"},{"start_times":"2018-11-23","agv_name":"03","feeding_time":"116"},{"start_times":"2018-11-24","agv_name":"01","feeding_time":"108"},{"start_times":"2018-11-24","agv_name":"02","feeding_time":"113"},{"start_times":"2018-11-24","agv_name":"03","feeding_time":"108"},{"start_times":"2018-11-25","agv_name":"01","feeding_time":"88"},{"start_times":"2018-11-25","agv_name":"02","feeding_time":"92"},{"start_times":"2018-11-25","agv_name":"03","feeding_time":"90"},{"start_times":"2018-11-26","agv_name":"01","feeding_time":"117"},{"start_times":"2018-11-26","agv_name":"02","feeding_time":"121"},{"start_times":"2018-11-26","agv_name":"03","feeding_time":"120"},{"start_times":"2018-11-27","agv_name":"01","feeding_time":"123"},{"start_times":"2018-11-27","agv_name":"02","feeding_time":"112"},{"start_times":"2018-11-27","agv_name":"03","feeding_time":"115"},{"start_times":"2018-11-28","agv_name":"01","feeding_time":"90"},{"start_times":"2018-11-28","agv_name":"02","feeding_time":"84"},{"start_times":"2018-11-28","agv_name":"03","feeding_time":"86"},{"start_times":"2018-11-29","agv_name":"01","feeding_time":"67"},{"start_times":"2018-11-29","agv_name":"02","feeding_time":"96"},{"start_times":"2018-11-29","agv_name":"03","feeding_time":"99"},{"start_times":"2018-11-30","agv_name":"01","feeding_time":"104"},{"start_times":"2018-11-30","agv_name":"02","feeding_time":"109"},{"start_times":"2018-11-30","agv_name":"03","feeding_time":"112"},{"start_times":"2018-12-01","agv_name":"01","feeding_time":"123"},{"start_times":"2018-12-01","agv_name":"02","feeding_time":"119"},{"start_times":"2018-12-01","agv_name":"03","feeding_time":"119"},{"start_times":"2018-12-02","agv_name":"01","feeding_time":"46"},{"start_times":"2018-12-02","agv_name":"02","feeding_time":"51"},{"start_times":"2018-12-02","agv_name":"03","feeding_time":"47"},{"start_times":"2018-12-03","agv_name":"01","feeding_time":"122"},{"start_times":"2018-12-03","agv_name":"02","feeding_time":"114"},{"start_times":"2018-12-03","agv_name":"03","feeding_time":"119"},{"start_times":"2018-12-04","agv_name":"01","feeding_time":"108"},{"start_times":"2018-12-04","agv_name":"02","feeding_time":"87"},{"start_times":"2018-12-04","agv_name":"03","feeding_time":"100"},{"start_times":"2018-12-05","agv_name":"01","feeding_time":"93"},{"start_times":"2018-12-05","agv_name":"02","feeding_time":"57"},{"start_times":"2018-12-05","agv_name":"03","feeding_time":"102"},{"start_times":"2018-12-06","agv_name":"01","feeding_time":"77"},{"start_times":"2018-12-06","agv_name":"02","feeding_time":"77"},{"start_times":"2018-12-06","agv_name":"03","feeding_time":"77"},{"start_times":"2018-12-07","agv_name":"01","feeding_time":"106"},{"start_times":"2018-12-07","agv_name":"02","feeding_time":"115"},{"start_times":"2018-12-07","agv_name":"03","feeding_time":"115"},{"start_times":"2018-12-08","agv_name":"01","feeding_time":"126"},{"start_times":"2018-12-08","agv_name":"02","feeding_time":"113"},{"start_times":"2018-12-08","agv_name":"03","feeding_time":"105"},{"start_times":"2018-12-09","agv_name":"01","feeding_time":"105"},{"start_times":"2018-12-09","agv_name":"02","feeding_time":"103"},{"start_times":"2018-12-09","agv_name":"03","feeding_time":"95"},{"start_times":"2018-12-10","agv_name":"01","feeding_time":"79"},{"start_times":"2018-12-10","agv_name":"02","feeding_time":"74"},{"start_times":"2018-12-10","agv_name":"03","feeding_time":"75"},{"start_times":"2018-12-11","agv_name":"01","feeding_time":"77"},{"start_times":"2018-12-11","agv_name":"02","feeding_time":"68"},{"start_times":"2018-12-11","agv_name":"03","feeding_time":"70"},{"start_times":"2018-12-12","agv_name":"01","feeding_time":"69"},{"start_times":"2018-12-12","agv_name":"02","feeding_time":"61"},{"start_times":"2018-12-12","agv_name":"03","feeding_time":"69"},{"start_times":"2018-12-13","agv_name":"1","feeding_time":"113"},{"start_times":"2018-12-13","agv_name":"2","feeding_time":"108"},{"start_times":"2018-12-13","agv_name":"3","feeding_time":"113"},{"start_times":"2018-12-14","agv_name":"01","feeding_time":"104"},{"start_times":"2018-12-14","agv_name":"02","feeding_time":"111"},{"start_times":"2018-12-14","agv_name":"03","feeding_time":"97"},{"start_times":"2018-12-15","agv_name":"01","feeding_time":"103"},{"start_times":"2018-12-15","agv_name":"02","feeding_time":"100"},{"start_times":"2018-12-15","agv_name":"03","feeding_time":"108"},{"start_times":"2018-12-16","agv_name":"01","feeding_time":"94"},{"start_times":"2018-12-16","agv_name":"02","feeding_time":"82"},{"start_times":"2018-12-16","agv_name":"03","feeding_time":"94"},{"start_times":"2018-12-17","agv_name":"01","feeding_time":"97"},{"start_times":"2018-12-17","agv_name":"02","feeding_time":"96"},{"start_times":"2018-12-17","agv_name":"03","feeding_time":"109"},{"start_times":"2018-12-18","agv_name":"01","feeding_time":"50"},{"start_times":"2018-12-18","agv_name":"02","feeding_time":"99"},{"start_times":"2018-12-18","agv_name":"03","feeding_time":"104"},{"start_times":"2018-12-18","agv_name":"05","feeding_time":"48"},{"start_times":"2018-12-18","agv_name":"06","feeding_time":"70"},{"start_times":"2018-12-18","agv_name":"07","feeding_time":"102"},{"start_times":"2018-12-18","agv_name":"08","feeding_time":"101"},{"start_times":"2018-12-19","agv_name":"01","feeding_time":"102"},{"start_times":"2018-12-19","agv_name":"02","feeding_time":"93"},{"start_times":"2018-12-19","agv_name":"03","feeding_time":"100"},{"start_times":"2018-12-19","agv_name":"05","feeding_time":"83"},{"start_times":"2018-12-19","agv_name":"06","feeding_time":"88"},{"start_times":"2018-12-19","agv_name":"07","feeding_time":"133"},{"start_times":"2018-12-19","agv_name":"08","feeding_time":"119"},{"start_times":"2018-12-20","agv_name":"01","feeding_time":"107"},{"start_times":"2018-12-20","agv_name":"02","feeding_time":"96"},{"start_times":"2018-12-20","agv_name":"03","feeding_time":"107"},{"start_times":"2018-12-20","agv_name":"05","feeding_time":"85"},{"start_times":"2018-12-20","agv_name":"06","feeding_time":"78"},{"start_times":"2018-12-20","agv_name":"07","feeding_time":"238"},{"start_times":"2018-12-20","agv_name":"08","feeding_time":"193"},{"start_times":"2018-12-21","agv_name":"01","feeding_time":"126"},{"start_times":"2018-12-21","agv_name":"02","feeding_time":"103"},{"start_times":"2018-12-21","agv_name":"03","feeding_time":"117"},{"start_times":"2018-12-21","agv_name":"05","feeding_time":"78"},{"start_times":"2018-12-21","agv_name":"06","feeding_time":"66"},{"start_times":"2018-12-21","agv_name":"07","feeding_time":"246"},{"start_times":"2018-12-21","agv_name":"08","feeding_time":"235"},{"start_times":"2018-12-22","agv_name":"01","feeding_time":"129"},{"start_times":"2018-12-22","agv_name":"02","feeding_time":"126"},{"start_times":"2018-12-22","agv_name":"03","feeding_time":"124"},{"start_times":"2018-12-22","agv_name":"05","feeding_time":"66"},{"start_times":"2018-12-22","agv_name":"06","feeding_time":"39"},{"start_times":"2018-12-22","agv_name":"07","feeding_time":"219"},{"start_times":"2018-12-22","agv_name":"08","feeding_time":"213"},{"start_times":"2018-12-23","agv_name":"01","feeding_time":"103"},{"start_times":"2018-12-23","agv_name":"02","feeding_time":"106"},{"start_times":"2018-12-23","agv_name":"03","feeding_time":"103"},{"start_times":"2018-12-23","agv_name":"05","feeding_time":"69"},{"start_times":"2018-12-23","agv_name":"06","feeding_time":"75"},{"start_times":"2018-12-23","agv_name":"07","feeding_time":"82"},{"start_times":"2018-12-23","agv_name":"08","feeding_time":"55"},{"start_times":"2018-12-24","agv_name":"01","feeding_time":"85"},{"start_times":"2018-12-24","agv_name":"02","feeding_time":"80"},{"start_times":"2018-12-24","agv_name":"03","feeding_time":"80"},{"start_times":"2018-12-24","agv_name":"05","feeding_time":"57"},{"start_times":"2018-12-24","agv_name":"06","feeding_time":"72"},{"start_times":"2018-12-24","agv_name":"07","feeding_time":"115"},{"start_times":"2018-12-24","agv_name":"08","feeding_time":"111"},{"start_times":"2018-12-25","agv_name":"01","feeding_time":"116"},{"start_times":"2018-12-25","agv_name":"02","feeding_time":"85"},{"start_times":"2018-12-25","agv_name":"03","feeding_time":"109"},{"start_times":"2018-12-25","agv_name":"05","feeding_time":"71"},{"start_times":"2018-12-25","agv_name":"06","feeding_time":"76"},{"start_times":"2018-12-25","agv_name":"07","feeding_time":"215"},{"start_times":"2018-12-25","agv_name":"08","feeding_time":"210"},{"start_times":"2018-12-26","agv_name":"01","feeding_time":"111"},{"start_times":"2018-12-26","agv_name":"02","feeding_time":"70"},{"start_times":"2018-12-26","agv_name":"03","feeding_time":"118"},{"start_times":"2018-12-26","agv_name":"05","feeding_time":"75"},{"start_times":"2018-12-26","agv_name":"06","feeding_time":"80"},{"start_times":"2018-12-26","agv_name":"07","feeding_time":"100"},{"start_times":"2018-12-26","agv_name":"08","feeding_time":"111"},{"start_times":"2018-12-27","agv_name":"01","feeding_time":"100"},{"start_times":"2018-12-27","agv_name":"02","feeding_time":"88"},{"start_times":"2018-12-27","agv_name":"03","feeding_time":"114"},{"start_times":"2018-12-27","agv_name":"05","feeding_time":"72"},{"start_times":"2018-12-27","agv_name":"06","feeding_time":"63"},{"start_times":"2018-12-27","agv_name":"07","feeding_time":"109"},{"start_times":"2018-12-27","agv_name":"08","feeding_time":"125"},{"start_times":"2018-12-28","agv_name":"01","feeding_time":"48"},{"start_times":"2018-12-28","agv_name":"02","feeding_time":"59"},{"start_times":"2018-12-28","agv_name":"03","feeding_time":"69"},{"start_times":"2018-12-28","agv_name":"05","feeding_time":"27"},{"start_times":"2018-12-28","agv_name":"06","feeding_time":"46"},{"start_times":"2018-12-28","agv_name":"07","feeding_time":"104"},{"start_times":"2018-12-28","agv_name":"08","feeding_time":"93"},{"start_times":"2018-12-29","agv_name":"07","feeding_time":"7"},{"start_times":"2019-01-03","agv_name":"01","feeding_time":"28"},{"start_times":"2019-01-03","agv_name":"02","feeding_time":"65"},{"start_times":"2019-01-03","agv_name":"03","feeding_time":"113"},{"start_times":"2019-01-03","agv_name":"05","feeding_time":"79"},{"start_times":"2019-01-03","agv_name":"06","feeding_time":"89"},{"start_times":"2019-01-03","agv_name":"07","feeding_time":"146"},{"start_times":"2019-01-03","agv_name":"08","feeding_time":"148"},{"start_times":"2019-01-04","agv_name":"01","feeding_time":"63"},{"start_times":"2019-01-04","agv_name":"02","feeding_time":"104"},{"start_times":"2019-01-04","agv_name":"03","feeding_time":"114"},{"start_times":"2019-01-04","agv_name":"05","feeding_time":"85"},{"start_times":"2019-01-04","agv_name":"06","feeding_time":"82"},{"start_times":"2019-01-04","agv_name":"07","feeding_time":"155"},{"start_times":"2019-01-04","agv_name":"08","feeding_time":"136"},{"start_times":"2019-01-05","agv_name":"01","feeding_time":"97"},{"start_times":"2019-01-05","agv_name":"02","feeding_time":"92"},{"start_times":"2019-01-05","agv_name":"03","feeding_time":"105"},{"start_times":"2019-01-05","agv_name":"05","feeding_time":"64"},{"start_times":"2019-01-05","agv_name":"06","feeding_time":"73"},{"start_times":"2019-01-05","agv_name":"07","feeding_time":"222"},{"start_times":"2019-01-05","agv_name":"08","feeding_time":"198"},{"start_times":"2019-01-06","agv_name":"01","feeding_time":"33"},{"start_times":"2019-01-06","agv_name":"02","feeding_time":"34"},{"start_times":"2019-01-06","agv_name":"03","feeding_time":"37"},{"start_times":"2019-01-06","agv_name":"05","feeding_time":"37"},{"start_times":"2019-01-06","agv_name":"06","feeding_time":"39"},{"start_times":"2019-01-06","agv_name":"07","feeding_time":"184"},{"start_times":"2019-01-06","agv_name":"08","feeding_time":"189"},{"start_times":"2019-01-07","agv_name":"01","feeding_time":"79"},{"start_times":"2019-01-07","agv_name":"02","feeding_time":"80"},{"start_times":"2019-01-07","agv_name":"03","feeding_time":"76"},{"start_times":"2019-01-07","agv_name":"05","feeding_time":"48"},{"start_times":"2019-01-07","agv_name":"06","feeding_time":"58"},{"start_times":"2019-01-07","agv_name":"07","feeding_time":"209"},{"start_times":"2019-01-07","agv_name":"08","feeding_time":"190"},{"start_times":"2019-01-08","agv_name":"01","feeding_time":"112"},{"start_times":"2019-01-08","agv_name":"02","feeding_time":"113"},{"start_times":"2019-01-08","agv_name":"03","feeding_time":"110"},{"start_times":"2019-01-08","agv_name":"05","feeding_time":"63"},{"start_times":"2019-01-08","agv_name":"06","feeding_time":"71"},{"start_times":"2019-01-08","agv_name":"07","feeding_time":"204"},{"start_times":"2019-01-08","agv_name":"08","feeding_time":"197"},{"start_times":"2019-01-09","agv_name":"01","feeding_time":"101"},{"start_times":"2019-01-09","agv_name":"02","feeding_time":"104"},{"start_times":"2019-01-09","agv_name":"03","feeding_time":"97"},{"start_times":"2019-01-09","agv_name":"05","feeding_time":"70"},{"start_times":"2019-01-09","agv_name":"06","feeding_time":"76"},{"start_times":"2019-01-09","agv_name":"07","feeding_time":"197"},{"start_times":"2019-01-09","agv_name":"08","feeding_time":"213"},{"start_times":"2019-01-10","agv_name":"01","feeding_time":"113"},{"start_times":"2019-01-10","agv_name":"02","feeding_time":"108"},{"start_times":"2019-01-10","agv_name":"03","feeding_time":"109"},{"start_times":"2019-01-10","agv_name":"05","feeding_time":"63"},{"start_times":"2019-01-10","agv_name":"06","feeding_time":"69"},{"start_times":"2019-01-10","agv_name":"07","feeding_time":"208"},{"start_times":"2019-01-10","agv_name":"08","feeding_time":"204"},{"start_times":"2019-01-11","agv_name":"01","feeding_time":"119"},{"start_times":"2019-01-11","agv_name":"02","feeding_time":"118"},{"start_times":"2019-01-11","agv_name":"03","feeding_time":"106"},{"start_times":"2019-01-11","agv_name":"05","feeding_time":"54"},{"start_times":"2019-01-11","agv_name":"06","feeding_time":"57"},{"start_times":"2019-01-11","agv_name":"07","feeding_time":"125"},{"start_times":"2019-01-11","agv_name":"08","feeding_time":"123"},{"start_times":"2019-01-12","agv_name":"01","feeding_time":"89"},{"start_times":"2019-01-12","agv_name":"02","feeding_time":"93"},{"start_times":"2019-01-12","agv_name":"03","feeding_time":"91"},{"start_times":"2019-01-12","agv_name":"05","feeding_time":"54"},{"start_times":"2019-01-12","agv_name":"06","feeding_time":"52"},{"start_times":"2019-01-12","agv_name":"07","feeding_time":"168"},{"start_times":"2019-01-12","agv_name":"08","feeding_time":"171"},{"start_times":"2019-01-13","agv_name":"01","feeding_time":"35"},{"start_times":"2019-01-13","agv_name":"02","feeding_time":"35"},{"start_times":"2019-01-13","agv_name":"03","feeding_time":"32"},{"start_times":"2019-01-13","agv_name":"05","feeding_time":"47"},{"start_times":"2019-01-13","agv_name":"06","feeding_time":"52"},{"start_times":"2019-01-13","agv_name":"07","feeding_time":"192"},{"start_times":"2019-01-13","agv_name":"08","feeding_time":"193"},{"start_times":"2019-01-14","agv_name":"01","feeding_time":"51"},{"start_times":"2019-01-14","agv_name":"02","feeding_time":"51"},{"start_times":"2019-01-14","agv_name":"03","feeding_time":"7"},{"start_times":"2019-01-14","agv_name":"05","feeding_time":"62"},{"start_times":"2019-01-14","agv_name":"06","feeding_time":"63"},{"start_times":"2019-01-14","agv_name":"07","feeding_time":"202"},{"start_times":"2019-01-14","agv_name":"08","feeding_time":"193"},{"start_times":"2019-01-15","agv_name":"01","feeding_time":"86"},{"start_times":"2019-01-15","agv_name":"02","feeding_time":"92"},{"start_times":"2019-01-15","agv_name":"03","feeding_time":"45"},{"start_times":"2019-01-15","agv_name":"05","feeding_time":"61"},{"start_times":"2019-01-15","agv_name":"06","feeding_time":"59"},{"start_times":"2019-01-15","agv_name":"07","feeding_time":"170"},{"start_times":"2019-01-15","agv_name":"08","feeding_time":"173"},{"start_times":"2019-01-16","agv_name":"01","feeding_time":"80"},{"start_times":"2019-01-16","agv_name":"02","feeding_time":"74"},{"start_times":"2019-01-16","agv_name":"03","feeding_time":"81"},{"start_times":"2019-01-16","agv_name":"05","feeding_time":"59"},{"start_times":"2019-01-16","agv_name":"06","feeding_time":"60"},{"start_times":"2019-01-16","agv_name":"07","feeding_time":"218"},{"start_times":"2019-01-16","agv_name":"08","feeding_time":"216"},{"start_times":"2019-01-17","agv_name":"01","feeding_time":"123"},{"start_times":"2019-01-17","agv_name":"02","feeding_time":"128"},{"start_times":"2019-01-17","agv_name":"03","feeding_time":"51"},{"start_times":"2019-01-17","agv_name":"05","feeding_time":"89"},{"start_times":"2019-01-17","agv_name":"06","feeding_time":"95"},{"start_times":"2019-01-17","agv_name":"07","feeding_time":"157"},{"start_times":"2019-01-17","agv_name":"08","feeding_time":"156"},{"start_times":"2019-01-18","agv_name":"01","feeding_time":"88"},{"start_times":"2019-01-18","agv_name":"02","feeding_time":"88"},{"start_times":"2019-01-18","agv_name":"03","feeding_time":"14"},{"start_times":"2019-01-18","agv_name":"05","feeding_time":"54"},{"start_times":"2019-01-18","agv_name":"06","feeding_time":"60"},{"start_times":"2019-01-18","agv_name":"07","feeding_time":"182"},{"start_times":"2019-01-18","agv_name":"08","feeding_time":"145"},{"start_times":"2019-01-19","agv_name":"01","feeding_time":"130"},{"start_times":"2019-01-19","agv_name":"02","feeding_time":"141"},{"start_times":"2019-01-19","agv_name":"03","feeding_time":"52"},{"start_times":"2019-01-19","agv_name":"05","feeding_time":"81"},{"start_times":"2019-01-19","agv_name":"06","feeding_time":"85"},{"start_times":"2019-01-19","agv_name":"07","feeding_time":"120"},{"start_times":"2019-01-19","agv_name":"08","feeding_time":"103"},{"start_times":"2019-01-20","agv_name":"01","feeding_time":"14"},{"start_times":"2019-01-20","agv_name":"02","feeding_time":"16"},{"start_times":"2019-01-20","agv_name":"03","feeding_time":"12"},{"start_times":"2019-01-20","agv_name":"05","feeding_time":"7"},{"start_times":"2019-01-20","agv_name":"06","feeding_time":"7"},{"start_times":"2019-01-20","agv_name":"07","feeding_time":"138"},{"start_times":"2019-01-20","agv_name":"08","feeding_time":"139"},{"start_times":"2019-01-21","agv_name":"01","feeding_time":"70"},{"start_times":"2019-01-21","agv_name":"02","feeding_time":"71"},{"start_times":"2019-01-21","agv_name":"05","feeding_time":"47"},{"start_times":"2019-01-21","agv_name":"06","feeding_time":"49"},{"start_times":"2019-01-21","agv_name":"07","feeding_time":"46"},{"start_times":"2019-01-21","agv_name":"08","feeding_time":"46"},{"start_times":"2019-01-22","agv_name":"01","feeding_time":"96"},{"start_times":"2019-01-22","agv_name":"02","feeding_time":"103"},{"start_times":"2019-01-22","agv_name":"05","feeding_time":"77"},{"start_times":"2019-01-22","agv_name":"06","feeding_time":"81"},{"start_times":"2019-01-22","agv_name":"07","feeding_time":"107"},{"start_times":"2019-01-22","agv_name":"08","feeding_time":"103"},{"start_times":"2019-01-23","agv_name":"01","feeding_time":"115"},{"start_times":"2019-01-23","agv_name":"02","feeding_time":"79"},{"start_times":"2019-01-23","agv_name":"03","feeding_time":"39"},{"start_times":"2019-01-23","agv_name":"05","feeding_time":"59"},{"start_times":"2019-01-23","agv_name":"06","feeding_time":"69"},{"start_times":"2019-01-23","agv_name":"07","feeding_time":"145"},{"start_times":"2019-01-23","agv_name":"08","feeding_time":"158"},{"start_times":"2019-01-24","agv_name":"01","feeding_time":"41"},{"start_times":"2019-01-24","agv_name":"02","feeding_time":"23"},{"start_times":"2019-01-24","agv_name":"03","feeding_time":"48"},{"start_times":"2019-01-24","agv_name":"06","feeding_time":"29"},{"start_times":"2019-01-24","agv_name":"07","feeding_time":"80"},{"start_times":"2019-01-24","agv_name":"08","feeding_time":"63"},{"start_times":"2019-01-25","agv_name":"01","feeding_time":"106"},{"start_times":"2019-01-25","agv_name":"02","feeding_time":"55"},{"start_times":"2019-01-25","agv_name":"03","feeding_time":"105"},{"start_times":"2019-01-25","agv_name":"06","feeding_time":"57"},{"start_times":"2019-01-25","agv_name":"07","feeding_time":"124"},{"start_times":"2019-01-25","agv_name":"08","feeding_time":"120"},{"start_times":"2019-01-26","agv_name":"01","feeding_time":"68"},{"start_times":"2019-01-26","agv_name":"02","feeding_time":"46"},{"start_times":"2019-01-26","agv_name":"03","feeding_time":"69"},{"start_times":"2019-01-26","agv_name":"06","feeding_time":"44"},{"start_times":"2019-01-26","agv_name":"07","feeding_time":"196"},{"start_times":"2019-01-26","agv_name":"08","feeding_time":"105"},{"start_times":"2019-01-27","agv_name":"01","feeding_time":"38"},{"start_times":"2019-01-27","agv_name":"02","feeding_time":"52"},{"start_times":"2019-01-27","agv_name":"03","feeding_time":"38"},{"start_times":"2019-01-27","agv_name":"06","feeding_time":"54"},{"start_times":"2019-01-27","agv_name":"07","feeding_time":"129"},{"start_times":"2019-01-27","agv_name":"08","feeding_time":"102"},{"start_times":"2019-01-28","agv_name":"01","feeding_time":"52"},{"start_times":"2019-01-28","agv_name":"02","feeding_time":"47"},{"start_times":"2019-01-28","agv_name":"03","feeding_time":"51"},{"start_times":"2019-01-28","agv_name":"06","feeding_time":"48"},{"start_times":"2019-01-28","agv_name":"07","feeding_time":"141"},{"start_times":"2019-01-28","agv_name":"08","feeding_time":"146"},{"start_times":"2019-01-29","agv_name":"01","feeding_time":"74"},{"start_times":"2019-01-29","agv_name":"02","feeding_time":"60"},{"start_times":"2019-01-29","agv_name":"03","feeding_time":"64"},{"start_times":"2019-01-29","agv_name":"06","feeding_time":"65"},{"start_times":"2019-01-29","agv_name":"07","feeding_time":"40"},{"start_times":"2019-01-29","agv_name":"08","feeding_time":"43"},{"start_times":"2019-01-30","agv_name":"01","feeding_time":"87"},{"start_times":"2019-01-30","agv_name":"02","feeding_time":"66"},{"start_times":"2019-01-30","agv_name":"03","feeding_time":"84"},{"start_times":"2019-01-30","agv_name":"06","feeding_time":"69"},{"start_times":"2019-01-30","agv_name":"07","feeding_time":"102"},{"start_times":"2019-01-30","agv_name":"08","feeding_time":"91"},{"start_times":"2019-01-31","agv_name":"01","feeding_time":"57"},{"start_times":"2019-01-31","agv_name":"02","feeding_time":"56"},{"start_times":"2019-01-31","agv_name":"03","feeding_time":"90"},{"start_times":"2019-01-31","agv_name":"06","feeding_time":"58"},{"start_times":"2019-01-31","agv_name":"07","feeding_time":"187"},{"start_times":"2019-01-31","agv_name":"08","feeding_time":"174"},{"start_times":"2019-02-01","agv_name":"01","feeding_time":"57"},{"start_times":"2019-02-01","agv_name":"03","feeding_time":"58"},{"start_times":"2019-02-01","agv_name":"06","feeding_time":"35"},{"start_times":"2019-02-01","agv_name":"07","feeding_time":"113"},{"start_times":"2019-02-01","agv_name":"08","feeding_time":"108"},{"start_times":"2019-02-11","agv_name":"01","feeding_time":"60"},{"start_times":"2019-02-11","agv_name":"03","feeding_time":"57"},{"start_times":"2019-02-11","agv_name":"06","feeding_time":"22"},{"start_times":"2019-02-11","agv_name":"07","feeding_time":"68"},{"start_times":"2019-02-11","agv_name":"08","feeding_time":"64"},{"start_times":"2019-02-12","agv_name":"01","feeding_time":"93"},{"start_times":"2019-02-12","agv_name":"03","feeding_time":"93"},{"start_times":"2019-02-12","agv_name":"06","feeding_time":"35"},{"start_times":"2019-02-12","agv_name":"07","feeding_time":"53"},{"start_times":"2019-02-12","agv_name":"08","feeding_time":"55"},{"start_times":"2019-02-13","agv_name":"01","feeding_time":"104"},{"start_times":"2019-02-13","agv_name":"03","feeding_time":"101"},{"start_times":"2019-02-13","agv_name":"06","feeding_time":"43"},{"start_times":"2019-02-14","agv_name":"01","feeding_time":"101"},{"start_times":"2019-02-14","agv_name":"03","feeding_time":"102"},{"start_times":"2019-02-14","agv_name":"06","feeding_time":"56"},{"start_times":"2019-02-14","agv_name":"07","feeding_time":"18"},{"start_times":"2019-02-14","agv_name":"08","feeding_time":"14"},{"start_times":"2019-02-15","agv_name":"01","feeding_time":"108"},{"start_times":"2019-02-15","agv_name":"02","feeding_time":"61"},{"start_times":"2019-02-15","agv_name":"03","feeding_time":"50"},{"start_times":"2019-02-15","agv_name":"06","feeding_time":"52"},{"start_times":"2019-02-15","agv_name":"07","feeding_time":"100"},{"start_times":"2019-02-15","agv_name":"08","feeding_time":"107"},{"start_times":"2019-02-16","agv_name":"01","feeding_time":"103"},{"start_times":"2019-02-16","agv_name":"02","feeding_time":"99"},{"start_times":"2019-02-16","agv_name":"06","feeding_time":"36"},{"start_times":"2019-02-16","agv_name":"07","feeding_time":"226"},{"start_times":"2019-02-16","agv_name":"08","feeding_time":"223"},{"start_times":"2019-02-17","agv_name":"01","feeding_time":"27"},{"start_times":"2019-02-17","agv_name":"02","feeding_time":"28"},{"start_times":"2019-02-17","agv_name":"06","feeding_time":"10"},{"start_times":"2019-02-17","agv_name":"07","feeding_time":"191"},{"start_times":"2019-02-17","agv_name":"08","feeding_time":"221"},{"start_times":"2019-02-18","agv_name":"01","feeding_time":"78"},{"start_times":"2019-02-18","agv_name":"02","feeding_time":"64"},{"start_times":"2019-02-18","agv_name":"06","feeding_time":"27"},{"start_times":"2019-02-18","agv_name":"07","feeding_time":"153"},{"start_times":"2019-02-18","agv_name":"08","feeding_time":"137"},{"start_times":"2019-02-19","agv_name":"01","feeding_time":"94"},{"start_times":"2019-02-19","agv_name":"02","feeding_time":"60"},{"start_times":"2019-02-19","agv_name":"06","feeding_time":"45"},{"start_times":"2019-02-19","agv_name":"07","feeding_time":"161"},{"start_times":"2019-02-19","agv_name":"08","feeding_time":"147"},{"start_times":"2019-02-20","agv_name":"01","feeding_time":"90"},{"start_times":"2019-02-20","agv_name":"02","feeding_time":"61"},{"start_times":"2019-02-20","agv_name":"05","feeding_time":"38"},{"start_times":"2019-02-20","agv_name":"06","feeding_time":"56"},{"start_times":"2019-02-20","agv_name":"07","feeding_time":"112"},{"start_times":"2019-02-20","agv_name":"08","feeding_time":"104"},{"start_times":"2019-02-21","agv_name":"01","feeding_time":"85"},{"start_times":"2019-02-21","agv_name":"02","feeding_time":"89"},{"start_times":"2019-02-21","agv_name":"05","feeding_time":"78"},{"start_times":"2019-02-21","agv_name":"06","feeding_time":"72"},{"start_times":"2019-02-21","agv_name":"07","feeding_time":"74"},{"start_times":"2019-02-21","agv_name":"08","feeding_time":"74"},{"start_times":"2019-02-22","agv_name":"01","feeding_time":"85"},{"start_times":"2019-02-22","agv_name":"02","feeding_time":"88"},{"start_times":"2019-02-22","agv_name":"05","feeding_time":"90"},{"start_times":"2019-02-22","agv_name":"06","feeding_time":"77"},{"start_times":"2019-02-22","agv_name":"07","feeding_time":"187"},{"start_times":"2019-02-22","agv_name":"08","feeding_time":"190"},{"start_times":"2019-02-23","agv_name":"01","feeding_time":"85"},{"start_times":"2019-02-23","agv_name":"02","feeding_time":"88"},{"start_times":"2019-02-23","agv_name":"05","feeding_time":"89"},{"start_times":"2019-02-23","agv_name":"06","feeding_time":"88"},{"start_times":"2019-02-23","agv_name":"07","feeding_time":"197"},{"start_times":"2019-02-23","agv_name":"08","feeding_time":"208"},{"start_times":"2019-02-24","agv_name":"01","feeding_time":"18"},{"start_times":"2019-02-24","agv_name":"02","feeding_time":"17"},{"start_times":"2019-02-24","agv_name":"05","feeding_time":"13"},{"start_times":"2019-02-24","agv_name":"06","feeding_time":"14"},{"start_times":"2019-02-24","agv_name":"07","feeding_time":"26"},{"start_times":"2019-02-24","agv_name":"08","feeding_time":"23"},{"start_times":"2019-02-25","agv_name":"01","feeding_time":"56"},{"start_times":"2019-02-25","agv_name":"02","feeding_time":"55"},{"start_times":"2019-02-25","agv_name":"05","feeding_time":"62"},{"start_times":"2019-02-25","agv_name":"06","feeding_time":"51"},{"start_times":"2019-02-26","agv_name":"01","feeding_time":"108"},{"start_times":"2019-02-26","agv_name":"02","feeding_time":"103"},{"start_times":"2019-02-26","agv_name":"05","feeding_time":"105"},{"start_times":"2019-02-26","agv_name":"06","feeding_time":"91"},{"start_times":"2019-02-26","agv_name":"07","feeding_time":"67"},{"start_times":"2019-02-26","agv_name":"08","feeding_time":"62"},{"start_times":"2019-02-27","agv_name":"01","feeding_time":"96"},{"start_times":"2019-02-27","agv_name":"02","feeding_time":"98"},{"start_times":"2019-02-27","agv_name":"05","feeding_time":"104"},{"start_times":"2019-02-27","agv_name":"06","feeding_time":"96"},{"start_times":"2019-02-27","agv_name":"07","feeding_time":"159"},{"start_times":"2019-02-27","agv_name":"08","feeding_time":"162"},{"start_times":"2019-02-28","agv_name":"01","feeding_time":"96"},{"start_times":"2019-02-28","agv_name":"02","feeding_time":"93"},{"start_times":"2019-02-28","agv_name":"05","feeding_time":"98"},{"start_times":"2019-02-28","agv_name":"06","feeding_time":"81"},{"start_times":"2019-02-28","agv_name":"07","feeding_time":"190"},{"start_times":"2019-02-28","agv_name":"08","feeding_time":"197"},{"start_times":"2019-03-01","agv_name":"01","feeding_time":"101"},{"start_times":"2019-03-01","agv_name":"02","feeding_time":"102"},{"start_times":"2019-03-01","agv_name":"05","feeding_time":"100"},{"start_times":"2019-03-01","agv_name":"06","feeding_time":"104"},{"start_times":"2019-03-01","agv_name":"07","feeding_time":"293"},{"start_times":"2019-03-01","agv_name":"08","feeding_time":"285"},{"start_times":"2019-03-02","agv_name":"01","feeding_time":"62"},{"start_times":"2019-03-02","agv_name":"02","feeding_time":"57"},{"start_times":"2019-03-02","agv_name":"05","feeding_time":"61"},{"start_times":"2019-03-02","agv_name":"06","feeding_time":"55"},{"start_times":"2019-03-02","agv_name":"07","feeding_time":"114"},{"start_times":"2019-03-02","agv_name":"08","feeding_time":"123"},{"start_times":"2019-03-05","agv_name":"01","feeding_time":"96"},{"start_times":"2019-03-05","agv_name":"02","feeding_time":"96"},{"start_times":"2019-03-05","agv_name":"05","feeding_time":"95"},{"start_times":"2019-03-05","agv_name":"06","feeding_time":"86"},{"start_times":"2019-03-05","agv_name":"07","feeding_time":"150"},{"start_times":"2019-03-05","agv_name":"08","feeding_time":"149"},{"start_times":"2019-03-06","agv_name":"01","feeding_time":"92"},{"start_times":"2019-03-06","agv_name":"02","feeding_time":"99"},{"start_times":"2019-03-06","agv_name":"05","feeding_time":"99"},{"start_times":"2019-03-06","agv_name":"06","feeding_time":"95"},{"start_times":"2019-03-06","agv_name":"07","feeding_time":"237"},{"start_times":"2019-03-06","agv_name":"08","feeding_time":"243"},{"start_times":"2019-03-07","agv_name":"01","feeding_time":"109"},{"start_times":"2019-03-07","agv_name":"02","feeding_time":"116"},{"start_times":"2019-03-07","agv_name":"05","feeding_time":"44"},{"start_times":"2019-03-07","agv_name":"06","feeding_time":"88"},{"start_times":"2019-03-07","agv_name":"07","feeding_time":"255"},{"start_times":"2019-03-07","agv_name":"08","feeding_time":"246"},{"start_times":"2019-03-08","agv_name":"01","feeding_time":"107"},{"start_times":"2019-03-08","agv_name":"02","feeding_time":"112"},{"start_times":"2019-03-08","agv_name":"06","feeding_time":"74"},{"start_times":"2019-03-08","agv_name":"07","feeding_time":"258"},{"start_times":"2019-03-08","agv_name":"08","feeding_time":"251"},{"start_times":"2019-03-09","agv_name":"01","feeding_time":"102"},{"start_times":"2019-03-09","agv_name":"02","feeding_time":"101"},{"start_times":"2019-03-09","agv_name":"06","feeding_time":"68"},{"start_times":"2019-03-09","agv_name":"07","feeding_time":"136"},{"start_times":"2019-03-09","agv_name":"08","feeding_time":"120"},{"start_times":"2019-03-10","agv_name":"01","feeding_time":"102"},{"start_times":"2019-03-10","agv_name":"02","feeding_time":"95"},{"start_times":"2019-03-10","agv_name":"05","feeding_time":"17"},{"start_times":"2019-03-10","agv_name":"06","feeding_time":"18"},{"start_times":"2019-03-11","agv_name":"01","feeding_time":"97"},{"start_times":"2019-03-11","agv_name":"02","feeding_time":"75"},{"start_times":"2019-03-11","agv_name":"05","feeding_time":"59"},{"start_times":"2019-03-11","agv_name":"06","feeding_time":"23"},{"start_times":"2019-03-12","agv_name":"01","feeding_time":"94"},{"start_times":"2019-03-12","agv_name":"05","feeding_time":"62"},{"start_times":"2019-03-12","agv_name":"07","feeding_time":"98"},{"start_times":"2019-03-12","agv_name":"08","feeding_time":"90"},{"start_times":"2019-03-13","agv_name":"01","feeding_time":"84"},{"start_times":"2019-03-13","agv_name":"02","feeding_time":"49"},{"start_times":"2019-03-13","agv_name":"05","feeding_time":"62"},{"start_times":"2019-03-13","agv_name":"07","feeding_time":"107"},{"start_times":"2019-03-13","agv_name":"08","feeding_time":"103"},{"start_times":"2019-03-14","agv_name":"01","feeding_time":"117"},{"start_times":"2019-03-14","agv_name":"02","feeding_time":"107"},{"start_times":"2019-03-14","agv_name":"05","feeding_time":"64"},{"start_times":"2019-03-14","agv_name":"06","feeding_time":"30"},{"start_times":"2019-03-14","agv_name":"07","feeding_time":"142"},{"start_times":"2019-03-14","agv_name":"08","feeding_time":"136"},{"start_times":"2019-03-15","agv_name":"01","feeding_time":"110"},{"start_times":"2019-03-15","agv_name":"02","feeding_time":"109"},{"start_times":"2019-03-15","agv_name":"05","feeding_time":"70"},{"start_times":"2019-03-15","agv_name":"06","feeding_time":"69"},{"start_times":"2019-03-15","agv_name":"07","feeding_time":"214"},{"start_times":"2019-03-15","agv_name":"08","feeding_time":"205"},{"start_times":"2019-03-16","agv_name":"01","feeding_time":"96"},{"start_times":"2019-03-16","agv_name":"02","feeding_time":"29"},{"start_times":"2019-03-16","agv_name":"05","feeding_time":"71"},{"start_times":"2019-03-16","agv_name":"06","feeding_time":"66"},{"start_times":"2019-03-16","agv_name":"07","feeding_time":"214"},{"start_times":"2019-03-16","agv_name":"08","feeding_time":"75"},{"start_times":"2019-03-17","agv_name":"01","feeding_time":"75"},{"start_times":"2019-03-17","agv_name":"05","feeding_time":"26"},{"start_times":"2019-03-17","agv_name":"06","feeding_time":"22"},{"start_times":"2019-03-17","agv_name":"07","feeding_time":"181"},{"start_times":"2019-03-17","agv_name":"08","feeding_time":"158"},{"start_times":"2019-03-18","agv_name":"01","feeding_time":"91"},{"start_times":"2019-03-18","agv_name":"05","feeding_time":"27"},{"start_times":"2019-03-18","agv_name":"06","feeding_time":"38"},{"start_times":"2019-03-18","agv_name":"07","feeding_time":"175"},{"start_times":"2019-03-18","agv_name":"08","feeding_time":"198"},{"start_times":"2019-03-19","agv_name":"01","feeding_time":"37"},{"start_times":"2019-03-19","agv_name":"03","feeding_time":"40"},{"start_times":"2019-03-19","agv_name":"05","feeding_time":"27"},{"start_times":"2019-03-19","agv_name":"06","feeding_time":"26"},{"start_times":"2019-03-19","agv_name":"07","feeding_time":"229"},{"start_times":"2019-03-19","agv_name":"08","feeding_time":"224"},{"start_times":"2019-03-20","agv_name":"01","feeding_time":"66"},{"start_times":"2019-03-20","agv_name":"03","feeding_time":"61"},{"start_times":"2019-03-20","agv_name":"05","feeding_time":"50"},{"start_times":"2019-03-20","agv_name":"06","feeding_time":"33"},{"start_times":"2019-03-20","agv_name":"07","feeding_time":"23"},{"start_times":"2019-03-20","agv_name":"08","feeding_time":"27"},{"start_times":"2019-03-23","agv_name":"01","feeding_time":"28"},{"start_times":"2019-03-23","agv_name":"03","feeding_time":"26"},{"start_times":"2019-03-24","agv_name":"01","feeding_time":"46"},{"start_times":"2019-03-24","agv_name":"03","feeding_time":"58"},{"start_times":"2019-03-25","agv_name":"01","feeding_time":"83"},{"start_times":"2019-03-25","agv_name":"03","feeding_time":"70"},{"start_times":"2019-03-26","agv_name":"01","feeding_time":"102"},{"start_times":"2019-03-26","agv_name":"03","feeding_time":"111"},{"start_times":"2019-03-27","agv_name":"01","feeding_time":"69"},{"start_times":"2019-03-27","agv_name":"03","feeding_time":"93"},{"start_times":"2019-03-28","agv_name":"01","feeding_time":"58"},{"start_times":"2019-03-28","agv_name":"03","feeding_time":"55"},{"start_times":"2019-04-03","agv_name":"01","feeding_time":"49"},{"start_times":"2019-04-03","agv_name":"03","feeding_time":"27"},{"start_times":"2019-04-03","agv_name":"07","feeding_time":"70"},{"start_times":"2019-04-03","agv_name":"08","feeding_time":"94"},{"start_times":"2019-04-04","agv_name":"01","feeding_time":"104"},{"start_times":"2019-04-04","agv_name":"03","feeding_time":"93"},{"start_times":"2019-04-04","agv_name":"07","feeding_time":"161"},{"start_times":"2019-04-04","agv_name":"08","feeding_time":"174"},{"start_times":"2019-04-06","agv_name":"01","feeding_time":"78"},{"start_times":"2019-04-06","agv_name":"03","feeding_time":"76"},{"start_times":"2019-04-06","agv_name":"07","feeding_time":"78"},{"start_times":"2019-04-06","agv_name":"08","feeding_time":"84"},{"start_times":"2019-04-07","agv_name":"01","feeding_time":"112"},{"start_times":"2019-04-07","agv_name":"03","feeding_time":"110"},{"start_times":"2019-04-07","agv_name":"07","feeding_time":"257"},{"start_times":"2019-04-07","agv_name":"08","feeding_time":"242"},{"start_times":"2019-04-08","agv_name":"01","feeding_time":"123"},{"start_times":"2019-04-08","agv_name":"03","feeding_time":"122"},{"start_times":"2019-04-08","agv_name":"07","feeding_time":"265"},{"start_times":"2019-04-08","agv_name":"08","feeding_time":"219"},{"start_times":"2019-04-09","agv_name":"01","feeding_time":"119"},{"start_times":"2019-04-09","agv_name":"03","feeding_time":"119"},{"start_times":"2019-04-09","agv_name":"07","feeding_time":"95"},{"start_times":"2019-04-09","agv_name":"08","feeding_time":"87"},{"start_times":"2019-04-10","agv_name":"01","feeding_time":"107"},{"start_times":"2019-04-10","agv_name":"03","feeding_time":"104"},{"start_times":"2019-04-10","agv_name":"07","feeding_time":"134"},{"start_times":"2019-04-10","agv_name":"08","feeding_time":"118"},{"start_times":"2019-04-11","agv_name":"01","feeding_time":"103"},{"start_times":"2019-04-11","agv_name":"03","feeding_time":"103"},{"start_times":"2019-04-11","agv_name":"07","feeding_time":"221"},{"start_times":"2019-04-11","agv_name":"08","feeding_time":"228"},{"start_times":"2019-04-12","agv_name":"01","feeding_time":"108"},{"start_times":"2019-04-12","agv_name":"03","feeding_time":"103"},{"start_times":"2019-04-12","agv_name":"07","feeding_time":"203"},{"start_times":"2019-04-12","agv_name":"08","feeding_time":"198"},{"start_times":"2019-04-13","agv_name":"01","feeding_time":"122"},{"start_times":"2019-04-13","agv_name":"03","feeding_time":"116"},{"start_times":"2019-04-13","agv_name":"05","feeding_time":"51"},{"start_times":"2019-04-13","agv_name":"06","feeding_time":"81"},{"start_times":"2019-04-13","agv_name":"07","feeding_time":"200"},{"start_times":"2019-04-13","agv_name":"08","feeding_time":"220"},{"start_times":"2019-04-14","agv_name":"01","feeding_time":"107"},{"start_times":"2019-04-14","agv_name":"03","feeding_time":"113"},{"start_times":"2019-04-14","agv_name":"05","feeding_time":"24"},{"start_times":"2019-04-14","agv_name":"06","feeding_time":"25"},{"start_times":"2019-04-14","agv_name":"07","feeding_time":"228"},{"start_times":"2019-04-14","agv_name":"08","feeding_time":"212"},{"start_times":"2019-04-15","agv_name":"01","feeding_time":"117"},{"start_times":"2019-04-15","agv_name":"03","feeding_time":"113"},{"start_times":"2019-04-15","agv_name":"05","feeding_time":"54"},{"start_times":"2019-04-15","agv_name":"06","feeding_time":"51"},{"start_times":"2019-04-15","agv_name":"07","feeding_time":"243"},{"start_times":"2019-04-15","agv_name":"08","feeding_time":"256"},{"start_times":"2019-04-16","agv_name":"01","feeding_time":"118"},{"start_times":"2019-04-16","agv_name":"03","feeding_time":"109"},{"start_times":"2019-04-16","agv_name":"05","feeding_time":"88"},{"start_times":"2019-04-16","agv_name":"06","feeding_time":"80"},{"start_times":"2019-04-16","agv_name":"07","feeding_time":"237"},{"start_times":"2019-04-16","agv_name":"08","feeding_time":"230"},{"start_times":"2019-04-17","agv_name":"01","feeding_time":"112"},{"start_times":"2019-04-17","agv_name":"03","feeding_time":"112"},{"start_times":"2019-04-17","agv_name":"05","feeding_time":"73"},{"start_times":"2019-04-17","agv_name":"06","feeding_time":"82"},{"start_times":"2019-04-17","agv_name":"07","feeding_time":"125"},{"start_times":"2019-04-17","agv_name":"08","feeding_time":"164"},{"start_times":"2019-04-18","agv_name":"01","feeding_time":"120"},{"start_times":"2019-04-18","agv_name":"03","feeding_time":"125"},{"start_times":"2019-04-18","agv_name":"05","feeding_time":"89"},{"start_times":"2019-04-18","agv_name":"06","feeding_time":"86"},{"start_times":"2019-04-18","agv_name":"07","feeding_time":"241"},{"start_times":"2019-04-18","agv_name":"08","feeding_time":"126"},{"start_times":"2019-04-19","agv_name":"01","feeding_time":"114"},{"start_times":"2019-04-19","agv_name":"03","feeding_time":"108"},{"start_times":"2019-04-19","agv_name":"05","feeding_time":"88"},{"start_times":"2019-04-19","agv_name":"06","feeding_time":"91"},{"start_times":"2019-04-19","agv_name":"07","feeding_time":"364"},{"start_times":"2019-04-19","agv_name":"08","feeding_time":"177"},{"start_times":"2019-04-20","agv_name":"01","feeding_time":"128"},{"start_times":"2019-04-20","agv_name":"03","feeding_time":"118"},{"start_times":"2019-04-20","agv_name":"05","feeding_time":"99"},{"start_times":"2019-04-20","agv_name":"06","feeding_time":"94"},{"start_times":"2019-04-20","agv_name":"07","feeding_time":"397"},{"start_times":"2019-04-20","agv_name":"08","feeding_time":"107"},{"start_times":"2019-04-21","agv_name":"01","feeding_time":"120"},{"start_times":"2019-04-21","agv_name":"03","feeding_time":"119"},{"start_times":"2019-04-21","agv_name":"05","feeding_time":"33"},{"start_times":"2019-04-21","agv_name":"06","feeding_time":"28"},{"start_times":"2019-04-21","agv_name":"07","feeding_time":"416"},{"start_times":"2019-04-21","agv_name":"08","feeding_time":"105"},{"start_times":"2019-04-22","agv_name":"01","feeding_time":"123"},{"start_times":"2019-04-22","agv_name":"03","feeding_time":"114"},{"start_times":"2019-04-22","agv_name":"05","feeding_time":"73"},{"start_times":"2019-04-22","agv_name":"06","feeding_time":"65"},{"start_times":"2019-04-22","agv_name":"07","feeding_time":"357"},{"start_times":"2019-04-22","agv_name":"08","feeding_time":"140"},{"start_times":"2019-04-23","agv_name":"01","feeding_time":"123"},{"start_times":"2019-04-23","agv_name":"03","feeding_time":"71"},{"start_times":"2019-04-23","agv_name":"05","feeding_time":"90"},{"start_times":"2019-04-23","agv_name":"06","feeding_time":"93"},{"start_times":"2019-04-23","agv_name":"07","feeding_time":"364"},{"start_times":"2019-04-23","agv_name":"08","feeding_time":"128"},{"start_times":"2019-04-24","agv_name":"01","feeding_time":"127"},{"start_times":"2019-04-24","agv_name":"05","feeding_time":"92"},{"start_times":"2019-04-24","agv_name":"06","feeding_time":"88"},{"start_times":"2019-04-24","agv_name":"07","feeding_time":"346"},{"start_times":"2019-04-24","agv_name":"08","feeding_time":"153"},{"start_times":"2019-04-25","agv_name":"01","feeding_time":"111"},{"start_times":"2019-04-25","agv_name":"03","feeding_time":"30"},{"start_times":"2019-04-25","agv_name":"05","feeding_time":"73"},{"start_times":"2019-04-25","agv_name":"06","feeding_time":"57"},{"start_times":"2019-04-25","agv_name":"07","feeding_time":"250"},{"start_times":"2019-04-25","agv_name":"08","feeding_time":"136"},{"start_times":"2019-04-26","agv_name":"01","feeding_time":"89"},{"start_times":"2019-04-26","agv_name":"03","feeding_time":"78"},{"start_times":"2019-04-26","agv_name":"05","feeding_time":"85"},{"start_times":"2019-04-26","agv_name":"06","feeding_time":"79"},{"start_times":"2019-04-26","agv_name":"07","feeding_time":"368"},{"start_times":"2019-04-26","agv_name":"08","feeding_time":"192"},{"start_times":"2019-04-27","agv_name":"01","feeding_time":"104"},{"start_times":"2019-04-27","agv_name":"03","feeding_time":"97"},{"start_times":"2019-04-27","agv_name":"05","feeding_time":"82"},{"start_times":"2019-04-27","agv_name":"06","feeding_time":"79"},{"start_times":"2019-04-27","agv_name":"07","feeding_time":"376"},{"start_times":"2019-04-27","agv_name":"08","feeding_time":"228"},{"start_times":"2019-04-28","agv_name":"01","feeding_time":"101"},{"start_times":"2019-04-28","agv_name":"03","feeding_time":"94"},{"start_times":"2019-04-28","agv_name":"05","feeding_time":"22"},{"start_times":"2019-04-28","agv_name":"06","feeding_time":"20"},{"start_times":"2019-04-28","agv_name":"07","feeding_time":"358"},{"start_times":"2019-04-28","agv_name":"08","feeding_time":"210"},{"start_times":"2019-04-29","agv_name":"01","feeding_time":"94"},{"start_times":"2019-04-29","agv_name":"03","feeding_time":"113"},{"start_times":"2019-04-29","agv_name":"05","feeding_time":"47"},{"start_times":"2019-04-29","agv_name":"06","feeding_time":"46"},{"start_times":"2019-04-29","agv_name":"07","feeding_time":"367"},{"start_times":"2019-04-29","agv_name":"08","feeding_time":"231"},{"start_times":"2019-04-30","agv_name":"01","feeding_time":"88"},{"start_times":"2019-04-30","agv_name":"03","feeding_time":"87"},{"start_times":"2019-04-30","agv_name":"05","feeding_time":"66"},{"start_times":"2019-04-30","agv_name":"06","feeding_time":"69"},{"start_times":"2019-04-30","agv_name":"07","feeding_time":"285"},{"start_times":"2019-04-30","agv_name":"08","feeding_time":"84"},{"start_times":"2019-05-02","agv_name":"01","feeding_time":"51"},{"start_times":"2019-05-02","agv_name":"03","feeding_time":"46"},{"start_times":"2019-05-02","agv_name":"05","feeding_time":"63"},{"start_times":"2019-05-02","agv_name":"06","feeding_time":"52"},{"start_times":"2019-05-02","agv_name":"07","feeding_time":"108"},{"start_times":"2019-05-02","agv_name":"08","feeding_time":"43"},{"start_times":"2019-05-03","agv_name":"01","feeding_time":"98"},{"start_times":"2019-05-03","agv_name":"02","feeding_time":"98"},{"start_times":"2019-05-03","agv_name":"03","feeding_time":"108"},{"start_times":"2019-05-03","agv_name":"05","feeding_time":"73"},{"start_times":"2019-05-03","agv_name":"06","feeding_time":"80"},{"start_times":"2019-05-03","agv_name":"07","feeding_time":"415"},{"start_times":"2019-05-03","agv_name":"08","feeding_time":"141"},{"start_times":"2019-05-04","agv_name":"01","feeding_time":"92"},{"start_times":"2019-05-04","agv_name":"02","feeding_time":"93"},{"start_times":"2019-05-04","agv_name":"03","feeding_time":"106"},{"start_times":"2019-05-04","agv_name":"05","feeding_time":"78"},{"start_times":"2019-05-04","agv_name":"06","feeding_time":"83"},{"start_times":"2019-05-04","agv_name":"07","feeding_time":"384"},{"start_times":"2019-05-04","agv_name":"08","feeding_time":"214"},{"start_times":"2019-05-05","agv_name":"01","feeding_time":"98"},{"start_times":"2019-05-05","agv_name":"02","feeding_time":"101"},{"start_times":"2019-05-05","agv_name":"03","feeding_time":"109"},{"start_times":"2019-05-05","agv_name":"05","feeding_time":"32"},{"start_times":"2019-05-05","agv_name":"06","feeding_time":"30"},{"start_times":"2019-05-05","agv_name":"07","feeding_time":"372"},{"start_times":"2019-05-05","agv_name":"08","feeding_time":"180"},{"start_times":"2019-05-06","agv_name":"01","feeding_time":"91"},{"start_times":"2019-05-06","agv_name":"02","feeding_time":"91"},{"start_times":"2019-05-06","agv_name":"03","feeding_time":"89"},{"start_times":"2019-05-06","agv_name":"05","feeding_time":"54"},{"start_times":"2019-05-06","agv_name":"06","feeding_time":"59"},{"start_times":"2019-05-06","agv_name":"07","feeding_time":"346"},{"start_times":"2019-05-06","agv_name":"08","feeding_time":"192"},{"start_times":"2019-05-07","agv_name":"01","feeding_time":"92"},{"start_times":"2019-05-07","agv_name":"02","feeding_time":"88"},{"start_times":"2019-05-07","agv_name":"03","feeding_time":"90"},{"start_times":"2019-05-07","agv_name":"05","feeding_time":"86"},{"start_times":"2019-05-07","agv_name":"06","feeding_time":"86"},{"start_times":"2019-05-07","agv_name":"07","feeding_time":"339"},{"start_times":"2019-05-07","agv_name":"08","feeding_time":"243"},{"start_times":"2019-05-08","agv_name":"01","feeding_time":"97"},{"start_times":"2019-05-08","agv_name":"02","feeding_time":"97"},{"start_times":"2019-05-08","agv_name":"03","feeding_time":"62"},{"start_times":"2019-05-08","agv_name":"05","feeding_time":"73"},{"start_times":"2019-05-08","agv_name":"06","feeding_time":"77"},{"start_times":"2019-05-08","agv_name":"07","feeding_time":"263"},{"start_times":"2019-05-08","agv_name":"08","feeding_time":"218"},{"start_times":"2019-05-09","agv_name":"01","feeding_time":"97"},{"start_times":"2019-05-09","agv_name":"02","feeding_time":"82"},{"start_times":"2019-05-09","agv_name":"03","feeding_time":"91"},{"start_times":"2019-05-09","agv_name":"05","feeding_time":"83"},{"start_times":"2019-05-09","agv_name":"06","feeding_time":"81"},{"start_times":"2019-05-09","agv_name":"07","feeding_time":"230"},{"start_times":"2019-05-09","agv_name":"08","feeding_time":"213"},{"start_times":"2019-05-10","agv_name":"01","feeding_time":"101"},{"start_times":"2019-05-10","agv_name":"02","feeding_time":"102"},{"start_times":"2019-05-10","agv_name":"03","feeding_time":"102"},{"start_times":"2019-05-10","agv_name":"05","feeding_time":"74"},{"start_times":"2019-05-10","agv_name":"06","feeding_time":"71"},{"start_times":"2019-05-10","agv_name":"07","feeding_time":"228"},{"start_times":"2019-05-10","agv_name":"08","feeding_time":"190"},{"start_times":"2019-05-11","agv_name":"01","feeding_time":"96"},{"start_times":"2019-05-11","agv_name":"02","feeding_time":"98"},{"start_times":"2019-05-11","agv_name":"03","feeding_time":"95"},{"start_times":"2019-05-11","agv_name":"05","feeding_time":"77"},{"start_times":"2019-05-11","agv_name":"06","feeding_time":"77"},{"start_times":"2019-05-11","agv_name":"07","feeding_time":"204"},{"start_times":"2019-05-11","agv_name":"08","feeding_time":"238"},{"start_times":"2019-05-12","agv_name":"01","feeding_time":"92"},{"start_times":"2019-05-12","agv_name":"02","feeding_time":"91"},{"start_times":"2019-05-12","agv_name":"03","feeding_time":"87"},{"start_times":"2019-05-12","agv_name":"05","feeding_time":"59"},{"start_times":"2019-05-12","agv_name":"06","feeding_time":"55"},{"start_times":"2019-05-12","agv_name":"07","feeding_time":"226"},{"start_times":"2019-05-12","agv_name":"08","feeding_time":"239"},{"start_times":"2019-05-13","agv_name":"01","feeding_time":"95"},{"start_times":"2019-05-13","agv_name":"02","feeding_time":"88"},{"start_times":"2019-05-13","agv_name":"03","feeding_time":"91"},{"start_times":"2019-05-13","agv_name":"05","feeding_time":"67"},{"start_times":"2019-05-13","agv_name":"06","feeding_time":"72"},{"start_times":"2019-05-13","agv_name":"07","feeding_time":"219"},{"start_times":"2019-05-13","agv_name":"08","feeding_time":"211"},{"start_times":"2019-05-14","agv_name":"02","feeding_time":"30"},{"start_times":"2019-05-14","agv_name":"03","feeding_time":"29"},{"start_times":"2019-05-14","agv_name":"05","feeding_time":"11"},{"start_times":"2019-05-14","agv_name":"06","feeding_time":"30"},{"start_times":"2019-05-14","agv_name":"07","feeding_time":"228"},{"start_times":"2019-05-14","agv_name":"08","feeding_time":"243"},{"start_times":"2019-05-15","agv_name":"02","feeding_time":"92"},{"start_times":"2019-05-15","agv_name":"03","feeding_time":"84"},{"start_times":"2019-05-15","agv_name":"05","feeding_time":"67"},{"start_times":"2019-05-15","agv_name":"06","feeding_time":"97"},{"start_times":"2019-05-15","agv_name":"07","feeding_time":"220"},{"start_times":"2019-05-15","agv_name":"08","feeding_time":"202"},{"start_times":"2019-05-16","agv_name":"02","feeding_time":"74"},{"start_times":"2019-05-16","agv_name":"03","feeding_time":"86"},{"start_times":"2019-05-16","agv_name":"05","feeding_time":"55"},{"start_times":"2019-05-16","agv_name":"06","feeding_time":"74"},{"start_times":"2019-05-16","agv_name":"07","feeding_time":"142"},{"start_times":"2019-05-16","agv_name":"08","feeding_time":"152"},{"start_times":"2019-05-17","agv_name":"02","feeding_time":"99"},{"start_times":"2019-05-17","agv_name":"03","feeding_time":"93"},{"start_times":"2019-05-17","agv_name":"05","feeding_time":"54"},{"start_times":"2019-05-17","agv_name":"06","feeding_time":"73"},{"start_times":"2019-05-17","agv_name":"07","feeding_time":"198"},{"start_times":"2019-05-17","agv_name":"08","feeding_time":"147"},{"start_times":"2019-05-18","agv_name":"02","feeding_time":"95"},{"start_times":"2019-05-18","agv_name":"03","feeding_time":"93"},{"start_times":"2019-05-18","agv_name":"05","feeding_time":"82"},{"start_times":"2019-05-18","agv_name":"06","feeding_time":"83"},{"start_times":"2019-05-18","agv_name":"07","feeding_time":"259"},{"start_times":"2019-05-18","agv_name":"08","feeding_time":"249"},{"start_times":"2019-05-19","agv_name":"02","feeding_time":"99"},{"start_times":"2019-05-19","agv_name":"03","feeding_time":"95"},{"start_times":"2019-05-19","agv_name":"05","feeding_time":"76"},{"start_times":"2019-05-19","agv_name":"06","feeding_time":"73"},{"start_times":"2019-05-19","agv_name":"07","feeding_time":"235"},{"start_times":"2019-05-19","agv_name":"08","feeding_time":"261"},{"start_times":"2019-05-20","agv_name":"02","feeding_time":"84"},{"start_times":"2019-05-20","agv_name":"03","feeding_time":"83"},{"start_times":"2019-05-20","agv_name":"05","feeding_time":"61"},{"start_times":"2019-05-20","agv_name":"06","feeding_time":"86"},{"start_times":"2019-05-20","agv_name":"07","feeding_time":"243"},{"start_times":"2019-05-20","agv_name":"08","feeding_time":"190"},{"start_times":"2019-05-21","agv_name":"02","feeding_time":"99"},{"start_times":"2019-05-21","agv_name":"03","feeding_time":"89"},{"start_times":"2019-05-21","agv_name":"05","feeding_time":"52"},{"start_times":"2019-05-21","agv_name":"06","feeding_time":"79"},{"start_times":"2019-05-21","agv_name":"07","feeding_time":"256"},{"start_times":"2019-05-21","agv_name":"08","feeding_time":"222"},{"start_times":"2019-05-22","agv_name":"02","feeding_time":"68"},{"start_times":"2019-05-22","agv_name":"03","feeding_time":"68"},{"start_times":"2019-05-22","agv_name":"05","feeding_time":"51"},{"start_times":"2019-05-22","agv_name":"06","feeding_time":"57"},{"start_times":"2019-05-22","agv_name":"07","feeding_time":"181"},{"start_times":"2019-05-22","agv_name":"08","feeding_time":"166"},{"id":"47d5f79f2bdb39fae7e81d7828db267d"}];
			
			
		 	 work_date_01 = [];
		 	for(var i=0;i<message.length;i++){
		 	if(message[i].agv_name==="02"){
		 	eval('work_date_01').push(message[i].start_times)}
		 	}
		 	 zkh = [];
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
	    kk = [];
	    colors = [];
	    legends = [];
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
//		 	  }
		 	  
		 	  
		 	       h1 = kk;
		 	       h2 = work_date_01;
		 	       h3 = legends;
		 	       h5 = colors;
		 	       
		 	 }
//		 	});	
//	       }
//		 });
		 
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
     
     
     