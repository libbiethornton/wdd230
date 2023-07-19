const url3 = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

async function getFruitData(url3) {
    const response = await fetch(url3);
    const fruits = await response.json();
    //console.table(fruits);
    displayFruitList1(fruits);
    displayFruitList2(fruits);
    displayFruitList3(fruits);
};

getFruitData(url3);

const displayFruitList1 = (fruits) => {

    fruits.forEach((fruit) => {
        let fruitname = document.createElement('option');
        fruitname.textContent = fruit.name;
        const list = document.querySelector('#fruitlist1');
        list.appendChild(fruitname);
    });
}

const displayFruitList2 = (fruits) => {

    fruits.forEach((fruit) => {
        let fruitname = document.createElement('option');
        fruitname.textContent = fruit.name;
        const list = document.querySelector('#fruitlist2');
        list.appendChild(fruitname);
    });
}

const displayFruitList3 = (fruits) => {

    fruits.forEach((fruit) => {
        let fruitname = document.createElement('option');
        fruitname.textContent = fruit.name;
        const list = document.querySelector('#fruitlist3');
        list.appendChild(fruitname);
    });
}
