$(() => {
  // const currID = $(this).attr('#id');

  $('li').on('click', event => {
    if(($(event.target).attr('id') === 'source')) {
      $(event.target).attr('id','moved').appendTo('#good');
    } else {
      $(event.target).appendTo('#bad');
  }
  console.log($(event.target).parent());
});
});
