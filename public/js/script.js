$(document).ready(function(){

    $.get("http://localhost:3000/animals", function(data){
        for(var i =0; i<data.length;i++){$("table tbody").append(`<tr><td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].specie}</td>
        <td>${data[i].feeding}</td>
        <td>${data[i].covering}</td>
        <td><button type ='button' class ='view btn btn-info' id="'${data[i].id}'"><a href = 'form1.html?id=${data[i].id}'>View</a></button></td></tr>`);}

    if(path === "form1.html"){
        const url= window.location.href;
        const urlArray = url.split("id=");
        let id = urlArray[1];
        id = parseInt(id);
    

    $.get(`http://localhost:3000/animals/${id}`, function (data) { 
        console.log(data);
        $("#nameDetail").html(data.name);
        $("#specieDetail").html(data.specie);
        $("#feedingDetail").html(data.feeding);
        $("#coveringDetail").html(data.covering);
     });
    }

    $("#deleteAnimal").click( function (e) { 
        e.preventDefault();
        const id = $(this).val();
        $.ajax({
            url: `http://localhost:3000/animals/${id}`,
            method: "DELETE",
            success: function (result) {
                alert("Deleted");
              }
        });
     });


    
    //      $(".view").click((e)=>{
    //         e.preventDefault();
    //         $('.viewer').toggle();
    //         console.log(e.target.id);

    //  $.get(`http://localhost:3000/animals`,(data)=>{
    //     $('.viewer').html('');
    //             for(let i=0; i<data.length;i++){
    //                 $('.viewer').append('<p>'+data[i].name+' is a great '+data[i].covering+'</p>');
    //                 }

    //           });
    
    //     });
        //     var tab= '<tr><td>' + data[i].name + '</td>';
        //     tab +='<td>' + data[i].specie + '</td>';
        //     tab +='<td>' + data[i].feeding + '</td>';
        //     tab +='<td>' + data[i].covering + '</td>';
        //     tab +='<td>' + "<button type ='button' class ='btn btn-info' id='editAnimal'><a href= 'edit.html?id=${}'>View</a></button>"  + '</td>';
        //     tab +='<td>' + "<button type ='button' class ='btn btn-danger' id = 'deleteAnimal'>Delete</button>"  + '</td></tr>';
        //     tab+= "<p>The " + data[i].name + "is a/an" + data[i].specie + '.</p>';
        //     $("table tbody").append(tab);}
        });

     $("#addAnimal").submit(function(event){
        event.preventDefault();
        var nameVal= ("#animalName").val();
        var specieVal= ("#specie").val();
        var feedingVal= ("#feeding").val();
        var coveringVal= ("#covering").val();
        var url = $(this).attr("action");
        
        $.post(url, {name:nameVal,specie:specieVal,feeding:feedingVal, covering:coveringVal}).done(
            function (data) {
                $("table tbody").append(data);
             }
        );
    });

    var path = $(location).attr('pathname');
    
    // if ( path == '/form1.html'){
    //     const url = window.location.href;
    //     const urlArray = url.split("id");
    //     let id = urlArray[i];
    //     id = parseInt(id);
    // }

});