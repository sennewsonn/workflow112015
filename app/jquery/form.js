var app = (function(){

	var init = function(){
		setUpListeners();
	};

	var setUpListeners = function(){
		$('form').on('submit', checkForm);
		$('.add-site').on('click', showForm);
		$('.form-bg').on('click', hideForm);
		$('.close').on('click', closeForm);
		$('input, textarea, .input-file-box').on('change', clearForm);
	};


	var showForm = function(){
		$('.form-bg').show();
		$('.add-form').show();
	};

	var hideForm = function(){
		$('.form-bg').hide();
		$('.add-form').hide();
	};

	var closeForm = function(){
		$('.form-bg').hide();
		$('.add-form').hide();
	};

	var clearForm = function(){
		$(this).removeClass('error-border');
	};






	var checkForm = function(e){

		e.preventDefault();

		var form = $(this);
		var items = form.find('input, textarea, .input-file-box').not('.submit-form, .input-file');

		$.each(items, function(index, val){
			var content = $(val).val();

			if(content.length === 0){
				$(this).addClass('error-border');
				showTooltip(this);
			} else {
				$(this).removeClass('error-border');
			} else {
				$(this).removeClass('error-border');
			}
		});
	};

	var showTooltip = function(target){
		var showTooltip = "<div class='error-button'>"+$(target).data('info')+"</div>";
		$(target).before(showTooltip);
	};


	return{
		init:init
	}
}());

app.init();