/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself

// Step 2: Inside of the object, add a property named name with a value of your name as a string

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

let about = {
    myname: 'Ari-John Katia',
    photo: 'images/profile.jpg',
    favoriteFoods: ['pizza', 'spicy chicken burger', 'sushi', 'watermelon'],
    hobbies: ['reading', 'drawing', 'cooking', 'eating'],
}

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived
about.placesLived = [{
        places: 'Tarawa, Kiribati',
        length: '20 years'
    },
    {
        places: 'Melbourne, AUS',
        length: '2 years'
    },
    {
        places: 'Suva, Fiji',
        length: '6 months'
    }

]


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').textContent = about.myname;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('src', about.photo)

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('alt', about.myname);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
about.favoriteFoods.forEach((item) => {
    let foods = document.createElement("li");
    foods.innerText = item;
    // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
    document.querySelector('#favorite-foods').appendChild(foods)
});

// Step 6: Repeat Step 4 for each hobby in the hobbies property
about.hobbies.forEach((item) => {
    let hobby = document.createElement("li");
    hobby.innerText = item;
    // Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
    document.querySelector('#hobbies').appendChild(hobby)
})

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
about.placesLived.forEach((placeLived) => {
    let placesLivedPlace = document.createElement('dt');
    placesLivedPlace.innerText = placeLived.places;

    let placesLivedLength = document.createElement('dd');
    placesLivedLength.innerText = placeLived.length;

    document.querySelector('#places-lived').appendChild(placesLivedPlace);
    document.querySelector('#places-lived').appendChild(placesLivedLength);
})