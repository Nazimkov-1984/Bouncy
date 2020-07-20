const   tabsContent = document.querySelectorAll('.team__tabs__item'),
        bullet = document.querySelectorAll('.pagination__items'),
        bulletParent = document.querySelector('.team__pagination');

    function hideContent () {
        tabsContent.forEach (item => {
            item.style.display = 'none';
        });
        bullet.forEach(item => {
            item.classList.remove('pagination__items--active');
        });
    }
    function showContent (i) {
        tabsContent[i].style.display = 'block';
        bullet[i].classList.add('pagination__items--active');

    }
    hideContent ();
    showContent (0);
    bulletParent.addEventListener('click', () => {
    const target = event.target;
    if (target && target.classList.contains('pagination__items')) {
        bullet.forEach ( (item, i) => {
            if (target === item) {
                hideContent ();
                showContent (i); 
            }
        });
    }
});