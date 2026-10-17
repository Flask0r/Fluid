let light_mode = false;
let theme = sessionStorage.getItem('theme');
console.log(theme)
    const body = document.getElementById('body');
    const selector = document.getElementById('selector');
    const circle = document.getElementById('circle');

if(theme == 'dark') {
    body.classList.toggle('light');
    light_mode = !light_mode;
    console.log("Состояние: " + light_mode)
    if(light_mode == true) {
        sessionStorage.setItem('theme', 'dark')
    } else {
        sessionStorage.setItem('theme', 'light')
    }
}
selector.addEventListener('click', () => {
    body.classList.toggle('light');
    light_mode = !light_mode;
    console.log("Состояние: " + light_mode)
    if(light_mode == true) {
        sessionStorage.setItem('theme', 'dark')
    } else {
        sessionStorage.setItem('theme', 'light')
    }
});








const pants = document.querySelectorAll('.pants');
const arr = [];
for(let i = 1; i <= pants.length; i++) {
    arr.push(i)
}
const arr_random = arr.map(i=>[Math.random(), i]).sort().map(i=>i[1]);
const tshirt = document.querySelectorAll('.upper');
const block = document.querySelectorAll('.block');
const header = document.getElementById('header');
    pants.forEach((item, index) => {
    item.dataset.frame = arr_random[index];
    item.src = `png/pants-${arr_random[index]}.png`; 
});
    tshirt.forEach((item, index) => {
    item.dataset.frame = arr_random[index];
    item.src = `png/tshirt-${arr_random[index]}.png`; 
});
const right_button = document.getElementById('right_button')
const left_button = document.getElementById('left_button')
const track = document.getElementById('track')

let slide_index = 0;

const index = document.getElementById('index')
function slide() {
    track.style.transform = `translateX(-${slide_index *100}%)`;
    index.textContent = (slide_index + 1)
}

right_button.addEventListener('click', () => {
    if(slide_index <((arr.length / 3) - 1)) {
        slide_index++;
    }else {
        slide_index = 0
    }
right_button.classList.toggle('anim');
setTimeout(() => {
    right_button.classList.toggle('anim');
}, 500);
index.classList.toggle('anim');
setTimeout(() => {
    index.classList.toggle('anim');
}, 500);
slide();
})

left_button.addEventListener('click', () => {
    if(slide_index > 0) {
        slide_index--;
    }else {
        slide_index = 0
    }
left_button.classList.toggle('anim');
setTimeout(() => {
    left_button.classList.toggle('anim');
}, 500);
index.classList.toggle('anim');
setTimeout(() => {
    index.classList.toggle('anim');
}, 500);
slide();
})


for(let z = 1; z <= arr.length; z++) {
const tshirt_z = document.getElementById(`tshirt_${z}`)
if(!tshirt_z) continue
tshirt_z.addEventListener('click', () => {
    const current_src = tshirt_z.getAttribute('src');
    let count = (Math.floor(Math.random() * arr.length) + 1);
    if(`png/tshirt-${count}.png` === current_src) {
        count = count < arr.length ? count + 1 : 1;
    }
    tshirt_z.src = `png/tshirt-${count}.png`;
    tshirt_z.classList.toggle('anim_2')
    setTimeout(() => {
    tshirt_z.classList.toggle('anim_2');
}, 500);
})
}


for(let z = 1; z <= arr.length; z++) {
const pants_z = document.getElementById(`pants_${z}`)
if(!pants_z) continue
pants_z.addEventListener('click', () => {
    const current_src = pants_z.getAttribute('src');
    let count = (Math.floor(Math.random() * arr.length) + 1);
    if(`png/pants-${count}.png` === current_src) {
        count = count < arr.length ? count + 1 : 1;
    }
    pants_z.src = `png/pants-${count}.png`;
    pants_z.classList.toggle('anim_2')
    setTimeout(() => {
    pants_z.classList.toggle('anim_2');
}, 500);
})
}