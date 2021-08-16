
class Shape {

  constructor() {  }

  draw(shape) {
    
	    switch(shape) {
		  case 'circle':
		    this.drawCircle();
		  break;
		  case 'rectangle':
		   this.drawRectangle();
		  break;
		   case 'triangle':
		    this.drawTriangle();
		  break;
		  default:
		    // code block
		}

    this.showProperties();

    var primaCanvas = new PrimaCanvas();

    primaCanvas.showDeleteIcon();

  }

  drawCircle() {

  	 var circle = new fabric.Circle({
            radius: 65,
            fill: '#e0ddd5',
            left: 370,
            top: 150,
            stroke: '#b8b5ae',
            strokeWidth: 3
        });

    canvas.add(circle);
    canvas.setActiveObject(circle);
    canvas.renderAll();

  }

  drawRectangle() {

  	 var rect = new fabric.Rect({
            left: 200,
            left: 370,
            top: 150,
            fill: '#e0ddd5',
            width: 70,
            height: 30,
            strokeWidth: 2,
            stroke: "#b8b5ae",
            rx: 0,
            ry: 0,
            angle: 0,
            scaleX: 3,
            scaleY: 3,
            hasControls: true
        });

        canvas.add(rect);
        canvas.setActiveObject(rect);
        canvas.renderAll();

  }

  drawTriangle() {

  	 var triangle = new fabric.Triangle({
            left: 200,
            left: 370,
            top: 150,
            fill: '#e0ddd5',
            width: 70,
            height: 30,
            strokeWidth: 2,
            stroke: "#b8b5ae",
            rx: 0,
            ry: 0,
            angle: 0,
            scaleX: 3,
            scaleY: 3,
            hasControls: true
        });

        canvas.add(triangle);
        canvas.setActiveObject(triangle);
        canvas.renderAll();

  }

  	changeColor() {

  		var shapeColor = $('#shape-color').val();

        if (canvas.getActiveObject() != null) {

            canvas.getActiveObject().set("fill", shapeColor);
            canvas.renderAll();

        }
  	}

  	setStrokeBorder() {

  		var strokeBorder = parseInt($('#stroke-border').val());

       if (canvas.getActiveObject() != null) {

    	     canvas.getActiveObject().set("strokeWidth", strokeBorder);
    	     canvas.renderAll();

      }
  	}

  	changeStrokeColor() {

  		var strokeColor = $('#stroke-color').val();

        if (canvas.getActiveObject() != null) {

            canvas.getActiveObject().set("stroke", strokeColor);
            canvas.renderAll();

        }
  	}

    showProperties() {

     $('.shape-element-properties').show();

    }

    showToolbar() {
    
    $('#shapes-toolbar').show();
    $('#delete-icon-container').attr('class', 'col-sm-1');

  }

  hideToolbar() {
    
    $('#shapes-toolbar').hide();

  }

}

 $('#shapes-toolbar').hide();

$('.color').colorpicker();
$('.stroke-color').colorpicker();

canvas.on('mouse:down', function(options) {

  if (options.target ) {

    if (options.target.type == 'circle' || options.target.type == 'rect' || options.target.type == 'triangle') {

        primaDesigner.showProperties();

    }

  }

});

$('.shape-color').colorpicker({format: 'rgba'}).on('changeColor', function (e) {

     $(this).val('');

     var colorRGB = e.color.toRGB()

     var RGBColorValue = 'rgba('+colorRGB.r+','+colorRGB.g+','+colorRGB.b+','+colorRGB.a+')';

     if (canvas.getActiveObject() != null) {

        canvas.getActiveObject().set("fill", RGBColorValue);

       $(this).val('');

       $(this).css('background-color', RGBColorValue);

     }
     
});

$('.stroke-color').colorpicker({format: 'rgba'}).on('changeColor', function (e) {

     $(this).val('');

     var colorRGB = e.color.toRGB()

     var RGBColorValue = 'rgba('+colorRGB.r+','+colorRGB.g+','+colorRGB.b+','+colorRGB.a+')';

     if (canvas.getActiveObject() != null) {

        canvas.getActiveObject().set("stroke", RGBColorValue);

       $(this).val('');

       $(this).css('background-color', RGBColorValue);

     }
     
});

