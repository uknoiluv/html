var show;

$(document).ready(function(){

  var pos = $('.drag').position();
  pos.x = pos.left;
  pos.y = pos.top;

  var move = {x: 0, y: 0, moveable: false};
  var down = {x: 0, y: 0};

  $('.drag').mousedown(function(event){
    console.log('pos obj', pos);
    console.log('mousedown');
    var that = this;
    // var pos = $(this).position();
    down.x = event.pageX;
    down.y = event.pageY;
    console.log('down obj', down);
    move.moveable = true;

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

  $('.drag').mousemove(function(event){
    console.log('moveable', move.moveable);
    if(move.moveable){  
      console.log('mousemove');
      move.x = down.x - event.pageX;
      move.y = down.y - event.pageY;
      var eventXY = {};
      eventXY.x = event.pageX;
      eventXY.y = event.pageY;
      console.log('down', down, 'eventXY', eventXY, 'move obj', move);
      $(this).offset({top: pos.y - move.y, left: pos.x - move.x});
    }
    // $(this).offset({top: event.pageY - drag.top, left: event.pageX - drag.left});
  });

  $('.drag').mouseup(function(){
    console.log('mouseup');
    move.moveable = false;    
  });

  show = function(){
    console.log('pos obj', pos);
    console.log('down obj', down);
    console.log('move obj', move);
  };

  // $('.drag').mouseout(function(){
  //   move.moveable = false;
  // })

  }
);
