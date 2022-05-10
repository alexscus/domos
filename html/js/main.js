$(document).ready(function() {
    
    
    
    $('#fullpage').fullpage({
        css3: true,
        easingcss3: 'ease',
        scrollingSpeed: 800,
        navigation: true,
        navigationPosition: 'left',
        slidesNavigation: true,
        controlArrows: false,
        normalScrollElements: '.left_bar',
        responsiveWidth: 768,  
        
        
        
        
        
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);
            
            if(index == 1 || index == 3){
            $('.col_h3').each(function(){
                   var height = $(this).parent().height();
                   $(this).css('height', height/3).removeClass('current');
            });
            }
            
            if(index == 1 && direction =='down'){
                
                $('body').removeClass("open_left_bar");
                $('body').removeClass("open_order");
                
                
                 
            }            

        },
        
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);
            
            if (index == 2) {
                
            }
            
            if (index == 1 || index == 3) {
                
            $('.col_h3').each(function(){
                   $(this).css('height', '33.3%').removeClass('current'); 
                   $(this).removeClass('no-current');
                   $(this).find('.prew').removeClass('hover').addClass('actv');
            });
                
            $('body').removeClass('nav_disable'); 
            }

        },
        
        afterResize: function(){
            var pluginContainer = $(this);
            $('.col_h3').css('height', '33.3%');
        }  
        
    });

    $(".slide_frame .close_slide").click(function() {
      $('.col_h3').css('height', '33.3%').removeClass('no-current').removeClass('current');
      $('.fp-tableCell .prew').removeClass('hover').addClass('actv');
      return false;
    });
  
    
    $('.slide_info').delegate('.col_h3:not(.current)', 'click', function() {
        $(this).css('height', '60%').addClass('current').removeClass('no-current');
        $(this).siblings().css('height', '20%').removeClass('current').addClass('no-current');
        $('body').addClass('nav_disable'); 
        $('.prew').removeClass('actv');
    });
	
        var owl = $(".owl-carousel"),
        status = $(".owlStatus");

      owl.owlCarousel({ 
        navigation : false,
        singleItem : true,
        pagination: true,
        touchDrag: false,
        mouseDrag: false,
        afterAction : afterAction,
        transitionStyle : "fade",
        addClassActive: true,
        autoPlay : true,
        goToFirst : true,
        goToFirstSpeed : 100
      });

      //Select Transtion Type
      $("#transitionType").change(function(){
        var newValue = $(this).val();

        //TransitionTypes is owlCarousel inner method.
        owl.data("owlCarousel").transitionTypes(newValue);

        //After change type go to next slide
        owl.trigger("owl.next");
      });
    
    function updateResult(pos,value){
        status.find(pos).find(".result").text(value);
    }
    
    function afterAction(){
        updateResult(".owlItems", this.owl.owlItems.length); 
        updateResult(".currentItem", this.owl.currentItem+1);
    }
    
    
    $(".slide_frame").owlCarousel({

      baseClass: 'sl-carousel',
      navigation : true,
      slideSpeed : 300,
      pagination: false,
      singleItem:true,
      touchDrag: false,
      mouseDrag: false
 
  }); 
    
}); 



$(function() {
  $(".btn_menu").click(function() {
    $('body').toggleClass("open_left_bar");
    return false;
  });
    
  $(".open_order_popup").click(function() {
    $('body').removeClass("open_left_bar");
    $('body').toggleClass("open_order");
    return false;
  });
    
  $(".close_pop").click(function() {
    $('body').toggleClass("open_order");
    return false;
  });

  $(document).click( function(event){
    if( $(event.target).closest(".popup_order").length ) 
      return;
  $('body').removeClass("open_order");
  return false;
    event.stopPropagation();
  });

  $(document).click( function(event){
    if( $(event.target).closest(".left_bar").length ) 
      return;
  $('body').removeClass("open_left_bar");
  return false;
    event.stopPropagation();
  });



/*if ( $(".col_h3").hasClass("current") ) {

} else {
 $('.slide_info .item').hover(
       
       function(){ $(this).closest('.prew.actv').addClass('hover') },
       function(){ $(this).closest('.prew.actv').removeClass('hover') } 
)   
}*/
    /*$('.slide_info').delegate('.col_h3:not(.current)', 'click', function() {
        $(this).css('height', '60%').addClass('current').removeClass('no-current');
        $(this).siblings().css('height', '20%').removeClass('current').addClass('no-current');
        $('body').addClass('nav_disable'); 
        $('.prew').removeClass('actv');
    });*/

/*$('.slide_info .item').hover(
       
       function(){ $(this).closest('.prew.actv').addClass('hover') },
       function(){ $(this).closest('.prew.actv').removeClass('hover') } 
)   
}*/

  /*$('.col_h3.__top').hover(
  function(){
    $(this).css('height', '50%').addClass('current').removeClass('no-current');
    $(this).siblings().css('height', '25%').removeClass('current').addClass('no-current');
  },
  function(){
    $('.col_h3').css('height', '33.3%').removeClass('no-current').removeClass('current');
    $('.fp-tableCell .prew').removeClass('hover').addClass('actv');
  });*/
  $('.col_h3').hover(
  function(){
    $(this).css('height', '40%').addClass('bg_zoom');
    $(this).siblings().css('height', '30%');
  },
  function(){
    $('.col_h3').css('height', '33.3%').removeClass('no-current').removeClass('current').removeClass('bg_zoom');
    $('.fp-tableCell .prew').removeClass('hover').addClass('actv');
  });
    
});



(function( $ ){

$(function() {

  $('.rf').each(function(){
    // Объявляем переменные (форма и кнопка отправки)
  var form = $(this),
        btn = form.find('.btn_submit');

    // Добавляем каждому проверяемому полю, указание что поле пустое
  form.find('.rfield').addClass('empty_field');

    // Функция проверки полей формы
    function checkInput(){
      form.find('.rfield').each(function(){
        if($(this).val() != ''){
          // Если поле не пустое удаляем класс-указание
    $(this).removeClass('empty_field');
        } else {
          // Если поле пустое добавляем класс-указание
    $(this).addClass('empty_field');
        }
      });
    }

    // Функция подсветки незаполненных полей
    function lightEmpty(){
      form.find('.empty_field').css({'border-color':'#e62121', 'opacity': '1'});
      // Через полсекунды удаляем подсветку
      setTimeout(function(){
        form.find('.empty_field').removeAttr('style');
      },500);
    }

    // Проверка в режиме реального времени
    setInterval(function(){
      // Запускаем функцию проверки полей на заполненность
    checkInput();
      // Считаем к-во незаполненных полей
      var sizeEmpty = form.find('.empty_field').size();
      // Вешаем условие-тригер на кнопку отправки формы
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
    },500);

    // Событие клика по кнопке отправить
    btn.click(function(){
      if($(this).hasClass('disabled')){
        // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
    lightEmpty();
        return false
      } else {
        // Все хорошо, все заполнено, отправляем форму
        form.submit();
      }
    });
  });
});

})( jQuery );