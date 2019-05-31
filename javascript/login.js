$(function() {
    var $emailofdealer = $('#emailofdealer');
    var $passwordofdealer = $('#passwordofdealer');
    var $error_messages = $('#error_messages');

     $('#loginbtn').on('click', function(event){
         console.log('login button pressed');
 
       var user = {
        emailofdealer: $emailofdealer.val(),
        passwordofdealer: $passwordofdealer.val(),
       };

       if(user.emailofdealer===""){
           console.log('Enter an email address ');
           $error_messages.append('Enter an email address ')
       }else if(user.passwordofdealer ===""){
        $error_messages.append('Enter a password ')
       }else{

        
        //    console.log('we typed something');
        // if(user.emailofdealer === ){}
        // $.ajax({
        //     type: 'POST',
        //     url: 'http://localhost:3000/users',
        //     data: user,
        //     dataType: 'json',
        //     success:function(newLogin){
        //         if(newLogin.emailofdealer === emailofdealer){
        //             console.log('equal');
        //         }
        //     //    $getnameofcar.append('<li>name: ' + newUpdate.nameofcar + '</li>')
        //     },
        //          error: function(){
        //             alert('error uploading car');
        //          }
     
        //      });

        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/cars' ,
            success:function(userdetails){
                $.each(userdetails, function(i, userdetails){
                    console.log('success');
                    console.log(userdetails.emailofdealer + " " + user.emailofdealer);
                    // window.location.href = 'uploadcar.html';
                    if(userdetails.emailofdealer === user.emailofdealer){
                        console.log('you can log in');
                        window.location.href = 'uploadcar.html';
                    }else {

                    }
                    // $cardetails.append(car.nameofcar + " " + car.locationofcar)
                });
            },
            error: function(){
               alert('error loading car list');
            }
    
        });
       }

       console.log(user);

       
 
         // stop the form from submitting the normal way and refreshing the page
         event.preventDefault();
     });
  });
 
     
     
 
     
 