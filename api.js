function ajaxfn(){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&& this.status==200){
            var response=JSON.parse(this.responseText)
            let output = "";
     for(var i=0; i<response.length; i++){

        if(response[i].completed == true){

            output += "<li><input type=checkbox checked disabled>"+"   "+response[i].title +"</li>";
        }else{

            output += "<li><input type=checkbox onchange=doalert(this)>"+"   "+response[i].title +"</li>";
        }
        
     }
     document.getElementById("demo").innerHTML=output;

        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
  }
  var count = 0;
  function doalert(checkboxElem) {
    if (checkboxElem.checked) {
      count = count + 1;
    } else {
      count = count - 1;
    }

    var promise = new Promise(function(resolve, reject) {
      const x = 5;
      var y = count;
      if(x === y) {
        resolve();
      } else {
        reject();
      }
    });
      
    promise.
        then(function () {
            alert('Congrats!, 5 Tasks have been Successfully Completed');
        }).
        catch(function () {
        });
  }

  
