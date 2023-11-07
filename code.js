//sidebar

const sidebar = document.querySelector(".sidebar");

const toggleBtn = document.querySelector(".nav-toggle");

const closeBtn = document.querySelector(".close-btn");

//sidebar events

toggleBtn.addEventListener("click", ()=>{
    sidebar.classList.add("show-sidebar");
})

closeBtn.addEventListener("click", ()=>{
    sidebar.classList.remove("show-sidebar");
})

//botones

const headerBtn = document.querySelector(".header-btn");

const linkedinBtn = document.querySelector(".linkedin");

const githubBtn = document.querySelector(".github");

headerBtn.addEventListener("click", ()=>{
    window.open("https://www.linkedin.com/in/jose-herrera-468b32229/");
});

linkedinBtn.addEventListener("click", ()=>{
    window.open("https://www.linkedin.com/in/jose-herrera-468b32229/");
});
githubBtn.addEventListener("click", ()=>{
    window.open("https://github.com/Herreraa09");
})

//top link

const navbar = document.querySelector(".nav-container");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", ()=>{
    const scrollHeigth = window.pageYOffset;

    if(scrollHeigth > 500){
        topLink.classList.add("show-link");
    }else{
        topLink.classList.remove("show-link");
    }
})


//smooth scroll

/* const linksContainer = document.querySelector(".links-container");

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link){
    link.addEventListener("click", (e)=>{
        e.preventDefault();

        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const toggledNav = navbar.classList.contains("show-sidebar");

        let position = element.offsetTop - navHeight;

        if(!toggledNav){
            position = position - navHeight;
        }

        if(navHeight > 82){
            position = position + containerHeight;
        }

        window.scrollTo({
            left:0,
            top:position,
        });
        linksContainer.style.transform = "translate(-100%)";
    })
   
})
 */
