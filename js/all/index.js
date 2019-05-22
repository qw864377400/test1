
	var machine_name_list = [];
 		var machine_name_id = [];
 		var images_div = [];
 		var image_span = [];
$.ajax({
			type : "post",
			async : false, 
			url: 'http://10.167.194.139:8080/Whole_ApiA/select_hh',
		    //url : "TestServletsTableau", 
			dataType : "json",
			data:{
				'orcl':'2',
				'table_name':'agv_ip',
				'sql':''
				},
		 	success :(result) => {
		 		let option = '';
//		 		console.log(result);
		 	    for(var i = 0; i < result.length; i++ ){
		 	    	
		  		   this.eval("var address_0"+(i+1));
		  		   this.eval("var route_state_0"+(i+1));
		  		   this.eval("var route_state_old_0"+(i+1));
		  		   this.eval("var xx_0"+(i+1));
		  		   this.eval("var yy_0"+(i+1));
		  		   this.eval("var agv_positions_0"+(i+1));
		  		   this.eval("var aa"+i+' = 0');
		  		   this.eval("var old_time_0"+(i+1)+' = 0');
		  		   this.eval("var agv_positions_old_0"+(i+1))
		  		   this.eval("var point1"+i+" = [] ,point"+i+'= [],add_nums'+i+' = []');
			  		 machine_name_list.push('0'+(i+1));
			  		 machine_name_id.push('img'+(i+1));
			  		 images_div.push('images_agv_name_'+(i+1));
			  		image_span.push('image_span_'+(i+1));
			  		option = option + '<option value="'+result[i].agv_name+'">'+result[i].agv_name+'</option>'
			 	    		} 
			 	     $('#select01').html(option);
			 	     let image_divs = '';
			 	    for(var i=0;i<result.length;i++){
			 	    	// '<canvas id="myCanvas'+i+'" width="1920" height="700" style="position: absolute;"></canvas> <div style="width: 100%;height: 100%;position:absolute;" id="images_div_'+(i+1)+'"> '+
				 	    //</div>
			 	    image_divs =  image_divs +' <div id="images_agv_name_'+(i+1)+'" style="position:absolute;"> '+
			 	    ' <img alt="" src="imagess/green_right.png" class="img-circle" id="img'+(i+1)+'" style="position: absolute;" title="sdasdsa">'+
			 	    '<span style="color: #ffffff;position: absolute;font-size: 30px;font-weight: bold;" id="image_span_'+(i+1)+'">'+(i+1)+'</span> '+
			 	    '</div>';
			 	    }
			 	    $('#images_div_11').append(image_divs);
		 	    
				 	}
		  		});

     var delete_num = 0;
     function key_point(state,old,site,address){
    	 var site_S =[];
    	 if(address===state){
    		 return 0;
    	 }
    	 
    	  $.ajax({
     			type : "post",
     			async : false, 
     			url : "select_RouteResetPoint",
     			data:{
     			'site':site
     			}, 
     			dataType : "json",
     		 	success : function(result) {
     		 	  site_S = result[0].resetPoint.split(",");
     		 	}});
    	 for(var i = 0 ; i < site_S.length ; i++){
    		 if(state.indexOf(site_S[i])!==-1)
    			 {
    			 delete_num =  1;
    			 return delete_num;
    			 }
    				 
    	 }
    	 if(state.indexOf("13")!=-1){delete_num = 0;eval("aa"+old+"= 0")}
    	 delete_num = 0;
    	 return delete_num;
     }

