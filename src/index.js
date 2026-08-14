import React from "react"
import ReactDOM from "react-dom/client"
import Navbar from "./scripts/Navbar"
import Footer from "./scripts/Footer"
// import ContactForm from "./scripts/ContactForm" // pendiente de build
import Chatbot from "./scripts/Chatbot"
import ContactForm from "./scripts/ContactForm"         // pendiente de build

function mount(selector, Component) {
  const el = document.querySelector(selector)
  if (el) ReactDOM.createRoot(el).render(<Component />)
}

mount("#react-navbar", Navbar)
mount("#react-footer", Footer)
// // ContactForm: múltiples instancias por página (hero, cierre del Home, página Contact)
document.querySelectorAll(".js-contact-form").forEach((el) => {
  ReactDOM.createRoot(el).render(
    <ContactForm ajaxUrl={el.dataset.ajax} nonce={el.dataset.nonce} variant={el.dataset.variant || "full"} />
  )
})
mount("#react-chatbot", Chatbot)