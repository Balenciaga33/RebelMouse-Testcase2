/*==================== LOAD MORE ====================*/
const hidden = [...document.querySelectorAll('.content__item.hidden')];
const loadMoreIcon = document.querySelector('.loading');
const point = document.getElementById('point');


hidden.splice(0, 7).forEach(
    elem => elem.classList.remove('hidden')
);

function loadMore() {
    hidden.splice(0, 3).forEach(
        elem => elem.classList.remove('hidden')
    )
    if (hidden.length == 0) {
        loadMoreIcon.classList.add('hidden');
    }
};
var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
window.addEventListener('scroll', function (event) {
    if (isInViewport(point)) {
        loadMore();
    }
}, false);