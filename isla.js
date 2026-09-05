function fitLyric(el, size) {
    while (size > 8) {
        el.style.fontSize = size + 'px';
        if (el.scrollWidth <= 325) break;
        size--;
    }
}

document.querySelectorAll('.isla-top, .isla-bottom')
    .forEach(el => fitLyric(el, 120));

fitLyric(document.querySelector('.isla-seam'), 220);
