var canvasSize = prompt("Enter canvas size:", "16");
var trueSize = canvasSize*canvasSize;
const contGrids = document.querySelector('.contGrids');

function createGrid()
{
    for (let i = 0; i < trueSize; i++) 
            {
            const square = document.createElement('div');
            square.classList.add('square');
            contGrids.appendChild(square);
            };
}

createGrid();

const resizeButton = document.getElementById('btn2');
resizeButton.addEventListener
(
    'click', function()
    {
        contGrids.innerHTML = "";
        canvasSize = prompt("Enter canvas size:", "16");
        trueSize = canvasSize*canvasSize;
        createGrid();
    }
);


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
)

const resetButton = document.getElementById('btn');
resetButton.addEventListener
(
    'click', function()
    {
      contGrids.innerHTML = "";
      createGrid();
    }
)




 
