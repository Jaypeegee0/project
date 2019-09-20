$(document).ready(function(){

    $.get("http://localhost:3000/animals", function(data){
        for(var i =0; i<data.length;i++){$("table tbody").append(`<tr><td>${data[i].name}</td>
        <td>${data[i].specie}</td>
        <td>${data[i].feeding}</td>
        <td>${data[i].covering}</td>
        <td><button type ='button' class ='view btn btn-info' id="'${data[i].id}'"><a href = 'form1.html?id=${data[i].id}'>View</a></button></td> 
        <td><button type ='button' class ='deleteAnimal btn btn-danger' value=${data[i].id}>Delete</button></td></tr>`);}

    if(path === "/form1.html"){
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
        $("#view").html('<a href= "form1.html?id='+data.id+'" class= "btn btn-warning" id = "update-button">UPDATE</a>');
     });
    }

    $(".deleteAnimal").click( function (e) { 
        e.preventDefault();
        const id = $(this).val();
        $.ajax({
            url: `http://localhost:3000/animals/${id}`,
            method: "DELETE",
            success: function (result) {
                alert("Deleted! Please refresh page!!");
              }
        });
     });

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
});