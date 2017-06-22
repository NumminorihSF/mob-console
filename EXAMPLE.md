import create from 'mob-console';


const buttonContainer = document.createElement('div');
document.body.appendChild(buttonContainer);

buttonContainer.style.position = 'absolute';
buttonContainer.style.top = 0;
buttonContainer.style.left = 0;
buttonContainer.style.right = 0;
buttonContainer.style.bottom = 0;
buttonContainer.style.display = 'flex';
buttonContainer.style.flexDirection = 'column';
buttonContainer.style.overflow = 'hidden';
buttonContainer.style['z-index'] = 1000;

create(buttonContainer);
