// Load the SDK Asynchronously
(function (d) {
  var js, id = 'facebook-jssdk',
    ref = d.getElementsByTagName('script')[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement('script');
  js.id = id;
  js.async = true;
  js.src = "//connect.facebook.net/en_US/all.js";
  ref.parentNode.insertBefore(js, ref);
}(document));

window.fbAsyncInit = function () {
  FB.init({
      appId      : '1657375307834887',
      xfbml      : true,
      version    : 'v2.5'
    });

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
  
  FB.getLoginStatus(function (response) {
    console.log('FB resp:', response, response.status);
    /* Bind event handler only after Facebook SDK had a nice cup of coffee */
    $('#btnLogin').on('click', function () {
      window.activeSession.login({
        before: function () {
          console.log('before login()')
        },
        after: function () {
          console.log('after login()')
        }
      });
    });
  });
};

