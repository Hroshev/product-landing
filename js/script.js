/* Отправка формы */
$(".order-form").on("submit",function(event){event.stopPropagation();event.preventDefault();let form=this,submit=$(".submit",form),data=new FormData();$(".submit",form).val("Відправлення...");$("input,textarea",form).attr("disabled","");let nameValue=$('[name="name"]',form).val();let phoneValue=$('[name="phone"]',form).val();let emailValue=$('[name="email"]',form).val();let selectValue=$('[name="select"]',form).val();if(nameValue){data.append("Ім`я",nameValue)}
if(phoneValue){data.append("Телефон",phoneValue)}
if(emailValue){data.append("Email",emailValue)}
if(selectValue){data.append("Пропозиція",selectValue)}
data.append("Товар",window.location.href);$.ajax({url:"telegram.php",type:"POST",data:data,cache:!1,dataType:"json",processData:!1,contentType:!1,xhr:function(){let myXhr=$.ajaxSettings.xhr();if(myXhr.upload){myXhr.upload.addEventListener("progress",function(e){if(e.lengthComputable){let percentage=(e.loaded/e.total)*100;percentage=percentage.toFixed(0);$(".submit",form).html(percentage+"%")}},!1)}
return myXhr},error:function(jqXHR,textStatus){},complete:function(){window.location.href="/thank-you-page";form.reset()},});return!1});$(document).on("submit",".dynamic-form",function(event){})

/* Плавная прокрутка */
$(document).ready(function(){$('a[href^="#order-form"]').click(function(){var t=$(this).attr("href"),e=$(t).offset().top;return(jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:e},1000),!1)})})

/* Devtools */
document.addEventListener("keydown",(event)=>{const isCtrlShift=event.ctrlKey||(event.metaKey&&event.shiftKey);if(isCtrlShift&&["I","J","C"].includes(event.key)){event.preventDefault()}
if((isCtrlShift||event.ctrlKey||event.metaKey)&&event.key==="S"){event.preventDefault()}
if(event.key==="F12"&&event.code==="F12"){event.preventDefault()}})