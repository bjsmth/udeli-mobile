 // $("#get-data").click(function() {
    $.ajax({
        url:  "http://udeli.ru/api/d",
        type: "GET",
        dataType: "json",
        async: true,
        success: function (data) {
            console.log(JSON.stringify(data));
            pages = $('#content')
            $.each( data, function( key , value ) {
              pages.append(
                "<div class='card card" + key  + "'><p>" + value.start_address + "<br>" + value.finish_address + "</p></div>"
              );
            });
            // alert(JSON.stringify(data));
            // pages.push(data)
            // $( "#show-data" ).append(JSON.stringify(pages));
        }
    });
 // });
