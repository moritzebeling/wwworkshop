


$(document).bind("mousemove", function (event) {
    $(".box").css({
      top: event.pageY - $(".box").height() / 2,
      left: event.pageX - $(".box").width() / 2
    });
  });

  let counter1 = 0;
  $(".mon1").mouseenter(function () {
    counter1++;
    console.log(counter1);
    compare();
  });

  let counter2 = 0;
  $(".mon2").mouseenter(function () {
    counter2++;
    console.log(counter2);
    compare();
  });

  let counter3 = 0;
  $(".mon3").mouseenter(function () {
    counter3++;
    console.log(counter3);
    compare();
  });

  function compare() {
    if (counter1 == counter2 && counter2 == counter3) {
      show();
    }
  }

  function show() {
    // show div
    $(".notification").fadeIn("slow", function () {
      // wait for 5 seconds, 5 * 1000ms
      setTimeout(function () {
        hide();
      }, 5000);
    });
  }

  function hide() {
    // hide div again
    $(".notification").fadeOut();
  }
