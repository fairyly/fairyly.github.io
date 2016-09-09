$(function(){
    var oli=$("#tabUl li");
    $("#tabUl li").on("click",function(){
        var that=$(this);
        $("#tabUl li").removeClass("active");
        that.addClass("active");
        $(".contentTab").removeClass("active");
        $(".contentTab").eq(that.index()).addClass("active");
     });
      $(".loadMore1").on("click",function(){//加载更多
          // $(".loadMore1").hide();
          console.log("data");
          $.get("datav.json",{},function(data){
            // console.log(data.photos.items[0]);
              for(var data1 in data.photos.items){
                  var fetCurrent=data.photos.items[data1];
                  var domData="<li> <div class='forMargin'> <a> <img src='"+fetCurrent.photo_url+"'> </a> <a class='title'>"+fetCurrent.photo_name+"</a> <div class='com-about'> <span class='comDate'>"+fetCurrent.photo_time+"</span> <p class='readNum'>浏览量：<span>"+fetCurrent.see_mumber+"</span></p><div class='both'></div> </div> </div> </li>";
                  $(".contentTab.active li:last").before(domData);
              }
              // $(".loadMore1").show();
              // $(".contentTab.active").append($(".loadMore1"));

          },"json")
    });
    $(".loadMore2").on("click",function(){//加载更多
          // $(".hidevideo").slideDown();
          // $(".loadMore2").hide();
          console.log("data");
          $.get("data.json",{},function(data){
            // console.log(data.photos.items[0]);
              for(var data1 in data.photos.items){
                  var fetCurrent=data.photos.items[data1];
                  var domData="<li> <div class='forMargin'> <a> <img src='"+fetCurrent.photo_url+"'> </a> <a class='title'>"+fetCurrent.photo_name+"</a> <div class='com-about'> <span class='comDate'>"+fetCurrent.photo_time+"</span> <p class='readNum'>浏览量：<span>"+fetCurrent.see_mumber+"</span></p><div class='both'></div> </div> </div> </li>";
                  $(".contentTab.active li:last").before(domData);
              }

          },"json")
    });
      $(".loadMore3").on("click",function(){//加载更多
          // $(".hidevideo").slideDown();
          // $(".loadMore3").hide();
          console.log("data");
          $.get("data.json",{},function(data){
            // console.log(data.photos.items[0]);
              for(var data1 in data.photos.items){
                  var fetCurrent=data.photos.items[data1];
                  var domData="<li> <div class='forMargin'> <a> <img src='"+fetCurrent.photo_url+"'> </a> <a class='title'>"+fetCurrent.photo_name+"</a> <div class='com-about'> <span class='comDate'>"+fetCurrent.photo_time+"</span> <p class='readNum'>浏览量：<span>"+fetCurrent.see_mumber+"</span></p><div class='both'></div> </div> </div> </li>";
                  $(".contentTab.active li:last").before(domData);
              }

          },"json")
    });
 })
