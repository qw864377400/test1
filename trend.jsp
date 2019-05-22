<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	 <link href="css/trend.css" rel="stylesheet">
	 <link href="css/bootstrap.css" rel="stylesheet">
  </head>
 
  <script type="text/javascript" src="js/all/jquery-1.12.3.min.js"></script>
    <script type="text/javascript" src="js/all/moment.js"></script>
  <script type="text/javascript" src="js/all/bootstrap.min.js"></script>
  <script type="text/javascript" src="js/all/echarts.js"></script>
   <script type="text/javascript" src="js/js_util/echars_line.js"></script>
  <body style="background: #04132A;">
  <div class="title_div">
  AGV_NAME：<select id="select_01" class="title_name" >
   <option value="07">AGV_07</option>
   <option value="01">AGV_01</option>
   <option value="02">AGV_02</option>
   <option value="03">AGV_03</option>
   <option value="04">AGV_04</option>
   <option value="08">AGV_08</option>
  </select>
  <button class="btn title_sumbit" type="button" onclick="test()" style=" border: 1px solid #0279b4;">提交</button>
  </div>
  
  <div  class="bg div_title_eacher5">
  <div class="title div_title_eacher"   data-toggle="modal" data-target="#myModal1s1" id="bb" style="cursor:pointer;" onclick="teszzzt()">AGV稼動率(By Day)(點擊標題對比多台AGV稼動率)</div>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 "  style="height: 300px;" id="main"></div>
  </div>
  
  
   <div  class="bg div_title_eacher5" style="height: 350px">
    <div  class="title div_title_eacher" >AGV狀態分佈(By Day)</div>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"  style="height: 300px;" id="main01"></div>
  </div>
  
  <div class="col-sm-6 col-md-6 col-lg-6" style="height: 350px" >
    <div class="col-sm-12 col-md-12 col-lg-12 bg div_title_eacher3" >
  <div  class="title div_title_eacher"   id="title_day">異常時間分佈(By Day)</div>
    <div class=" col-sm-12 col-md-12 col-lg-12"  style="height: 300px;" id="main02"></div>
    </div>
   </div>
   
   
     <div class="col-sm-6 col-md-6 col-lg-6" style="height: 350px" >
    <div class="col-sm-11 col-md-11 col-lg-11 bg div_title_eacher3"  >
    <div  class="title div_title_eacher"  id="title_hour_dd">等待時間分佈(By Hour)</div>
   <div class="col-sm-12 col-md-12 col-lg-12"  style="height: 300px;" id="main03"></div>
      </div>
      </div>
      
      
      
   <div class="col-sm-6 col-md-6 col-lg-6" style="margin-top: 10px;"> 
     <div class="col-sm-12 col-md-12 col-lg-12 bg div_title_eacher2"  id="boder_01" >
   <div   class="title div_title_eacher1"  id="title_hour">異常時間分佈(By Hour)</div>
     <div class=" col-sm-12 col-md-12 col-lg-12"  style="height: 300px;display: none;" id="main04"></div>    
     </div>  
     </div>
     
     <div class="col-sm-6 col-md-6 col-lg-6" style="margin-top: 10px;"> 
     <div class="col-sm-11 col-md-11 col-lg-11 bg div_title_eacher2"  id="boder_02" >
     <div  class="div_title_eacher1" id="title_hours">異常時間分佈(By Site)</div>
   <div  class="title div_title_eacher1"  id="title_site">異常時間分佈(By Site)</div>
   <div class="col-md-12 col-lg-12"  style="height: 300px;display: none;" id="main05"></div>                    
  </div>
  </div>
  
  
  <div class="bg div_title_eacher4"  id="boder_03" > 
  <div class="title div_title_eacher1"  id="select_Frequency_title">送料次數分佈(By Day)</div>
  <div class=" col-sm-12 col-md-12 col-lg-12"  style="height: 300px;display: none;" id="main06"></div>
  </div>
  
  
   <div class="col-sm-6 col-md-6 col-lg-6" style="margin-top: 10px;"> 
     <div class="col-sm-12 col-md-12 col-lg-12 bg div_title_eacher2"  id="boder_04" >
    <div class="title div_title_eacher1" id="select_Frequency_day_title">送料次数分佈(By Hour)</div>
    <div class=" col-sm-12 col-md-6 col-lg-12"  style="height: 300px;display: none;" id="main07"></div>
    </div>
    </div>
    
    <div class="col-sm-6 col-md-6 col-lg-6" style="margin-top: 10px;"> 
     <div class="col-sm-11 col-md-11 col-lg-11 bg div_title_eacher2" id="boder_05" >
    <div  class="div_title_eacher1" id="select_Frequency_day_titles">送料次数分佈(By Hour)</div>
    <div  class="title div_title_eacher1"   id="select_Frequency_day_hour_title">送料详细分佈(By Second)</div>
    <div class=" col-sm-12 col-md-12 col-lg-12"  style="height: 300px;display: none;" id="main08"></div>
   </div>
   </div>
   
   <div class="col-sm-6 col-md-6 col-lg-6" style="margin-top: 10px;"> 
   <div class="col-sm-12 col-md-12 col-lg-12 bg div_title_eacher2" id="boder_06" >
   <div  class="div_title_eacher1" id="select_Frequency_day_state_title">運行狀態詳細分佈(left->right)</div>
   <div class="col-sm-12 col-md-12 col-lg-12"  style="height: 300px;display: none;" id="main09"></div>
   </div>
   </div>
   
   <div class="col-sm-6 col-md-6 col-lg-6" style="margin-top: 10px;"> 
   <div class="col-sm-11 col-md-11 col-lg-11 bg div_title_eacher2" id="boder_07" >
   <div  style="width: 46%;margin-left: 2.5%; background: #04132A;text-align: center;color: #04132A;font-weight: bold;font-size: 16px;float: left;margin-top: 10px;display: none;" id="select_Frequency_day_state_titles">運行狀態詳細分佈(left->right)</div>
   <div  class="div_title_eacher1" id="select_Frequency_day_position_title">送料详细分佈(By Second)</div>
   <div class=" col-sm-12 col-md-12 col-lg-12"  style="height: 300px;display: none;" id="main10"></div>
   </div>
   </div>
   
   
  <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal" style="display: none;" id="button_01"></button>
  <div style="top: 10%;" class="modal fade" id="myModal"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog"  >
        <div class="modal-content" >
            <div class="modal-body" style="">
                 <img class="img-circle" src="images/red.jpg"
                  style="width: 15px;height: 15px;position: absolute;" title=""  >
            </div>
     </div>
    </div>
    </div>
    
    
    
    
