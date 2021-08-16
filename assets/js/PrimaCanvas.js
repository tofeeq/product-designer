
class PrimaCanvas {

  constructor() {  }

  hideDeleteIcon() {

  	if (canvas.getObjects().length == 0) {

  		$('.delete-icon').hide();

  	}

  }

  showDeleteIcon() {

  	if (canvas.getObjects().length > 0) {

  		$('.delete-icon').show();

  	}

  }

  deleteObjectFromCanvas() {
    
    canvas.remove(canvas.getActiveObject());

    this.hideDeleteIcon();

  }
  

}