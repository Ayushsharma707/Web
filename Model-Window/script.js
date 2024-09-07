'use strict';

const modal = docu-ment.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.show-modal');
console.log(btnOpenModal);
for (let i = 0; i < btnOpenModal.length; i++)
{
    btnOpenModal[i].addEventListener
        {
            'click', function()
            {
                console.log('Button closed');
                modal.classList.remove('hidden');
                
            }
        }
    
}


