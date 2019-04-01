window.onload = init;

function init() {
    document.querySelector('#display-all')
        .addEventListener('click', displayAll);
    document.querySelector('#search')
        .addEventListener('click', search);
}

function displayAll(event) {
    event.preventDefault();

    emptyList();
    for(let i = 0; i < instructors.length; i++) {
        display(instructors[i]);
    }
    
}

function search(event) {
    event.preventDefault();

    const userInput = document.querySelector('#search-input').value;
    for(let i = 0; i < instructors.length; i++) {
        const instructor = instructors[i];
        if (userInput.toLowerCase() === instructor.lastName.toLowerCase()) {
            emptyList();
            display(instructor);
        }
    }
}

function display(instructor) {
    const instructorsUl = document.querySelector('#instructor-list');

    const instructorLi = document.createElement('li');
    const instructorData = document.createElement('ul');
    instructorLi.appendChild(instructorData);
    instructorsUl.appendChild(instructorLi);

    const name = document.createElement('li');
    name.innerText = `Name: ${instructor.firstName} ${instructor.lastName}`;
    instructorData.appendChild(name);

    const term = document.createElement('li');
    term.innerText = `Term: ${instructor.term}`;
    instructorData.appendChild(term);

    const position = document.createElement('li');
    position.innerText = `Position: ${instructor.position}`;
    instructorData.appendChild(position);

    const usesLinux = document.createElement('li');
    usesLinux.innerText = `Wastes Time On Linux: ${instructor.usesLinux ? 'Yes' : 'No'}`;
    instructorData.appendChild(usesLinux);

    instructorsUl.appendChild(instructorLi);
}

function emptyList() {
    const instructorList = document.querySelector('#instructor-list');

    while(instructorList.hasChildNodes()) {
        instructorList.firstChild.remove();
    }
}