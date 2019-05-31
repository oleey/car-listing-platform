$(function() {
   var $nameofcar = $('#nameofcar');
   var $locationofcar = $('#locationofcar');
   var $priceofcar = $('#priceofcar');
   var $conditionOfCar = $('#conditionofcar');
   var $colorofcar = $('#colorofcar');
   var $mileageofcar = $('#mileageofcar');
   var $yearofcar = $('#yearofcar');
   var $bodytypeofcar = $('#bodytypeofcar');
   var $drivetypeofcar =$('#drivetypeofcar');
   var $fuelofcar = $('#fuelofcar');
   var $interiortypeofcar = $('#interiortypeofcar');
   var $doorcountofcar = $('#doorcountofcar');
   var $drivesetupofcar = $('#drivesetupofcar');
   var $transmissionofcar = $('#transmissionofcar');
    $('#uploadbtn').on('click', function(event){
      var car = {
         nameofcar: $nameofcar.val(),
         locationofcar: $locationofcar.val(),
         priceofcar: $priceofcar.val(),
         conditionofcar: $conditionOfCar.val(),
         colorofcar: $colorofcar.val(),
         mileageofcar: $mileageofcar.val(),
         yearofcar: $yearofcar.val(),
         bodytypeofcar: $bodytypeofcar.val(),
         drivetypeofcar: $drivetypeofcar.val(),
         fuelofcar: $fuelofcar.val(),
         interiortypeofcar: $interiortypeofcar.val(),
         doorcountofcar: $doorcountofcar.val(),
         drivesetupofcar: $drivesetupofcar.val(),
         transmissionofcar: $transmissionofcar.val(),
      };
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/cars',
            data: car,
            dataType: 'json',
            success:function(newUpdate){
               // $getnameofcar.append('<li>name: ' + newUpdate.nameofcar + '</li>')
               window.location.href = 'home.html';
               
            },
            error: function(){
               alert('error uploading car');
            }

        });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });
 });

   //   $(function() {
   //      $('#uploadbtn').fadeToggle(1000).fadeToggle(1000);
   //   });
   //  $(document).ready(function(){
   //     //process the form
   //     $('form').submit(function(event))

   //  });

    
    
