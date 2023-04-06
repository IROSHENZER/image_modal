// JavaScript for modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all images with class 'modal-image'
    var modalImages = document.getElementsByClassName('modal-image');
    
    // Loop through each modal image
    for (var i = 0; i < modalImages.length; i++) {
        modalImages[i].addEventListener('click', function() {
            // Get the source and alt attribute of clicked image
            var src = this.src;
            var alt = this.alt;
            
           
            var modalOverlay = document.createElement('div');
            modalOverlay.className = 'modal-overlay';
            
          
            var modalContent = document.createElement('div');
            modalContent.className = 'modal-content';
            
            // Create modal image element
            var modalImage = document.createElement('img');
            modalImage.src = src;
            modalImage.alt = alt;
            
            // Create close button element
            var closeButton = document.createElement('span');
            closeButton.className = 'modal-close';
            closeButton.textContent = 'X';
            
            
            modalContent.appendChild(modalImage);
            modalContent.appendChild(closeButton);
            
         
            modalOverlay.appendChild(modalContent);
            
           
            document.body.appendChild(modalOverlay);
            
           
            modalOverlay.style.display = 'flex';
            
            // Add event listener to close button to hide modal overlay
            closeButton.addEventListener('click', function() {
                modalOverlay.style.display = 'none';
            });
        });
    }
});
