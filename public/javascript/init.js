$(function(){
	if (navigator.appName == 'Netscape')
	  var language = navigator.language;
	else
	  var language = navigator.browserLanguage;

	if (language.indexOf('en') > -1) document.location.href = 'en/landing.html';
	else if (language.indexOf('de') > -1) document.location.href = 'de/landing.html';
	else 
	  document.location.href = 'en/landing.html';
});
