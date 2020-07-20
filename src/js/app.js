
//TABS TEAM 

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

//TABS TESTIMONIALS

const   tabsTestimonials = document.querySelectorAll('.testimonials__card-wrapper'),
        bulletTestimonials = document.querySelectorAll('.testimonials__pagination__items'),
        bulletParentTestimonials = document.querySelector('.testimonials__pagination');

    function hideTabContent () {
        tabsTestimonials.forEach (item => {
            item.style.display = 'none';
        });
        bulletTestimonials.forEach(item => {
            item.classList.remove('testimonials__pagination__items--active');
        });
    }
    function showTabContent (i) {
        tabsTestimonials[i].style.display = 'flex';
        bulletTestimonials[i].classList.add('testimonials__pagination__items--active');

    }
    hideTabContent ();
    showTabContent (0);
    bulletParentTestimonials.addEventListener('click', () => {
    const target = event.target;
    if (target && target.classList.contains('testimonials__pagination__items')) {
        bulletTestimonials.forEach ( (item, i) => {
            if (target === item) {
                hideTabContent ();
                showTabContent (i); 
            }
        });
    }
});