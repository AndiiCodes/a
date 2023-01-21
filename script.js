var typed = new Typed(".auto-type" ,{

    strings: ['Front-End Developer &#129321;', 'Freelancer &#128578;', 'Snapchat Lens Creator &#128519;'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true

})


var typed = new Typed(".story" ,{

    strings: ['My journey with technology began '+
    'when I was just 9 years old, in 2010. '+
    'It was then that my father introduced '+
    'me to the basics of using a computer '+
    'and I quickly became fascinated with '+
    'the world of technology. I spent countless '+
    'hours exploring new software and reading '+
    'up on the latest advancements in the field, '+
    'always eager to learn more. As I grew older, '+
    'I knew that I wanted to make a career out of '+
    'my passion for technology. I decided to focus '+
    'on front-end development, drawn to the creative '+
    'and visually appealing aspects of this field. '+
    'I have dedicated myself to learning and improving '+
    'my skills, and am excited to see where my career '+
    'takes me in the future.'],
    typeSpeed: 30,
    backSpeed: 50,
    loop: false

})



const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.classList.add("show");
    mainMenu.classList.remove("hidden2");
    mainMenu.style.top = '0';
    
}
function close(){
    mainMenu.classList.remove("show");
    mainMenu.classList.add("hidden");
    mainMenu.style.top = '-100%';
}







