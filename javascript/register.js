$(function(){
    var $error_messages = $('#error_messages');
   var $nameofdealer = $('#nameofdealer');
   var $emailofdealer = $('#emailofdealer');
   var $passwordofdealer = $('#passwordofdealer');
   var $phonenumberofdealer = $('#phonenumberofdealer');
   $('#registerbtn').on('click', function(event){
    var user = {
        nameofdealer: $nameofdealer.val(),
        emailofdealer: $emailofdealer.val(),
        passwordofdealer: $passwordofdealer.val(),
        phonenumberofdealer: $phonenumberofdealer.val(),
     };

     if(user.emailofdealer===""){
        console.log('Enter an email address ');
        $error_messages.append('Enter an email address ')
    }else if(user.passwordofdealer ===""){
     $error_messages.append('Enter a password ')
    }else{
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/users',
            data: user,
            dataType: 'json',
            success:function(newUser){
            //    $getnameofcar.append('<li>name: ' + newUpdate.nameofcar + '</li>')
                console.log("Registration successful");
               window.location.href = 'uploadcar.html';
            },
            error: function(){
               alert('error uploading car');
            }
    
        });
    }
       // stop the form from submitting the normal way and refreshing the page
       event.preventDefault();
   });
});