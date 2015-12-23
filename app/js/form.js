 var app = (function(){


	var init = function(){
		setUpListeners();
	};

	var setUpListeners = function(){
		$('form').on('submit', checkForm);
		$('.add-site').on('click', showForm);
		$('.form-bg, .close').on('click', hideForm);
		$('.error-close').on('click', hideError);
		$('.form-bg, .success-close').on('click', hideSuccess);
		$('input, textarea, .input-file').on('change', clearForm);
		$('.input-file').on('change', clearFile);
		$('.fd-reset').on('click', resetForm);
		$('.input-file').on('change', ShowText);

	};


	var showForm = function(){
		$('.form-bg').show();
		$('.add-form').show(200);
	};

	var hideForm = function(){
		$('.form-bg').hide();
		$('.add-form').hide();
	};

	var hideError = function(){
		$('.project-error').hide();
	};

	var hideSuccess = function(){
		$('.form-bg').hide();
		$('.project-success-box').hide();
	};

	var clearForm = function(){
		$(this).removeClass('error-border');
		$(this).siblings('.tooltip').remove();	
	};

	var clearFile = function(){
		$('.input-file-box').removeClass('error-border');
	};

	var resetForm = function(){
		$('.tooltip').remove();
		$('.form').removeClass('error-border');
	};

	var ShowText = function(){
		var textInBox = $(this).val();
		$('.text-file-box').html(textInBox.substring(12));

	};


	var checkForm = function(e){
		e.preventDefault();

		var form = $(this);
		var items = form.find('input, textarea, .input-file').not('.submit-form, .fd-submit');

		var flag = true;

		$.each(items, function(index, val){
			var content = $(val).val();
			var that = this;

			if($(val).attr('type') == 'file'){
					that = $(that).siblings('.input-file-box');
				};

			if(content.length === 0){			
				$(that).addClass('error-border');
				showTooltip(that);
				flag = false;			
			} else {
				$(that).removeClass('error-border');
				$(that).siblings('.tooltip').remove();
			} 
		});

		if(flag == true){
			submitForm(form);
		}		
	};	


	var submitForm = function(form){
		var url = form.attr('action');
		var data = form.serialize();

		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data
		}).done(
			function(data){
			$('.add-form').hide();
			$('.project-success-box').show();
			}
		).fail( function(){
			$('.project-error').show();
		});
	};

	var showTooltip = function(target){
		var showTooltip = "<div class='tooltip'><div class='error-button'>"+$(target).data('info')+"</div></div>";
		
		if($(target).siblings('.tooltip').length === 0){
			if($(target).data('direction') === 'right') {
				$(target).before(showTooltip);


			} else if($(target).data('direction') === 'left') {
				$(target).before(showTooltip);
				$(target).siblings('.tooltip').addClass('tooltip-left');
			};
		}; 		
	};


	return{
		init:init
	}
}());

	$(document).ready(function(){
	  app.init();
	  $('input, textarea').placeholder();
	});