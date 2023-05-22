let handle = document.getElementsByTagName('input');
let header = document.querySelector('header');
let p = document.querySelector('p');
let select = document.querySelector('select');

for(let i of handle){
    i.oninput = ()=>{
        percent(p, header);
    }
}
handle[0].oninput = ()=>{
    allpercent(p, header);
}

select.onchange = ()=>{
    for(let i of handle){
        if(select.value == "percent"){
            i.oninput = ()=>{
                percent(p, header);
            }
            handle[0].oninput = ()=>{
                allpercent(p, header);
            }
        }
        if(select.value == "pixel"){
            i.oninput = ()=>{
                 pixel(p, header);
            }
            handle[0].oninput = ()=>{
                 allpixel(p, header);
            }
        }
    }
}

function percent(p, header){
    p.innerText = "Border-Radius: " +' ' +
    handle[1].value + '%'+ ' '+
    handle[2].value + '%'+ ' '+
    handle[3].value + '%'+ ' '+
    handle[4].value + '%'+ ';';
    header.style.borderTopLeftRadius = handle[1].value + '%';
    header.style.borderTopRightRadius = handle[2].value + '%';
    header.style.borderBottomLeftRadius = handle[3].value + '%';
    header.style.borderBottomRightRadius = handle[4].value + '%';
}

function pixel(p, header){
    p.innerText = "Border-Radius: " +' ' +
    handle[1].value * 3 + 'px'+ ' '+
    handle[2].value * 3 + 'px'+ ' '+
    handle[3].value * 3 + 'px'+ ' '+
    handle[4].value * 3 + 'px'+ ';';
    header.style.borderTopLeftRadius = handle[1].value * 3 + 'px';
    header.style.borderTopRightRadius = handle[2].value * 3 + 'px';
    header.style.borderBottomLeftRadius = handle[3].value * 3 + 'px';
    header.style.borderBottomRightRadius = handle[4].value * 3 + 'px';
}

function allpercent(p, header){
    p.innerText = "Border-Radius: " + handle[0].value + '%';
    header.style.borderRadius = handle[0].value + '%';
}

function allpixel(p, header){
    p.innerText = "Border-Radius: " + handle[0].value * 3 + 'px';
    header.style.borderRadius = handle[0].value * 3 + 'px';
}
