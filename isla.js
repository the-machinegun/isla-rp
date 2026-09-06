function fit(e,s){
    while(s>8){
        e.style.fontSize=s+'px';
        if(e.scrollWidth<=325)break;
        s--
    }
}

document.querySelectorAll('.isla-top,.isla-bottom')
    .forEach(e=>fit(e,120));

fit(document.querySelector('.isla-seam'),220);
