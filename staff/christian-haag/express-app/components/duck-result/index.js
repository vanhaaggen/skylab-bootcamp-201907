const FavButton = require('../fav-button')

function DuckResults(ducks) {

    return ducks.length === 1 ?

        `<p>${ducks}</p>` :

        `<ul>${ducks.map(({ id, title, imageUrl, price, favorite }) =>
            `<li>
                <a href="/ducks/${id}">
                <h3>${title}</h3>
                <img src="${imageUrl}">
                <span>${price}</span>
                </a>
                ${FavButton(favorite, id)}
            </li>`).join('')}</ul>`
}

module.exports = DuckResults

