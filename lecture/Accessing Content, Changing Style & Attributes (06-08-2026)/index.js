// 1. Accessing Content

/*
A. element.innerHtml
B. element.innerText
C. element.TextContent 
*/


// {
//   let dom = document.getElementById("first_heading");

//   console.log(dom.innerHTML);

//   console.log(dom.textContent);

//   console.log(dom.innerText);
// }



// 2. setting Content 

// {
//   let dom = document.getElementById("first_heading");

//   dom.innerText = "<span>Hello World</span>"

//   dom.textContent = "<span>Hello World</span>"

// } 

// 3. Changing CSS Style

// {
//     let dom = document.getElementById("first_heading");

//     dom.style.backgroundColor = "red"
//     dom.style.color = "white"
//     dom.style.fontSize = "50px"
//     dom.style.width = "500px"
//     dom.style.height = "500px"
//     dom.style.display = "none"
//     dom.style.display = "block"
// }

{

  // Get Atteibute
  let dom = document.getElementById("first_heading");

  console.log(dom.getAttribute("id"));

  //Set Attribute
  dom.setAttribute("class", "box");

  //Remove Attribute
  dom.removeAttribute("style");

  // hasAttribute
  console.log(dom.hasAttribute("class"));
  console.log(dom.hasAttribute("style"));
  console.log(dom.hasAttribute("name"));

}

