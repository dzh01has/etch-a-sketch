const contGrids = document.querySelector('.contGrids');

for (let i = 0; i < 256; i++) 
{
    const square = document.createElement('div');
    square.classList.add('square');
    /*square.textContent = "Test!!!";**/
    contGrids.appendChild(square);
};