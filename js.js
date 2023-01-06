
// const element = document.getElementById('header')
// window.addEventListener('scroll', function () {
//     element.getBoundingClientRect().top < 0 ?
//         element.classList.add('cor') :
//         element.classList.remove('cor');
// });





const nav = document.getElementById('nav');
window.addEventListener("scroll", function() {
            if(window.pageYOffset === 0){

              nav.classList.remove('cor')

            }
            else{
                
                nav.classList.add('cor')
            }
        });


