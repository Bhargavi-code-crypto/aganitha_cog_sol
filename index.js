

    // section-1 to section-2

                // Get a reference to the first thing link
                const firstThingLink = document.querySelector('.first-thing-link');
                // Get a reference to the section 2 element
                const section2 = document.querySelector('.section-2');
                // Add a click event listener to the first thing link
                firstThingLink.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent the default link behavior
                section2.style.display = 'block'; // Show section 2
                });

    // section-2 to section-3

                 const fristRuleLink = document.querySelector('.frist-rule-link');
              
                const section3 = document.querySelector('.section-3');
               
                fristRuleLink.addEventListener('click', function (event) {
                event.preventDefault(); 
                section3.style.display = 'block'; 
                });

     // section-2 to section-3

     const textItselfLink = document.querySelector('.text-itself-link');
              
              const section4 = document.querySelector('.section-4');
             
              textItselfLink.addEventListener('click', function (event) {
              event.preventDefault(); 
              section4.style.display = 'block'; 
              });




        // section-0 style changes

  // Get a reference to the "more readable" link
  const moreReadableLink = document.querySelector('.more-readable-lik');
  // Get a reference to the section-0 element
  const section0 = document.querySelector('.section-0');

  moreReadableLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Apply background image
    section0.style.height = '500px'
    section0.style.color = 'white';
    section0.style.backgroundImage = 'url(images/background.webp)';
    section0.style.backgroundSize = '100vw 100%'; // Replace with your desired width and height
    section0.style.backgroundRepeat = 'no-repeat';

    // Center the content
    section0.style.display = 'flex';
    section0.style.justifyContent = 'center';
    section0.style.alignItems = 'center';


    const myLinkElement = section0.querySelector('.myLink');
    myLinkElement.style.display = 'flex';
    myLinkElement.style.justifyContent = 'center';
   
   


    const myALinkElement = section0.querySelector('.myAlink');
    myALinkElement.style.border = '1px solid red';
    myALinkElement.style.borderRadius = '25px';
    myALinkElement.style.padding = '10px';
    myALinkElement.style.color='white' 
    myALinkElement.style.textDecoration = 'none';
  
    

    

  });       
                


