$(document).ready(function() {
    printAllList();
    $(document).on('click', '#send_btn', function() {
      var inputVal = $('#input_add').val();
      if (inputVal == '') {
        alert('Campo vuoto! Inserire un valore!');
      } else {
        resetAll();
        console.log(inputVal);
        addElement(inputVal);
      }
    });
    $(document).on('click', 'span.delete_btn', function() {
      var thisElement = $(this).parent().attr('data-id');
      deleteElement(thisElement);
      resetAll();
    });