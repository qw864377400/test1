

	 $.ajax({
				type : "post",
				async : false, 
				url : "select_images", 
				dataType : "json",
			 	success : function(result) {
//			 		modal-dialog_01   modal-body_01  myCanvas
			 		$('#modal-dialog_01').css("width",+(result[0].y+25)+"px")
			 		$('#modal-body_01').css("height",+(result[0].x+20)+"px")
			 		$('#myCanvas').attr({"width":""+result[0].y+"px","height":""+result[0].x+"px"})
			 		$('#img_ss_01').attr("src",result[0].images)
			}
	   });




var table_name = 'landmark_spot_copy';
     var title_s = [];
      var Condition = '';
    $(".landmark_spot").click(function(){table_name = 'landmark_spot_copy';table_detailed(table_name)})
    $(".starting_point_site").click(function(){table_name = 'starting_point_site';table_detailed(table_name)})
    $(".car_steering").click(function(){table_name = 'car_steering';table_detailed(table_name)})
    $(".agv_state").click(function(){table_name = 'agv_state';table_detailed(table_name)})
    $(".site_route").click(function(){table_name = 'site_route';table_detailed(table_name)})
    $(".path_needed_time").click(function(){table_name = 'path_needed_time';table_detailed(table_name)})
    $(".point_set_up").click(function(){table_name = 'point_set_up';table_detailed(table_name)}) 
    $(".agv_ip").click(function(){table_name = 'agv_ip';table_detailed(table_name)})  
    $(".route_cutting").click(function(){table_name = 'route_cutting';table_detailed(table_name)})
    $(".traffic_control").click(function(){table_name = 'traffic_control';table_detailed(table_name)})
     
    //获取后台数据进行表单填充
    function table_detailed(table_name_s,site,target){
    	
    title_s = [];
    $.ajax({
		type: 'post',
		async:false,
		dataType: 'json',
		url: 'http://10.167.198.140:8080/Whole_ApiA/select_hh',
		data:{
		'orcl':'2',
		'table_name': table_name_s,
		'sql':''
		},
		success: function (message) {
		  if(site !== undefined){
			message =  message.filter(tests => eval('tests.'+target).indexOf(site)!==-1)
		  }
		    var number = 0;
		    var thead_s = '<tr>';
		    var tbody_s = '';
		    let option = '';
		    let pie ;
		    for(var p in message[0]){number++;title_s.push(p);option = option + '<option>'+p+'</option>';}
	        for(var p in message[0]){ pie = 100/(number+1);
            console.log('-->'+pie);
	        thead_s = thead_s + '<th class="th" style="color:red;">'+p+'</th>' }
		    for(var i=0;i<message.length;i++){
		    var Operation_s = '';
		       tbody_s = tbody_s + '<tr>';
		       for(var j=0;j<title_s.length;j++){
		    	   let model_state = '';
		    	   if(title_s[j]==="route"){model_state = 'data-toggle="modal" data-target="#myModal2"'}
                   tbody_s = tbody_s + '<th class="th" '+model_state+' style="WORD-WRAP: break-word;" id="'+title_s[j]+'">'+eval('message[i].'+title_s[j])+'</th>'
		       }
		       for(var z=0;z<2;z++){
		         if(z===0){Operation_s = Operation_s + '<button   class="btn btn-warning botton_margin" data-toggle="modal" data-target="#myModal">UPDATE</button>';}
		         else{Operation_s = Operation_s + '<button   class="btn btn-danger">DELETE</button>';}
		       }
		       tbody_s = tbody_s + '<th class="th">'+ Operation_s +'</th></tr>';
		    }
		    if(site === undefined){
		     $('#title_name').html('<span class="glyphicon glyphicon-chevron-right"></span>Site settings'+
		    		' <select id="select_value" style="color:#000000;height:30px;">'+option+'</select>'+
		    		 '<input type="text" placeholder="Please Enter"  style="color:#000000;height:30px;margin-left:10px;"'+
		    			' onpropertychange="OnPropChanged (event)" id="filter_data">'+
		    		 '<span style="margin-left:50%"><button class="btn btn-info"'+ 
		    			 'id="add_data" data-toggle="modal" data-target="#myModal1">Add</button></span>');}
		     $('#thead').html(thead_s+'<th class="th">Operation</th></tr>');
		     $('#tbody').html(tbody_s);
		    }
		})
		
		
		//获取表单点击事件进行删除操作
		$("tr").click(function(elem){
		let Condition = '';
		  if(elem.target.localName === "th"){return}
		  if(elem.target.innerHTML==="DELETE"){
		    for(var i=0;i<elem.currentTarget.cells.length-1;i++){
		    	  if(i===elem.currentTarget.cells.length-2){
		            	Condition = Condition + elem.currentTarget.cells[i].id + '='+"'" +elem.currentTarget.cells[i].innerHTML+ "'" 
		              }else{
		            	Condition = Condition + elem.currentTarget.cells[i].id + '='+"'" +elem.currentTarget.cells[i].innerHTML+ "' and " 
		              }
		    }
			if(window.confirm('你确定删除该条记录吗？')){
			    
                 $.ajax({
						type: 'post',
						async:false,
						dataType: 'json',
						url: 'delete_site_settings',
						data:{
						'table':table_name,
						'condition':Condition
						},
						success: function (message) {
			               if(message>0){
			                alert('delete success!')
			               }
						}
				})
			
                 table_detailed(table_name);
              }
			return
			}
				 var from_input = '';
				 for(var i=0;i<elem.currentTarget.cells.length-1;i++){
		             let state = '';
		              if(i===elem.currentTarget.cells.length-2){
		            	Condition = Condition + elem.currentTarget.cells[i].id + '='+"'" +elem.currentTarget.cells[i].innerHTML+ "'" 
		              }else{
		            	Condition = Condition + elem.currentTarget.cells[i].id + '='+"'" +elem.currentTarget.cells[i].innerHTML+ "' and " 
		              }
		             from_input = from_input +  ' <div class="form-group" style="margin-left: 30%"> '+
					     ' <label for="lastname" class="col-sm-3 control-label">'+title_s[i]+'</label>'+
					     '<div class="col-sm-9"> '+
					     ' <input type="text" class="form-control" id="'+title_s[i]+'" style="width: 50%" '+state+' value = "'+elem.currentTarget.cells[i].innerHTML+'" > '+
					     '</div></div>';
				 	}
				 	$('#form_update').html(from_input);
				 	Condition_s(Condition)
		});
		
		//获取表单增加时间进行增加
		       $("#add_data").off('click');
		   $("#add_data").click(function(elem){
              let input_insert = '';
              for(var i=0;i<title_s.length;i++){
            	 const state_site = title_s[i]==="x"?'data-toggle="modal" data-target="#myModa4" placeholder="click here"':'';
            	 const path_time_state = title_s[i]==="right_spot"?'onchange="path_time()"':'';
                         input_insert = input_insert + ' <div class="form-group" style="margin-left: 30%"> '+
					     ' <label for="lastname" class="col-sm-3 control-label">'+title_s[i]+'</label>'+
					     '<div class="col-sm-9"> '+
					     ' <input type="text" class="form-control" '+path_time_state+'  '+state_site+' id="'+title_s[i]+'" style="width: 40%" > '+
					     '</div></div>';
				}
				$('#form_insert').html(input_insert);
       
     	 });
		   //获取模态框增加实现,进行后台连接存储
     	   $("#Submitting_add").off('click');
     	   $("#Submitting_add").click(function(elem){
		     	   let state = 0;let insert_data = '';let condition = '';
		     	    $('#form_insert').find('input').each(function (index,ele){
		     	       if(ele.value===""){
		     	          alert('输入错误！！！')
		     	          state = 1; 
		     	          return;
			     	       }
			     	       insert_data = insert_data + ele.id + ',';
			     	       condition = condition + "'" + ele.value + "',"
			     	    })
			        if(state===1){return}else{
			     	      $.ajax({
								type: 'post',
								async:false,
								dataType: 'json',
								url: 'insert_data_settings',
								data:{
								'table':table_name,
								'update_data':insert_data.substring(0,insert_data.length-1),
								'condition':condition.substring(0,condition.length-1),
								},
								success: function (message) {
								    table_detailed(table_name);
									if(message>0){alert('insert success!')}
									var e = document.createEvent("MouseEvents");
										e.initEvent("click", true, true);
										document.getElementById("Close_name_insert").dispatchEvent(e);
									}
								});
			     	     }
     	   });
     	   
     	  $('#filter_data').off('input propertychange');
     	  $('#filter_data').on('input propertychange', function(ele) {
    		    table_detailed(table_name,$(this).val(),$('#select_value').val());
    		});
     	  
     	  //获取TH点击事件
      	   $("th").click(function(elem){
      		   
     		 
      	   	    console.log(elem.target.innerHTML);
      	   	  let sql = "select * from point_set_up where route ="+elem.target.innerHTML+' order by point_position asc'
      	   	 $.ajax({
      			type: 'post',
      			async:false,
      			dataType: 'json',
      			url: 'http://10.167.198.140:8080/Whole_ApiA/select_hh',
      			data:{
      			'orcl':'2',
      			'table_name': 's',
      			'sql':sql
      			},
      			success: function (message) {
      				console.log(message);
      				var c=document.getElementById("myCanvas");
      				var ctx=c.getContext("2d");
      				c.height=c.height;  
      				ctx.width = "1000px";
       				ctx.height = "1080px";
      				ctx.strokeStyle =  "green";
      				ctx.lineWidth = 8;
      				for(var i=0;i<message.length;i++){
      					if(i===0){ctx.moveTo(message[i].x,message[i].y);}
      					else{ctx.lineTo(message[i].x,message[i].y);}
      				}
      				ctx.stroke();
      			  }
      	   	 	});
      	   	    
      	   	   });
      	   
		}
		table_detailed(table_name);
		
		
		function Condition_s(Condition_s){
		   this.Condition = Condition_s;
		}
		
		 //获取模态框增加实现,进行后台连接存储
      $("#Submitting").click(function(elem){
    	  
    	  console.log(elem);
    	  console.log(Condition);
     let update_data = ''
      var Attribute_site_update = '';
      
      	$('#form_update').find("input").each(function(index,ele){
      		if(Condition===undefined){
               if(ele.id==='to_turn_to'){ Condition = Condition + ele.id + '='+"'" +ele.value+ "'"}}
              update_data = update_data +  ele.id + '=' + "'" +ele.value + "'" + ','
      	})
      	  $.ajax({
		type: 'post',
		async:false,
		dataType: 'json',
		url: 'update_site_settings',
		data:{
		'table':table_name,
		'update_data':update_data.substring(0,update_data.length-1),
		'condition':Condition
		},
		success: function (message) {
		table_detailed(table_name);
		if(message>0){alert('update success!')}
		var e = document.createEvent("MouseEvents");
			e.initEvent("click", true, true);
			document.getElementById("Close_name").dispatchEvent(e);
		}});
      	
     }); 
    
      $("a").click(function(ele){
  	    $("a").removeClass("a_state");
  	    $('.'+ele.currentTarget.className).addClass("a_state");
      });
    
      $('#obj4').css({"height":"665px","width":"1600","border":"2px solid #000000","background-image":"url('imagess/loo.png')"});
      var canvas = document.getElementById("myCanvas1");//初始化
      	 canvas.addEventListener("click", function(event) {
     		 getMousePos(canvas, event);
     		});
        var test_array = [];
     function getMousePos(canvas, event) {
     //   console.log(event);
         var rect = canvas.getBoundingClientRect();
         var x = event.clientX - rect.left * (canvas.width / rect.width);
         var y = event.clientY - rect.top * (canvas.height / rect.height);
         console.log(x+'--->'+y);
         console.log( $('#agv_model').val());
         $('#form_insert').find('input').each(function(index,ele){
         if($(this)[0].id==="x"){$(this).val(x);}else if($(this)[0].id==="y"){$(this).val(y)}else if($(this)[0].id==="vendor"){$(this).val($('#agv_model').val())}
         })
         
         $('#close_canvas').click();
       }
          
