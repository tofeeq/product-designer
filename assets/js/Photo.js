
class Photo {

  constructor() {  }

  getPhotos() {

  	this.getUploadedPhotos();
  	this.getSystemPhotos();

  }

  getUploadedPhotos() {

  	$.post(PRIMA_URL+'/uploaded-photos.php').done(function( response ) {
               
          $('#uploaded-photos').html(response);           

          if (response.length > 0) {

          	  $('#uploads-heading').show();
              $('#uploaded-photos').show();

         } else {
            $('#uploads-heading').hide();  
            $('#uploaded-photos').hide();
         }
          	    

                
     });

  }

  getSystemPhotos() {

  	$.post(PRIMA_URL+'/system-photos.php').done(function( response ) {
               
          $('#system-photos').html(response);  

          $("#photos-container").mCustomScrollbar({
                    setHeight:400,
                    theme:"minimal-dark"
          });  

                
     });

  }
  

}