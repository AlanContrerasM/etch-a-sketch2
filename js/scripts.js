let canvas = document.querySelector("#canvas");
let button = document.querySelector("button");


createCanvas(24);

//function that will take a number variable and create a grid
//of elements to populate canvas container.
function createCanvas(size){
    canvas.innerHTML = "";
    //loop through size param and create correct number of divs
    for(let i = 0; i < size*size; i++){
        //create element
        let newCanvasItem = document.createElement("div");

        //assign background color white
        newCanvasItem.style.backgroundColor = "white";
        newCanvasItem.style.opacity = 1;

        //moddify canvas grid so it accepts the new size
        canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        
        //create mouseenter event listener and add random color
        newCanvasItem.addEventListener("mouseenter", (e) =>{

            //if backgroundcolor white, assign random rgb
            //else change opacity so it becomes more transparent, thus blacker
            if(e.target.style.backgroundColor == "white"){
                e.target.style.backgroundColor = createRandomColor();
            }else{
                e.target.style.opacity = Number(e.target.style.opacity)-.1
            }
            
        })
        
        
        //append div to canvas container
        canvas.appendChild(newCanvasItem);


    }
}

//function to create random Color, uses three random numbers for rgb
function createRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    return `rgb(${red}, ${green}, ${blue})`
    
}

//addEventListener for button
button.addEventListener("click", newCanvasBtn);

//function after pressing the New Canvas button
function newCanvasBtn(){

    let newSize = 0;
    
    do{
        newSize = Number(prompt("What canvas size do you want?(2-100"));
    }while(newSize >100 || newSize <= 2)

    createCanvas(newSize);

}