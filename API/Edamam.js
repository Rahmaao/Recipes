let searchButton = document.querySelector("#search")
searchButton.addEventListener("click", ()=>{
    console.log("Button Pressed")
    sendApiRequest()
})

async function sendApiRequest(){
    let APP_ID = "935d4fb4"
    let API_KEY = "516d775166897f1005b056e2d49f6d90"
    let Value = document.getElementById("mealType").value;
    console.log(Value);
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${Value}&from=0&to=12&`);
    console.log(response)
    let data = await response.json()
    console.log(data.hits)
    useApiData(data.hits)
}



function useApiData(hits){
  const ele = document.getElementById("myContent");
  ele.innerHTML = " ";
    hits.forEach( hit => {
        const card = `<div class="card" style="width: 78rem; background-color: #ffd8d8; display: flex;flex-direction: row;justify-content: center;">
        <img class="card-img-top" src="${hit.recipe.image}" alt="${hit.recipe.label}" style = "width : 300px";>
        <div class="card-body" style >
          <h5 class="card-title" style = "color: #6C757D;" >${hit.recipe.label}</h5>
          <p class="calories" style = "color: #6C757D;"><b>Total Calories:</b> ${hit.recipe.calories}</p>
          <p class="labels" style = "color: #6C757D;"><b>Health Labels:</b> ${hit.recipe.healthLabels}</p>
          <p class="cautions" style = "color: #6C757D;"><b>Possible allergy triggers:</b> ${hit.recipe.cautions}</p>
          <p class="time" style = "color: #6C757D;"><b>Total Preparation Time:</b> ${hit.recipe.totalTime} minutes</p>
          <a href="${hit.recipe.url}" class="card-link" style = "color: #6C757D;">Click To View Recipe</a>`
        let cardObj = document.createElement("div");
        cardObj.innerHTML = card;
        ele.append(cardObj);
      })
    };

