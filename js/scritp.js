function fechaActual(){
    let fecha = new Date();
    let ano = fecha.getFullYear();
}


/*Agremos codigo  para chat*/
<!-- Load Facebook SDK for JavaScript -->
      <div id="fb-root"></div>
      <script>
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v6.0'
          });
        };

        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));</script>

      <!-- Your customer chat code -->
      <div class="fb-customerchat"
        attribution=setup_tool
        page_id="153456165207640"
  theme_color="#0084ff"
  logged_in_greeting="Hola, En que podemos ayudarte..!!"
  logged_out_greeting="Hola, En que podemos ayudarte..!!">
      </div> 