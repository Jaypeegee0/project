$(document).ready(function(){

   $.get("http://localhost:3000/animals", function(data){
         for(var i =0; i<data.length;i++){$("table tbody").append(`<tr><td>${data[i].id}</td>
         <td>${data[i].data}</td>
         <td>${data[i].specie}</td>
         <td>${data[i].feeding}</td>
         <td>${data[i].covering}</td>
         <td><button type ='button' class ='btn btn-info' id='editAnimal'><a href= 'form1.html?id=${data[i].id}'>View</a></button></td>
         <td><button type ='button' class ='btn btn-danger' id = 'deleteAnimal'>Delete</button></td></tr>
         `);}
        //     var tab= '<tr><td>' + data[i].name + '</td>';
        //     tab +='<td>' + data[i].specie + '</td>';
        //     tab +='<td>' + data[i].feeding + '</td>';
        //     tab +='<td>' + data[i].covering + '</td>';
        //     tab +='<td>' + "<button type ='button' class ='btn btn-info' id='editAnimal'><a href= 'edit.html?id=${}'>View</a></button>"  + '</td>';
        //     tab +='<td>' + "<button type ='button' class ='btn btn-danger' id = 'deleteAnimal'>Delete</button>"  + '</td></tr>';
        //     tab+= "<p>The " + data[i].name + "is a/an" + data[i].specie + '.</p>';
        //     $("table tbody").append(tab);}
        });

     $("#addAnimalssss").submit(function(event){
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
});