$(() => {
  // const currID = $(this).attr('#id');



  $('#mySearch').on('click', event => {
    const moviesReturned = [];
    const searchValue = $('#search').val();
    $.get(
        {
          url: 'https://www.omdbapi.com/?apikey=718f1911&s='+searchValue,
          success: (data) => {
            moviesReturned.push(data);

            for (let i = 0; i < 5; i++) {
              const $li = $('<li>').text(moviesReturned[0]["Search"][i].Title).appendTo('.moviesDisplay');
                          $('<li>').text(moviesReturned[0]["Search"][i].Year).appendTo('.moviesDisplay');
                          $('<li>').prepend("<img src ="+ moviesReturned[0]["Search"][i].Poster +">").appendTo('.moviesDisplay');
          }
        }
    });
    console.log(moviesReturned);
});

});


// db["search"][0].Title
