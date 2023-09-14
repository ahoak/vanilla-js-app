const page = document.getElementById('page');

const render = (html) => {
  page.innerHTML = html;
};

const renderHome = () => {
    render(`
        <h1>Home</h1>
        <a href="#/about">About</a>
        <a href="#/contact">Contact</a>
    `);
};

const renderAbout = () => {
    render(`
        <h1>About</h1>
        <a href="#/">Home</a>
        <a href="#/contact">Contact</a>
    `);
};

const renderContact = () => {
    render(`
        <h1>Contact</h1>
        <a href="#/">Home</a>
        <a href="#/about">About</a>
    `); 
};
const routes = [
    { path: '#/', view: renderHome },
    { path: '#/about', view: renderAbout },
    { path: '#/contact', view: renderContact }
];

const resolveRoute = (url) => {
    console.log('router', location.hash);
    if (url === '/') {
        return renderHome;
    } else if (url === '/about') {
        return renderAbout;
    } else if (url === '/contact') {
        return renderContact;
    }

    return renderHome;
    
};

function router(evt) {
    let url = window.location.hash.slice(1) || '/';
    let route = resolveRoute(url);

    route();
};


window.addEventListener('load', router);
window.addEventListener('hashchange', router);


const init = () => {
    router();
};

init();

renderHome();