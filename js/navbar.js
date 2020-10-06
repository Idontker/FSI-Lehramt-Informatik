const navSlide = () => {
    try{
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
        const test = document.querySelectorAll('nav div');
        console.log( test);
        burger.addEventListener('click', () => {
            // Toggle Burger event
            nav.classList.toggle('nav-active');
        
            //Animate Links
            navLinks.forEach((link,index) => {
                if(link.style.animation ){
                    link.style.animation = '' 
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.6}s`
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle')
        });
    }catch{
        setTimeout(navSlide,100);
        return;
    }
}
