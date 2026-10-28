document.addEventListener('DOMContentLoaded', () => {

    const currentLocation = window.location.pathname.split("/").pop();
    const menuItems = document.querySelectorAll('.sidebar-menu li a');

    menuItems.forEach(item => {
      
        const itemHref = item.getAttribute('href');
        
       
        if (currentLocation === "" && itemHref === "index.html") {
            item.parentElement.classList.add('active');
        } else if (itemHref === currentLocation) {
            // Remove active from others first
            document.querySelector('.sidebar-menu li.active')?.classList.remove('active');
            item.parentElement.classList.add('active');
        }
    });

   
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload for demo purposes
            
            // Create a simple success notification
            alert('Success! Your data has been recorded in Health Care Sync.');
            
            // Reset the form fields
            form.reset();
        });
    });

});