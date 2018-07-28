function getData(){
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
        var mainData = data.data;
            //刷新界面
            for (var i = 0; i < mainData.length; i++) {
                var $tr = $("<tr>"+
                    "<td>"+i+"</td>"+
                    "<td>"+mainData[i].name+"</td>"+
                    "<td>"+mainData[i].profile_image+"</td>"+
                    +"</tr>");
                $("#data_body").append($tr);
            }
        },
        error:function(data,XMLHttpRequest, textStatus, errorThrown){
            console.log(data);
        }
    });
}