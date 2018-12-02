<template xmlns:vs-button="http://www.w3.org/1999/xhtml">
    <div class="login">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <header class="header">
            <div class="logo">
                <img class="logo_1" src="../../public/img/fitfactory로고글씨.png"/>
                <img class="logo_2" src="../../public/img/iconfinder_gym_512534.svg" height="64" width="64" id="logo"/>
            </div>
        </header>

        <div class="user">
            <div class="user_photo">
                <img src="../../public/img/profile.jpg" id="photo" align="right">
            </div>
            <div class="user_profile">
                <div class="profile_data">
                    <div id="user_id">ming___jee
                        <vs-button color="#25b7d3" type="flat" size="small" id="edit">프로필 편집</vs-button>
                        <vs-button :color="colorx" type="flat" size="small" id="logout">로그아웃</vs-button>
                    </div><br>
                    <div id="post">게시물 <post id="number">98</post></div><br>
                    <div id="nickname">밍지</div>
                    <div id="msg">행복한 밍디월드~🍔🍕🍗🍺🍩🍦🍰🍒<br>운동도 열심히 해요 아자아자</div>
                </div>
            </div>
        </div>

        <div class="search">
            <form>
                <br><input type="search" id="searchKeyword" placeholder="검색어를 입력해주세요.">
                <button>Search</button>
            </form>
        </div>

        <div class="exercise">
            <vs-button @click="popupActivo=true" color="primary" type="border">운동일지 작성</vs-button>
            <vs-popup class="holamundo" title="운동일지 작성" :active.sync="popupActivo">
                <p>사진을 한 장만 첨부해주세요.</p>
                <input type="file" accept="image/*" id=button2 class="second">
                <img class="test" src="../../public/img/login_img.png"/>
                <vs-button type="flat">좋아요</vs-button>
                <vs-button type="flat">댓글</vs-button>
                <vs-button type="flat">작성 완료</vs-button>
                <vs-icon icon="favorite"></vs-icon>
                <vs-icon icon="favorite_border"></vs-icon>
            </vs-popup>
        </div>

        <div class="select">
            <vs-select
                    placeholder="골라보세요."
                    autocomplete
                    class="selectExample"
                    label="운동 종목"
                    v-model="select2"
                    vs-alignment="center"
            >
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options2" />
            </vs-select>
        </div>

        <div class="menu">
            <vs-tabs :color="point" vs-alignment="center">
                <vs-tab vs-label="개인 피드">
                    <div class="user_feed">
                        사용자의 데이터를 보여주는 공간입니다.<br>
                        <img class="service" src="../../public/img/제목 없음.png" width="240" height="160"/>
                        <img class="service" src="../../public/img/제목 없음.png" width="240" height="160"/>
                        <img class="service" src="../../public/img/제목 없음.png" width="240" height="160"/>
                    </div>
                </vs-tab>
                <vs-tab vs-label="전체 피드">
                    <div class="every_feed">
                        모든 회원들의 데이터를 보여주는 공간입니다.
                    </div>
                </vs-tab>
                <vs-tab vs-label="게시판">
                    <div class="board">
                        게시판 입니다.
                    </div>
                </vs-tab>
            </vs-tabs>
        </div>

        <div class="user_login">
              <div class="login_box">
                <div class="login_el">
                    <div class="login_logo">
                        <h1>Service Name or Logo</h1>
                        <img class="service" src="../../public/img/제목 없음.png" width="200" height="130"/>
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

        <footer class="footer">
            권민지 김필선 이정관 이계보 ⓒ 2018 Fit Factory
        </footer>

    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                colorx:'#808080',
                popupActivo:false,
                value1:"",
                point:'#25b7d3',
                select2:[],
                options2:[
                    {text: '테니스', value: 1},
                    {text: 'Rectangle', value: 2},
                    {text: 'Rombo', value: 3},
                    {text: 'Romboid', value: 4},
                    {text: 'Trapeze', value: 5},
                    {text: 'Triangle', value: 6},
                    {text: 'Polygon', value: 7},
                    {text: 'Regular polygon', value: 8},
                    {text: 'Circumference', value: 9},
                    {text: 'Circle', value: 10},
                    {text: 'Circular sector', value: 11},
                    {text: 'Circular trapeze', value: 12},
                ],
            }
        }
    }
</script>

<style scoped>
    .login{
        text-align: center;
    }
    .select{
        align-items: center;
        justify-content: center;
        display: flex;
        margin-top: 10px;
        margin-bottom: 30px;
    }
    .logo{
        margin-top: 30px;
        margin-bottom: 30px;
    }
    #logo{
        margin-left: 5px;
    }
    #edit{
        margin-right: 5px;
    }
    .user{
        border-top: 1px solid #eeeeef;
    }
    .user_photo{
        margin-top: 50px;
        display: inline-block;
    }
    .user_profile{
        margin-top: 50px;
        display: inline-block;
        text-align: left;
    }
    .profile_data{
        margin-left: 100px;
    }
    #user_id{
        font-size: 24px;
    }
    #post{
        font-size: 16px;
    }
    #number{
        font-size: 16px;
        font-weight: bold;
    }
    #nickname{
        font-weight: bold;
    }
    #photo{
        height: 150px;
        width: 150px;
        border-radius: 75px;
        border: 1px solid #eeeeef;
    }
    #searchKeyword{
        margin-top: 30px;
        margin-bottom: 50px;
    }
    footer{
        font-size: 12px;
        font-weight: bold;
        color: lightgray;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .search {
        margin-top: 50px;
        border-top: 1px solid #eeeeef;
        border-bottom: 1px solid #eeeeef;
    }
    .exercise{
        margin-top: 50px;
        margin-bottom: 30px;
        align-items: center;
        justify-content: center;
        display: flex;
    }
    .menu{
        margin-bottom: 50px;
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
