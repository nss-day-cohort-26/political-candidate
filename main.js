// Using document.querySelector() to get a reference to the article element on DOM with id 'congressional-rep'
const articleRef = document.querySelector("#congressional-rep")
console.log(articleRef)

// Creating a new paragraph element using document.createElement()
let paragraphElement = document.createElement("p")
// Creating a new text node that will contain the fictitious mission statement
let paragraphTextNode = document.createTextNode("Made up mission statement")
// Using appendChild() to add the text node as a child of the paragraph element
paragraphElement.appendChild(paragraphTextNode)
console.log(paragraphElement);
// Appending the paragraphElement to the article element on the DOM
articleRef.appendChild(paragraphElement)

// Using createAttribute() to create a custom attribute named 'congressional-district'
const congressionalDistAttr = document.createAttribute("congressional-district")
// Setting the value of the custom attribute to the district number
congressionalDistAttr.value = "5"

// Adding the custom attribute and its value to the article element
articleRef.setAttributeNode(congressionalDistAttr)
