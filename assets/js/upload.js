class FileUploader {

  constructor() {  }

  uploadImage(uploadForm) {
    
    var formData = new FormData(uploadForm);

    $('#file-upload-loader').show();

    $.ajax({
        type:'POST',
        url: $('#upload-frm').attr('action'),
        data:formData,
        cache:false,
        contentType: false,
        processData: false,
        success:function(data){

            $('#image-preview').attr('src',data);
            $('#image-preview-container').show();
            $('#file-upload-loader').hide();

        },
        error: function(data){
            console.log("error");
            console.log(data);
        }
    });

  }

  addImageIntoCanvas(image) {
    
    var imageURL  = image.src;

        fabric.Image.fromURL(imageURL, function (oImg) {
            
            let scale = 200 / oImg.width;

            oImg.set({
                scaleX: scale,
                scaleY: scale,
                top:50,
                left:175
            });

            canvas.add(oImg);

            canvas.setActiveObject(oImg);

            canvas.renderAll();

            var primaCanvas = new PrimaCanvas();

            primaCanvas.showDeleteIcon();

    });

  }


}

document.getElementById('btn-upload').addEventListener('click', openDialog);

function openDialog() {

  document.getElementById('upload-file-id').click();

}

$(document).ready(function(){

    $("#upload-file-id").on('change',function(){ //upload-frm

        $("#upload-frm").submit();

    });

    $('#upload-frm').on('submit',(function(e) {
        
        e.preventDefault();
        
        primaDesigner.uploadImage(this);

    }));  

});

