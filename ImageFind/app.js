 const accesskey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
//const accesskey = '2369ec6ce3mshe7f3781f9603a86p1fb2a0jsnece983fded05';
 const formel = document.querySelector("form");
 const search_val = document.getElementById("search-bar");

 const div_res = document.querySelector(".results");
 const btn = document.getElementById('showmore');
let inputData = "";
let page = 1;
 

async function unsplash_images(){
    inputData = search_val.value ;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${search_val}&client_id=${accesskey }`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if(page == 1)
    {
        div_res.innerHTML = "";
    }
    const results = data.results;
    results.map((results)=>{
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("result");
    const image = document.createElement("img");
    image.src = results.urls.small;
    image.alt = results.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = results.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = results.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    div_res.appendChild(imageWrapper);
  });
  page++;
  if (page > 1) {
   btn.style.display = "block";
  }

 }
 
 formel.addEventListener("submit", (event)=>{
    event.preventDefault();
    page = 1;
    unsplash_images();
 });
 btn.addEventListener("click", () => {
    unsplash_images();
});