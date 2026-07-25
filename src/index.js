import React from "react"
import ReactDOM from "react-dom/client"
import Navbar from "./scripts/Navbar"
import Footer from "./scripts/Footer"
import Chatbot from "./scripts/Chatbot"
import ContactForm from "./scripts/ContactForm"        

function mount(selector, Component) {
  const el = document.querySelector(selector)
  if (el) ReactDOM.createRoot(el).render(<Component />)
}

mount("#react-navbar", Navbar)
mount("#react-footer", Footer)
mount("#react-contact-form", ContactForm)
mount("#react-chatbot", Chatbot)