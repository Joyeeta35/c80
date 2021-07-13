name_of_student_array=[];
function submit(){
    var display_student_array=[];
    for(var j=1;j<=1;j++){
        var name_of_student=document.getElementById("name_of_student").value;
        name_of_student_array.push(name_of_student);
    }
    var length=name_of_student_array.length;
    for(var k=0;k<length;k++){
        display_student_array.push("<span>"+name_of_student_array[k]+"</span>");  
    }
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    var remove_commas=display_student_array.join("");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function show(){
}

function sort(){
    name_of_student_array.sort();
    var display_student_array_sorting=[];
    var length=name_of_student_array.length;
    for(var k=0;k<length;k++){
        display_student_array_sorting.push("<h4>"+name_of_student_array[k]+"</h4>");  
    }
    var remove_commas=display_student_array_sorting.join("");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}