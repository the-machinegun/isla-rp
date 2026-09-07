(()=>{
function fit(el){
    if(!el)return;

    let size=parseFloat(getComputedStyle(el).fontSize);

    while(size>8&&el.scrollWidth>el.clientWidth){
        el.style.fontSize=--size+'px';
    }
}

function build(p){
    const d=p.dataset;
    const spotify=p.querySelector('.isla-spotify')?.innerHTML||'';
    const text=p.querySelector('.isla-text')?.innerHTML||'';

    p.className='isla';
    p.style.setProperty('--accent',d.color);

    p.innerHTML=`
        <div class="isla-lyric isla-lyric-one"></div>

        <div class="isla-top-graphics">
            <img class="isla-graphic isla-graphic-one">
            <img class="isla-graphic isla-graphic-two">
        </div>

        <div class="isla-lyric isla-lyric-two"></div>

        <div class="isla-gap"></div>

        <div class="isla-text"></div>

        <div class="isla-gap"></div>

        <div class="isla-bottom-row">
            <img class="isla-graphic isla-graphic-three">
            <div class="isla-spotify"></div>
        </div>`;

    p.querySelector('.isla-lyric-one').textContent=d.top;
    p.querySelector('.isla-lyric-two').textContent=d.bottom;

    p.querySelector('.isla-graphic-one').src=d.graphic1;
    p.querySelector('.isla-graphic-two').src=d.graphic2;
    p.querySelector('.isla-graphic-three').src=d.graphic3;

    p.querySelector('.isla-text').innerHTML=text;
    p.querySelector('.isla-spotify').innerHTML=spotify;

    const player=p.querySelector('.isla-spotify iframe');

    if(player){
        player.setAttribute('scrolling','no');
        player.style.overflow='hidden';
    }

    return p;
}

const posts=[...document.querySelectorAll('.isla-post')].map(build);

function sizeLyrics(){
    posts.forEach(p=>
        p.querySelectorAll('.isla-lyric').forEach(fit)
    );
}

if(document.fonts?.ready){
    document.fonts.ready.then(sizeLyrics);
}else{
    sizeLyrics();
}
})();
