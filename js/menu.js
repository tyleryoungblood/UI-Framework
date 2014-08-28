$(".menu-toggle").click(function (e) { 
  $("nav").toggleClass("show-menu"); 
        e.preventDefault(); 
        e.stopPropagation(); 
});
