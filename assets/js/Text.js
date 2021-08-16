
class Text {

  constructor() {  }

  addText(textType) {
    
	    switch(textType) {
  		  case 'heading':
  		    this.addHeading();
  		  break;
  		  case 'subheading':
  		   this.addSubheading();
  		  break;
  		   case 'text':
  		    this.addSimpleText();
  		  break;
  		  default:
  		    // code block
		}

    var primaCanvas = new PrimaCanvas();

    primaCanvas.showDeleteIcon();

  }

  addHeading() {

   var headingText = new fabric.IText('Add a heading', { fill: 'black', fontSize:38, left: 370, top: 150, editable: true});

    canvas.add(headingText);
    canvas.setActiveObject(headingText);
    canvas.renderAll();

  }

  addSubheading() {

  	var subheadingText = new fabric.IText('Add a subheading', { fill: 'black', fontSize:24, left: 370, top: 150, editable: true});

    canvas.add(subheadingText);
    canvas.setActiveObject(subheadingText);
    canvas.renderAll();

  }

  addSimpleText() {

  	var simpleText = new fabric.IText('Add a little bit of body text', { fill: 'black', fontSize:16, left: 370, top: 150, editable: true});

    canvas.add(simpleText);
    canvas.setActiveObject(simpleText);
    canvas.renderAll();

  }

  applyFontFamily(fontfamily) {

    canvas.getActiveObject().set("fontFamily", fontfamily);
    canvas.renderAll();

  }

  applyFontSize(fontSize) {

    canvas.getActiveObject().set("fontSize", fontSize);
    canvas.renderAll();

  }

  applyFormatting(format) {

    switch(format) {
        case 'bold':
          this.makeBold();
        break;
        case 'italic':
         this.makeItalic();
        break;
         case 'underline':
          this.makeUnderline();
        break;
        default:
          // code block
    }
  }

  makeBold() {

    var fontWeight = canvas.getActiveObject().get("fontWeight");

    if (fontWeight == "normal") {

        canvas.getActiveObject().set("fontWeight", "bold");

    } else if (fontWeight == "bold"){

        canvas.getActiveObject().set("fontWeight", "normal");

    }
    canvas.renderAll();

  }

  makeItalic() {

    var fontStyle = canvas.getActiveObject().get("fontStyle");

    if (fontStyle == "normal") {

        canvas.getActiveObject().set("fontStyle", "italic");

    } else if (fontStyle == "italic"){

        canvas.getActiveObject().set("fontStyle", "normal");

    }

    canvas.renderAll();

  }

  makeUnderline() {

    var isUnderline = canvas.getActiveObject().get("underline");

    if (isUnderline == false) {

        canvas.getActiveObject().set("underline", true);

    } else if (isUnderline == true){

        canvas.getActiveObject().set("underline", false);

    }

    canvas.renderAll();

  }

  showToolbar() {
    
    $('#text-toolbar').show();
    $('#delete-icon-container').attr('class', 'col-sm-1');

  }

  hideToolbar() {
    
    $('#text-toolbar').hide();

  }

}

 $('#text-toolbar').hide();

$('.text-color').colorpicker({format: 'rgba'}).on('changeColor', function (e) {

     $(this).val('');

     var colorRGB = e.color.toRGB()

     var RGBColorValue = 'rgba('+colorRGB.r+','+colorRGB.g+','+colorRGB.b+','+colorRGB.a+')';

     if (canvas.getActiveObject() != null) {

        canvas.getActiveObject().set("fill", RGBColorValue);

       $(this).val('');

       $(this).css('background-color', RGBColorValue);

     }
     
});

