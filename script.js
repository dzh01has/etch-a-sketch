var canvasSize; 
var trueSize = canvasSize*canvasSize;
const contGrids = document.querySelector('.contGrids');
const square = document.createElement('div');
const newColor = document.querySelector('.permahover');
const resetButton = document.getElementById('btn');
const resizeButton = document.getElementById('btn2');



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
                    square.style.width = `calc(800px/${canvasSize})`;
                    square.style.height =`calc(800px/${canvasSize})`;
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
            square.style.width = `calc(800px/${canvasSize})`;
            square.style.height =`calc(800px/${canvasSize})`;
        }
    }
};

function randomizeColor()
{
    let color = "#";
    let hexValues = "0123456789ABCDEF"; 

    for (let i = 0; i < 6; i++) 
    {
        color += hexValues[Math.floor(Math.random()*16)];
        
    }

    console.log(color)
    return  color;
}


contGrids.addEventListener
(
    'mouseover', e => 
    {
        var target = e.target
        if (target !== contGrids)
        {
            target.style.backgroundColor = randomizeColor();
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

do
{
    askPrompt();
}while(canvasSize == null || canvasSize == "")
createGrid();
randomizeColor();
 
