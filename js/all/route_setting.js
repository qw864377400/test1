 
	      var imagess_x = '';   
			var imagess_y = '';   
			var imagess_image = '';   
             
			  $.ajax({
					type : "post",
					async : false, 
					url : "select_images", 
					dataType : "json",
				 	success : function(result) {
				 		console.log(result)
				 	imagess_x = result[0].y;
				 	imagess_y = result[0].x;
				 	imagess_image = result[0].images;
				 	}
		});

function test(obj)
		{
		var title_text = " <div  id='Point'>" + obj.parent().parent().html() + "</div>"
		$('#from').find('button').each(function(index,elem){
		   $(this).attr('onclick','dele($(this))');$(this).addClass('btn btn-danger');$(this).html('Delete')
		})
		$("#from").append(title_text);
		$('#from').find('input').each(function(index,elem){
		  if(index%4==0){$(this).val($('#exampleInputName1').val())}
		  if((index+1)%4==0){$(this).val((index+1)/4)}
		})
		}
		
		function dele(val)
		{
		 val.parent().parent().remove()
		 $('#from').find('input').each(function(index,elem){
		  if(index%4==0){$(this).val($('#exampleInputName1').val())}
		  if((index+1)%4==0){$(this).val((index+1)/4)}
		})
		}
		
		
		$("#Submit").click(function(){
//             document.getElementById("from").submit();
             
             
			  $.ajax({
					type : "post",
					async : true, 
					url : "add_Point", 
					data: $("#from").serialize(),
					dataType : "text",
				 	success : function(data) {
				 		alert('Increase success!');
				 		window.location.href = '';
				 	}
				 	});
             
             
		  });
		$("#Reset").click(function(){
             window.location.href = '';
		  });
		
		
		
		 $("#Route_view").click(function(){
             
	            var point_left = []
	            var point_right = []
	          	$('#from').find('input').each(function(index,elem){
	  	      
	  	         if($(this).attr("name").indexOf('exampleInputName2')!=-1){
	  	             point_left.push($(this).val());
	  	            }
	  	         else if($(this).attr("name").indexOf('exampleInputName3')!=-1){ 
	  	         	  point_right.push($(this).val());
	  	         	}
	          	});
	          	
	      	var c = document.getElementById("myCanvas");//初始化
	      	  $('#myCanvas').attr("width",imagess_x+"px"); $('#myCanvas').attr("height",imagess_y+"px");
			var ctx = c.getContext("2d");
			 c.height=c.height;  
		    ctx.width = imagess_x;
			ctx.height = imagess_y;
			ctx.lineWidth=5;
			ctx.strokeStyle="#0000ff";
			var point1 = [],point = [];
	        for(var i=0;i<point_left.length;i++)
		        {
	                if(i==0){point1.push({'left':point_left[i],'top':point_right[i]})}
	                else{point.push({'left':point_left[i],'top':point_right[i]})}
		        }
			ctx.beginPath();
			ctx.moveTo(point1[0].left, point1[0].top);//起始位置
			for(var i=0;i<point.length;i++){
			ctx.lineTo(point[i].left, point[i].top);
			}
			ctx.stroke();
	      });
		 
		 var canvas = document.getElementById("myCanvas");//初始化
    	 canvas.addEventListener("click", function(event) {
   		 getMousePos(canvas, event);
		});
   var test_array = [];
function getMousePos(canvas, event) {
  console.log(event);
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left * (canvas.width / rect.width);
    var y = event.clientY - rect.top * (canvas.height / rect.height);
    test_array.push({'left':parseInt(x),'top':parseInt(y)});
    testzzz();
//    kkk();
  }
     
   function testzzz(){
    $('#myCanvas').attr("width",imagess_x+"px"); $('#myCanvas').attr("height",imagess_y+"px");
   	var c = document.getElementById("myCanvas");//初始化
		var ctx = c.getContext("2d");
		 c.height=c.height;  
  
	    ctx.width = imagess_x;
		ctx.height = imagess_y;
		ctx.lineWidth=5;
		ctx.strokeStyle="#0000ff";
		var point1 = [],point = [];
        for(var i=0;i<test_array.length;i++)
	        {
                if(i==0){point1.push({'left':test_array[i].left,'top':test_array[i].top})}
                else{point.push({'left':test_array[i].left,'top':test_array[i].top})}
	        }
		ctx.beginPath();
		ctx.moveTo(point1[0].left, point1[0].top);//起始位置
		for(var i=0;i<point.length;i++){
		ctx.lineTo(point[i].left, point[i].top);
		}
		ctx.stroke();
	    point_Set_up();
   }
     
     document.onkeydown=function(event){
	  var e = event || window.event || arguments.callee.caller.arguments[0];
	  if(e && e.keyCode==8){ // 按 Esc 
	  
	      if(test_array.length!==0){test_array.splice(test_array.length-1, 1);point_Set_up(); testzzz();}
	      else{alert('没有描图点。。。');}
	   }
}; 

    function point_Set_up(){
        var html_test = "<div id='Point'>"+$('#Point').html() + "</div>";
        $('#from').html('');
    	for(var i=0;i<test_array.length;i++){
        	   if(i!=0)
        	   {
 		   $('#from').append(html_test);
 		  
 		     $('#from').find('input').each(function(index,elem){
// 				console.log($('#from').find('button').length);
 				if(index>=5*($('#from').find('button').length-1)){
 				  if($(this).attr('id').indexOf('exampleInputName2')!=-1){
 				     $(this).val(test_array[i].left);
 				  }else if($(this).attr('id').indexOf('exampleInputName3')!=-1){
 				     $(this).val(test_array[i].top);
 				  }else if($(this).attr('id').indexOf('exampleInputName4')!=-1){
 				     $(this).val(i+1);
 				  }else if($(this).attr('id').indexOf('exampleInputName5')!=-1){
 					   $(this).val($('#agv_model').val());
  				  }else{
 					 $(this).val($('#Route').val());
 				  }
 				}
 				
 			  })
 		     }else{
 		    	 $('#from').append(html_test);
 		        $('#from').find('input').each(function(index,elem){
 				  if($(this).attr('id').indexOf('exampleInputName2')!=-1){
 				     $(this).val(test_array[i].left);
 				   }else if($(this).attr('id').indexOf('exampleInputName3')!=-1){
 				     $(this).val(test_array[i].top);
 				  }else if($(this).attr('id').indexOf('exampleInputName4')!=-1){
 				     $(this).val(i+1);
 				  }else if($(this).attr('id').indexOf('exampleInputName5')!=-1){
  				     $(this).val($('#agv_model').val());
  				  }else{
  					 $(this).val($('#Route').val());
  				  }
 		     	  })
 		     }
 			}
 		
//    	console.log(test_array.length+'--------->'+ $('#from').find('button').length);
    	
 	  	  $('#from').find('button').each(function(index,elem){ 
 	          if(index==test_array.length-1)
 	          {
 	        	 $(this).removeClass('btn-danger');
 			   $(this).attr('onclick','test($(this))');$(this).addClass('btn btn-primary');$(this).html('Add to')
 			   }else
 			  {
 			    $(this).attr('onclick','dele($(this))');$(this).addClass('btn btn-danger');$(this).html('Delete')
 			  }
 			  })
    		}
    
     
		