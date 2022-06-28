document.addEventListener("mouseleave", (event) => {  
    if (event.clientY <= 0 || event.clientX <= 0 ) {  
      alert("Thanks for visiting!");  
    }  
  });