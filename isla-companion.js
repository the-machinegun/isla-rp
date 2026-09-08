(()=>{
document.querySelectorAll('.isla-companion-post').forEach(post=>{
    const source=document.querySelector('[data-set="'+post.dataset.source+'"]');
    if(!source)return;

    const text=post.querySelector('.isla-companion-text')?.innerHTML||'';

    post.className='isla-companion';
    post.style.setProperty('--accent',source.dataset.color);

    post.innerHTML=`
        <div class="isla-companion-text">${text}</div>
        <div class="isla-companion-gap"></div>
        <div class="isla-companion-images">
            <img src="${source.dataset.graphic1}">
            <img src="${source.dataset.graphic2}">
            <img src="${source.dataset.graphic3}">
        </div>
    `;
});
})();
