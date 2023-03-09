const contGrids = document.querySelector('.contGrids');

for (let i = 0; i < 256; i++) 
{
    const square = document.createElement('div');
    square.classList.add('square');
    /*square.textContent = "Test!!!";**/
    contGrids.appendChild(square);
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
)

const resetButton = document.getElementById('btn');

resetButton.addEventListener
(
    'click', function()
    {
        location.reload();
        return false;
    }
);
 
