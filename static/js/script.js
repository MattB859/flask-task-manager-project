$(document).ready(function(){
    $('.sidenav').sidenav({inDuration: 400});
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
    $('select').formSelect();
    $('.datepicker').datepicker({
      format: "dd, mmmm, yyyy",
      yearRange: 3,
      showClearBtn: true,
      i18n:{
        done: "select"
      }
    });
  });

