
const container = document.querySelector ('.container')
const prev = document.querySelector ('.prev')
const next = document.querySelector ('.next')


let currentPage = 1;
let totalPages ;

function getUser (page) {
    const data = fetch ('https://reqres.in/api/users?page='+ page)

.then((Response) => Response.json())
.then((data) => {
    data.data.forEach(element => {
        
        let card = document.createElement ('div')
        card.classList.add ('card')

        container.appendChild (card)

        let img = document.createElement ('img')
        img.src = element.avatar

        card.appendChild (img)

        let fullname = document.createElement ('div')
        fullname.classList.add ('fullName')

        card.appendChild (fullname)

        let firstName = document.createElement ('p')
        firstName.textContent = element.first_name

        fullname.appendChild (firstName)

        let lasttName = document.createElement ('p')
        lasttName.textContent = element.last_name

        fullname.appendChild (lasttName)

        let userEmail = document.createElement ('div')
        userEmail.classList.add ('email')

        card.appendChild (userEmail)

        let emails = document.createElement ('p')
        emails.textContent = element.email

        userEmail.appendChild (emails)

        
        totalPages = data.total;

        
    });
    
});
  
}


prev.addEventListener('click', function() {
    if ( currentPage === 1){
        return;
    }
    currentPage -= 1;
    
    getUser (currentPage);
})

next.addEventListener ('click', function () {
    if (currentPage === totalPages){
        return;
    }

    currentPage += 1;
    getUser (currentPage);
})

getUser (currentPage);