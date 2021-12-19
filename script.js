'use strict';
document.getElementById('add').addEventListener('click', function(){
    let person_name = document.getElementById('person_name');
    let gender = document.getElementById('gender');
    let inputGroupSelect = document.getElementById('inputGroupSelect');
    let state = document.getElementById('state');
    let country_of_origin = document.getElementById('country_of_origin');
    let table = document.getElementById('table_of_information');
    let row_count = table.rows.length;
    let row = table.insertRow(row_count);
    row.insertCell(0).innerHTML='<input type="button" value="del" onClick="delete_row(this)">';
    row.insertCell(1).innerHTML=person_name.value;
    row.insertCell(2).innerHTML=gender.value;
    row.insertCell(3).innerHTML=inputGroupSelect.value;
    row.insertCell(4).innerHTML=state.value;
    row.insertCell(5).innerHTML=country_of_origin.value;
});

function delete_row(){
     document.getElementById('table_of_information').deleteRow(0);                
}       
