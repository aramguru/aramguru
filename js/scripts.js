function createBuild($selector) {

	var hero = $selector.data('hero')
	var talents = String($selector.data('build'));

	$.getJSON( 'lib/hero/' + hero + '.json', function(data){

		console.log(data['talents'][1][talents[0]-1])

		var html = 
		'<div class="talent">'
			+'<img src="lib/images/talents/' + data['talents'][1][talents[0]-1]['icon'] + '" />'
			+'<div class="name">' + data['talents'][1][talents[0]-1]['name']
				+ '<div class="description">' + data['talents'][1][talents[0]-1]['description'] + '</div>'
			+ '</div>'
		+'</div>'

		+'<div class="talent">'
			+'<img src="lib/images/talents/' + data['talents'][4][talents[1]-1]['icon'] + '" />'
			+'<div class="name">' + data['talents'][4][talents[1]-1]['name']
				+ '<div class="description">' + data['talents'][4][talents[1]-1]['description'] + '</div>'
			+ '</div>'
		+'</div>'

		+'<div class="talent">'
			+'<img src="lib/images/talents/' + data['talents'][7][talents[2]-1]['icon'] + '" />'
			+'<div class="name">' + data['talents'][7][talents[2]-1]['name']
				+ '<div class="description">' + data['talents'][7][talents[2]-1]['description'] + '</div>'
			+ '</div>'
		+'</div>'

		+'<div class="talent">'
			+'<img src="lib/images/talents/' + data['talents'][10][talents[3]-1]['icon'] + '" />'
			+'<div class="name">' + data['talents'][10][talents[3]-1]['name']
				+ '<div class="description">' + data['talents'][10][talents[3]-1]['description'] + '</div>'
			+ '</div>'
		+'</div>'

		+'<div class="talent">'
			+'<img src="lib/images/talents/' + data['talents'][13][talents[4]-1]['icon'] + '" />'
			+'<div class="name">' + data['talents'][13][talents[4]-1]['name']
				+ '<div class="description">' + data['talents'][13][talents[4]-1]['description'] + '</div>'
			+ '</div>'
		+'</div>'

		+'<div class="talent">'
			+'<img src="lib/images/talents/' + data['talents'][16][talents[5]-1]['icon'] + '" />'
			+'<div class="name">' + data['talents'][16][talents[5]-1]['name']
				+ '<div class="description">' + data['talents'][16][talents[5]-1]['description'] + '</div>'
			+ '</div>'
		+'</div>'

		+'<div class="talent">'
			+'<img src="lib/images/talents/' + data['talents'][20][talents[6]-1]['icon'] + '" />'
			+'<div class="name">' + data['talents'][20][talents[6]-1]['name']
				+ '<div class="description">' + data['talents'][20][talents[6]-1]['description'] + '</div>'
			+ '</div>'
		+'</div>';

		$selector.append(html);

		tooltips();

	});

}

function tooltips(){
	$('.build .talents .talent').hover(function(){
		$(this).children('.name').show();
	}, function () {
		$(this).children('.name').hide();
	});

	$('ta .talent').hover(function(){
		$(this).children('.description').show();
	}, function () {
		$(this).children('.description').hide();
	});

	$('ab .talent').hover(function(){
		$(this).children('.description').show();
	}, function () {
		$(this).children('.description').hide();
	});
}


