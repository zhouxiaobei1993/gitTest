// //定义HTTP连接对象  
// var xmlHttp;     
// //实例化HTTP连接对象  
// function createXmlHttpRequest() {  
//     if(window.XMLHttpRequest) {  
//         xmlHttp = new XMLHttpRequest();  
//     } else if(window.ActiveXObject) {  
//         xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");  
//     }   
// }
// //发起登录请求  
// function login(username,password) {
//     createXmlHttpRequest();
//     var url = "http://192.168.210.217/api/Login";
//     xmlHttp.open("GET", url, true);
//     xmlHttp.onreadystatechange = handleResult;
//     xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
//     xmlHttp.send("ApplicationID='210E0809-2342-409D-9112-F5BE15E00E34'"+"&UserAccount="+username+"&UserPassword="+password);
// }   
// //处理服务器返回的结果/更新页面  
function handleResult(data) {
	if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
		var response = xmlHttp.responseText;
		var json = eval('(' + response + ')');
		if(json['login_result']) {
			alert("登录成功！");
            //页面跳转  
            //window.location.href='MainTab/home.html';  
        } else {
        	/*innerHtml("用户名/密码错误");*/
        }
    }  
}   
function login(){
	$ajax(
		type="GET",
		url = "http://192.168.210.217/api/Login",
		/*dataType: "json"*/
		data: { "ApplicationID": "210E0809-2342-409D-9112-F5BE15E00E34", "UserAccount": username,"UserPassword":password},
		success:function(msg){
        	msg = eval('(' + msg + ')'); //转为json对象
        	handleResult(msg)
        },
        error:function(){
        	alert("error");
        }
        );
}