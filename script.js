$('#pierwszy')
.css({ background : 'blue' })
.delay(2000)
.slideUp()
.delay(1000) 
.fadeIn(1000); 

$("#testAnim").on('click', function(){
    $(this).animate({
        width: "500px",
        opacity: 0.4,
        fontSize: "3em",
        borderWidth: "10px"
    }, 1500);
});

$("#testAnim6").on({ 
    'mouseover' : function() { $(this).stop().animate({width:300}, 500); }, 'mouseout' : function() { $(this).stop().animate({width:200}, 500); } }); 


$(".buttonTest").hide();
$("#menu").on({
    'mouseover' : function() {
         $(this).stop().animate({width:200}, 200); 
         $(".buttonTest").show();
         $(".buttonTest").stop().animate({width:150,height:50}, 200);
          
        },
    'mouseout' : function() { 
        $(this).stop().animate({width:20}, 200);
        $(".buttonTest").stop().animate({width:0,height:0}, 200); 
        $(".buttonTest").hide();
        
    }
});





const apiUrl = "https://jsonplaceholder.typicode.com";
const $list = $('.user-list');
    
$('#test-ajax').on('click', function() {
        const $btn = $(this);
    
    
    
        //wykonujemy połączenie
        $.ajax({
            url : apiUrl + '/users',
            dataType : 'json'
        })
        .done((res) => {
            //czyścimy listę przed dodaniem użytkowników
            //inaczej ponowne kliknięcie duplikowało by użytkowników na liście
            $list.empty();
    
            //robimy pętlę po zwróconej tablicy
            //dołączając do listy kolejne LI z imieniem i emailem użytkownika
            res.forEach(el => {
                $list.append(`<li>${el.address.geo.lat} : ${el.address.geo.lng}</li>`);
            })
        })
        .always(() => {
            //po zakończeniu wczytywania wyłączamy loading
            //i włączamy przycisk
            $btn.removeClass('loading');
            $btn.prop('disabled', false);
        });
});
    