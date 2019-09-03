const getTheTitles = function(books) {

    const bks = books;
    let titles = [];

    for(let i = 0; i < bks.length; i++) {
        titles[i] = books[i].title;
    }

    return titles;
}

module.exports = getTheTitles;
