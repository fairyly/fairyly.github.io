        var defaultRangeStart = new Date('2015/11/01').getTime() / 1000;
        var defaultRangeTo = new Date('2016/6/20').getTime() / 1000;


        var fromY = $('.slide-res .formY');
        var toY = $('.slide-res .toY');  
        var total = $('.slide-res .total');  

        var range1 =  $("#range1").slider({ 
            id: "range1-box",
            ticks_labels:[1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,8,6,8,9],
            value: [defaultRangeStart, defaultRangeTo],
            range:true,
            tooltip: 'hide',
            step: 86400,
            min: new Date('2015/01/01').getTime() / 1000,
            max: new Date('2018/12/01').getTime() / 1000
        });

    range1.on('slide',function(slideEvt){
        var s1 = formatDate(slideEvt.value[0]*1000);
        var s2 = formatDate(slideEvt.value[1]*1000);
        fromY.text(s1);
        toY.text(s2);
        getLength();
    })
    range1.on('change',function(slideEvt){
        var s1 = formatDate(slideEvt.value.newValue[0]*1000);
        var s2 = formatDate(slideEvt.value.newValue[1]*1000);
        fromY.text(s1);
        toY.text(s2);
    })

    function getLength(){
        var yearX = Math.floor(fromY.text().substr(0,4))
        var yearY = Math.floor(toY.text().substr(0,4))
        var monthX = Math.floor(fromY.text().substr(5,2));
        var monthY = Math.floor(toY.text().substr(5,2));
        var totalMonth = (yearY - yearX)*12 + (monthY - monthX);
        total.text(totalMonth+'个月');
    }
    function formatDate(date) {
          var d = new Date(date),
              month = '' + (d.getMonth() + 1),
              day = '' + d.getDate(),
              year = d.getFullYear();

          if (month.length < 2) month = '0' + month;
          if (day.length < 2) day = '0' + day;

          return [year+'年', month+'月', day+'日'].join('');
      }


function dateFormat(date, fmt) {
    var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
    };
    if (/(y+)/.test(fmt)){
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}
