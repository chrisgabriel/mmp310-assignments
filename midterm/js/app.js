let body = document.querySelector('body'),
    script = document.createElement('script'),
    script2 = document.createElement('script'),
    h1 = document.querySelector('h1'),
    p = document.querySelector('p'),
    h2 = document.querySelector('h2'),
    blockquote = document.querySelector('blockquote'),
    h3 = document.querySelector('h3'),
    list = document.querySelectorAll('main ul li'),
    span = document.querySelectorAll('span');

    span[0].innerHTML = '<i class="fa fa-facebook" aria-hidden="true"></i>';
    span[1].innerHTML = '<i class="fa fa-twitter" aria-hidden="true"></i>';
    span[2].innerHTML = '<i class="fa fa-instagram" aria-hidden="true"></i>';
    span[3].innerHTML = '<i class="fa fa-youtube" aria-hidden="true"></i>';


function content(data) {
    h1.innerHTML = data.h1;
    p.innerHTML = data.p;
    h2.innerHTML = data.h2;
    blockquote.innerHTML = data.blockquote;
    h3.innerHTML = data.h3;


    for (let i = 0; i < data.list[0].content.length; i += 1) {
            list[i].innerHTML += data.list[i].content;
        }
}

function headerNav(data) {
    let
        nav = document.querySelectorAll('nav'),
        newUl = document.createElement('ul'),
        ul = [],
        li = [];
        nav[0].appendChild(newUl);


    for (let x = 0; x <= data.items.length; x += 1) {

        li[x] = document.createElement('li');
        li[x].innerHTML = '<a href="' + data.items[x].url + '">' + data.items[x].label + '</a>';
        ul[x] = document.createElement('ul');
            for (let y = 0; y < data.items[x].items.length; y += 1) {
            ul[x].innerHTML += '<li><a href="' + data.items[x].items[y].url + '">' + data.items[x].items[y].label + '</a></li>';

            }
        newUl.appendChild(li[x]);
        li[x].appendChild(ul[x]);
    }
}


script.setAttribute('src', 'data/content.json');
script2.setAttribute('src', 'data/nav.json');

body.appendChild(script);
body.appendChild(script2);

