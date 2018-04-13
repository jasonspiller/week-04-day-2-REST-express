$(function() {

	// print a specifc id
	$.get(`/api/v1/3`, function(response) {
		$('.name').html(response.name);
	})

	// loop through api request
	$.get(`/api/v1`, function(response) {

		$('body').append('<ul class="comedians">')
		for (let i = 0; i < response.length; i++) {
			$('.comedians').append('<li>');
			for (var key in response[i]) {
				$('.comedians li').get(i).innerHTML = `${response[i].id}. ${response[i].name} (<a href="${response[i].url}">${response[i].url}</a>)`
			}
		}
	})

	// external api
	$.get(`http://www.omdbapi.com/?s=Friday+the+13th&apikey=5e90d428`, function(response) {
		$('body').append('<ul class="movies">')
		for (let i = 0; i < response.Search.length; i++) {
			$('.movies').append('<li>');
			for (var key in response.Search[i]) {
				$('.movies li').get(i).innerHTML = `${response.Search[i].Title} (${response.Search[i].Year})`
			}
		}
	})

	// testing post
  var strTest;
  $("#submit").click(function(){

    strTest = $('#test').val();

    $.post('http://localhost:3000/test',{test: strTest});
  });

})
