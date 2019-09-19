$(document).ready(function(){

   $.get("http://localhost:3000/animals", function(data){
         for(var i =0; i<data.length;i++){
            var tab= '<tr><td>' + data[i].name + '</td>';
            tab +='<td>' + data[i].specie + '</td>';
            tab +='<td>' + data[i].feeding + '</td>';
            tab +='<td>' + data[i].covering + '</td>';
            tab +='<td>' + "<button type ='button' class ='btn btn-info' id='editAnimal'><a href= 'form1.html'>View</a></button>"  + '</td>';
            tab +='<td>' + "<button type ='button' class ='btn btn-danger' id = 'deleteAnimal'>Delete</button>"  + '</td></tr>';
            tab+= "<p>The " + data[i].name + "is a/an" + data[i].specie + '.</p>';
            $("table tbody").append(tab);}
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
});