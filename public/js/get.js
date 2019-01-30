$(() => {


  $('#mySearch').on('click', event => {
    const moviesReturned = [];
    const searchValue = $('#search').val();
    $.get(
        {
          url: 'https://www.omdbapi.com/?apikey=718f1911&s='+searchValue,
          success: (data) => {
            moviesReturned.push(data);

            for (let i = 0; i < 5; i++) {
              const $li = $('<li>').text(moviesReturned[0]["Search"][i].Title).appendTo('.moviesDisplay').appendTo('.column1');
                          $('<li>').text(moviesReturned[0]["Search"][i].Year).appendTo('.moviesDisplay').appendTo('.column1');
                          $('<li>').prepend("<img src ="+ moviesReturned[0]["Search"][i].Poster +"><br /><br />").appendTo('.moviesDisplay').appendTo('.column1');
                          $('<button>').attr('id', 'selected').attr('omdbID', moviesReturned[0]["Search"][i].imdbID).text('select').appendTo('.moviesDisplay').appendTo('.column1');

          }
        }
    });
});


  // $('#selected').on('click', event => {
  //   // const movieSelected = [];
  //   // const selectedValue = $('omdbID').val();
  //   console.log('hello');
  // //     $.get(
  // //       {
  // //         url: 'https://www.omdbapi.com/?apikey=718f1911&'+selectedValue,
  // //         success: (data) => {
  // //           // movieSelected.push(data);
  // //
  // //           // for (let i = 0; i < 1; i++) {
  // //           //   const $li = $('<li>').text(movieSelected[0].Title).appendTo('.moviesDisplay');
  // //           //               $('<li>').text(movieSelected[0].Plot).appendTo('.moviesDisplay');
  // //           //
  // //           // }
  // //
  // // });
// });
});