//          document.onkeydown = function (event) {
//              var e = event || window.event;
//              if (e && e.keyCode == 13) { 
//              console.log($('#form_insert').html() );
//               $('#Submitting_add').click();
//              }
//          };   
          
      function path_time(){
       	  let left_site,right_site,vendor,state,position = '';
         	  $('#form_insert').find('input').each(function(ele,index){
         	  $(this)[0].id === "vendor"?($(this).val() === ""?(alert($(this)[0].id+' Is empty,please enter!!'),state = '1'):vendor=$(this).val()):''
         	  $(this)[0].id === "axis_point"?($(this).val() === ""?(alert($(this)[0].id+' Is empty,please enter!!'),state = '1'):position=$(this).val()):''
         	  $(this)[0].id === "left_spot"?($(this).val() === ""?(alert($(this)[0].id+' Is empty,please enter!!'),state = '1'):left_site=$(this).val()):''
         	  $(this)[0].id === "right_spot"?($(this).val() === ""?(alert($(this)[0].id+' Is empty,please enter!!'),state = '1'):right_site=$(this).val()):''
         	  })
         	  console.log(left_site+'--->'+right_site);
         	  if(state==='1'){return}else{
         	      $.ajax({
     					type: 'post',
     					async: true,
     					dataType: 'json',
     					url: 'path_time',
     					data:{
     					'left_site':left_site,
     					'right_site':right_site,
     					'vendor':vendor,
     					'position':position
     					},
         	            success: function (message) {
         	            	if(message.axis_point===""){alert('你输入的站点不存在！！！');return}
         	            	else{
                                	  $('#form_insert').find('input').each(function(ele,index){
     								 $(this)[0].id === "axis_point"? $(this).val(message.axis_point):''	
     								 $(this)[0].id === "time_s"? $(this).val((message.time_s)/1000):''	
     								 $(this)[0].id === "to_turn_to"? $(this).val(message.to_turn_to):''	
     								 $(this)[0].id === "pixel"? $(this).val(message.pixel):''	
     							   }) 	            	
              	            	}
     						}
     					});
           }}
      