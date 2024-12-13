// Example 1
// Difference: function(){this} :- current context 
// & () => {this} :- global this 

document.getElementById("changeTextButton").
addEventListener('click', function (){
    // console.log(this);
    // console.log(paragraph);
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The paragraph is changed";
});
// addEventListener('click', () =>{
//     console.log(this);
// })

// Example 2

document.getElementById("highlightFirstCity").
addEventListener('click', function(){
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add('highlight');
});

// Example 3
document.getElementById("changeOrder").
addEventListener('click', function(){
    let coffeeType = document.getElementById("coffeType");
    coffeeType.textContent = "Espresso";
    coffeeType.style.backgroundColor = "brown";
    coffeeType.style.padding = "5px";
});

// Example 4
document.getElementById("addNewItem").addEventListener
('click', function(){
    let newItem = document.createElement("li");
    newItem.textContent = "Eggs"
    document.getElementById("shoppingList").appendChild(newItem);
});

// Example 5
document.getElementById("removeLastTask").
addEventListener("click", function(){
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
});


// Example 6 Without Watching solution -> Done by myself
// document.getElementById("clickMeButton").
// addEventListener("click", function(){
//     let eventHandled = document.createElement("p");
//     eventHandled.textContent = "Event Handled successful";
//     document.getElementById("example-6").
//     append(eventHandled);
// });

//Example-6 | Watching Hitesh | Both are correct above & below
document.getElementById("clickMeButton").
addEventListener('dblclick', function(){
    alert("Chai & Code")
})


// Example 7 Event Delegation
document.getElementById("teaList").
addEventListener("click", function(event){
    if(event.target && event.target.matches('.teaItem')){
        alert("You selected: " + event.target.textContent);
    }
});

// Example 8
document.getElementById("feedbackForm").
addEventListener("submit", function(event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay").
    textContent = `Feedback is: ${feedback}`;
})

// Example 9
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('domStatus').
    textContent = "Dom Fully loaded"
})

// Example 10
document.getElementById("toggleHighlight").
addEventListener('click', function(){
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
})