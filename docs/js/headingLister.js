function getHeadingList(){
console.log('Running Function');

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
    item.innerHTML = "<a href=\"#" + item.innerText.replace("<", "").replace(">", "") + "\" onClick=\"forceHideNav();\">" + item.innerHTML + "</a>";

    //Change values of attribute entries
    if (item.innerText.indexOf('=""') !== -1){
      item.innerText = item.innerText.replace('=""', '-attribute');
      item.innerHTML = "<a href=\"#" + item.innerText + "\" onClick=\"forceHideNav();\">" + item.innerText.replace("-attribute", "") + "</a>";
    }

    //Custom Headings

    //Tags conatining a space require an alternative ID to the one automatically assigned
    //Automatic change is planned but for now a manual change is required

    if (item.innerText == "<!DOCTYPE html>"){
      item.innerHTML = "<b>HTML Elements</b><br><a href=\"#doctype\" onClick=\"forceHideNav();\">&lt;!DOCTYPE html&gt;</a>";
    }

    //h1-h6 is the only entry containing multiple tags, this requires an ID to be assigned manually

    else if (item.innerText == "<h1>, <h2>, <h3>, <h4>, <h5> & <h6>"){
      item.innerHTML = "<a href=\"#headings\" onClick=\"forceHideNav();\">&lt;h1&gt;...&lt;h6&gt;</a>";
    }

    //Because id is the first attribute, add title before it

    else if(item.innerText == 'id'){
      item.innerHTML = "<br><b>HTML Attributes</b><br><a href=\"#" + item.innerText.replace("id", "id-attribute") + "\" onClick=\"forceHideNav();\">" + item.innerText.replace("-attribute", "") + "</a>";
    }

    // Add it to the list:
    list.appendChild(item);
  }

  // Finally, return the constructed list:
  return list;
}
