"use strict";

const notifications = (() => {
    let counter = 0;
     const  notificationCounter = document.getElementById('notification-counter');
    const unRead = document.getElementsByClassName('unread');
   const markAll = document.querySelector('#mark-all');
  //  const elems = document.querySelectorAll(".mark-all");

    const getNotif = document.querySelectorAll('.text-content');

    for(let i = 0; i < unRead.length; i++) {
        const row = unRead[i];
         console.log(row);
        const getNotif = row.querySelector('.text-content');
        if(!row.classList.contains('unread')) {
            getNotif.style.setProperty("--toggle-display", "none");
        } else {
            counter += 1;
        }
        const notificationRead = () => {
            if(row.classList.contains('unread')) {
                console.log(getNotif);
                row.classList.remove('unread');
                getNotif.style.setProperty("--toggle-display", "none");
                counter -= 1;
                notificationCounter.innerText = counter;
                
            }
        }
        row.addEventListener('click', notificationRead);
        notificationCounter.innerHTML = counter;
     
    }

    const MarkAllAsRead = () => {
      
        while(unRead.length > 0){
            unRead[0].classList.remove('unread');
        }

        getNotif.forEach(el => {
            el.style.setProperty("--toggle-display", "none");
        })
        counter = 0;
        notificationCounter.innerText = counter;
    }
    markAll.addEventListener("click", MarkAllAsRead);
})();