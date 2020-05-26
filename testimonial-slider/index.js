let quote = document.querySelector('.layout__qoutes--text')
let name = document.querySelector('.layout__qoutes--name')
let role = document.querySelector('.layout__qoutes--role')
let image = document.querySelector('.layout__image--person')
let prev = document.querySelector('.layout__arrow--prev')
let next = document.querySelector('.layout__arrow--next')

let testimonials = [
    {
        name: "Tanya Sinclair",
        role: "UX Engineer",
        message: " I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ",
        image: "./images/image-tanya.jpg"
    },
    {
        name: "John Tarkporr",
        role: "Junior Front-end Developer",
        message: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
        image: "./images/image-john.jpg"
    },
    {
        name: "Kerry Okpere",
        role: "Junior Front-end and Budding Backend  Developer",
        message: "I am striving to be a better version of myself than i was yesterday.",
        image: "./images/image-tanya.jpg"
    }
]

const render = (testimony) => {
    quote.innerHTML = testimony.message
    name.innerHTML = testimony.name
    role.textContent = testimony.role
    image.src = testimony.image

}

let index = 0
render(testimonials[index]);

prev.addEventListener("click", (event) => {
    event.preventDefault();

    if (index == 0) {
        index = testimonials.length - 1;
        render(testimonials[index]);
    }
    else {
        index = index - 1;
        render(testimonials[index])
    }
})
next.addEventListener("click", (event) => {
    event.preventDefault();

    if (index == testimonials.length - 1) {
        index = 0
        render(testimonials[index])
    } else {
        index = index + 1;
        render(testimonials[index])
    }
})

// let index = 0;
// let timerId = setTimeout(function carousel() {
//     if (index !== testimonials.length-1) {
//       // increase the interval to the next run
//       index++
//       render(testimonials[index])
//     }else{
//         index = 0
//         render(testimonials[index])
//     }
//     timerId = setTimeout(carousel, delay);
//   }, 1000);
// for (let index = 0; index < testimonials.length; index++) {
// }