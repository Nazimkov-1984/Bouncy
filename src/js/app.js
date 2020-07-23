
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
//  TABS BLOG 
const   tabsBlog = document.querySelectorAll('.blog__card-wrapper'),
        bulletBlog = document.querySelectorAll('.blog__pagination__items'),
        bulletParentBlog = document.querySelector('.blog__pagination');

    function hideTabBlog () {
        tabsBlog.forEach (item => {
            item.style.display = 'none';
        });
        bulletBlog.forEach(item => {
            item.classList.remove('blog__pagination__items--active');
        });
    }
    function showTabBlog (i) {
        tabsBlog[i].style.display = 'block';
        bulletBlog[i].classList.add('blog__pagination__items--active');

    }
    hideTabBlog ();
    showTabBlog (0);
    bulletParentBlog.addEventListener('click', () => {
    const target = event.target;
    if (target && target.classList.contains('blog__pagination__items')) {
        bulletBlog.forEach ( (item, i) => {
            if (target === item) {
                hideTabBlog ();
                showTabBlog (i); 
            }
        });
    }
});
//TABS PRICE
const   priceTitle = document.querySelectorAll('.our_price__card-item__title'),
        pricePrice = document.querySelectorAll('.our_price__card-item__price'),
        pricePeriod = document.querySelectorAll('.our_price__card-item__period'), 
        priceText = document.querySelectorAll('.our_price__card-item__text'),
        priceButton = document.querySelectorAll('.our_price__card-item__button'),
        priceCards = document.querySelectorAll('.our_price__card-item');
        
        function hideText() {
            priceText.forEach (item => {
                item.style.display = 'none';
            });
            priceButton.forEach (item => {
                item.style.display = 'none';
            });
            
        }
        hideText();
        

        for (let i=0; i<priceCards.length; i++){
            priceCards[i].addEventListener ('click', () => {
                const styl = window.getComputedStyle(priceTitle[i]);
                if (styl.display === 'block'){
                    priceTitle[i].style.display = 'none';
                    pricePrice[i].style.display = 'none';
                    pricePeriod[i].style.display = 'none';
                    priceButton[i].style.display = 'block';
                    priceText[i].style.display = 'block';
                } else {
                    priceTitle[i].style.display = 'block';
                    pricePrice[i].style.display = 'block';
                    pricePeriod[i].style.display = 'block';
                    priceButton[i].style.display = 'none';
                    priceText[i].style.display = 'none';
                }
            })
        }  