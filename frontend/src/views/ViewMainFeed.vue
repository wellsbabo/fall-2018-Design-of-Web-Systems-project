<template>
    <div class="view_main_feed">
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
                <vs-button type="flat" v-on:click="postMessage" >작성 완료</vs-button>
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

        <footer class="footer">
            권민지 김필선 이정관 이계보 ⓒ 2018 Fit Factory
        </footer>
    </div>
</template>

<script>
  import FitFactory from "../components/fitfactory";
  export default {
      name: "ViewMainFeed",
      components: {FitFactory},
      data() {
            return {
                userId:'',
                content:'',
                picture:'',
                msgDate:'',
                likes: '',
                sport: '',
                colorx: '#808080',
                popupActivo: false,
                value1: "",
                point: '#25b7d3',
                select2: [],
                options2: [
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
                ]
            }
        },
        methods:{
          postMessage: function(){
            this.$http.post('http://localhost:8000/user/postMessage',{
              userId: 3,
              content: "asdasdsa",
              picture: "adasdad",
              msgDate: '123123',
              like: 3,
              sport: 'adadas'
            }).then((data)=>{
              console.log(data.data)
            })
          }
        }
  }
</script>

<style scoped>
   .view_main_feed{
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
</style>
