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
	if(data.code==200 && data.msg=="成功!") {
        var mainData = data.data;
		alert("登录成功！");
         //页面跳转  
        window.location.href='index.html';
        
    }  
}   
function sss(username,password){
    // $.ajax({
    //     type="GET",
    //     url = "http://192.168.210.217/api/Login",
    //     /*dataType: "json"*/
    //     data: { ApplicationID: "210E0809-2342-409D-9112-F5BE15E00E34", UserAccount: username,UserPassword:password},
    //     success:function(msg){
    //         // msg = eval('(' + msg + ')'); //转为json对象
    //         // handleResult(msg);
    //         alert("success");
    //     },
    //     error:function(){
    //         alert("error");
    //     }
    // });
       $.ajax({
        type:"post",
        url:"https://www.apiopen.top/satinApi",
        dataType:"json",
        async:true,
        data: {
            "type":1,
            "page":1,
        },
        success:function(data){
            console.log(data);
            handleResult(data);
        },
        error:function(data,XMLHttpRequest, textStatus, errorThrown){
            console.log(data);
            alert(XMLHttpRequest.status);  
            alert(XMLHttpRequest.readyState);  
            alert(textStatus);
        }
    });
}