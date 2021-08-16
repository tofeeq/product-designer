
class PrimaDesigner {

  constructor() { }

  uploadImage(uploadForm) {

    var fileUploader = new FileUploader();

    fileUploader.uploadImage(uploadForm);

  }

  addImageIntoCanvas(image) {

    var fileUploader = new FileUploader();

    fileUploader.addImageIntoCanvas(image);
    
  }

   deleteObjectFromCanvas() {

    var fileUploader = new FileUploader();

    fileUploader.deleteObjectFromCanvas();
    
  }

  draw(shapeType) {

    var shape = new Shape();

    shape.draw(shapeType);

  }

	changeColor() {

		var shape = new Shape();

    shape.changeColor();
	}

	setStrokeBorder() {

		var shape = new Shape();

    shape.setStrokeBorder();

	}

	changeStrokeColor() {

		var shape = new Shape();

    shape.changeStrokeColor();
	}

  showProperties() {

    var shape = new Shape();

    shape.showProperties();

  }

  deleteObjectFromCanvas() {
    
    var primaCanvas = new PrimaCanvas();

    primaCanvas.deleteObjectFromCanvas();

  }

  getPhotos() {

    var photo = new Photo();

    photo.getPhotos();

    this.showToolbar('photos');

  }

  addText(textType) {

    var text = new Text();

    text.addText(textType);

  }

  applyFontFamily(fontfamily) {

    var text = new Text();

    text.applyFontFamily(fontfamily);

  }

   applyFontSize(obj) {

    var text = new Text();

    text.applyFontSize(obj.value);

    obj.nextElementSibling.value = obj.value;

  }

   applyFormatting(format) {

    var text = new Text();

    text.applyFormatting(format);

  }

  showToolbar(module) {
    
      var text = new Text();
      var shape = new Shape();
      var primaCanvas = new PrimaCanvas();

      if (module == 'text') {

          text.showToolbar();
          shape.hideToolbar();

      } else if (module == 'shapes') {

          shape.showToolbar();
          text.hideToolbar();

      } else {

        text.hideToolbar();
        shape.hideToolbar();
        primaCanvas.hideDeleteIcon();

      }
  } 

}


$('html').keyup(function(e){

    if(e.keyCode == 46) {

        if (canvas.getActiveObject() != null) {

          var primaCanvas = new PrimaCanvas();
          
          primaCanvas.deleteObjectFromCanvas();

       }

    }
});
