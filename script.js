var canvasSize; 
var trueSize = canvasSize*canvasSize;
var eraserToggle = false;
var rainbowToggle = false;
var defaultColor = true;
const contGrids = document.querySelector('.contGrids');
const square = document.createElement('div');
const resetButton = document.getElementById('btn');
const resizeButton = document.getElementById('btn2');
const eraserButton = document.getElementById('btn3');
const rainbowButton = document.getElementById('btn4');
var changedColor;
var toggleNewColor = false;


function askPrompt()
{
    canvasSize = prompt("Enter canvas size (max: 100)", "16");
    trueSize = canvasSize*canvasSize;   
};


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

/*If the color picker is touched, it enters this onchange event*/
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
            var target = e.target
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


contGrids.addEventListener
(
    'mouseover', e => 
    {  
        var target = e.target
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




do
{
    askPrompt();
}while(canvasSize == null || canvasSize == "")
createGrid();
randomizeColor();
 
