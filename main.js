let light_mode = false;
let theme = localStorage.getItem('theme');
console.log(theme)
    const body = document.getElementById('body');
    const selector = document.getElementById('selector');
    const circle = document.getElementById('circle');

if(theme == 'dark') {
    body.classList.toggle('light');
    light_mode = !light_mode;
    console.log("Состояние: " + light_mode)
    if(light_mode == true) {
        localStorage.setItem('theme', 'dark')
    } else {
        localStorage.setItem('theme', 'light')
    }
}
selector.addEventListener('click', () => {
    body.classList.toggle('light');
    light_mode = !light_mode;
    console.log("Состояние: " + light_mode)
    if(light_mode == true) {
        localStorage.setItem('theme', 'dark')
    } else {
        localStorage.setItem('theme', 'light')
    }
});





const block_info = document.getElementById('block_info')
const close_button = document.getElementById('close_button')
close_button.addEventListener('click', () => {
    block_info.classList.toggle('open')
})

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

const img_info = document.getElementById('img_info')
const header_info = document.getElementById('header_info');
const text_info = document.getElementById('text_info')

const pantsHeader = {
1: "PANTS 1",
2: "PANTS 2",
3: "PANTS 3",
4: "PANTS 4",
5: "PANTS 5",
6: "PANTS 6",
7: "PANTS 7",
8: "PANTS 8",
9: "PANTS 9",
10: "PANTS 10",
11: "PANTS 11",
12: "PANTS 12"
};
const tshirtHeader = {
1: "UPPER 1",
2: "UPPER 2",
3: "UPPER 3",
4: "UPPER 4",
5: "UPPER 5",
6: "UPPER 6",
7: "UPPER 7",
8: "UPPER 8",
9: "UPPER 9",
10: "UPPER 10",
11: "UPPER 11",
12: "UPPER 12"
};

const tshirtText = {
1: "UPPER 1 TEXT",
2: "UPPER 2 TEXT",
3: "UPPER 3 TEXT",
4: "UPPER 4 TEXT",
5: "UPPER 5 TEXT",
6: "UPPER 6 TEXT",
7: "UPPER 7 TEXT",
8: "UPPER 8 TEXT",
9: "UPPER 9 TEXT",
10: "UPPER 10 TEXT",
11: "UPPER 11 TEXT",
12: "UPPER 12 TEXT"
};
const pantsText = {
1: "PANTS 1 TEXT",
2: "PANTS 2 TEXT",
3: "PANTS 3 TEXT",
4: "PANTS 4 TEXT",
5: "PANTS 5 TEXT",
6: "PANTS 6 TEXT",
7: "PANTS 7 TEXT",
8: "PANTS 8 TEXT",
9: "PANTS 9 TEXT",
10: "PANTS 10 TEXT",
11: "PANTS 11 TEXT",
12: "PANTS 12 TEXT"
};






for(let z = 1; z <= arr.length; z++) {
const tshirt_z = document.getElementById(`tshirt_${z}`)
if(!tshirt_z) continue
tshirt_z.addEventListener('click', () => {
    const current_src = tshirt_z.getAttribute('src');
    const current_img_number = current_src.match(/\d+/)[0];
    const current_header = tshirtHeader[current_img_number];
    const current_text = tshirtText[current_img_number];
    img_info.src = current_src;
    header_info.textContent = current_header
    text_info.textContent = current_text
    block_info.classList.toggle('open')
})
}
for(let z = 1; z <= arr.length; z++) {
const pants_z = document.getElementById(`pants_${z}`)
if(!pants_z) continue
pants_z.addEventListener('click', () => {
    const current_src = pants_z.getAttribute('src');
    const current_img_number = current_src.match(/\d+/)[0];
    const current_header = pantsHeader[current_img_number];
    const current_text = pantsText[current_img_number];
    img_info.src = current_src;
    header_info.textContent = current_header
    text_info.textContent = current_text
    block_info.classList.toggle('open')
})
}
