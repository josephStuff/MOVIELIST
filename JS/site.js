
// ------  GET ANY LINKS FROM LOCAL STORAGE AND DISPLAY THEM

function getLinks () {

    let movieLinks = JSON.parse(localStorage.getItem("movieLinks")) || [];

    
    for (let index = 0; index < movieLinks.length; index++) {

      let movieObj = movieLinks[index];

      // --- WRITE THEM TO THE PAGE

      displayLink(movieObj);

    }

}


//  -----------ADDS A LINK ----------

function addLink() {

    
    let movieLinks = JSON.parse(localStorage.getItem("movieLinks")) || [];

    let movieName = document.getElementById("movieName").value;
    let movieUrl = document.getElementById("movieUrl").value;

// ------GENERATE THE NEXT ID FOR THE LINK -------

// -----STEP ONE USE MAP TO AN ARRAY OF IDs -------

    let linkId = 1;

    if (movieLinks.length > 0) {
        linkId = 1;
    
    let ids = movieLinks.map(function(object){return object.id});
   

// ----- STEP TWO FIND THE MAX IN THE ARRAY -----
    let maxId = Math.max.apply(null, ids);

    linkId = maxId + 1;

    }
    
    let movieObj = {};

    movieObj["name"] = movieName;
    movieObj["url"] = movieUrl;
    movieObj["id"] = linkId;

    // ------- ADD LINK TO LOCAL STORAGE -------
    movieLinks.push(movieObj);
    localStorage.setItem("movieLinks",JSON.stringify(movieLinks));

    displayLink(movieObj);

}
//  -------- WRITES THE LINK TO THE PAGE ------

function displayLink (movieObj) {

    let ol = document.getElementById("movieList");
    let li = document.createElement("li");


    // -------FIND ANY EXISTING LINK & GET THE NEXT ID -------

    // let nextLinkId = ol.getElementsByTagName("li").length + 1;

    let delButton = `<button onclick="delLink(this)" class='btn btn-danger' type="button">Delete</button>`

    //`<div class="row"><div class="col p-2">${movieObj["name"]} | <a href="${movieObj["url"]}">${movieObj["url"]}</a></div><div>${delButton}</div></div>`


    let liValue = `<span>${movieObj["name"]}</span>----<span><a href="${movieObj["url"]}" target="_blank">${movieObj["url"]}</a></span> ${delButton}`;

    li.classList.add("list-group-item");
    li.setAttribute("data-id", movieObj["id"]);
    li.innerHTML = liValue;

    //  -----ADD THE LI ELEMENT TO THE PAGE -------

    ol.appendChild(li);

}

function delLink (button) {

    let movieLinks = JSON.parse(localStorage.getItem("movieLinks")) || [];

    let li = button.parentElement;
    let linkId = li.getAttribute("data-id");
    li.remove();

    // ----- REMOVE AN ITEM FROM THE MOVIE LINK ARRAY -------

    // ------ STEP ONE: FIND THE INDEX OF THE ITEM IN THE ARRAY ----
    let movieIndex = movieLinks.findIndex(object => object.id == linkId);
    movieLinks.splice(movieIndex,1);

    // -------- PUSH THE NEW VALUES BACK TO LOCAL STORAGE ------
    localStorage.setItem("movieLinks", JSON.stringify(movieLinks));

}