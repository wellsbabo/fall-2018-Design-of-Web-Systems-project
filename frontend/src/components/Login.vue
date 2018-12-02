<template>
    <div class="login">
        <div class="user_login">
              <div class="login_box">
                <div class="login_el">
                    <div class="login_logo">
                        <h1>Service Name or Logo</h1>
                        <img class="service" src="../../public/img/제목 없음.png" width="200" height="130"/>
                    </div>
                    <div class="login_input_box">
                        <input v-model="username" class="login_input" type="text" placeholder="사용자 ID" name="user_ID">
                    </div>
                    <div class="login_input_box">
                        <input v-model="password" class="login_input" type="password" placeholder="비밀번호" name="user_psw">
                    </div>
                    <div class="login_input_box">
                       <input v-on:click="userLogin" class="login_button" type="submit" value="로그인">
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
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                username: '',
                password: ''
            }
        },
        methods:{
            userLogin: function(){
                this.$http.post("http://localhost:8000/user/login",{
                    username: this.username,
                    password: this.password
                }).then((data)=>{
                    if(data.data.status==0){
                        this.$router.push('/main')
                    }else{
                        alert('password or username incorrect')
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .login{
        text-align: center;
    }
    h1{
        color: #6bbdfa;
        margin-bottom: 75px;
    }
    .login_logo{
        display: inline-block;
    }
    .login_box{
        display: inline-block;
        border: solid #e3e3e3;
        background-color: white;
        border-radius: 4px;
    }
    .login_el{
        display: table-cell;
        width: 60%;
        height: 20%;
        margin: 1px;
    }
    .login_input_box{
        display: table;
        width: 100%;
        height: 10%;
    }
    .login_input{
        display: table-cell;
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
