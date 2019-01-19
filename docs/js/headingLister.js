function runDatShit(){
console.log('Running Function');
var mainArea = document.getElementById('main');
var options = document.getElementsByTagName('h2');


// Add the contents of options to sidebar
document.getElementById('sidebar').appendChild(makeUL(options));
}

function makeUL(array) {
  // Create the list element:
  var list = document.createElement('ul');

  for(var i = 0; i < array.length; i++) {
    // Create the list item:
    var item = document.createElement('li');

    // Set its contents:
    item.appendChild(document.createTextNode(array[i].innerHTML.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/amp;/g, "")));

    //Make every list item a link to corresponding heading
    item.innerHTML = "<a href=\"#" + item.innerText.replace("<", "").replace(">", "") + "\">" + item.innerHTML + "</a>";
    //Custom Headings

    if(item.innerText == "<h1>, <h2>, <h3>, <h4>, <h5> & <h6>"){
      item.innerHTML = "<a href=\"#headings\">&lt;h1&gt;...&lt;h6&gt;</a>";
    }


    // Add it to the list:
    list.appendChild(item);
  }

  // Finally, return the constructed list:
  return list;
}
