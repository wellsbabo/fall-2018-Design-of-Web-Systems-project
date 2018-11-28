<template>
    <div class="login">
        <div class="login_logo">
            <img class="login_img" src="../../public/img/login_img.png"/>
        </div>
        <div class="login_box">
            <div class="login_el">
                <div class="login_logo" align="center">
                    <h1>Service Name or Logo</h1>
                </div>
                <div class="login_input_box">
                    <input class="login_input" type="text" placeholder="사용자 ID" name="user_ID">
                </div>
                <div class="login_input_box">
                    <input class="login_input" type="password" placeholder="비밀번호" name="user_psw">
                </div>
                <div class="login_input_box">
                    <input class="login_button" type="submit" value="로그인">
                </div>
                <hr class="login_line" align="center">
                <div class="login_input_box">
                    <div class="login_text" id=register_button>
                        <p class="content"><router-link to="/register">회원가입</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
    h1{
        color: #6bbdfa;
        margin-bottom: 75px;
    }
    .login{
        background-color: #f9f9f9;
        height: 600px;
    }
    .login_logo{
        float: left;
    }
    .login_img{
        vertical-align: middle;
        width: 100%;
        height: 100%;
    }
    .login_box{
        float: left;
        display: table;
        position:relative;
        border: solid #e3e3e3;
        width: 30%;
        height: 70%;
        background-color: white;
        border-radius: 4px;
        vertical-align: middle;
    }
    .login_el{
        display: table-cell;
        vertical-align: middle;
        width: 60%;
        height: 20%;
        margin: 1px;
    }
    .login_input_box{
        display: table;
        text-align: center;
        vertical-align: middle;
        width: 100%;
        height: 10%;
    }
    .login_input{
        display: table-cell;
        vertical-align: middle;
        background-color: #f9f9f9;
        width: 70%;
        height: 45%;
        border: solid #e3e3e3;
        border-radius: 4px;
    }
    .login_button{
        font-size: 15px;
        font-weight: bold;
        background-color: #6bbdfa;
        border: none;
        color: white;
        width: 70%;
        height: 45%;
        border-radius: 4px;
    }
    .login_line{
        width: 70%;
        border: solid thin black;
    }
    #register_button a:link{
        font-size: small;
        font-weight: bold;
        color: #6bbdfa;
        text-decoration: none;
    }
    #register_button a:visited{
        color: #6bbdfa;
        text-decoration: none;
    }
    #register_button a:hover{
        color: black;
        text-decoration: underline;
    }


</style>
