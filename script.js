var canvasSize; 
var trueSize = canvasSize*canvasSize;
const contGrids = document.querySelector('.contGrids');
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
                };
    }
    else if (canvasSize > 100)
    {
        alert("Canvas Size too big! Please input a number lower then 100!")
        askPrompt();
        if (canvasSize <= 100)
        {
            trueSize = canvasSize*canvasSize;
            createGrid();
        }
    }            
};


contGrids.addEventListener
(
    'mouseover', e => 
    {
        var target = e.target
        if (target !== contGrids)
        {
            target.classList.add('permahover')
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
        askPrompt();
        createGrid();
    }
);

askPrompt();
createGrid();
 
