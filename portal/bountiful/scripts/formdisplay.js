const url4 = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

async function getFruitInfo(url4) {
    const response = await fetch(url4);
    const fruits = await response.json();
    //console.table(fruits);
    showOrder(fruits);
};

//getFruitInfo(url4);

// display results after form has been submitted.//
function showOrder(fruits) {
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var fruit1 = document.getElementById("fruitlist1").value;
    var fruit2 = document.getElementById("fruitlist2").value;
    var fruit3 = document.getElementById("fruitlist3").value;
    var instructions = document.getElementById("instructions").value;

    document.getElementById('f0').innerHTML = "Your Specialty Drink Information";
    document.getElementById('f1').innerHTML = "Name: " + fname + ", ";
    document.getElementById('f2').innerHTML = "Email: " + email + ", ";
    document.getElementById('f3').innerHTML = "Phone: " + phone + ", ";
    document.getElementById('f4').innerHTML = "Fruit 1: " + fruit1 + ", ";
    document.getElementById('f5').innerHTML = "Fruit 2: " + fruit2 + ", ";
    document.getElementById('f6').innerHTML = "Fruit 3: " + fruit3 + ", ";
    document.getElementById('f7').innerHTML = "Instructions: " + instructions;
    
    let currentDate = new Date();
    document.getElementById('date').innerHTML = currentDate;

    fruits.forEach((fruit) => {
        var fruit1 = document.getElementById("fruitlist1").value;
        var fruit2 = document.getElementById("fruitlist2").value;
        var fruit3 = document.getElementById("fruitlist3").value;

        if (fruit.name == fruit1) {
            let carbs1 = fruit1.nutritions.carbohydrates;
            return carbs1;
        } else if (fruit.name == fruit2) {
            let carbs2 = fruit2.nutritions.carbohydrates;
            return carbs2;
        } else if (fruit.name == fruit3) {
            let carbs3 = fruit3.nutritions.carbohydrates;
            return carbs3;
        };
        let totalCarbs = carbs1 + carbs2 + carbs3;
        document.getElementById('carbs').innerHTML = "Total Carbohydrates: " + totalCarbs + ", ";

        if (fruit.name == fruit1) {
            let calories1 = fruit1.nutritions.calories;
            return calories1;
        } else if (fruit.name == fruit2) {
            let calories2 = fruit2.nutritions.calories;
            return calories2;
        } else if (fruit.name == fruit3) {
            let calories3 = fruit3.nutritions.calories;
            return calories3;
        };
        let totalCalories = calories1 + calories2 + calories3;
        document.getElementById('calories').innerHTML = "Total Calories: " + totalCalories + ", ";

        if (fruit.name == fruit1) {
            let fat1 = fruit1.nutritions.fat;
            return fat1;
        } else if (fruit.name == fruit2) {
            let fat2 = fruit2.nutritions.fat;
            return fat2;
        } else if (fruit.name == fruit3) {
            let fat3 = fruit3.nutritions.fat;
            return fat3;
        };
        let totalFat = fat1 + fat2 + fat3;
        document.getElementById('fat').innerHTML = "Total Fat: " + totalFat + ", ";

        if (fruit.name == fruit1) {
            let protein1 = fruit1.nutritions.protein;
            return protein1;
        } else if (fruit.name == fruit2) {
            let protein2 = fruit2.nutritions.protein;
            return protein2;
        } else if (fruit.name == fruit3) {
            let protein3 = fruit3.nutritions.protein;
            return protein3;
        };
        let totalProtein = protein1 + protein2 + protein3;
        document.getElementById('protein').innerHTML = "Total Protein: " + totalProtein + ", ";


        if (fruit.name == fruit1) {
            let sugar1 = fruit1.nutritions.sugar;
            return sugar1;
        } else if (fruit.name == fruit2) {
            let sugar2 = fruit2.nutritions.sugar;
            return sugar2;
        } else if (fruit.name == fruit3) {
            let sugar3 = fruit3.nutritions.sugar;
            return sugar3;
        };
        let totalSugar = sugar1 + sugar2 + sugar3;
        document.getElementById('sugar').innerHTML = "Total Sugar: " + totalSugar;
    });
}