<!--     
    <h2>创建模态框（Modal）</h2>
按钮触发模态框
<button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">开始演示模态框</button>
模态框（Modal）
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">模态框（Modal）标题</h4>
            </div>
            <div class="modal-body">在这里添加一些文本</div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary">提交更改</button>
            </div>
        </div>/.modal-content
    </div>/.modal
</div> -->
    
    
    
    
    
    
    
        <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal1s1" id="bb" style="display: none;"> 
<!-- 	开始演示模态框 -->
 </button>
<!-- 模态框（Modal） -->
<div class="modal fade" id="myModal1s1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="width: 100%;background: #04132A;">
	<div class="modal-dialog" style="width: 80%;">
		<div class="modal-content" >
			<div class="modal-body" style="width: 100%;background: #04132A;">
			<div style="width: 100%;color:#000000;height: 20px;">
		          <div style="margin-left: 89%;margin-top: 1%;"  id="checks">
		           <select id="select_s" style="width: 46%;">
		           <option value ="HB" selected="selected">篩選框</option>
		        </select>
		        <button type="button" style="font-size: 1.5vw;color: #FFFFFF;" class="close" data-dismiss="modal"
						aria-hidden="true" >×
				</button>
		       <div style="width: 46%;;background: #ffffff;height: 150px; overflow: hidden;" id="sxk"> 
			       <ul class="list-unstyled" style="width: 4%;;position:fixed;height: 150px; overflow-y: scroll;  z-index:9999;color:#000000;font-size: 20px;margin-left: 15px;" id="oll">
				   </ul>
				</div>
				</div>
		     </div>
		     <div id="ss" style="width: 100%;height: 400px;">
			     </div>
			    <div id="sss" style="width: 100%;height: 400px;">
			     </div>
			        <div id="ssss" style="width: 100%;height: 400px;">
			     </div>
			</div>
		</div><!-- /.modal-content -->
	</div><!-- /.modal-dialog -->
</div><!-- /.modal -->
    <script type="text/javascript">
    function teszzzt(){
     $('#myModal1s1 .modal-body').css("background","#04132A");
    }
    
    </script>
<!--   <script type="text/javascript" src="js/html/pk.js"></script>     -->
<!--  <script type="text/javascript" src="js/all/trend.js"></script> -->
<!--  <script type="text/javascript" src="js/all/trends.js"></script> -->
  </body>
</html>
