$(document).ready(function(){


		$('#flecha').click(function() {
		$('#precios').animatescroll({'scrollSpeed':'4000', 'easing':'easeInCubic'});
	});

	var message = $("#message");
	var name = $("#name");
	var email = $("#email");

	$('form').submit(function() {
		var boton = $(this).find(':submit');
		boton.attr('disabled', 'true');
		boton.val('Enviando');

	});// FIN DE CAMBIO DE TEXTO BOTON
    message.on("focusout", function(){
        if($(this).val() == ""){
                message.css({"background": "#FFCECF",
                    "border": "2px solid #FF726C"});
                $("#ok1").remove();
                $("#cancel1").remove();
                $("#bad-message").remove();
                message.attr("placeholder", "Debes escribir un mensaje");
                message.before('<p id="bad-message">! Mensaje incorrecto</p>');
                $("#bad-message").css({"color": "red",
                    "margin-bottom": "0"});
                message.after("<img id='cancel1' src='static/img/Validate/cancel.png' width='28' height='28' /> ")
        }
        else{
                message.css({"background": "#C8FDD4",
                    "border": "2px solid #52FD8B"});
                $("#cancel1").remove();
                $("#ok1").remove();
                $("#bad-message").remove();
                message.after("<img id='ok1' src='static/img/Validate/check.png' width='28' height='28' /> ")

        }
    });
    email.on("focusout", function(){
        if($(this).val() == "" || $("#email").val().indexOf("@") == -1 || $("#email").val().indexOf(".") == -1){
                email.css({"background": "#FFCECF",
                    "border": "2px solid #FF726C"});
                $("#ok2").remove();
                $("#cancel2").remove();
                $("#bad-email").remove();
                email.attr("placeholder", "Debes escribir tu email");
                email.before('<p id="bad-email">! Email incorrecto</p>');
                $("#bad-email").css({"color": "red",
                    "margin-bottom": "0"});
                email.after("<img id='cancel2' src='static/img/Validate/cancel.png' width='28' height='28' /> ")

        }
        else{
                email.css({"background": "#C8FDD4",
                    "border": "2px solid #52FD8B"});
                $("#cancel2").remove();
                $("#ok2").remove();
                $("#bad-email").remove();
                $("#bad-email").remove();
                email.after("<img id='ok2' src='static/img/Validate/check.png' width='28' height='28' /> ")

        }
    });
    name.on("focusout", function(){
        if($(this).val() == ""){
                name.css({"background": "#FFCECF",
                    "border": "2px solid #FF726C"});
                $("#ok3").remove();
                $("#cancel3").remove();
                $("#bad-name").remove();
                name.attr("placeholder", "Debes escribir tu nombre");
                name.before('<p id="bad-name">! Nombre incorrecto </p>');
                $("#bad-name").css({"color": "red",
                    "margin-bottom": "0"});
                name.after("<img id='cancel3' src='static/img/Validate/cancel.png' width='28' height='28' /> ")

        }
        else{
                name.css({"background": "#C8FDD4",
                    "border": "2px solid #52FD8B"});
                $("#cancel3").remove();
                $("#ok3").remove();
                $("#bad-name").remove();
                name.after("<img id='ok3' src='static/img/Validate/check.png' width='28' height='28' /> ")

        }
    });//FIN VALIDACIÓN VISUAL EMAIL

	$("#range").change(function(){
		$("#contador").html( this.value + "€");
	});
});//FIN DE READY
