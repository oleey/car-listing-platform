$(function() {
    var $getnameofcar = $('#getnameofcar');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/cars',
        success:function(getnameofcar){
            $.each(getnameofcar, function(i, car){
                $getnameofcar.append(car.nameofcar + " ")
            });
        },
        error: function(){
           alert('error loading car list');
        }

    });
  });
     
 