//返回地標圖標轉向

   function select_images_to(crru,to_turn_to)
   {
	   let state_information = false;
	    var sql = 'select site from car_steering where to_turn_to = "'+to_turn_to+'"';
	    $.ajaxSettings.async = false;
	     $.post("http://10.167.194.139:8080/Whole_ApiA/select_hh",{
	        'orcl':'2','table_name':'car_steering','sql':sql},
	        function(data,status){
	        var data_state = data[0].site.split(',');
	        for(var i =0;i<data_state.length;i++){
	         if(data_state[i] === crru){state_information =  true;}
	        }
	      });
	     $.ajaxSettings.async = true;
	     return state_information;
    }

     //前启动
     function Pre_start()
     {
      $.ajax({
			type : "post",
			async : true, 
			url : "Pre_start?machine_name="+$("#select01").val()+"", 
		    //url : "TestServletsTableau", 
			dataType : "json",
	
		 	success : function(result) {
		 		if(result==1)
			 	{
			 	alert('设置成功！');
			 	}
			 	else
			 	{
			 	alert('设置失败');
			 	}
		 	}
            });
     
     }
     
     function state_1(state,direction,images,crr,span)
     {
    	 let image_state ;
    	 var img = document.getElementById(images);
//    	 let image_span =  document.getElementById('image_span'+span);
    	 if(state.indexOf("运行")!=-1){image_state = 1;}
    	 else if(state.indexOf("防撞")!=-1||state.indexOf("出轨")!=-1){image_state = 0;}
    	 else{image_state = 2}
    	 let sql = "select * from agv_image_choice where image_state="+image_state+" and direction ="+"'"+direction+"'"+" and graphic_number = 1 ";
    	
    	 console.log(sql)
    	 $.ajax({
 			type : "post",
 			async : false, 
 			url: 'http://10.167.194.139:8080/Whole_ApiA/select_hh',
			data:{
			'orcl':'2',
			'table_name':' ',
			'sql': sql
			},
 			dataType : "json",
 	
 		 	success : function(result) {
 		 		
 		 		let font_po = result[0].font_position.split(',');
 		 		$('#image_span_'+span).css({"font-size":result[0].font_size+"px","left":font_po[0]+'px',"top":font_po[1]+'px'});
 		 		img.setAttribute("src",result[0].images_address); 
 		 		
 		 	}});
     }
     
     function zhandian(images,crr,agv_positions,targets,state)
     {
    	 var img = document.getElementById(images);
    	 
	    	if(select_images_to(agv_positions,'right'))
	    		{
	    		state_1(state,"right",images,crr);
	    		}
	    	else if(targets!=0&&select_images_to(agv_positions,'bottom'))
	    		{
	    		state_1(state,"bottom",images,crr);
	    		}
	    	 else if(targets==0&&select_images_to(agv_positions,'top'))
	    		{
	    		state_1(state,"top",images,crr);
	    		}
	    	else if(select_images_to(agv_positions,'left'))
	    		{
	    		state_1(state,"left",images,crr);
	    		}
	    	else if(select_images_to(agv_positions,'bottom'))
	    		{
	    		state_1(state,"bottom",images,crr);
	    		}
     		}
     
     
   //后启动
     function Back_start()
     {
      $.ajax({
			type : "post",
			async : true, 
			url : "Back_start?machine_name="+$("#select01").val()+"", 
		    //url : "TestServletsTableau", 
			dataType : "json",
	
		 	success : function(result) {
		 		if(result==1)
			 	{
			 	alert('设置成功！');
			 	}
			 	else
			 	{
			 	alert('设置失败');
			 	}
		 	}
            });
     
     }
   //查询
     function query()
     {
      $.ajax({
			type : "post",
			async : true, 
			url : "query?machine_name="+$("#select01").val()+"", 
		    //url : "TestServletsTableau", 
			dataType : "json",
	
		 	success : function(result) {
		 		if(result==1)
			 	{
			 	alert('设置成功！');
			 	}
			 	else
			 	{
			 	alert('设置失败');
			 	}
		 	}
            });
     
     }
   //停止
     function Stop_it()
     {
      $.ajax({
			type : "post",
			async : true, 
			url : "Stop_it?machine_name="+$("#select01").val()+"", 
		    //url : "TestServletsTableau", 
			dataType : "json",
	
		 	success : function(result) {
		 		if(result==1)
			 	{
			 	alert('设置成功！');
			 	}
			 	else
			 	{
			 	alert('设置失败');
			 	}
		 	}
            });
     
     }
   //自动报站
     function Automatic_station()
     {
      $.ajax({
			type : "post",
			async : true, 
			url : "Automatic_station?machine_name="+$("#select01").val()+"", 
		    //url : "TestServletsTableau", 
			dataType : "json",
		 	success : function(result) {
		 		if(result==1)
			 	{
			 	alert('设置成功！');
			 	}
			 	else
			 	{
			 	alert('设置失败');
			 	}
		 	}
            });
     
     }

   //消除
     function Eliminate()
     {
      var machine_name = ['text1','text2','text3','text4','text5','text6','text7','text8','text9','text10','text11','text12'];
      
      for(var i=0;i<machine_name.length;i++)
      {
      var obj = document.getElementById(machine_name[i]);
      obj.value = "";
      }
     
       $.ajax({
			type : "post",
			async : true, 
			url : "Eliminate?machine_name="+$("#select01").val()+"", 
		    //url : "TestServletsTableau", 
			dataType : "json",
	
		 	success : function(result) {
		 		if(result==1)
			 	{
			 	alert('设置成功！');
			 	}
			 	else
			 	{
			 	alert('设置失败');
			 	}
		 	}
            });
     }
     //eval字符串变变量名
     var xx = 0,yy = 0,z,agv_gps,states,agv_positions,targets,agv_positions_04,address,old_time,state_agv_name,hh,speed;
 	     agv_x_y();
      function agv_x_y()
      { 
    	  //alert($("#select01").val());  //undefined0
    	  
    	  if($("#select01").val()==undefined)
    		  {
    		  machine = "01"
    		  }
    	  else
    		  {
    		  machine = $("#select01").val();
    		  
    		  }
    
  for(var ghg=0;ghg<machine_name_list.length;ghg++)
	 {
      $.ajax({
			type : "post",
			async : false, 
			url : "state?machine_name="+machine_name_list[ghg]+"", 
		    //url : "TestServletsTableau", 
			dataType : "json",
	
		 	success : function(result) {
		 		for(var i=0;i<result.length;i++)
		 		{
	 			if(machine == (ghg+1))
	 				{
			 	    document.getElementById("state").innerHTML = result[i].state;
			 	    document.getElementById("voltage").innerHTML = "當前電壓 &nbsp;&nbsp;&nbsp;"+result[i].voltage+"&nbsp;V";
			 	    document.getElementById("speed").innerHTML = "當前速度&nbsp;&nbsp;&nbsp;"+result[i].speed+"&nbsp;cm/s";
			 	    document.getElementById("agv_position").innerHTML = "地标卡： &nbsp;&nbsp;&nbsp;"+result[i].agv_position;
			 	    document.getElementById("target").innerHTML = "目标站点： &nbsp;&nbsp;&nbsp;"+result[i].target;
	 				}
	 			state = result[i].state;   //状态
		 	   	agv_positions = result[i].agv_position;
		 	    //每台AGV当前地标
		 		eval("agv_positions_"+machine_name_list[ghg]+'= "'+result[i].agv_position+'"');
		 	   	targets = result[i].target; //目标地标
		 	   	speed = result[i].speed;
		 		}
		 		$('#img'+(ghg+1)).attr('title',"AGV_NAME："+machine_name_list[ghg]+"\n当前站点："+agv_positions+"\n目标站点："+targets)
//		    console.log("AGV_NEW："+machine_name_list[ghg]+"--当前站点："+agv_positions+'--'+"目标站点："+targets);	
		 	
		 	
      $.ajax({
			type : "post",
			async : false, 
			url : "select_x_y?machine_name="+machine_name_list[ghg]+"", 
			dataType : "json",
			
		 	success : function(result) {
		 		
		 	for(var i=0;i<result.length;i++)
		 	{
				 	   var img = document.getElementById(machine_name_id[ghg]);
				 	   
				 	  var img_div = document.getElementById(images_div[ghg]);
				       img.style.width = "35px";
				       img.style.height = "35px";
				    
				       xx = eval("xx_"+machine_name_list[ghg]);
				       yy = eval("yy_"+machine_name_list[ghg]);
				       address = eval("address_"+machine_name_list[ghg]);
				        //一號車圖標轉向
//				       zhandian(machine_name_id[ghg],machine_name_list[ghg],agv_positions,targets,state);
				  
				        if(agv_positions === address)
				        	{
				        	let vb = 0;
				        	let Route_start = 0;
			            const site_x = result[i].x-15;
				        const site_y = result[i].y-14;
				       //各AGV的状态信息，具体位置	
		 			   	eval("address_"+machine_name_list[ghg]+'= "'+agv_positions+'"'); 
		 			   	eval("xx_"+machine_name_list[ghg]+' = "'+site_x+'"'); 
		 				eval("yy_"+machine_name_list[ghg]+'= "'+site_y+'"'); 
//			    		 vb = key_point(agv_positions,ghg,targets,address);
			    		
				    	
				    	 agv_positions_04 = eval("agv_positions_"+$('#select01').val()); 
				    	 old_time = eval("old_time_"+$('#select01').val()); 
				    	 
				    	 
				    	  if(agv_positions_04==="29"||agv_positions_04==="30"||agv_positions_04==="5"){
//				    		  $('#Use').html('本次送料所用時間：<span id="use_span">待機中</span>');
				    		 $('#use_span').css('color','red');
//				    		 $('#Leftover').html('本次送料所剩時間：<span id="Leftover_span">待機中</span>');
		 			    		 $('#Leftover_span').css('color','red');
		 			    	  }else{
		 			    	 const time_new = new Date().getTime();
//		 			    	  $('#Use').html('本次送料所用時間：<span id="use_span">'+parseInt((time_new-old_time)/1000)+'S</span>');
				    		 $('#use_span').css('color','red');
//				    		 $('#Leftover').html('本次送料所剩時間：<span id="Leftover_span">'+(180-parseInt((time_new-old_time)/1000))+'S</span>');
				    		 $('#Leftover_span').css('color','red');
		 			    	  }
				    	  
				    	  var name = pix_distance(agv_positions,targets,state,xx,yy,machine_name_list[ghg]).split(",");
		 			    	 
		 			    	eval("route_state_"+machine_name_list[ghg]+'= "'+name[2]+'"');
		 			    	
		 			    	
		 			    	if(eval("agv_positions_"+machine_name_list[ghg])==="74",eval("agv_positions_"+machine_name_list[ghg])==="5",
		 			    			eval("agv_positions_"+machine_name_list[ghg])==="29",eval("agv_positions_"+machine_name_list[ghg])==="30"
		 			    	    ){
		 			    		Route_start = 0;
		 			    	}else{	Route_start = 1;}
		 			    	
//		 			          console.log('Route_start = '+Route_start);
		 			 
		 			    
//		 			    	console.log("Route_start-->"+Route_start);
//		 			    	let rountes = test({'xx':(parseInt(xx)+15),'yy':(parseInt(yy)+14)},vb,agv_positions,ghg,"#0bff0b",targets,Route_start);
//		 			    	console.log(rountes);
		 			    	vb = route_cutting(xx,yy,agv_positions,'');
//		 			     	test({'xx':(parseInt(xx)+15),'yy':(parseInt(yy)+14)},vb,agv_positions,ghg,"#0bff0b",targets,Route_start);
		 			     	state_1(state,name[2],machine_name_id[ghg],machine_name_list[ghg],(ghg+1));
		 			    	 
		 			    	 
		 			    	 let to_turn = name[1].split(".");
		 			    	 if(to_turn[0]=== "-y"){
		 			    		img_div.style.left = xx+'px';
		 			    		img_div.style.top = ((parseFloat(yy))-parseFloat(name[0]))+'px';
		 			             eval("xx_"+machine_name_list[ghg]+"='"+xx+"'"); 
		 			             eval("yy_"+machine_name_list[ghg]+"='"+((parseFloat(yy))-parseFloat(name[0]))+"'"); 
		 			    	 }else if(to_turn[0] === "x"){
//		 			    		 console.log('-------------------------------------OK');
		 			    		img_div.style.left =(parseFloat(xx)+parseFloat(name[0]))+'px';
		 			    		img_div.style.top = (parseFloat(yy))+'px';
		 			             eval("xx_"+machine_name_list[ghg]+"='"+(parseFloat(xx)+parseFloat(name[0]))+"'"); 
		 			             eval("yy_"+machine_name_list[ghg]+"='"+(parseFloat(yy))+"'");  
		 			    	 }else if(to_turn[0] === "-x"){
		 			    		img_div.style.left =(parseFloat(xx)-parseFloat(name[0]))+'px';
		 			    		img_div.style.top = (parseFloat(yy))+'px';
		 			             eval("xx_"+machine_name_list[ghg]+"='"+(parseFloat(xx)-parseFloat(name[0]))+"'"); 
		 			             eval("yy_"+machine_name_list[ghg]+"='"+(parseFloat(yy))+"'");  
		 			    	 }else if(to_turn[0] === "y"){
		 			    		img_div.style.left = xx+'px';
		 			    		img_div.style.top = ((parseFloat(yy))+parseFloat(name[0]))+'px';
		 			             eval("xx_"+machine_name_list[ghg]+"='"+xx+"'"); 
		 			             eval("yy_"+machine_name_list[ghg]+"='"+((parseFloat(yy))+parseFloat(name[0]))+"'");  
		 			    	 }
		 			    	eval("agv_positions_old_"+machine_name_list[ghg]+'="'+eval("agv_positions_"+machine_name_list[ghg])+'"');  
		 			     	}
		 			     else
		 			    	 {
		 			    	 
		 			    	 
		 			    	 
		 			    	 
		 			    	 
		 			    	 
		 			    	 
		 			    	  if(agv_positions==="29"||agv_positions==="30"||agv_positions==="5"){
//		 			    		  $('#Use').html('本次送料所用時間：<span id="use_span">待機中</span>');
		 			    		 $('#use_span').css('color','red');
//		 			    		 $('#Leftover').html('本次送料所剩時間：<span id="Leftover_span">待機中</span>');
		 			    		 $('#Leftover_span').css('color','red');
		 			    	  }else if(agv_positions==="13"){
		 			    		eval("old_time_"+machine_name_list[ghg]+"='"+new Date().getTime()+"'"); 
		 			    	  }
		 			    	 img_div.style.left = result[i].x-15+'px';
		 			    	img_div.style.top = result[i].y-14+'px';
			 			         const site_x = parseInt(result[i].x)-15;
				 			     const site_y = parseInt(result[i].y)-14;
				 			    
				 				  var name = pix_distance(agv_positions,targets,state,xx,yy,machine_name_list[ghg]).split(",");     
				 				 eval("route_state_"+machine_name_list[ghg]+'= "'+name[2]+'"');
				 				  
				 				  state_1(state,name[2],machine_name_id[ghg],machine_name_list[ghg],(ghg+1));
				 				 let to_turn = name[1].split(".");
			 			    	 if(to_turn[0]=== "-y"){
			 			    		img_div.style.left = xx+'px';
			 			    		img_div.style.top = ((parseFloat(yy))-parseFloat(name[0]))+'px';
			 			             eval("xx_"+machine_name_list[ghg]+"='"+xx+"'"); 
			 			             eval("yy_"+machine_name_list[ghg]+"='"+((parseFloat(yy))-parseFloat(name[0]))+"'"); 
			 			    	 }else if(to_turn[0] === "x"){
			 			    		img_div.style.left =(parseFloat(xx)+parseFloat(name[0]))+'px';
			 			    		img_div.style.top = (parseFloat(yy))+'px';
			 			             eval("xx_"+machine_name_list[ghg]+"='"+(parseFloat(xx)+parseFloat(name[0]))+"'"); 
			 			             eval("yy_"+machine_name_list[ghg]+"='"+(parseFloat(yy))+"'");  
			 			    	 }else if(to_turn[0] === "-x"){
			 			    		img_div.style.left =(parseFloat(xx)-parseFloat(name[0]))+'px';
			 			    		img_div.style.top = (parseFloat(yy))+'px';
			 			             eval("xx_"+machine_name_list[ghg]+"='"+(parseFloat(xx)-parseFloat(name[0]))+"'"); 
			 			             eval("yy_"+machine_name_list[ghg]+"='"+(parseFloat(yy))+"'");  
			 			    	 }else if(to_turn[0] === "y"){
			 			    		img_div.style.left = xx+'px';
			 			    		img_div.style.top = ((parseFloat(yy))+parseFloat(name[0]))+'px';
			 			             eval("xx_"+machine_name_list[ghg]+"='"+xx+"'"); 
			 			             eval("yy_"+machine_name_list[ghg]+"='"+((parseFloat(yy))+parseFloat(name[0]))+"'");  
			 			    	 }
				 			     
				 			     
				 			     
				 			     
				 			     //各AGV的状态信息，具体位置	
					 			     eval("address_"+machine_name_list[ghg]+'= "'+agv_positions+'"'); 
					 			     eval("xx_"+machine_name_list[ghg]+' = "'+site_x+'"'); 
					 				 eval("yy_"+machine_name_list[ghg]+'= "'+site_y+'"'); 
//			 			    		 vb = key_point(agv_positions,ghg,targets,address);
//			 			    		 test({'xx':result[i].x,'yy':result[i].y},0,agv_positions,ghg,"green",targets,"1");
		 			    	}
		 			 	  }
		 			 	}});
		 	          }     
		 	       });
      				eval("route_state_old_"+machine_name_list[ghg]+'="'+eval("route_state_"+machine_name_list[ghg])+'"');  
      			
	 	     	}
			  
		      clearInterval(hh);
		   hh = setInterval("agv_x_y()",1000);
     }

      var status = 1;
	     function run()
	     {
	    	 var pic = document.getElementById("img1");
	       //  alert(pic);
	   	  
	         if (status == 1) {
	             pic.style.display = 'block';
	             status = 0;
	         } else {
	             pic.style.display = 'none';
	             status = 1;
	         }
	      
	     }	
   
     function con()
     {
      $.ajax({
			type : "post",
			async : true, 
			url : "zz?machine_name="+$("#select01").val()+"", 
		    //url : "TestServletsTableau", 
			dataType : "json",
			
		 	success : function(result) {
		 
		 
		 
		 	
		 	}});
      alert('连接成功！'); 
     }
     
     //增加并运行
     function ff()
     {
    	 var text = "";
  	   $('#aa').find('input').each(function(index, element) {
  	    // alert(index+1);
  		
  		 if(index == 11)
  		 {
  		    text +=  $(this).val()
  		 }
  		 else
  	     {
  			text +=  $(this).val() + ",";
  		 }
  		
  	    
  	   });
      
      $.ajax({
			type : "post",
			async : true, //是否异步
			url : "step?name="+text+"&machine_name="+$("#select01").val()+"", 
		    //url : "TestServletsTableau", 
			dataType : "json",
	
		 	success : function(result) {
		 		if(result==1)
			 	{
			 	alert('设置成功！');
			 	}
			 	else
			 	{
			 	alert('设置失败');
			 	}
		 	}});
           
     }
     
     
     //音乐关
     function Music()
     {
    	
    	  $.ajax({
  			type : "post",
  			async : true, 
  			url : "Music?machine_name="+$("#select01").val()+"", 
  			dataType : "json",
  	
  		 	success : function(result) {
  		 		if(result==1)
			 	{
			 	alert('设置成功！');
			 	}
			 	else
			 	{
			 	alert('设置失败');
			 	}
  		 	}});
     }
     
     

   function pix_distance(site,targets,state,xx,yy,agv_name){
//	   vendor
	   console.log(agv_name+'-----------------------》'+site);
	   let vendor_name = '';
	   let See_sql_vendor = 'select * from agv_ip where agv_name = '+agv_name ;
	   $.ajax({
			type: 'post',
			async:false,
			dataType: 'json',
			url: 'http://10.167.194.139:8080/Whole_ApiA/select_hh',
			data:{
			'orcl':'2',
			'table_name':' ',
			'sql': See_sql_vendor
			},
			success: function (message) {
			   vendor_name = message[0].vendor
				    }
	   			})
	   
	   
	   
	   
	   
	   var move_state = 'x';
	   var state_to = 1;
	   let to_turn_to = '';
	   let See_sql = 'select * from car_steering where site = '+site;
	   $.ajax({
			type: 'post',
			async:false,
			dataType: 'json',
			url: 'http://10.167.194.139:8080/Whole_ApiA/select_hh',
			data:{
			'orcl':'2',
			'table_name':' ',
			'sql': See_sql
			},
			success: function (message) {
			     for(var i=0;i<message.length;i++){
                    let site_arr = message[i].target_site.split(",");
                       for(var j=0;j<site_arr.length;j++){
                    	      if(site_arr[j] === targets){
                    	    	  state_to = message[i].direction;
                    	      }
                           }
					    }
				    }
	   			})
	   var num_sql = 0 ;
	   let sql = 'select * from path_needed_time where left_spot =\"'+site+'\" and state_spot =\''+state_to+'\' and vendor =\''+vendor_name+'\'';
//	  console.log(sql);
	   if(vendor_name==='Haikang_Orange'&&agv_name==='07'){
		   sql = 'select * from path_needed_time where  vendor =\''+vendor_name+'\' and state_spot = 1';
//		   console.log(sql)
	   }else if(vendor_name==='Haikang_Orange'&&agv_name==='08'){
		   sql = 'select * from path_needed_time where  vendor =\''+vendor_name+'\' and state_spot = 2';
//		   console.log(sql)
	   }
	   $.ajax({
			type: 'post',
			async:false,
			dataType: 'json',
			url: 'http://10.167.194.139:8080/Whole_ApiA/select_hh',
			data:{
			'orcl':'2',
			'table_name':' ',
			'sql': sql
			},
			success: function (message) {
				move_state = message[0].axis_point;
				num_sql =  message[0].pixel/(parseInt(message[0].time_s))
				let to_un = move_state.split(',');
				let to_nu_s = to_un[0].split('.');
				
				let direction = to_nu_s[0].indexOf("y")!==-1?message[0].to_turn_to.split(",")[1]:message[0].to_turn_to.split(",")[0];
				
				if(direction==="top"||direction==="left"){
				if(to_nu_s[0].indexOf("y")!==-1){
						if(parseInt(yy) <= parseInt(to_nu_s[1])){
							move_state = to_un[1];
							to_turn_to =message[0].to_turn_to.split(",")[0];
						}else{
					  		move_state = to_un[0];
					  		to_turn_to =message[0].to_turn_to.split(",")[1];
					  	 }
				  	    }else{
				  		if(parseInt(xx) <= parseInt(to_nu_s[1])){
							move_state = to_un[1];
							to_turn_to =message[0].to_turn_to.split(",")[1];
						}else{
					  		move_state = to_un[0];
					  		to_turn_to =message[0].to_turn_to.split(",")[0];
						  	 }
				  	   }
				}else{
					if(to_nu_s[0].indexOf("y")!==-1){
						if(parseInt(yy) >= parseInt(to_nu_s[1])){
							move_state = to_un[1];
							to_turn_to =message[0].to_turn_to.split(",")[0];
						}else{
					  		move_state = to_un[0];
					  		to_turn_to =message[0].to_turn_to.split(",")[1];
					  	 }
				  	    }else{
				  		if(parseInt(xx) >= parseInt(to_nu_s[1])){
							move_state = to_un[1];
							to_turn_to =message[0].to_turn_to.split(",")[1];
						}else{
					  		move_state = to_un[0];
					  		to_turn_to =message[0].to_turn_to.split(",")[0];
						  	 }
				  	   }
				}
				
				to_turn_to =(message[0].axis_point.indexOf("y")!==-1&&message[0].axis_point.indexOf("x")!==-1)?to_turn_to:message[0].to_turn_to;
					
			    }
	})
	
	
	
	   if(state.indexOf("前向运行")!==0){
		   return '0,x,'+to_turn_to;
	   }else{
		   return num_sql+','+move_state+','+to_turn_to; 
	   }
       
	
		
	   
   }
     
     
     
     
     
     
     
   function test(current,add_num,state,Canvas_Number,Canvas_Color,targets,Route){
	   
	   
	   let route_vs = 0;
        var select_point_sets = [];
//        console.log(Route);
      eval("add_nums"+Canvas_Number+" = []")   
     eval("add_nums"+Canvas_Number).push(add_num);
    if(Route === 1){
       $.ajax({
 			type : "post",
 			async : false, 
 			url : "select_point_set",
 			data:{
 			 "site":targets,
 			},
 			dataType : "json",
 	
 		 	success : function(result) {
 		 		route_vs = result[0].route;
 		 	 eval("point"+Canvas_Number+" = []");
 		 		select_point_sets = result;
 				for(var i=0;i<select_point_sets.length;i++){
 				    eval("point"+Canvas_Number).push({'left':select_point_sets[i].x,'top':select_point_sets[i].y})
 				}
 		 		}});
    			  }

//      console.log(eval("point"+Canvas_Number));
 		var c = document.getElementById("myCanvas"+Canvas_Number);//初始化
 		var ctx = c.getContext("2d");
 		 c.height=c.height;  
 		const width = $('#images_div_1').css("width").substring(0,$('#images_div_1').css("width").length-2);
 		const height = $('#images_div_1').css("height").substring(0,$('#images_div_1').css("height").length-2);
 		ctx.width = width;
 		ctx.height = height;
 		ctx.lineWidth=5;
 		ctx.strokeStyle = Canvas_Color;
 	   
//  	     eval("point1" +Canvas_Number+ " = "+current);
 		 eval("point1" +Canvas_Number+" = []");
 	     eval("point1" +Canvas_Number).push(current);
 	     eval("point"+Canvas_Number);	
 	 	
 	 		
 		 	if(state.trim()==="74"||state.trim()==="30"||state.trim()==="5"||state.trim()==="29"||Canvas_Number===3){eval("point"+Canvas_Number+"= []");}
 		  eval("point"+Canvas_Number).splice(0,eval("add_nums"+Canvas_Number)[0]);
 		  
 		  
 		  
 		ctx.beginPath();
 		ctx.moveTo(eval("point1"+Canvas_Number)[0].xx, eval("point1"+Canvas_Number)[0].yy);//起始位置
 		for(var i=0;i<eval("point"+Canvas_Number).length;i++){
 		ctx.lineTo(eval("point"+Canvas_Number)[i].left, eval("point"+Canvas_Number)[i].top);
 		}
// 		if(Canvas_Number===0){
// 			console.log("targets-->"+targets);
// 		  console.log("Canvas_Number--->"+eval("point"+Canvas_Number));}
 		ctx.stroke();
 		
 		
 		return route_vs;
 }
     
     
     
     
   var imagess_x = '';   
		var imagess_y = '';   
		var imagess_image = '';   
		  $.ajax({
				type : "post",
				async : false, 
				url : "select_images", 
				dataType : "json",
			 	success : function(result) {
//			 		console.log(result);
			 	imagess_x = result[0].y;
			 	imagess_y = result[0].x;
			 	imagess_image = result[0].images;
			 	}
	});

