$(() => {
  // const currID = $(this).attr('#id');

  $('.fav').on('click', event => {
    if(($(event.target).attr('id') === 'source')) {
      $(event.target).parent().appendTo('#good');
    } else {
    $(event.target).appendTo('#bad');
  }
  console.log($(event.target).attr('id'));
});
});
