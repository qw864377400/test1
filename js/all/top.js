
         window.onload =function(){
            document.getElementById("btn").onclick = function(){
//            console.log(parent.document.documentElement);
              var elem = parent.document.documentElement;
              requestFullScreen(elem);
               
            }
            var requestFullScreen=function(element) {
               //某个元素有请求    
             var requestMethod =element.requestFullScreen
             ||element.webkitRequestFullScreen //谷歌
             ||element.mozRequestFullScreen  //火狐
             ||element.msRequestFullScreen; //IE11
            if (requestMethod) {   
             requestMethod.call(element);   //执行这个请求的方法
            
         } else if (typeof window.ActiveXObject !== "undefined") {  //window.ActiveXObject判断是否支持ActiveX控件    
              //这里其实就是模拟了按下键盘的F11，使浏览器全屏
               var wscript = new ActiveXObject("WScript.Shell"); //创建ActiveX  
             if (wscript !== null) {    //创建成功
                 wscript.SendKeys("{F11}");//触发f11   
             }   
         } 
            }
            
            
            
            
            
            parent.document.addEventListener("webkitfullscreenchange", function() {//
            	   if (parent.document.webkitIsFullScreen) {
            	                //全屏后要执行的代码
            		     
            		      open();
            	            }else{
            	          close();
            	                 //退出全屏后执行的代码
            	        　　}
            	        }, false);
            	 
            parent.document.addEventListener("fullscreenchange", function() {
            	            if (parent.document.fullscreen) {
            	            	   console.log('OK');
            	                 //全屏后执行的代码
            	            }else{
            	            	console.log('close');
            	                 //退出全屏后要执行的代码
            	            }
            	        }, false);
            	 
        	        parent.document.addEventListener("mozfullscreenchange", function() {
            	            if (parent.document.mozFullScreen) {
            	            	   console.log('OK');
            	                 //全屏后要执行的代码
            	            }else{
            	            	console.log('close');
            	                 //退出全屏后要执行的代码
            	            }
            	        }, false);
            	 
            	        parent.document.addEventListener("msfullscreenchange", function() {
            	            if (parent.document.msFullscreenElement) {
            	            	   console.log('OK');
            	                 //全屏后要执行的代码
            	            }else{
            	            	console.log('close');
            	                 //退出全屏后要执行的代码
            	            }
            	        }, false)
            
            
            
            
    }
         
         
         
         
         
         
         function open()
         {
        	   window.parent.document.getElementById("left").cols = '0,*';
    		   window.parent.document.getElementById("top").rows = '0,*';
    		   window.parent.document.getElementById("top").cols = '*';	 
         }
         function close()
         {
        	   window.parent.document.getElementById("left").cols = '187,*';
    		   window.parent.document.getElementById("top").rows = '88,*';
    		   window.parent.document.getElementById("top").cols = '*';	  	 
         }
         
         
         
         