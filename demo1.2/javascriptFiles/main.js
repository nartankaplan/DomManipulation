let slideIndex = 0;                                                                

function showSlides(index) {
    const slides = document.querySelectorAll('.slide');                            
    if (index >= slides.length) {
        slideIndex = 0;                                                            
    } else if (index < 0) {
        slideIndex = slides.length - 1;                                            
    } else {
        slideIndex = index;                                                        
    }
    const offset = -slideIndex * 100;                                              
    document.getElementById('slides').style.transform = `translateX(${offset}%)`;
}                                                                                  

function moveSlide(n) {
    showSlides(slideIndex + n);                                                    
}

document.addEventListener('DOMContentLoaded', () => {                              
    showSlides(slideIndex);
});

function toggleSidebar() {                                                          
    const sidebar = document.querySelector('.sidebar');                            
    const toggleButton = document.querySelector('.toggle-button');                 
    sidebar.classList.toggle('collapsed');                                         
    toggleButton.textContent = sidebar.classList.contains('collapsed') ? '→' : '←';   
    toggleButton.style.left = sidebar.classList.contains('collapsed') ? '70px' : '250px'; 
}

function slideDown(element) {                                                         
    element.style.height = 'auto';
    let height = element.clientHeight + 'px';                                                                        
    element.style.height = '0px';                                                                                      
    setTimeout(() => {                                                                 
        element.style.height = height;                                               
    }, 0);
}

function slideUp(element) {
    element.style.height = '0px';                                                      
    element.addEventListener('transitionend', function handleTransitionEnd() {         
        element.style.display = 'none';
        element.removeEventListener('transitionend', handleTransitionEnd);             
    });
}

function toggleComments() {
    const comments = document.querySelector('.movie-comments');                    
    const toggleButton = document.querySelector('.toggle-comments');               
    if (comments.style.display === 'none' || comments.style.height === '0px') {
        comments.style.display = 'block';                                          

        slideDown(comments);                                                       
        toggleButton.textContent = 'Hide Comments';                                
    } else {
        slideUp(comments);                                                         
        toggleButton.textContent = 'Show Comments';                                
    }
}

function toggleContact() {              
    const contactInfo = document.getElementById('contact-info');                       
    if (contactInfo.style.display === 'none' || contactInfo.style.opacity === '0') {   
        contactInfo.style.display = 'block';
        setTimeout(() => {
            contactInfo.style.opacity = '1';
        }, 0);                                                                         
    } else {
        contactInfo.style.opacity = '0';
        contactInfo.addEventListener('transitionend', function handleTransitionEnd() {
            contactInfo.style.display = 'none';                                        
            contactInfo.removeEventListener('transitionend', handleTransitionEnd);
        });                                                                            
    }
}
