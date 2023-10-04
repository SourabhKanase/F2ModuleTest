let arr = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];
let displaybody = document.getElementById("contentDisplay");
displayData(arr);

function displayData(arr) {
    displaybody.innerHTML="";
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let div = document.createElement("div");
    div.className = "card";
    let object = arr[i];
    div.innerHTML = `<img src="${object.imageSrc}">
        <div>${object.type}</div>
        <div class="abc">
        <h4>${object.name}</h4>
        <h5>${object.rating}</h5>
        </div>
        <div class=xyz"">
        <span class="firstspan">${object.time}</span>
        <span class="heart" id="H"><span class="material-icons" onclick="Red(this)">
        favorite
        </span></span>
        </div>
        `;
    displaybody.appendChild(div);
  }
}
function AllRecipes(){
    displayData(arr);
}
function VegRecipes()
{   
    
    let extractthis=[];
    for(let i=0;i<arr.length;i++)
    {
        // console.log("function is triggered")
        let obj=arr[i];
       
        if(obj.type == "veg")
        {
            console.log(obj.type);
            extractthis.push(arr[i]);
        }
    }
    displayData(extractthis);
}
function nonVeg()
{   
    
    let extractthis=[];
    for(let i=0;i<arr.length;i++)
    {
        // console.log("function is triggered")
        let obj=arr[i];
       
        if(obj.type == "non-veg")
        {
            console.log(obj.type);
            extractthis.push(arr[i]);
        }
    }
    displayData(extractthis);
}


function onTickFunction(radioButton){
   
    let value=radioButton.value;
    let greater=[];
    let smaller=[];
   for(let i=0;i<arr.length;i++)
   {
    let num=Math.floor(arr[i].rating);
    console.log(num);
    if(num>=4)
    {
        greater.push(arr[i]);
    }
    if(num<=3){
        smaller.push(arr[i]);
    }
   }
   
    if(value==4)
    {
        displayData(greater);
    }
    if(value==3)
    {
        displayData(smaller);
    }
}
function search()
{   
    let newarray=[];
    let searchelement=document.getElementById("input").value.toLowerCase();
    for(let i=0;i<arr.length;i++)
    {
        let x=arr[i];
        if(x.name.toLowerCase().includes(searchelement))
        {
           newarray.push(x);
        }
    }   
  displayData(newarray);
}
let count=0;
function openSideBar()
{   
    count=1;
    let sidediv=document.createElement("div");
    sidediv.className="side";
    sidediv.id="bar"
    sidediv.innerHTML=`<a>Home</a>
    <a>Explore</a>
    <a>Help</a>
    <button onclick="closeSideBar()">Close</button>
    `
    let ham=document.getElementById("nav-section");
     ham.appendChild(sidediv);
}
function closeSideBar()
{
     let ElementToDelete=document.getElementById("bar");
     if(count=1)
     {
        ElementToDelete.remove();
     }
}
function Red(element)
{
    element.classList.toggle("redcolor");
}