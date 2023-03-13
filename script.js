/* Messy code and not a very elegant solution, but it functions perfectly! */

let canvasSize; 
let trueSize = canvasSize*canvasSize;
let eraserToggle = false;
let rainbowToggle = false;
let defaultColor = true;
const contGrids = document.querySelector('.contGrids');
const square = document.createElement('div');
const resetButton = document.getElementById('btn');
const resizeButton = document.getElementById('btn2');
const eraserButton = document.getElementById('btn3');
const rainbowButton = document.getElementById('btn4');
let changedColor;
let toggleNewColor = false;


function askPrompt()
{
    canvasSize = prompt("Enter canvas size (max: 100)", "16");
    trueSize = canvasSize*canvasSize;   
};

/* Takes user input, calculates from the given canvasSize and creates a grid of squares */
function createGrid()
{
    if (canvasSize <= 100)
    {
        for (let i = 0; i < trueSize; i++) 
                {
                    const square = document.createElement('div');
                    square.classList.add('square');
                    contGrids.appendChild(square);
                    square.style.width = `calc(600px/${canvasSize})`;
                    square.style.height = `calc(600px/${canvasSize})`;
                };
    }
    else if (canvasSize > 100)
    {
        alert("Canvas Size too big! Please input a number lower then 100!")
        askPrompt();
        if (canvasSize <= 100)
        {
            trueSize = canvasSize*canvasSize;
            const square = document.createElement('div');
            square.classList.add('square');
            contGrids.appendChild(square);
            square.style.width = `calc(600px/${canvasSize})`;
            square.style.height =`calc(600px/${canvasSize})`;
        }
    }
};

/*If the color picker is touched, it enters this onchange event. If clauses to check which buttons are pressed and to act accordingly*/
  document.getElementById("colorPickerStyle").onchange = e =>
    {
        changedColor = document.getElementById('colorPickerStyle').value;
        defaultColor = false;
        toggleNewColor = true;
        rainbowToggle = false;
        eraserToggle = false;

        contGrids.addEventListener
        (
            'mouseover', e => 
        {  
            let target = e.target
            if ((e.buttons & 1) === 1 && target !== contGrids && defaultColor == false && rainbowToggle == false && eraserToggle == false)
            {
                target.style.backgroundColor = changedColor;
            }
            else if ((e.buttons & 1) === 1 && target !== contGrids && rainbowToggle == true)
            {
                target.style.backgroundColor = randomizeColor();
            }
            else if ((e.buttons & 1) === 1 && target !== contGrids && eraserToggle == true)
            {
                target.style.backgroundColor = 'rgba(20, 144, 153, 0.274)'
            }
        }
        );
    }


function randomizeColor()
{
    let color = "#";
    let hexValues = "0123456789ABCDEF"; 

    for (let i = 0; i < 6; i++) 
    {
        color += hexValues[Math.floor(Math.random()*16)];
    }

    return  color;
}

/* Not an elegent solution, but if the color picker isn't touched - it goes straight to this event which acts the same as the first one
but without the color picker */
contGrids.addEventListener
(
    'mouseover', e => 
    {  
        let target = e.target
        if ((e.buttons & 1) === 1 && target !== contGrids && defaultColor == true)
        {
            target.style.backgroundColor = 'rgba(32, 150, 211, 1)'
        }
        else if ((e.buttons & 1) === 1 && target !== contGrids && rainbowToggle == true)
        {
            target.style.backgroundColor = randomizeColor();
        }
        else if ((e.buttons & 1) === 1 && target !== contGrids && eraserToggle == true)
        {
            target.style.backgroundColor = 'rgba(20, 144, 153, 0.274)'
        }
    }
);


/* all the buttons*/

resetButton.addEventListener
(
    'click', function()
    {
      contGrids.innerHTML = "";
      createGrid();
    }
);


resizeButton.addEventListener
(
    'click', function()
    {
        contGrids.innerHTML = "";
        do
        {
            askPrompt();
        }while(canvasSize == null || canvasSize == "")
        trueSize = canvasSize*canvasSize;
        createGrid();
    }
);

eraserButton.onclick = function ()
{
    defaultColor = false;
    eraserToggle = true;
    rainbowToggle = false;
    toggleNewColor = false;    
}

rainbowButton.onclick = function ()
{
    defaultColor = false;
    rainbowToggle = true;
    eraserToggle = false;
    toggleNewColor = false;    
}


/* Initialising needed functions. Do while loop to make sure that the user inputs the needed value */

do
{
    askPrompt();
}while(canvasSize == null || canvasSize == "")
createGrid();
randomizeColor();
 
