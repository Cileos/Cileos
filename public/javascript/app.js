function despamitizeEAddress() {
  var parts = ["i", "n", "f", "o", "fournova", "com"];
  var address = "";
  for(var i=0; i<parts.length; i++){
    if(i == (parts.length-2)){
      address += "@"+parts[i];
    }else if(i == (parts.length-1)){
      address += "."+parts[i];
    }else{
      address += parts[i];
    }
  }
  return address;
}

$(function(){
  // margin for logo
  var logoMargin = ($(window).height()/3)-(parseInt($("#logoContainer").css('height'))/2);
  $("#pageContent").css('paddingTop', logoMargin+'px');
  $("#contentWrapper").css('backgroundPosition', '50px '+(logoMargin-70)+'px');
  
  // event bindings
  $('#contactLink').click(function(event){
      $('#imprint').hide();
      $('#legalDisclaimer').hide();
      $('#contact').show();
      event.currentTarget.blur();
    });
    
  $('#imprintLink').click(function(event){
      $('#contact').hide();
      $('#legalDisclaimer').hide();
      $('#imprint').show();
      $('#formMessage').hide();
      event.currentTarget.blur();
    });
    
  $('#legalDisclaimerLink').click(function(event){
      $('#legalDisclaimer').toggle();
      $(event.currentTarget).find("a").blur();
      $('#legalDisclaimerLink').toggleClass('collapsibleHeaderClosed');
      $('#legalDisclaimerLink').toggleClass('collapsibleHeaderOpen');
    });
    
  $('#logo').click(function(event){
      $('#contact').hide();
      $('#legalDisclaimer').hide();
      $('#imprint').hide();
      $('#formMessage').hide();
      event.currentTarget.blur();
    });
    
  // substitute email link
  $('#emailLink').html("<a href='mailto:"+despamitizeEAddress()+"'>Email</a>");
    
  // contact form submission
  $('#contactForm').submit(function(event){
    var name = $('#formFieldName').attr('value');
    var email = $('#formFieldEmail').attr('value');
    var phone = $('#formFieldPhone').attr('value');
    var message = $('#formFieldMessage').attr('value');
    if(name == false || email == false || message == false) {
          // show error message
        $('#formMessage').text("Please fill out all required fields.").show();
     }else{
       // send form
       $('#formMessage').hide();
       $('#sendButton').hide();
       $('#loaderWheel').show();
       $.post("sendMail.php", { name: name, email: email, message: message, phone: phone },
          function(data){
            $('#formMessage').text(data).show();
            $('#loaderWheel').hide();
            $('#sendButton').show();
          });
     }
     
     event.currentTarget.blur();
     // the data is sent via ajax
     event.preventDefault();
  });
  
    
  // show content only now, when everything is set up
  $("#contentWrapper").show();
});
