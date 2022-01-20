
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

    let movieObj = {};

    movieObj["name"] = movieName;
    movieObj["url"] = movieUrl;

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
    let nextLinkId = ol.getElementsByTagName("li").length + 1;

    let liValue = `<span>${movieObj["name"]}</span>----<span><a href="${movieObj["url"]}" target="_blank">${movieObj["url"]}</a></span>`;

    li.classList.add("list-group-item");
    li.setAttribute("data-id", nextLinkId)
    li.innerHTML = liValue;

    //  -----ADD THE LI ELEMENT TO THE PAGE -------

    ol.appendChild(li);


}