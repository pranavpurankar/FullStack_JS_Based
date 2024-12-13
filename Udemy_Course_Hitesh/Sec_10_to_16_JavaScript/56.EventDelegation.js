document.getElementById("parent").
addEventListener("click", function(event){
    if(event.target.classList.contains("child")){
        console.log(`Clicked on: ${event.target.textContent}`);
    }
});

/* 
--- Why Pass "event" as a parameter?

When an event happens in the browser (like a click, keypress etc), the
browser automatically creates an event object. This object contains all
the details about the event:

    • What tiggered the event (which element was clicked,typed, etc)
    • Details like the position of the click, the type of event, and
      much more.

By passing "event" as a parameter, we are simply catching that event
object so we can use its data inside our function.

--- What is event.target ?

The "event" object has many properties and methods. One important
property is "target".

    • "event.target" refers to the exact element that triggered the
       event.
    • For ex, if you click on button inside a div, event.target will
      point to the button, not the "div"

--- What is classList?
The "classList" property is a special way to work with the classes of an
HTML element. It provides methods to:

    • Check if a class exists(.contains()).
    • Add or remove classes.
    • Toggle a class (add if not there, remove if it is)

In the above ex:
    event.target.classList.contains("child")

    • event.target gives the clicked element
    • ".classList" accesses the list of all classes on that element.
    • ".contains("child")" checks if the element has a class named "child"
      It returns "true" or "false"

Flow of the Example

HTML Structure:

<div id="parent">
  <button class="child">Button 1</button>
  <button class="child">Button 2</button>
  <button>Other Button</button>
</div>

JavaScript:

document.getElementById("parent").addEventListener("click", (event) => {
  if (event.target.classList.contains("child")) {
    console.log(`You clicked: ${event.target.textContent}`);
  }
});

Step-by-Step Flow:
    1. You click on a Button:
        • The "click" event is triggered on the button you clicked.
    
    2. Event Bubbles to Parent:
        • The "click" event starts at the button (event.target) and 
          bubbles up to its parent (#parent)
    
    3. Event Object is Passed to the Listener
        • The event listener on "#parent" receives the "event" object.
    
    4. Check "event.target":
        • The listener checks if the clicked element "(event.target)" has
        the class "child" using "classList.contains("child")"

    5. Conditions Passes or Fails:
        • If the condition passes (the clicked button has the class
        "child"), the text of the button is logged.

        • If the condition fails (e.g. you clicked "Other Button"), 
          nothing happens.

-- Why Do We Use classList.contains?

We use classList.contains("child") to filter actions.
For example:

    • You might have many elements inside #parent, but you only want to 
      run some logic for buttons with the class "child".

    • This is a way to ensure your code only acts on the intended 
      elements.

Key Takeaways:
    1. event: The browser gives this object automatically when an event 
    happens. You need to pass it to your function to use its details.

    2. event.target: Refers to the element where the event originated.
    
    3. classList.contains(): Checks if the element has a specific class.
    
    4. Event Delegation: By attaching a listener to the parent and 
    filtering with event.target, you handle events for multiple child 
    elements dynamically.

Real-Life Analogy
Imagine you're organizing a wedding. You have a big table (parent) with 
plates (child) for each guest. Instead of asking each plate, 
"Who are you?" you wait for the guest to eat (click) and check their 
name tag (event.target) to know who they are. If the name tag has 
"VIP" (classList.contains("VIP")), you give them a special drink.

*/

// Example-2 Form Validation
document.getElementById("dynamic-form").
addEventListener("input", (event) => {
  const field = event.target;
  if (field.classList.contains("input-field")){
    if(field.name === "username" && field.value.length < 5){
      field.style.borderColor = "red";
    } else if (field.name === "email" && !field.value.includes("@")){
      field.style.borderColor = "red";
    }else{
      field.style.borderColor = "green";
    }
  }
});


// Example-3 Table log
document.getElementById('data-table').
addEventListener("click", (event) => {
  if(event.target.tagName === "TD"){
    const row = event.target.parentElement;
    console.log([...row.children].map(cell => cell.textContent));
  }
})


// Example-4 Dynamic List Management
document.getElementById("todo-list").
addEventListener("click", (event) => {
  if(event.target.tagName === "LI"){
    event.target.remove();  
  }
});

// Example-5 Clicked Image is highlighted by Border
document.getElementById("gallery").
addEventListener("click", function(event){
  if(event.target.classList.contains("thumbnail")){
    document.querySelectorAll(".thumbnail").
    forEach( img => img.style.border = "");
    event.target.style.border = "2px solid blue";
  }
});

// Example-6 Nested delegation
document.getElementById("menu").
addEventListener("click", (event) => {
  if(event.target.classList.contains("sub-item")){
    console.log(`Sub-item clicked: ${event.target.textContent}`);
  }
});

// Example-7 Dynamic Form Element Addition
const form = document.getElementById("dynamic-form");
form.addEventListener("click", (event) => {
  if(event.target.id === "add-btn"){
    const input = document.createElement("input");
    input.type = "text";
    input.name = `field-${form.querySelectorAll("input").length}`;
    form.appendChild(input);
  }
}) 

// Example: Practise Exercise

