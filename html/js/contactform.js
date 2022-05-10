$(document).ready(function() {
$(".ajax-contact-form").submit(function() {
var str = $(this).serialize();

$.ajax({
type: "POST",
url: "contact.php",
data: str,
success: function(msg) { 

if(msg == 'OK') {
result = '<div class="notification_ok">Сообщение отсправлено.<br> с Вами свяжутся в ближайшее время.</div>';
$("#fields").hide();


$.magnificPopup.close();
$('.notification_ok').fadeIn().delay(3000).fadeOut(100);
$('.inp').removeAttr('value');

} else {
result = msg;
}

$('.note').html(result).fadeIn().delay(3000).fadeOut(100);

$(".btn").on( "click", function() { 

$.when( effect() ).done(function() {

}); 
});
}
});
return false; 
});
});