$(function() {
  var carid = [];
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/cars',
    success:function(data){
        $.each(data, function(i, item){
            $('#car_list').append(`
            <div class="column">
            <div id="cardofcar" class="card">
                <img src="image1.jpg" alt="ferrari">
                <h1 id="getnameofcar">${item.nameofcar}</h1>
                <h1 id="getlocation">${item.locationofcar}</h1> 
                <button id="${item.id}" class="morebtn tt" type="submit">More...</button>
                <button class="editbtn" type="menu">Edit</button>
                <button class="deletebtn ${item.id}" type="submit">Delete</button>
              </div>
          </div>
            `);            
        });
        getItem();
        deleteListing();
    },
    error: function(){
       alert('error loading car list');
    }
});
});

//update Listing
function updateListing(event){
  var btnArr = $(".editbtn").toArray();
  $.each(btnArr, function(i, val) {
    var id = i + 1;
    
  });

}

// Delete Listing
function deleteListing(event) {
  // event.preventDefault();
  var btnArr = $(".deletebtn").toArray();
    $.each(btnArr, (i, val) => {
      var id = i + 1;
      console.log(  $(`.${id}`));
      $(`.${id}`).css('color', 'red')
      $(`.${id}`).click(() => {
      //  Pop up a confirmation dialog
      var confirmation = confirm('Are you sure you want to delete this user?');

  // Check and make sure the user confirmed
  if (confirmation === true) {
    // If they did, do our delete
    $.ajax({
      type: 'DELETE',
      url: `http://localhost:3000/cars/${id}`
    }).done(function( response ) {

    });

  }
  else {

    // If they said no to the confirm, do nothing
    return false;

  }
      });

 
    });
  }

// view item
function getItem(){
  var btnArr = $(".tt").toArray();
  // $.each(data, function(i, item){

  $.each(btnArr, function(i, val) {
    var id = i + 1;
    $(`#${id}`).click(() => {
      document.getElementById("myModal").style.display = "block";
      document.getElementsByClassName("close")[0].onclick = function() {
  document.getElementById("myModal").style.display = "none";
}
      $.ajax({
        type:"GET",
        url: `http://localhost:3000/cars/${id}`
      }).done((data) => {
        // console.log(data.nameofcar)
        $('#myModal').append(`
      <div class="modal-content">
            <h1 id="getnameofcar">Name of car: ${data.nameofcar}</h1>
            <h1>Location of car: ${data.locationofcar}</h1>
            <h1>Price of the car: ${data.priceofcar}</h1>
            <h1>Condition of the car: ${data.conditionofcar}</h1>
            <h1>Color of the car: ${data.colorofcar}</h1>
            <h1>Mileage of car (km): ${data.mileageofcar}</h1>
            <h1>Year: ${data.yearofcar}</h1>
            <h1>Body Type: ${data.bodytypeofcar}</h1>
            <h1>Drive Type of car: ${data.drivetypeofcar}</h1>
            <h1>Fuel of car: ${data.fuelofcar}</h1>
            <h1>Interior type of car: ${data.interiortypeofcar}</h1>
            <h1>Door Count of car: ${data.doorcountofcar}</h1>
            <h1>Transmission of car: ${data.transmissionofcar}</h1>
            <h1>Drive setup of car: ${data.drivesetupofcar}</h1>
        </div>                 
        `); 
      })
    })
  })
}
