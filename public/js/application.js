$(document).ready(function() {

  $('#hatchet').on('click', function(){
    $(this).effect('explode', {times:3}, 500);
    });

  $("#button_add_question").on('click', function(event) {
    event.preventDefault();
    var url = '/get_add_question_partial'
    $.get(url, function(response) {
        console.log(response);
      $('#add_question').append(response);
    });
  });

  $(document).on('click', '#stats',function(event){
    event.preventDefault();

    var url = $(this).parent().attr('href')
    console.log(url)

    $.get(url, function(response){
      console.log(response.data)
    }, "json")
  })
});


