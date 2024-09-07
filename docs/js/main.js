/*-----------------------------------------------------------------------------------

    CUSTOM JS - FRONT-END SCRIPTS
 
-----------------------------------------------------------------------------------*/

(function ($) {

'use strict';

$(function() {  //same as $(document).ready(); (Document is ready when the only HTML DOM is loaded, NOT its content e.g Images, Videos etc)


/*-----------------------------------------------------------------------------------*/
/*  FOUNDATION FRAMEWORK
/*-----------------------------------------------------------------------------------*/

    $('code').each(function() {
        $(this).text($(this).html());
    });

	/*-----------------------------------------------------------------------------------*/
	/*  SMOOTH SCROLLING
	/*-----------------------------------------------------------------------------------*/

	var $root = $('html, body');

	$('a[href^="#"]').click(function() {
		var href = $.attr(this, 'href');

		$root.animate({
			scrollTop: $(href).offset().top
		}, 800, function () {
			window.location.hash = href;
		});

		return false;
	});

	function headerStuff() {
		if ($(window).scrollTop() > 500) {
			$('#sidebar').addClass('fixed');
		} else {
			$('#sidebar').removeClass('fixed');
		}
	};

	$(document).ready(function () {
		headerStuff();
		$(window).scroll(function () {
			headerStuff();
		});
	});


});




/*novo*/


$(document).ready(function()
{
	document.formulario.email.focus();
	$("#cpf").mask("999.999.999-99");
	$("#nascimento").mask("99/99/9999");
})

    
})(jQuery);

$(document).ready(function()
{
	document.formulario.email.focus();
	$("#cpf").mask("999.999.999-99");
	$("#nascimento").mask("99/99/9999");
})


function numeros(ie, ff) {
    if (ie) {
        tecla = ie;
    } else {
        tecla = ff;
    }
 
    /**
    * 13 = [ENTER]
    * 8  = [BackSpace]
    * 9  = [TAB]
    * 46 = [Delete]
    * 48 a 57 = São os números
    */
    if ((tecla >= 48 && tecla <= 57) || (tecla == 8) || (tecla == 13) || (tecla == 9) || (tecla == 46)) {
        return true;
    }
    else {
		alert("Apenas Numeros sao permitidos");
        return false;
    }
}
function verificar(etapa)
{
	
	d = document.formulario;
	
	if(etapa == 1)
	{
		if(d.email.value != "")
		return true;
		else
		return false;
		
	}
	else if(etapa == 2)
	{
		if(d.nome.value != "" && d.cpf.value != "" && d.nascimento.value != "" && d.cidade.value != "" && d.estado.value != "" && d.senha.value != "" )
		{
			return true;
		}
		else
		return false;
	}
	else if(etapa == 3)
	{
		if(d.cartao_nome.value != "" && d.numero.value != "" && d.mes.value != "" && d.ano.value != "" && d.codigo.value != "" && d.limite.value != "")
		{
			return true;
		}
		else
		return false;
	}
}


function proximo(step)
{
	if(step == 1)
	{
		
		if(verificar(1) == true)
		{
			
			$("#etapa_"+(step-1)).slideUp('fast');
			$("#etapa_"+(step)).slideDown('fast');
			$('.etapas').removeClass("etapa_"+(step-1)+"_bg");
			$('.etapas').addClass("etapa_"+(step)+"_bg");
		}
		else
		{
			alert('Campo email deve ser preenchido!');
		}
	}
	else if(step == 2)
	{
		if(verificar(2) == true)
		{
			$("#etapa_"+(step-1)).slideUp('fast');
			$("#etapa_"+(step)).slideDown('fast');
			$('.etapas').removeClass("etapa_"+(step-1)+"_bg");
			$('.etapas').addClass("etapa_"+(step)+"_bg");
		}
		else
		{
			alert('Todo os campos devem ser preenchidos!');
		}
	}
	else if(step == 3)
	{
		if(verificar(3) == true)
		{
			document.formulario.submit();
		}
		else
		{
			alert('Todo os campos devem ser preenchidos!');
		}
	}
}



