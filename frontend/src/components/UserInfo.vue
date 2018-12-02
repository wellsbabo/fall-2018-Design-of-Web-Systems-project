<template>
    <div class="user">
        <div class="user_photo">
            <img src="../../public/img/profile.jpg" id="photo" align="right">
        </div>
        <div class="user_profile">
            <div class="user_profile_data">
                <div id="user_id">ming___jee
                    <vs-button color="#25b7d3" type="flat" size="small" id="edit">프로필 편집</vs-button>
                    <vs-button :color="colorx" type="flat" size="small" id="logout">로그아웃</vs-button>
                </div><br>
                <div id="user_post_name">게시물 <post id="user_post_number">98</post></div><br>
                <div id="user_name">밍지</div>
                <div id="user_memo">행복한 밍디월드~🍔🍕🍗🍺🍩🍦🍰🍒<br>운동도 열심히 해요 아자아자</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PersonalInfo"
    }
</script>

<style scoped>
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
    .user_profile_data{
        margin-left: 100px;
    }
    #user_id{
        font-size: 24px;
    }
    #user_post_name{
        font-size: 16px;
    }
    #user_post_number{
        font-size: 16px;
        font-weight: bold;
    }
    #user_name{
        font-weight: bold;
    }
    #photo{
        height: 150px;
        width: 150px;
        border-radius: 75px;
        border: 1px solid #eeeeef;
    }
</style>
