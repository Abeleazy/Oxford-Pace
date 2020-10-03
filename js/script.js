let header = document.querySelector("header");

let prevScrollPosition = window.pageYOffset;
window.onscroll = () => {
    let currentScrollPosition = window.pageYOffset;
    if(prevScrollPosition > currentScrollPosition) {
        header.style.top = "0";
        header.classList.add('newHeaderBg');
        header.classList.remove('position-absolute');
    }else{
        header.style.top = `-${header.offsetHeight}px`;
    }
    prevScrollPosition = currentScrollPosition;
    if(prevScrollPosition === 0) {
        header.classList.remove('newHeaderBg');
        header.classList.add('position-absolute');
    }
}