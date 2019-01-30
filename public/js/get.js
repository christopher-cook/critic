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

            // let movieTitle = moviesReturned["Search"][i].Title;
            // let movieYear = moviesReturned["Search"][i].Year;
            // let moviePlot = moviesReturned["Search"][i].Plot;

            for (let i = 0; i < 5; i++) {
              const $li = $('<li>').text(moviesReturned[0]["Search"][i].Title).appendTo('.moviesDisplay');
                          // $('<li>').text(movieYear[i]).appendTo('.moviesDisplay');
                          // $('<li>').text(moviePlot[i]).appendTo('.moviesDisplay');
          }
        }
    });
    console.log(moviesReturned);
});

});


// db["search"][0].Title
