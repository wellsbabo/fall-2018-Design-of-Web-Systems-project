<template>
    <div class="fitfactory">
       <h1>test</h1>
    </div>
</template>

<script>
    export default {
        name: "FitFactory",
        data() {
            return {
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
        }
    }
</script>

<style scoped>
    .home{
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
