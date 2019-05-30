$(function() {
    updatePage();
});

function updatePage(){
    var $cardofcar = $('#cardofcar');
    var $getnameofcar = $('#getnameofcar')
   var $getlocation = $('#getlocation');
   var $cardetails = $('#cardetails');
   
   $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/cars',
      success:function(data){
          $.each(data, function(i, item){
            console.log(item.nameofcar);
            console.log(item);
            console.log(data);
              $('#car_list').append(`
              <div class="column">
              <div id="cardofcar" class="card">
                  <img src="image1.jpg" alt="ferrari">
                  <h1 id="getnameofcar">${item.nameofcar}</h1>
                  <h1 id="getlocation">${item.locationofcar}</h1>
                </div>
            </div>
              `);
          });
      },
      error: function(){
         alert('error loading car list');
      }

  });

}

