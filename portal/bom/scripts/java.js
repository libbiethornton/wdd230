const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener('click', () => {
    const myChapter = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listButton = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myChapter;
    listItem.appendChild(listButton);
    listButton.textContent = '❌';
    list.appendChild(listItem);

    listButton.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    input.focus();
});