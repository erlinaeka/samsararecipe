// $('#search-button').on('click', function(){
//     $.ajax({
//         url:'https://www.themealdb.com/api/json/v1/1/search.php?s=',
//         type: 'get',
//         dataType: 'json',
//         data: $('#search-input').val(),

//         success: function(result){
//             console.log(result);
//             if(result.Response == "True") {
//                 let meal = result.meals;
//                 let meall = meal.idMeal;
//                 console.log(meall);
//                 // $each(meal,function(i,data){

//                 // });
//             }
//             // if(result.Response == "True"){
                
//             // //     let array = result.meals;

//             // //     $each(array, function(i, data){
//             // //         $('#meal-list').append(`
//             // //             <div class="card" style="width: 18rem;">
//             // //                 <img src="` + data.strMealThumb +`" class="card-img-top" alt="...">
//             // //                 <div class="card-body">
//             // //                     <h5 class="card-title">Card title</h5>
//             // //                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             // //                     <a href="#" class="btn btn-primary">Go somewhere</a>
//             // //                 </div>
//             // //             </div>
//             // //         `);
//             // //     });
//             // // }else{
//             // //     $('#meal-list').html(`
//             // //         <div class="col">
//             // //             <h1 class="text-center">` + result.Error + `</h1>
//             // //         </div)
//             // //     `);
//             // }
//         }
        

//     });
// })
    


const getSearchValue = () => {
    const searchValue = document.getElementById("search-input").value;
    if (!searchValue) {
      document.getElementById("rowArea").innerHTML =
        "<h1>Please type your food name!</h1>";
    } 
    else {
      document.getElementById("meal-list").innerHTML = "";
  
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        const food = data.meals;
        food.map((element) => {
          const row = document.getElementById("meal-list");
          const foodContainer = document.createElement("div");
          foodContainer.setAttribute("class", "col col-style");
          const foodName = element.strMeal;
          const foodImg = element.strMealThumb;
          const foodId = element.idMeal;
          const foodCategory = element.strCategory;
  
          const foodDiv = `<div class="card card-style mt-3 mb-4" onclick="getmealDetails(${foodId})" style="width: 20rem;">
             <img class="card-img-top" src="${foodImg}" alt="Card Food Image">
            <div class="card-body"><h5 class="card=text"><u>${foodName}</u></h5>
            <p>Food Category : ${foodCategory}</p>
            <a href="#getmealDetails(${foodId})" class="btn btn-dark" role="button" style="color:white;">Meal Detail</a>
            </div>`;
            foodContainer.innerHTML = foodDiv;
            row.appendChild(foodContainer);
        });
      })
      .catch((error) => {
        document.getElementById("meal-list").innerHTML="<h1>Wrrong! please try again.</h1>";
      });
    }
  };



  const getmealDetails = (id) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const meal = data.meals;
        meal.map((element) => {
          const foodImg = element.strMealThumb;
          const foodDetailsContainer = document.createElement("div");
          const foodDetailsDiv = `<div class="card p-4 w-60 mx-auto mt-4 mb-4 rounded-3 justify-content-center" > 
          <h4 class="card-title mt-1" style="text-align:center;">${element.strMeal}</h4>
          <img src="${foodImg}" alt="Food Card image" class="mx-auto" style="width:30%">
              <div class="card-body">
              
              <div class=row>
                <div class=col-md-3>
                    <h5>Ingredient</h5>
                    <h6 class="card-text"> > ${element.strIngredient1}</h6> <h6 class="card-text"> > ${element.strIngredient2}</h6>
                    <h6 class="card-text"> > ${element.strIngredient3}</h6> <h6 class="card-text"> > ${element.strIngredient4}</h6> 
                    <h6 class="card-text"> > ${element.strIngredient5}</h6> <h6 class="card-text"> > ${element.strIngredient6}</h6>
                    <h6 class="card-text"> > ${element.strIngredient7}</h6> <h6 class="card-text"> > ${element.strIngredient8}</h6>
                    <h6 class="card-text"> > ${element.strIngredient9}</h6> <h6 class="card-text"> > ${element.strIngredient10}</h6>
  
                </div>
                <div class=col-md-8>
                    <h5>Instructions</h5>
                    <p>${element.strInstructions}</p>
                </div>
              </div>
              
              <button class="btn btn-dark"  onclick="backHome()" id="back-search"> Back Home</button>
              </div>
           </div>`;
          foodDetailsContainer.innerHTML = foodDetailsDiv;
          document
            .getElementById("search-food")
            .appendChild(foodDetailsContainer);
          document.getElementById("all-food").style.display = "none";
        });
      });
  };
  
  
  
  const backHome = () => {
    document.getElementById("all-food").style.display = "block";
    document.getElementById("search-food").innerHTML = "";
    document.getElementById("meal-list").innerHTML = "";
    document.getElementById("search-input").value = "";
  };
  