let paragraph = 'Heroic Spirits, or more commonly known as servants in the Type-Moon franchise Fate are spirits summoned for the Holy Grail War by magus known as masters to fight in an all out free for all battle royale. These servants are spirits of legendary warriors from myths and legends from all times or historical figures across the world whose souls are summoned by the Holy Grail. Each batch of servants are summoned in sevens, each pertaining to a particular class of servants which are namely: Saber, Archer, Lancer, Rider, Caster, Assassin, and Berserker. This format is the typical rule unless special circumstances. Each heroic spirit has a "true name" which they must never reveal as it contains their legends which includes weakness, and weakness is not an option.';

document.getElementById('paragraph').innerHTML = paragraph;

let herolist = ['Saber', 'Archer', 'Lancer', 'Rider', 'Caster', 'Assassin', 'Berserker'];

//items = hero(name), photo(photo directory), about(yup, about), info(img alt)
//abouts are taken from Fate fandom wiki

let saber = {
    hero: 'Saber',
    photo: 'images/saber.png',
    about: "Servants placed within this class are agile and powerful melee warriors armed with swords. It is commonly assumed to be the best class overall, with high ratings in all categories. It also possesses the Riding Skill like the Rider class.",
    info: 'this is saber',
}

let archer = {
    hero: 'Archer',
    photo: 'images/archer.png',
    about: "Servants placed within this class are usually proficient with projectiles and can survive longer without a Master nearby, thanks to their special ability Independent Action; the strongest Archers can be difficult to control at times, in fact, due to their near-total independence from their 'Masters'.",
    info: 'this is archer',
}

let lancer = {
    photo: 'images/lancer.png',
    hero: 'Lancer',
    about: "Servants placed within this class are very agile and skilled with long-range melee weapons, such as spears, lances, etc.",
    info: 'this is lancer',
}

let rider = {
    photo: 'images/rider.png',
    hero: 'Rider',
    about: "Servants placed within this class place emphasis upon speed and powerful Noble Phantasms, which often include their mounts. Their special Skill is Riding, which allows them to fully utilize abilities of their mounts (which can range from simple horses to mechanical vehicles to divine or supernatural creatures).",
    info: 'this is rider',
}

let caster = {
    photo: 'images/caster.png',
    hero: 'Caster',
    about: "Servants placed within this class are adept in magecraft and have a special ability akin to a Reality Marble, called Territory Creation, which alters or creates space around them to enhance their sorcery.",
    info: 'this is caster',
}

let assassin = {
    photo: 'images/assassin.png',
    hero: 'Assassin',
    about: "Servants placed within this class are proficient in assassination and stealth. Within certain wars, only Hassan-i-Sabbah can be summoned due to the etymology of the word 'Assassin' acting as a catalyst. The Assassins' special ability is Presence Concealment, which allows them to remain undetected.Offset by their stealth is their moderate combat skills.Due to this, Assassins often target Masters instead of Servants.",
    info: 'this is assassin',
}

let berserker = {
    photo: 'images/berserker.png',
    hero: 'Berserker',
    about: "Servants placed within this class are always heroes who have gone berserk in their lifetime or fight recklessly. This trait allows them to use the special ability Mad Enhancement, which trades their consciousness (i.e. sanity) for a large power boost. Most Masters are incapable of controlling their Servant once Mad Enhancement has been activated, which eventually results in their death.",
    info: 'this is berserker',
}

let defaulthero = {
    photo: 'images/template.png',
    hero: 'HeroName',
    about: 'Select a Hero',
    info: 'Select a Hero',
}

//id's = name, photo, about
function displayhero(x) {
    document.querySelector('#name').innerHTML = x.hero;
    document.querySelector('#about').innerHTML = x.about;
    document.querySelector('#photo').setAttribute('src', x.photo);
    document.querySelector('#photo').setAttribute('alt', x.info)
}

displayhero(defaulthero)

const showhero = () => {
    let currenthero = document.getElementById('heroes').value;

    switch (currenthero) {
        case '1':
            displayhero(saber);
            break;

        case '2':
            displayhero(archer);
            break;

        case '3':
            displayhero(lancer);
            break;

        case '4':
            displayhero(rider);
            break;

        case '5':
            displayhero(caster);
            break;

        case '6':
            displayhero(assassin);
            break;

        case '7':
            displayhero(berserker);
            break;

        case '0':
            displayhero(defaulthero);;
            break;

        default:
            displayhero(defaulthero);
            break;
    }
}
document.getElementById('heroes').addEventListener('change', showhero);