$(function(){

	//$('body').find('*:contains("hogger")').each(function(){
	//	console.log('found');
	//});

	//$($(document).html().replace('hogger', 'lainogger'));

	//$('.tabs .tab .content').addClass('d-none');

	/*$('t').each(function(){
		var data = $(this).data('t').split(',');
		var hero = data[0];
		var Hero = hero.charAt(0).toUpperCase() + hero.slice(1);
		var type = data[1];
		if(type == 'a') {
			var ability = data[2];
		} else {
			var level = data[2];
			var talent = data[3]-1;
		}
		var el = $(this);

		$.getJSON( 'lib/hero/' + hero + '.json', function(data){

			console.log(hero);
			console.log(type);
			console.log(ability);
			console.log(level);
			console.log(talent);

			if(type == 'a') {

				console.log(data.abilities[Hero][ability]['icon']);
				
				//var html =
				//'<div class="talent">'
				//	+'<img src="lib/images/talents/' + data.abilities.ability.icon + '" />'
				//	+'<div class="name">' + data.abilities.ability.name
				//		+ '<div class="description">' + data.abilities.ability.description + '</div>'
				//	+ '</div>'
				//+'</div>';

			} else if(type == 't') {

				var html =
				'<div class="talent">'
					+'<img src="lib/images/talents/' + data.talents[level][talent]['icon'] + '" />'
					+'<div class="name">' + data.talents[level][talent]['name']
						+ '<div class="description">' + data.talents[level][talent]['description'] + '</div>'
					+ '</div>'
				+'</div>';

			}

			$(el).append(html);

			tooltips();

		});

	});*/

	$('ta').each(function(){
		
		var data = $(this).text().split(',');
		var hero = data[0];
		var Hero = hero.charAt(0).toUpperCase() + hero.slice(1);
		var level = data[1];
		var talent = data[2]-1;
		var el = $(this);

		$.getJSON( 'lib/hero/' + hero + '.json', function(data){

			var icon = data.talents[level][talent]['icon'];
			var name = data.talents[level][talent]['name'];
			var desc = data.talents[level][talent]['description'];

			var html = 
			'<div class="icon" style="background-image: url(lib/images/talents/' + icon + ')">'
				//+ '<img src="lib/images/talents/' + icon + '" />'
			+ '</div>'
			+ '<div class="name">' + name + '</div>'
			+ '<div class="description">'
				+ '<div class="d-icon">'
					+ '<img src="lib/images/talents/' + icon + '" />'
				+ '</div>'
				+ '<div class="d-name">' + name + '</div>'
				+ '<div class="d-text">' + desc + '</div>'
			+ '</div>'

			$(el).html(html);

			tooltips();

		});
		
	});

	$('ab').each(function(){
		
		var data = $(this).text().split(',');
		var hero = data[0];
		var Hero = hero.charAt(0).toUpperCase() + hero.slice(1);
		var ability = data[1];
		var el = $(this);

		$.getJSON( 'lib/hero/' + hero + '.json', function(data){

			console.log(data.abilities[Hero][ability]);
			var icon = data.abilities[Hero][ability]['icon'];
			var name = data.abilities[Hero][ability]['name'];
			var desc = data.abilities[Hero][ability]['description'];

			var html = 
			'<div class="icon" style="background-image: url(lib/images/talents/' + icon + ')">'
				//+ '<img src="lib/images/talents/' + icon + '" />'
			+ '</div>'
			+ '<div class="name">' + name + '</div>'
			+ '<div class="description">'
				+ '<div class="d-icon">'
					+ '<img src="lib/images/talents/' + icon + '" />'
				+ '</div>'
				+ '<div class="d-name">' + name + '</div>'
				+ '<div class="d-text">' + desc + '</div>'
			+ '</div>'

			$(el).html(html);

			tooltips();

		});
		
	});

	$('he').each(function(){
		
		var hero = $(this).text();
		var el = $(this);

		$.getJSON( 'lib/hero/' + hero + '.json', function(data){

			console.log(data);

			var html = 
			'<div class="icon" style="background-image: url(lib/images/heroes/' + data.icon + ')">'
				//+ '<img src="lib/images/heroes/' + data.icon + '" />'
			+ '</div>'
			+ '<div class="name">' + data.name + '</div>'

			$(el).html(html);

		});
		
	});

	$('.tabs .tab button.title').click(function(){

		if(!$(this).parent('.tab').hasClass('active') && !$(this).parent('.tab').hasClass('disabled')) {

			$('.tabs .tab').removeClass('active');
			$('.tabs .tab .content').hide();
			//$('.talents').empty();

			$(this).siblings('.content').show();
			$(this).parents('.tab').addClass('active');

			$(this).siblings('.content').children('.build').each(function(){
				if(!$(this).hasClass('loaded')) {
					createBuild($('.talents', this));
					$('.talents', this).addClass('loaded');
				}
			});

		}

	});

	$('.build .talents .talent').hover(function(){
		console.log($(this).siblings('.name'))
	});



	$('ab, ta').hover(function(){

		var cont_pos = $('#container').offset();
		var cont_wid = $('#container').innerWidth() - 28 * 2;
		var pare_pos = $(this).offset();
		var left = pare_pos.left - cont_pos.left - 28;
		var $el = $(this).children('.description');

		$el.css({'left': -left + 'px', 'width': cont_wid + 'px'});
	
		$el.css('display', 'flex');
		console.log('hovered');
	}, function(){
		$(this).children('.description').hide();
	})

});