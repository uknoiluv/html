
$(document).ready(function(){

  var pos = $('.drag').position();

  $('.drag').mousedown(function(event){
    var that = this;
    // var pos = $(this).position();
    // console.log('pos', pos);
    console.log('mousedown', event.pageX, event.pageY);
  
    $(document).mouseup(function(event){
      console.log('hit');
      console.log('mouseup', event.pageX, event.pageY);    
    })
    // $(this).offset({top: event.pageY, left: event.pageX});
    // $(that).mousemove(function(){
    //   console.log('pos2', event.pageX, event.pageY)
    //   $(that).offset({top: event.pageX, left: event.pageY});
    // });
    // $(that).mousemove(function(event){
    //   console.log('move', event.pageX, event.pageY);
    //   $(that).mouseup(function(event){
    //     $('.right').mouseover(function(event){
    //       $(this).append(that);
    //     });
    //   })
    // });
  });
  }
);
