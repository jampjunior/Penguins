//$(document).ready(function () {

//    // PREPARAMOS LA LLAMADA AL API PARA TRAER
//    // UN SOLO ELEMENTO
//    var urlAPI = 'https://api.themoviedb.org/3/discover/movie?api_key=e8c6d35a6bd555573d4b93aff5b6743b';
//   // urlAPI += '/' + id;

//    $.get(urlAPI, function (respuesta, estado) {
//        //console.log('estado', estado);
//        if (estado === 'success') {
//           // $('#titulo').val(respuesta.results[0].original_title);
//            var peli = '';

//            $.each(respuesta.results, function (indice, elemento) {

//                var rutaPelis = 'https://image.tmdb.org/t/p/w500' + elemento.poster_path;

//                peli ='<div class="item-pelicula">';
//                peli ='    <div class="contenido-pelicula">';
//                peli ='        <img class="imagen-pelicula" src="' + rutaPelis + '" alt="" />';
//                peli ='           </div>';
//                peli ='       <div class="datos-pelicula">';
//                peli ='        <div class="cabecera">';
//                peli ='       <span>' + elemento.title + '</span>';
//                peli ='             </div>';
//                peli ='            <div class="votos">' + elemento.vote_average + '</div>';
//                peli ='     <div class="clear">' + elemento.overview.substring(0, 400) + '</div>';
//                peli ='                                 <div class="contenido">';
//                peli ='                </div>';
//                peli ='               </div>';
//                peli = '             </div>';


//                 $('#resultados').append(peli);

//            });

//        }
        

//    });

//});
//hacerlo de nuevo parte de arriba



$(document).ready(function () {
    //console.log('jqueryOK');
    var urlAPI = 'https://api.themoviedb.org/3/discover/movie?api_key=e8c6d35a6bd555573d4b93aff5b6743b';

    $.get(urlAPI, function (respuesta, estado) {
        // COMPRUEBO EL ESTADO DE LA LLAMADA
        if (estado === 'success') {
            // SI LLEGO HASTA AQUÍ QUIERE DECIR
            // QUE EN 'RESPUESTA' TENGO LA INFO

            $('#paginacion').html(respuesta.page);
            $('#total-paginas').html(respuesta.total_pages);
            var relleno = '';

            $.each(respuesta.results, function (indice, elemento) {

                var rutaPoster = 'https://image.tmdb.org/t/p/w500' + elemento.poster_path;

                relleno = '<div class="item-pelicula">';
                relleno += '    <div class="contenido-pelicula">' ;
                relleno += '        <img class="imagen-pelicula" src="' + rutaPoster + '" alt="" />';
                relleno += '    </div>';
                relleno += '    <div class="datos-pelicula">';
                relleno += '        <div class="cabecera">';
                relleno += '            <span>' + elemento.title + ' <i class="fa fa-calendar-o" aria-hidden="true"></i></span>';
                relleno += '        </div>';
                relleno += '        <div class="votos">' + elemento.vote_average + ' <i class="fa fa-star" aria-hidden="true"></i> </div>';
                relleno += '        <div class="clear">' + elemento.overview.substring(0, 400) + '</div>';
                relleno += '        <div class="contenido">';
                relleno += '        </div>';
                relleno += '    </div>';
                relleno += '</div>';

                $('#resultados').append(relleno);
               
            });
            $('.item-pelicula').fadeIn('slow'); //todo dentro que este en la clase de item-pelicula se va aplicar ese efecto 
            
     }
       

   });


   $('.fa-arrow-circle-right').click(function () {
       buscarDatos(parseInt($('paginacion').html())+1);


    });


});

//            // var rutaPoster = 'https://image.tmdb.org/t/p/w500'
//            //                     + respuesta.results[0].poster_path;
//            // $('.imagen-pelicula').attr('src', rutaPoster);
//            // $('div.cabecera span').html(respuesta.results[0].title);
//            // $('.votos').html(respuesta.results[0].vote_average);
//            // $('.contenido').html(respuesta.results[0].overview);