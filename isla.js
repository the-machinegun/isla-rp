(()=>{
const G='https://www.pngplay.com/wp-content/uploads/12/Scratches-PNG-Pic-Background.png';

function fit(e,s){
    while(e&&s>8){
        e.style.fontSize=s+'px';
        if(e.scrollWidth<=325)break;
        s--;
    }
}

function build(p){
    const d=p.dataset;
    const spotify=p.querySelector('.isla-spotify')?.innerHTML||'';
    const text=p.querySelector('.isla-text')?.innerHTML||'';

    p.className='isla';
    p.style.setProperty('--seam-color',d.color);

    p.innerHTML=`
    <div class="isla-row">
        <div class="isla-left">
            <div class="isla-top"></div>

            <div class="isla-image-block">
                <img class="isla-img">
                <div class="isla-small">
                    <div class="isla-small-wrap">
                        <img>
                        <img class="isla-grunge grunge-two" src="${G}">
                    </div>
                    <div class="isla-small-wrap">
                        <img>
                        <img class="isla-grunge grunge-two" src="${G}">
                    </div>
                </div>
            </div>

            <div class="isla-seam"></div>
            <div class="isla-bottom"></div>
            <div class="isla-spotify"></div>
        </div>

        <div class="isla-text"></div>
    </div>`;

    p.querySelector('.isla-top').textContent=d.top;
    p.querySelector('.isla-seam').textContent=d.middle;
    p.querySelector('.isla-bottom').textContent=d.bottom;

    p.querySelector('.isla-img').src=d.main;

    const squares=p.querySelectorAll('.isla-small-wrap>img:first-child');
    squares[0].src=d.one;
    squares[1].src=d.two;

    p.querySelector('.isla-spotify').innerHTML=spotify;
    p.querySelector('.isla-text').innerHTML=text;

    return p;
}

const posts=[...document.querySelectorAll('.isla-post')].map(build);

function sizeLyrics(){
    posts.forEach(p=>{
        p.querySelectorAll('.isla-top,.isla-bottom').forEach(e=>fit(e,120));
        fit(p.querySelector('.isla-seam'),220);
    });
}

if(document.fonts?.ready) document.fonts.ready.then(sizeLyrics);
else sizeLyrics();
})();
