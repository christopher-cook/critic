$(() => {


  $('#mySearch').on('click', event => {
    const searchValue = $('#search').val();
    $.get(
        {
          url: 'https://www.omdbapi.com/?apikey=718f1911&s='+searchValue,
          success: (data) => {
            for (let i = 0; i < 5; i++) {
              if(data.Response === "False") {
                alert('Movie not found, please try again!');
                return;
              } else {
              const $li = $('<li>').text(data["Search"][i].Title).attr('id', 'pending').appendTo('.moviesDisplay').appendTo('.column1');
                          $('<li>').text(data["Search"][i].Year).appendTo('.moviesDisplay').attr('id', 'pending').appendTo('.column1');
                          $('<li>').prepend("<img src ="+ data["Search"][i].Poster +"><br /><br />").attr('id', 'pending').appendTo('.moviesDisplay').appendTo('.column1');
                          // const $button = $('<button>').attr('id', '').text('select').appendTo('.moviesDisplay').appendTo('.column1');
                          // $button.on('click',

              }
          }
        }
    });
});
});