$('#obj').css({"height":imagess_y+"px","width":imagess_x,"border":"2px solid #000000"});
$('#obj1').css({"opacity":"0.7","height":"665px","width":""+imagess_x+"px","border":"2px solid #000000","background-image":"url('"+imagess_image+"')"});

     function route_cutting(xx,yy,site,rountes){
//    	 console.log(xx)
    	 let vs = 0;
    	   const sql = 'select * from route_cutting where Vendor_name = \'Speedp_white\' and site like \'%'+site+'%\' and route = \''+rountes+'\'' ;
//    	  console.log(sql);
    	   $.ajax({
    			type: 'post',
    			async:false,
    			dataType: 'json',
    			url: 'http://10.167.194.139:8080/Whole_ApiA/select_hh',
    			data:{
    			'orcl':'2',
    			'table_name':' ',
    			'sql': sql
    			},
    			success: function (message) {
//    				console.log(message);
    				for(var i=0;i<message.length;i++){
    					 let site_name = message[i].site.split(',')
                             for(var j=0;j<site_name.length;j++){
                                    if(site_name[j].indexOf(site)!==-1){
                                    	let vs_name = site_name[j].split('.'); if(vs_name.length<2){vs = message[i].code; continue;}
//                                    	console.log(vs_name[2]);
                                    	if(vs_name[1]==='x'){if(vs_name[2]<=xx){vs = message[i].code}}
                                    	else if(vs_name[1]==='-x'){if(vs_name[2]>=xx){vs = message[i].code}}
                                    	else if(vs_name[1]==='y'){if(vs_name[2]<=yy){vs = message[i].code}}
                                    	else if(vs_name[1]==='-y'){if(vs_name[2]>=yy){vs = message[i].code}}
                                    }                            	 
                              }    					 
    				     }
    			    }
    	      });
    	   
    	    return vs;
     }
     
     
