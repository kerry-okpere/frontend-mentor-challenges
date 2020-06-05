//Get Document elememts or components
let quote = document.querySelector('.layout__qoutes--text')
let personName = document.querySelector('.layout__qoutes--name')
let role = document.querySelector('.layout__qoutes--role')
let image = document.querySelector('.layout__image--person')
let prev = document.querySelector('.layout__arrow--prev')
let next = document.querySelector('.layout__arrow--next')

let index = 0

//Get data
let testimonials = [
    {
        name: "Tanya Sinclair",
        role: "UX Engineer",
        message: " I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ",
        img: "./images/image-tanya.jpg"
    },
    {
        name: "John Tarkporr",
        role: "Junior Front-end Developer",
        message: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
        img: "./images/image-john.jpg"
    },
    {
        name: "Kerry Okpere",
        role: "Junior Front-end and Budding Backend  Developer",
        message: "I am striving to be a better version of myself than i was yesterday.",
        img: "./images/kerry-1.jpg"
    }
]
const carousel = ()=>{
    index = index < testimonials.length-1 ? index+1 : 0
  
    render(testimonials[index])
}

let stop = setInterval(carousel, 3500)

// Create a renderer
const render = ({message, name, role, img}) => {
    quote.innerHTML = message
    personName.innerHTML = name
    role.textContent = role
    image.src = img

}

// manipulate the rendered component
render(testimonials[index])

prev.addEventListener("click", (event) => {
    event.preventDefault()
    clearInterval(stop)

    if (index == 0) {
        index = testimonials.length - 1;
        render(testimonials[index])
    }
    else {
        index = index - 1
        render(testimonials[index])
    }
    stop = setInterval(carousel, 3500)
})
next.addEventListener("click", (event) => {
    event.preventDefault()
    clearInterval(stop)


    if (index == testimonials.length - 1) {
        index = 0
        render(testimonials[index])
    } else {
        index = index + 1;
        render(testimonials[index])
    }
    stop = setInterval(carousel, 3500)
})

