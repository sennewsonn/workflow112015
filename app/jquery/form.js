var app = (function(){

	var init = function(){
		setUpListeners();
	};

	var setUpListeners = function(){
		$('form').on('submit', checkForm);
		$('.add-site').on('click', showForm);
		$('.form-bg, .close').on('click', hideForm);
		$('.error-close').on('click', hideError);
		$('.add-title').on('click', showSuccess);
		$('.form-bg, .success-close').on('click', hideSuccess);
		$('input, textarea, .input-file-box').on('change', clearForm);
		$('.fd-reset').on('click', resetForm);
		$('form').on('focusout', controlForm);
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

	var resetForm = function(){
		$('.tooltip').remove();
		$('.form').removeClass('error-border');
	};

	var showSuccess = function(){
		$('.add-form').hide();
		$('.project-success-box').show();
	};

	var checkForm = function(e){
		e.preventDefault();

		var form = $(this);
		var items = form.find('input, textarea, .input-file-box').not('.submit-form, .input-file, .fd-submit');

		var flag = true;

		$.each(items, function(index, val){
			var content = $(val).val();

			if(content.length === 0){
				$(this).addClass('error-border');
				showTooltip(this);
				$('.project-error').show();
				flag = false;
			} else {
				$(this).removeClass('error-border');
				$(this).siblings('.tooltip').remove();
			}
		});

		if(flag = true){
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
			console.log('гуд');
			}
		).fail( function(){
			console.log('фэйл');
		});

		console.log(data);
	};


	var controlForm = function(e){
		e.preventDefault();

		var form = $(this);
		var items = form.find('input, textarea, .input-file-box').not('.submit-form, .input-file, .fd-submit');

		$.each(items, function(index, val){
			var content = $(val).val();

			if(content.length === 0){
				$(this).addClass('error-border');
				showTooltip(this);
			} else {
				$(this).removeClass('error-border');
				$(this).siblings('.tooltip').remove();	
			};
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

app.init();

