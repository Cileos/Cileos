function getLang() {
	if (navigator.appName == 'Netscape')
	  var language = navigator.language;
	else
	  var language = navigator.browserLanguage;

	if (language.indexOf('en') > -1) document.location.href = 'en/index.html';
	else if (language.indexOf('de') > -1) document.location.href = 'de/index.html';
	else 
	  document.location.href = 'en/index.html';
}

function despamitizeEAddress() {
  var parts = ["i", "n", "f", "o", "cileos", "com"];
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
  // make legal disclaimer collapsible
  $('#legalDisclaimerLink').click(function(event){
      $('#legalDisclaimer').toggle();
      $(event.currentTarget).find("a").blur();
      $('#legalDisclaimerLink').toggleClass('collapsibleHeaderClosed');
      $('#legalDisclaimerLink').toggleClass('collapsibleHeaderOpen');
    });
    
  // substitute email link
  $('#emailLink').html("<a href='mailto:"+despamitizeEAddress()+"'>Email</a>");
    
  // show content only now, when everything is set up
  $("#pagewrapper").show();
});
