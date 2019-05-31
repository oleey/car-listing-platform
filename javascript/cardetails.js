$(function() {
    var $cardetails = $('#cardetails');
    $('#cardofcar').on('click', function(event){
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/cars',
            success:function(cardetails){
                $.each(cardetails, function(i, car){
                    $cardetails.append(car.nameofcar + " " + car.locationofcar)
                });
            },
            error: function(){
               alert('error loading car list');
            }
    
        });

        event.preventDefault();
    });
  });
     
 