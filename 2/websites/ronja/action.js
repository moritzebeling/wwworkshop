var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycby-ip68mEUAKOoofbe1mFkZMaRluSbCYEpqrrFG5MLFDVFtorQFDU6tAgilHtDx1r-zIA/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
