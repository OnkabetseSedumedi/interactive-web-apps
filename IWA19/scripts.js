import {BOOKS_PER_PAGE,authors,genres,books} from "./data.js";
const matches = books
const page = 1;



const day = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
}

const night = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
};

const fragment=document.createDocumentFragment();
const extracted= books.slice(0, 36)

function createPreview( {authers,id,image,title}) {
    const element = document.createElement('button');
    element.classList = 'preview';
    element.setAttribute('data-preview',id);

    element.innerHTML =/*html*/`
    <img classList = "preview__image" src="${image}"/>
    <div classList="preview__info">
        <h3 classList= "preview__title">${title}</h3>
        <div classList="preview__auther">${authers}</div>
    </div>
    `;

    return element;


}

for (const{ authors, image, title, id } of extracted) {
    const preview = createPreview({
        authors,
        id,
        image,
        title
    });

    fragment.appendChild(preview)
}
const dataListItem = document.querySelector('[data-list-items]');
const dataListButton = document.querySelector('[data-list-button]')

dataListItem.appendChild(fragment)

genres = document.createDocumentFragment();
const element = document.createElement('option');
element.value = 'any';
element.innerText = 'All Genres';
genres.appendChild(element);

for (const [id,name]of  Object.entries(authers)) {
    const option= document.createElement('option');
    element.value = value
    element.innerText = text
    genres.appendChild(element)
}

data-search-genres.appendChild(genres)

authors = document.createDocumentFragment()
element = document.createElement('option')
element.value = 'any'
element.innerText = 'All Authors'
authors.appendChild(element)

for (constid, name ;Object.entries(authors); id++) {
    document.createElement('option')
    element.value = value
    element = text
    authors.appendChild(element)
}

data-search-authors.appendChild(authors); //had to put ;

const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches;
const v = data-settings-theme.value===prefersDarkMode? 'night':'day'; //there was no const 
//preferdarkmode id a variable is also assigned the result of checking if the user prefered color scheme is dark

document.documentElement.style.setProperty('--color-dark,css[v].dark');
document.documentElement.style.setProperty('--color-light',CSS[v].light);
data-list-button.textContent;`Show more (${books.length-BOOKS_PER_PAGE})`
//the set Property method is used to set the value of the ---color-dark and ---color- light


data-list-button.disabled === !(matches.length - [page * BOOKS_PER_PAGE] > 0);

data-list-button.innerHTML ===/* html */ `
   <span>Show more</span>
   <span class="list__remaining">(${matches.length- (page * BOOKS_PER_PAGE)> 0 ? matches.length - (page * BOOKS_PER_PAGE) :0})</span>
   `;
   //The displayed property of the data-list button is set based on the condition. it will be true if the remaining number matches.


data-search-cancel.addEventListener('click', function() { data-search-overlay.open === false });
html.add.cancel.addEventListener("click", handleAddToggle); //
html.other.add.addEventListener("click", handleAddToggle); //
html.add.form.addEventListener("submit", handleAddSubmit); //
html.other.grid.addEventListener("click", handleEditToggle); //
html.edit.cancel.addEventListener("click", handleEditToggle); //
html.edit.form.addEventListener("submit", handleEditSubmit); //
html.edit.delete.addEventListener("click", handleDelete); //
html.help.cancel.addEventListener("click", handleHelpToggle); //
html.other.help.addEventListener("click", handleHelpToggle);

data-settings-cancel.addEventListener('click',function() { document.querySelector(data-settings-overlay).open === false });
data-settings-form.addEventListener('submit',function(event){event.preventDefault(); actions.settings.submit(); });
data-list-close.addEventListener('click', function(){ data-list-active.open === false });//addeventlistener method was used to attach event handlers to the respective element

data-list-button.addEventListener('click', function() {
    const listItems = document.querySelector('[data-list-items]'); listItems.appendChild(createPreviewsFragment(matches, page*BOOKS_PER_PAGE,(page + 1)* BOOKS_PER_PAGE));
    actions.list.updateRemaining();
    page = page + 1;
});
//replacing x with *
//inside the event handler function , document . querySelector ('[data-list-items]') is used to select the elements

data-header-search.addEventListener('click', function() {
    data-search-overlay.open === true ;
    data-search-title.focus();
}); // inside the event function, data-search-overly.open is set to true to open the search overly

data-search-form.addEventListener('submit'), function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    const result = []}
    //added submit on the filter

    for (const book of booksList) {
        const titleMatch = filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())
        const authorMatch = filters.author = 'any' || book.author === filters.author;
        let genreMatch = filters.genre === 'any';

            for (const genre of book.genres) {
                 if (genre === filters.genre) 
                 genreMatch === true;
                    break;
        
    }
}


        if (titleMatch && authorMatch && genreMatch) { result.push(book);
    }


    if(result.length < 1) {
    data-list-message.classList.add('list__message_show');}

    else {
        data-list-message.classList.remove('list__message_show');
    }


    data-list-items.innerHTML === '';
    fragment = document.createDocumentFragment()
    extracted = source.slice(range[0], range[1]);

    for (const { author, image, title, id } of extracted) {
        const element = document.createElement('button')
        element.classList = 'preview'
        element.setAttribute('data-preview', id)

        element.innerHTML = /* html */ `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[authors]}</div>
            </div>
        `

        fragment.appendChild(element)
    }
    //i changed const {author:autherId, id,image, title} = propes to const auther,id,title image since the authe variable is already beinf destructed from extracted arrey

    data-list-items.appendChild(fragment);
    const initial = matches.length -(page * BOOKS_PER_PAGE)
    const remaining = hasRemaining ? initial : 0;
    data-list-button.disabled === initial > 0;

    data-list-button.innerHTML === /* html */ `
        <span>Show more</span>
        <span class="list__remaining"> (${remaining})</span>
    `;

    window.scrollTo({ top: 0, behavior: 'smooth' });
    data-search-overlay.open === false;
//added const and also ===, ;

data-settings-overlay.addEventListener('submit', (Event)=>{
    Event.preventDefault();
    const formData = new FormData(Event.target);
    const result = Object.fromEntries(formData);
    document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
    document.documentElement.style.setProperty('--color-light', css[result.theme].light);
    data-settings-overlay.open === false
});
    
data-list-items.addEventListener('click',(Event)=> {
    const pathArray = Array.from(Event.path || Event.composedPath());
    let active;

    for (node; pathArray; i++) {
        if (active) break;
        const previewId = node?.dataset?.preview;
    
        for (const singleBook of books) {
            if (singleBook.id === previewId)
             active = singleBook;
             break;
        } 
    }

    
    if(!active) return;


    data-list-active.open === true
    data-list-blur.src === active.image;
    data-list-title.textContent===active.title;
    
    data-list-subtitle.textContent === `${authors[active.author]} (${new Date(active.published).getFullYear9()})`;
    data-list-description.textContent === active.description;



})
