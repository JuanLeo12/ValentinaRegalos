//Función para ocultar/mostrar la información
$(document).ready(function () {
  $(".p1").hide();
  $(".p2").hide();
  $(".p3").hide();
  $(".p4").hide();
  $(".p5").hide();
  $(".p6").hide();
  $(".p7").hide();
  $(".p8").hide();

  $(".img1").click(function () {
    $(".p1").toggle("slow");
  });
  $(".img2").click(function () {
    $(".p2").toggle("slow");
  });
  $(".img3").click(function () {
    $(".p3").toggle("slow");
  });
  $(".img4").click(function () {
    $(".p4").toggle("slow");
  });
  $(".img5").click(function () {
    $(".p5").toggle("slow");
  });
  $(".img6").click(function () {
    $(".p6").toggle("slow");
  });
  $(".img7").click(function () {
    $(".p7").toggle("slow");
  });
  $(".img8").click(function () {
    $(".p8").toggle("slow");
  });
});

//Funcion para ir hacia a arriba de la página
$(document).ready(function () {
  $(".ir-arriba").click(function () {
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
  });
  //Para que la flecha aparezca o desaparezca
  $(window).scroll(function () {
    //Si el scroll va a la posición cero va a desaparecer
    if ($(this).scrollTop() > 0) {
      $(".ir-arriba").slideDown(300);
    } /*de lo contrario la flecha aparecerá*/ else {
      $(".ir-arriba").slideUp(300);
    }
  });
});
