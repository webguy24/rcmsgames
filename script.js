if (document.cookie.includes('darkmode=1')) {
   var element = document.body;
   element.classList.toggle('darkmode');
}
function darkmode() {
   if (!document.cookie.includes('darkmode=1')) {
      document.cookie = 'darkmode=1; expires=Tue, Jan 1 12:00:00 AM EST 2030';
   } else {
      document.cookie = 'darkmode=0; expires=Tue, Jan 1 12:00:00 AM EST 2030';
   }
   var element = document.body;
   element.classList.toggle('darkmode');
}
