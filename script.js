dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

function dragElement(terrariumElement) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

/**
 * 
 * TODO: the implementation should be better for the top property, because always will move horitzontal from left to right (or viceversa) to where is found the element but not vertically. This is because the top element go into a collision with the bottom one and usually goes out of the frame of the terrarium.
 */

function getRandomValueLeftLeftContainer() {
    return Math.random() * (970 - 240) + 240;
}

function getRandomValueLeftRightContainer() {
    return Math.random() * (-890 - (-150)) + (-150);

}

const leftContainer = document.getElementById('left-container');
const allPlantsLeftContainer = leftContainer.querySelectorAll('img');

allPlantsLeftContainer.forEach((plant) => {
    plant.addEventListener('dblclick', function (e) {
        plant.style.top = '0px';
        plant.style.left = `${getRandomValueLeftLeftContainer()}px`;
    });
})

const rightContainer = document.getElementById('right-container');
const allPlantsRightContainer = rightContainer.querySelectorAll('img');

allPlantsRightContainer.forEach((plant) => {
    plant.addEventListener('dblclick', function (e) {
        plant.style.top = '0px';
        plant.style.left = `${getRandomValueLeftRightContainer()}px`;
    });
})
