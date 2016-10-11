window.clientPath="http://"+window.location.host;
require.config({
    baseUrl: window.clientPath+'/奇宠网/js/js/',
    paths: {
        jquery:'lib/jquery',
        doT:'lib/doT.min',
        swiper:'lib/swiper.min',
        zepto:'lib/zepto',
        text: 'lib/text',
        dropload:'lib/dropload.min'
    },
    shim: {
        "jquery":{
            exports: "jquery"
        },
        "swiper":{
            deps:["jquery"],
            exports: "swiper"
        },
        "doT":{
            exports: "doT"
        },
        'zepto':{
            exports:"$"
        },
        'dropload':{
            deps:["zepto"],
            exports:"dropload"
        }
    }
});

