
$(document).ready(function(){
   $.get("http://localhost:3000/animals", function(data){
         for(var i =0; i<data.length;i++){
            var tab= '<tr><td>' + data[i].name + '</td>';
            tab +='<td>' + data[i].specie + '</td>';
            tab +='<td>' + data[i].feeding + '</td>';
            tab +='<td>' + data[i].covering + '</td> </tr>';
                //  $.each(data, function(key,value){
                //      var tr = '<tr>';
                //      var td1 = '<td>' +value.name+ '</td>';
                //      var td2 = '<td>' +value.specie+ '</td>';
                //      var td3 = '<td>' +value.feeding+ '</td>';
                //      var td4 = '<td>' +value.covering+ '</td>';
                //  });
 $("table tbody").append(tab);}
     });
});