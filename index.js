const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(cat){
    cats.push(cat);
}

function destructivelyPrependCat(cat){
    cats.unshift(cat);
}


function destructivelyRemoveFirstCat(){
    cats.shift();
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function appendCat(cat){
    const moreCats = [...cats, cat];
    return moreCats;
}

function prependCat(cat){
    const moreCats = [cat, ...cats];
    return moreCats;
}

function removeLastCat(){
    const lessCats = cats.slice(0, -1);
    return lessCats;
}

function removeFirstCat(){
    const lessCats = cats.slice(1);
    return lessCats;
}