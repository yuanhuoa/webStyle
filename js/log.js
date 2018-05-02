$(function(){
    $("#sub").click(function () {
        $(this).attr("disabled",true);
        $(this).blur();
        $("#name").blur();
        $("#psw").blur()
        console.log("sub click")
        if($("#name").val() == ""){
            $("#name").focus();
            $("#log-error").text("请输入用户名/邮箱");
            $("#name").css("border-color","#fc4343");
            $(this).attr("disabled",false);
            return;
        } else if($("#psw").val() == ""){
            $("#psw").focus();
            $("#log-error").text("请输入密码");
            $("#name").removeAttr("style");
            $("#psw").css("border-color","#fc4343");
            $(this).attr("disabled",false);
            return;
        } else{
            setTimeout(function () {
                //ajax获取结果
                var success = true;
                if (success){
                    //跳转
                } else {
                    $("#psw").focus();
                    $("#psw").css("border-color","#fc4343");
                    $("#log-error").text("帐号或密码错误，请重新输入或者找回密码");
                }
            },3000)
            console.log("log")
        }
        $(this).attr("disabled",false);
    })

    $("#name").focus(function () {
        $("#name").removeAttr("style");
    });
    $("#psw").focus(function () {
        $("#psw").removeAttr("style");
    })

    $("#name").blur(function () {
        if($("#name").val() != ""){
            $("#name").removeAttr("style");
        }
    });
    $("#psw").blur(function () {
        if($("#psw").val() != ""){
            $("#psw").removeAttr("style");
        }
    })

    //删除的显示隐藏
    $("#name").keyup(function () {
        if($("#name").val() == ""){
            $("#del-name").css("display","none");
        }else{
            $("#log-error").text("");
            $("#del-name").css("display","inline-block");
        }
    });
    $("#psw").keyup(function () {
        if($("#psw").val() == ""){
            $("#del-psw").css("display","none");
        }else{
            $("#log-error").text("");
            $("#del-psw").css("display","inline-block");
        }
    })
    //删除
    $("#del-name").click(function () {
        $("#name").val("");
    })
    $("#del-psw").click(function () {
        $("#psw").val("");
    })
})