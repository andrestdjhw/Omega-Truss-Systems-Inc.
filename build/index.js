/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/Chatbot.js"
/*!********************************!*\
  !*** ./src/scripts/Chatbot.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Chatbot)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _brand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brand */ "./src/scripts/brand.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * OMEGA TRUSS SYSTEMS — Chatbot (React)
 * ------------------------------------------------------------------
 * Asistente guiado (rule-based, sin backend): greeting + quick replies
 * del copy deck, respuestas basadas en las FAQs aprobadas y derivación
 * a /contact/ o teléfono. Mount: #react-chatbot (footer.php).
 *
 * Si el cliente contrata un proveedor de chat después, este componente
 * se reemplaza sin tocar el theme.
 */




const CONTACT_URL = "/contact/";
const GREETING = "Planning a project? Tell us the location, project type and target timeline. Our engineering team will follow up within one business day.";
const QUICK_REPLIES = [{
  id: "consult",
  label: "Request a consultation"
}, {
  id: "fire",
  label: "Ask about fire-zone trusses"
}, {
  id: "lead",
  label: "Ask about lead times"
}, {
  id: "eng",
  label: "Talk to engineering"
}];
const ANSWERS = {
  consult: "Great — the fastest way is a project consultation. Share your project location, type and target timeline, and our engineering team will follow up within one business day.",
  fire: "Yes — fire-zone work is core for us. We engineer truss systems for wildfire-designated zones and California's strict code environment, and we support the project through plan check and inspection.",
  lead: "Lead times depend on scope, but our record is a 98% on-time delivery rate versus an industry average of about 82%. Share your target schedule and we'll confirm feasibility.",
  eng: "Our engineering is fully in-house. The same team that designs your system fabricates and installs it, and plan-check revisions are typically resolved in days, not weeks.",
  install: "Installation is done by our own cross-trained crews — no subcontractors. The team that engineered your system is the team that sets it on site.",
  pricing: "Every system is engineered to order, so pricing is project-specific. Send us your plans or project details and our engineering team will get back to you within one business day.",
  fallback: "Thanks! For project-specific answers, the quickest path is our engineering team — they respond within one business day."
};

// Matching básico por palabras clave para texto libre
const KEYWORDS = [{
  re: /(fire|wildfire|whz)/i,
  id: "fire"
}, {
  re: /(lead\s?time|timeline|schedule|turnaround|how\s+long|when)/i,
  id: "lead"
}, {
  re: /(install|crew|set)/i,
  id: "install"
}, {
  re: /(price|pricing|cost|quote|estimate|budget)/i,
  id: "pricing"
}, {
  re: /(engineer|title\s?24|code|plan\s?check|revision|cad|design)/i,
  id: "eng"
}, {
  re: /(consult|contact|talk|call|meet)/i,
  id: "consult"
}];
function matchAnswer(text) {
  for (const k of KEYWORDS) {
    if (k.re.test(text)) return ANSWERS[k.id];
  }
  return ANSWERS.fallback;
}
function ChatIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
    className: "h-6 w-6",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M4.5 6.5A2.5 2.5 0 0 1 7 4h10a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 17 16H9.8l-3.9 3.2c-.5.4-1.4.1-1.4-.6V6.5z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M8.5 9h7M8.5 12h4.5",
      strokeLinecap: "round"
    })]
  });
}
function Chatbot() {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
    from: "bot",
    text: GREETING
  }]);
  const [typing, setTyping] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [usedReplies, setUsedReplies] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const bodyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // Autoscroll al último mensaje
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, typing, open]);

  // Escape cierra
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const onKey = e => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  function botReply(text) {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(m => [...m, {
        from: "bot",
        text,
        cta: true
      }]);
    }, 700);
  }
  function handleQuickReply(qr) {
    setUsedReplies(u => [...u, qr.id]);
    setMessages(m => [...m, {
      from: "user",
      text: qr.label
    }]);
    botReply(ANSWERS[qr.id]);
  }
  function handleSubmit() {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages(m => [...m, {
      from: "user",
      text
    }]);
    botReply(matchAnswer(text));
  }
  const remainingReplies = QUICK_REPLIES.filter(q => !usedReplies.includes(q.id));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
      type: "button",
      onClick: () => setOpen(v => !v),
      "aria-expanded": open,
      "aria-label": open ? "Close chat" : "Open chat",
      className: "chat-launcher fixed bottom-5 right-5 z-50",
      children: open ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
        className: "h-6 w-6",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
          d: "M6 6 18 18 M18 6 6 18",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "square"
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ChatIcon, {})
    }), open && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      role: "dialog",
      "aria-label": "Chat with Omega Truss Systems",
      className: "fixed bottom-24 right-5 z-50 w-[360px] max-w-[calc(100vw-2.5rem)] flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_18px_50px_rgba(22,40,60,0.28)] border border-navy/10",
      style: {
        height: "min(480px, 70vh)"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "bg-navy",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "h-0.5 bg-ember",
          "aria-hidden": "true"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex items-center justify-between px-4 py-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              className: "text-[13px] font-display font-bold uppercase tracking-[0.14em] text-white",
              children: "Omega Truss Systems"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              className: "text-[11px] text-white/60 mt-0.5",
              children: "Engineering team \xB7 replies within one business day"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            type: "button",
            onClick: () => setOpen(false),
            "aria-label": "Close chat",
            className: "inline-flex h-8 w-8 items-center justify-center text-white/70 hover:text-white transition-colors",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
              className: "h-4 w-4",
              viewBox: "0 0 24 24",
              fill: "none",
              "aria-hidden": "true",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                d: "M6 6 18 18 M18 6 6 18",
                stroke: "currentColor",
                strokeWidth: "1.8",
                strokeLinecap: "square"
              })
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        ref: bodyRef,
        className: "flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-white",
        children: [messages.map((m, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: m.from === "user" ? "flex justify-end" : "flex justify-start",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: m.from === "user" ? "max-w-[85%] rounded-lg rounded-br-sm bg-navy px-3.5 py-2.5 text-[13px] leading-relaxed text-white" : "max-w-[85%] rounded-lg rounded-bl-sm bg-mist px-3.5 py-2.5 text-[13px] leading-relaxed text-navy",
            children: [m.text, m.cta && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
              className: "mt-2.5 flex flex-wrap gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                href: CONTACT_URL,
                className: "inline-flex items-center rounded bg-ember px-3 py-1.5 text-[11px] font-display font-semibold uppercase tracking-[0.1em] text-white hover:bg-navy transition-colors",
                children: "Go to project form"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
                href: `tel:${_brand__WEBPACK_IMPORTED_MODULE_1__.PHONE.replace(/[^0-9+]/g, "")}`,
                className: "inline-flex items-center rounded border border-navy/25 px-3 py-1.5 text-[11px] font-display font-semibold uppercase tracking-[0.1em] text-navy hover:border-navy transition-colors",
                children: ["Call ", _brand__WEBPACK_IMPORTED_MODULE_1__.PHONE]
              })]
            })]
          })
        }, i)), typing && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "flex justify-start",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "rounded-lg rounded-bl-sm bg-mist px-4 py-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
              className: "flex gap-1.5",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "h-1.5 w-1.5 rounded-full bg-navy/40 animate-bounce"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "h-1.5 w-1.5 rounded-full bg-navy/40 animate-bounce [animation-delay:0.15s]"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "h-1.5 w-1.5 rounded-full bg-navy/40 animate-bounce [animation-delay:0.3s]"
              })]
            })
          })
        }), !typing && remainingReplies.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "flex flex-wrap gap-2 pt-1",
          children: remainingReplies.map(q => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            type: "button",
            onClick: () => handleQuickReply(q),
            className: "rounded-full border border-navy/25 px-3.5 py-1.5 text-[12px] text-navy hover:border-ember hover:text-ember transition-colors",
            children: q.label
          }, q.id))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "border-t border-navy/10 bg-white px-3 py-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            type: "text",
            value: input,
            onChange: e => setInput(e.target.value),
            onKeyDown: e => e.key === "Enter" && handleSubmit(),
            placeholder: "Type your question\u2026",
            "aria-label": "Type your question",
            className: "flex-1 rounded-lg border border-navy/15 bg-white px-3.5 py-2.5 text-[13px] text-navy placeholder:text-navy/40 outline-none focus:border-navy/40"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            type: "button",
            onClick: handleSubmit,
            "aria-label": "Send",
            className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-white hover:bg-ember transition-colors",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
              className: "h-4.5 w-4.5",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.7",
              "aria-hidden": "true",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                d: "M4.5 12 20 4.5 14.5 20l-2.8-5.7L4.5 12z",
                strokeLinejoin: "round"
              })
            })
          })]
        })
      })]
    })]
  });
}

/***/ },

/***/ "./src/scripts/ContactForm.js"
/*!************************************!*\
  !*** ./src/scripts/ContactForm.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * OMEGA TRUSS SYSTEMS — ContactForm (React)
 * ------------------------------------------------------------------
 * Campos del copy deck dev V1 (sección 11). Envía por admin-ajax
 * (action: omega_contact) con nonce; el handler PHP vive en
 * functions.php y manda el correo con wp_mail.
 * Mount: #react-contact-form con data-ajax y data-nonce.
 */



const ROLES = ["Builder", "Architect", "General Contractor", "Developer", "Engineer", "Other"];
const TYPES = ["Luxury Residential", "Multifamily", "Commercial", "Public", "Other"];
const labelCls = "block font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-navy/70";
const inputCls = "mt-2 block w-full border border-navy/15 bg-white px-3.5 py-2.5 text-[14px] text-navy placeholder:text-navy/35 outline-none focus:border-navy/50 transition-colors";
function ContactForm() {
  const rootEl = document.querySelector("#react-contact-form");
  const ajaxUrl = rootEl?.dataset.ajax || "/wp-admin/admin-ajax.php";
  const nonce = rootEl?.dataset.nonce || "";
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("idle"); // idle | sending | success | error
  const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    location: "",
    type: "",
    timeline: "",
    message: "",
    company_site: "" // honeypot — oculto; los bots lo llenan
  });
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setStatus("sending");
    try {
      const body = new FormData();
      body.append("action", "omega_contact");
      body.append("nonce", nonce);
      Object.entries(form).forEach(([k, v]) => body.append(k, v));
      const res = await fetch(ajaxUrl, {
        method: "POST",
        body
      });
      const json = await res.json();
      setStatus(json && json.success ? "success" : "error");
    } catch (err) {
      setStatus("error");
    }
  }
  if (status === "success") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "border border-navy/10 bg-mist p-10 text-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "font-display text-xl font-bold text-navy",
        children: "Thank you."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "mt-3 text-[15px] leading-relaxed text-navy/75",
        children: "Our engineering team will contact you within one business day."
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
    onSubmit: handleSubmit,
    noValidate: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
          htmlFor: "cf-name",
          className: labelCls,
          children: "Name *"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          id: "cf-name",
          type: "text",
          required: true,
          value: form.name,
          onChange: set("name"),
          className: inputCls,
          autoComplete: "name"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
          htmlFor: "cf-company",
          className: labelCls,
          children: "Company"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          id: "cf-company",
          type: "text",
          value: form.company,
          onChange: set("company"),
          className: inputCls,
          autoComplete: "organization"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
          htmlFor: "cf-role",
          className: labelCls,
          children: "Role"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("select", {
          id: "cf-role",
          value: form.role,
          onChange: set("role"),
          className: inputCls,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: "",
            children: "Select\u2026"
          }), ROLES.map(r => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: r,
            children: r
          }, r))]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
          htmlFor: "cf-email",
          className: labelCls,
          children: "Email *"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          id: "cf-email",
          type: "email",
          required: true,
          value: form.email,
          onChange: set("email"),
          className: inputCls,
          autoComplete: "email"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
          htmlFor: "cf-phone",
          className: labelCls,
          children: "Phone"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          id: "cf-phone",
          type: "tel",
          value: form.phone,
          onChange: set("phone"),
          className: inputCls,
          autoComplete: "tel"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
          htmlFor: "cf-location",
          className: labelCls,
          children: "Project location (city / county)"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          id: "cf-location",
          type: "text",
          value: form.location,
          onChange: set("location"),
          className: inputCls
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
          htmlFor: "cf-type",
          className: labelCls,
          children: "Project type"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("select", {
          id: "cf-type",
          value: form.type,
          onChange: set("type"),
          className: inputCls,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: "",
            children: "Select\u2026"
          }), TYPES.map(t => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: t,
            children: t
          }, t))]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
          htmlFor: "cf-timeline",
          className: labelCls,
          children: "Target timeline"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          id: "cf-timeline",
          type: "text",
          value: form.timeline,
          onChange: set("timeline"),
          className: inputCls,
          placeholder: "e.g. Framing in Q1 2027"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "sm:col-span-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
          htmlFor: "cf-message",
          className: labelCls,
          children: "Message / link to plans"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textarea", {
          id: "cf-message",
          rows: "5",
          value: form.message,
          onChange: set("message"),
          className: inputCls
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "hidden",
        "aria-hidden": "true",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
          htmlFor: "cf-website",
          children: "Company site"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          id: "cf-website",
          type: "text",
          tabIndex: "-1",
          autoComplete: "off",
          value: form.company_site,
          onChange: set("company_site")
        })]
      })]
    }), status === "error" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "mt-5 text-sm text-ember",
      children: "Something went wrong. Please try again, or reach us directly at info@omegatruss.com."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "mt-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
        type: "submit",
        disabled: status === "sending",
        className: "btn-cta btn-cta--ember [--fold-bg:#ffffff] disabled:opacity-60 disabled:pointer-events-none",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "points_wrapper",
          "aria-hidden": "true",
          children: Array.from({
            length: 10
          }).map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "point"
          }, i))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "fold",
          "aria-hidden": "true"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "inner",
          children: status === "sending" ? "Sending…" : "Schedule a Project Consultation"
        })]
      })
    })]
  });
}

/***/ },

/***/ "./src/scripts/Footer.js"
/*!*******************************!*\
  !*** ./src/scripts/Footer.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _brand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brand */ "./src/scripts/brand.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * OMEGA TRUSS SYSTEMS — Footer (React)
 * Mount: #react-footer (footer.php) con data-home y data-logo (versión clara del logo).
 * NAP pendiente: actualizar PHONE / EMAIL / ADDRESS cuando el cliente confirme.
 */




const SERVICES = [{
  label: "Custom Roof Trusses",
  href: "/custom-roof-trusses/"
}, {
  label: "Floor Trusses",
  href: "/floor-trusses/"
}, {
  label: "Structural Engineering & CAD",
  href: "/structural-engineering-cad/"
}, {
  label: "Fabrication & Quality Control",
  href: "/fabrication-quality-control/"
}, {
  label: "Installation",
  href: "/installation/"
}, {
  label: "Roof Sheathing & Project Support",
  href: "/roof-sheathing-project-support/"
}];
const COMPANY = [{
  label: "About",
  href: "/about/"
}, {
  label: "Featured Projects",
  href: "/featured-projects/"
}, {
  label: "Location",
  href: "/location/"
}, {
  label: "Contact",
  href: "/contact/"
}];

// Estampado de marca sobre el navy del footer (ajustable)
const PATTERN_COLOR = "rgba(255, 255, 255, 0.05)";
function CtaPoints() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    className: "points_wrapper",
    "aria-hidden": "true",
    children: Array.from({
      length: 10
    }).map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "point"
    }, i))
  });
}
const colHead = "text-[12px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-5";
const link = "block py-1.5 text-[14px] text-white/75 hover:text-white transition-colors";
function Footer() {
  const rootEl = document.querySelector("#react-footer");
  const homeUrl = rootEl?.dataset.home || "/";
  const logoUrl = rootEl?.dataset.logo || "";
  const patternUrl = rootEl?.dataset.pattern || "";
  const year = new Date().getFullYear();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("footer", {
    className: "relative bg-navy text-white",
    children: [patternUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      "aria-hidden": "true",
      className: "absolute inset-0 pointer-events-none",
      style: {
        backgroundColor: PATTERN_COLOR,
        WebkitMaskImage: `url(${patternUrl})`,
        maskImage: `url(${patternUrl})`,
        WebkitMaskRepeat: "repeat",
        maskRepeat: "repeat",
        WebkitMaskSize: "auto 60%",
        maskSize: "auto 60%",
        WebkitMaskPosition: "center",
        maskPosition: "center"
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "relative h-0.5 bg-ember",
      "aria-hidden": "true"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "relative max-w-7xl mx-auto px-4 lg:px-8 py-14 lg:py-20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "lg:col-span-5",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            href: homeUrl,
            className: "brand-chip brand-chip--ember",
            "aria-label": "Omega Truss Systems \u2014 Home",
            children: logoUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: logoUrl,
              alt: "Omega Truss Systems",
              className: "h-10 w-auto"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
              className: "leading-none",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "block text-2xl font-bold tracking-[0.08em] text-white",
                children: "OMEGA"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "block text-[10px] font-semibold uppercase tracking-[0.42em] text-white/80 mt-1",
                children: "Truss Systems"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "mt-6 max-w-sm text-[14px] leading-relaxed text-white/70",
            children: "Custom engineered truss systems for Southern California's most demanding residential, multifamily and commercial projects. Designed, fabricated and installed entirely in-house."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "mt-6 flex items-center gap-2",
            children: _brand__WEBPACK_IMPORTED_MODULE_1__.SOCIALS.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: s.url || "#",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": s.label,
              className: "social-chip",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_brand__WEBPACK_IMPORTED_MODULE_1__.SocialIcon, {
                id: s.id
              })
            }, s.id))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "lg:col-span-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
            className: colHead,
            children: "Structural Solutions"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("nav", {
            "aria-label": "Structural Solutions",
            children: SERVICES.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: s.href,
              className: link,
              children: s.label
            }, s.href))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "lg:col-span-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
            className: colHead,
            children: "Company"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("nav", {
            "aria-label": "Company",
            children: COMPANY.map(c => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: c.href,
              className: link,
              children: c.label
            }, c.href))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "lg:col-span-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
            className: colHead,
            children: "Get In Touch"
          }), _brand__WEBPACK_IMPORTED_MODULE_1__.PHONE && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            href: `tel:${_brand__WEBPACK_IMPORTED_MODULE_1__.PHONE.replace(/[^0-9+]/g, "")}`,
            className: link,
            children: _brand__WEBPACK_IMPORTED_MODULE_1__.PHONE
          }), _brand__WEBPACK_IMPORTED_MODULE_1__.EMAIL && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            href: `mailto:${_brand__WEBPACK_IMPORTED_MODULE_1__.EMAIL}`,
            className: link,
            children: _brand__WEBPACK_IMPORTED_MODULE_1__.EMAIL
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "py-1.5 text-[14px] text-white/75",
            children: _brand__WEBPACK_IMPORTED_MODULE_1__.ADDRESS
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
            href: "/contact/",
            className: "btn-cta btn-cta--ember mt-5 [--fold-bg:var(--color-navy)]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CtaPoints, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "fold",
              "aria-hidden": "true"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "inner",
              children: "Schedule a Consultation"
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "relative border-t border-white/10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
          className: "text-[12px] text-white/50",
          children: ["\xA9 ", year, " Omega Truss Systems Inc. All rights reserved."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
          className: "text-[12px] text-white/50",
          children: ["Site by", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            href: "https://www.828marketingsolutions.com",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-white/70 hover:text-ember transition-colors",
            children: "828 Marketing Solutions"
          })]
        })]
      })
    })]
  });
}

/***/ },

/***/ "./src/scripts/Navbar.js"
/*!*******************************!*\
  !*** ./src/scripts/Navbar.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _brand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brand */ "./src/scripts/brand.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * OMEGA TRUSS SYSTEMS — Navbar + Topbar (React)
 * ------------------------------------------------------------------
 * Ubicación: src/scripts/Navbar.js (reemplazo)
 *
 * Topbar: se esconde al hacer scroll down y reaparece al hacer scroll up.
 * Izquierda: teléfono + email · Centro: geotag → Google Maps · Derecha: redes.
 *
 * TODO NAP (cuando el cliente confirme): PHONE, EMAIL, MAPS_URL con la
 * dirección exacta, y las URLs reales en SOCIALS.
 */




/* ------------------------------------------------------------------ */
/* Config                                                              */
/* ------------------------------------------------------------------ */

const SERVICES = [{
  label: "Custom Roof Trusses",
  href: "/custom-roof-trusses/",
  desc: "Engineered-to-order roof systems for complex architecture."
}, {
  label: "Floor Trusses",
  href: "/floor-trusses/",
  desc: "Open-web systems that simplify MEP and protect schedules."
}, {
  label: "Structural Engineering & CAD",
  href: "/structural-engineering-cad/",
  desc: "Founder-led engineering, Title 24-aligned, plan-check ready."
}, {
  label: "Fabrication & Quality Control",
  href: "/fabrication-quality-control/",
  desc: "Precision fabrication with a 2.4% internal defect rate."
}, {
  label: "Installation",
  href: "/installation/",
  desc: "Set by our own cross-trained crews. One accountable team."
}, {
  label: "Roof Sheathing & Project Support",
  href: "/roof-sheathing-project-support/",
  desc: "Bundled scope through inspection sign-off."
}];

// Contact no va en el menú: el CTA "Schedule a Consultation" cumple ese rol
const LINKS_BEFORE = [{
  label: "About",
  href: "/about/"
}, {
  label: "Featured Projects",
  href: "/featured-projects/"
}];
const LINKS_AFTER = [{
  label: "Location",
  href: "/location/"
}];
const CTA = {
  label: "Schedule a Consultation",
  href: "/contact/"
};

// Estampado de marca sobre el navbar: "blanco más oscuro" (ajustable)
const PATTERN_COLOR = "rgba(255, 255, 255, 0.12)";

/* ------------------------------------------------------------------ */
/* Iconos                                                              */
/* ------------------------------------------------------------------ */

function PinIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
    className: "h-3.5 w-3.5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M12 21s-6.5-5.4-6.5-10.2a6.5 6.5 0 0 1 13 0C18.5 15.6 12 21 12 21z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
      cx: "12",
      cy: "10.5",
      r: "2.2"
    })]
  });
}
function PhoneIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
    className: "h-3.5 w-3.5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    "aria-hidden": "true",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M6.8 3.5H9l1.4 3.8-1.8 1.4a12.5 12.5 0 0 0 4.7 4.7l1.4-1.8 3.8 1.4v2.2c0 1-.8 1.9-1.9 1.8C10.3 16.4 7.6 13.7 6.9 7.4a1.8 1.8 0 0 1-.1-3.9z",
      transform: "rotate(8 12 12)"
    })
  });
}
function MailIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
    className: "h-3.5 w-3.5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
      x: "3.5",
      y: "5.5",
      width: "17",
      height: "13",
      rx: "2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "m4.5 7 7.5 5.8L19.5 7"
    })]
  });
}
function CtaPoints() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    className: "points_wrapper",
    "aria-hidden": "true",
    children: Array.from({
      length: 10
    }).map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "point"
    }, i))
  });
}
function Chevron({
  open
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
    className: `h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`,
    viewBox: "0 0 20 20",
    fill: "none",
    "aria-hidden": "true",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M5 7.5 10 12.5 15 7.5",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "square"
    })
  });
}
function isCurrent(href) {
  if (typeof window === "undefined") return false;
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const target = href.replace(/\/+$/, "") || "/";
  return path === target;
}

/* ------------------------------------------------------------------ */
/* Componente                                                          */
/* ------------------------------------------------------------------ */

function Navbar() {
  const rootEl = document.querySelector("#react-navbar");
  const homeUrl = rootEl?.dataset.home || "/";
  const logoUrl = rootEl?.dataset.logo || "";
  const patternUrl = rootEl?.dataset.pattern || "";
  const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [topbarHidden, setTopbarHidden] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [servicesOpen, setServicesOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [mobileOpen, setMobileOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [mobileServices, setMobileServices] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [panelTop, setPanelTop] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(72);
  const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const megaRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const headerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const lastY = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);

  // Scroll: sombra + dirección para esconder/mostrar la topbar
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (y < 40) {
        setTopbarHidden(false);
      } else if (y > lastY.current + 4) {
        setTopbarHidden(true); // bajando
      } else if (y < lastY.current - 4) {
        setTopbarHidden(false); // subiendo
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar dropdown con click afuera / Escape
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const onClick = e => {
      const inButton = dropdownRef.current && dropdownRef.current.contains(e.target);
      const inPanel = megaRef.current && megaRef.current.contains(e.target);
      if (!inButton && !inPanel) setServicesOpen(false);
    };
    const onKey = e => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Panel móvil: bloquear scroll y calcular el borde inferior del header
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.documentElement.style.overflow = mobileOpen ? "clip" : "";
    if (mobileOpen && headerRef.current) {
      setPanelTop(headerRef.current.getBoundingClientRect().bottom);
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen, topbarHidden]);
  const linkBase = "text-[13px] font-medium uppercase tracking-[0.14em] text-white/85 hover:text-white transition-colors whitespace-nowrap";
  const currentMark = "text-white border-b border-white pb-0.5";
  const topLink = "inline-flex items-center gap-1.5 text-[12px] text-white/75 hover:text-white transition-colors";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("header", {
    ref: headerRef,
    onMouseLeave: () => setServicesOpen(false),
    className: `bg-ember/95 backdrop-blur border-b border-black/10 transition-shadow duration-300 ${scrolled ? "shadow-[0_1px_12px_rgba(22,40,60,0.08)]" : ""}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "h-0.5 bg-navy",
      "aria-hidden": "true"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: `bg-navy overflow-hidden transition-[max-height] duration-300 ease-out ${topbarHidden ? "max-h-0" : "max-h-12"}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 lg:px-8 h-10 flex items-center justify-between gap-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex items-center gap-5 min-w-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
            href: `tel:${_brand__WEBPACK_IMPORTED_MODULE_1__.PHONE.replace(/[^0-9+]/g, "")}`,
            className: topLink,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PhoneIcon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "whitespace-nowrap",
              children: _brand__WEBPACK_IMPORTED_MODULE_1__.PHONE
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
            href: `mailto:${_brand__WEBPACK_IMPORTED_MODULE_1__.EMAIL}`,
            className: `${topLink} hidden sm:inline-flex`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MailIcon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "truncate",
              children: _brand__WEBPACK_IMPORTED_MODULE_1__.EMAIL
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
          href: _brand__WEBPACK_IMPORTED_MODULE_1__.MAPS_URL,
          target: "_blank",
          rel: "noopener noreferrer",
          className: `${topLink} hidden md:inline-flex absolute left-1/2 -translate-x-1/2`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PinIcon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            children: _brand__WEBPACK_IMPORTED_MODULE_1__.ADDRESS
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "flex items-center gap-2",
          children: _brand__WEBPACK_IMPORTED_MODULE_1__.SOCIALS.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            href: s.url || "#",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": s.label,
            className: "social-chip",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_brand__WEBPACK_IMPORTED_MODULE_1__.SocialIcon, {
              id: s.id
            })
          }, s.id))
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "relative",
      children: [patternUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        "aria-hidden": "true",
        className: "absolute inset-0 pointer-events-none",
        style: {
          backgroundColor: PATTERN_COLOR,
          WebkitMaskImage: `url(${patternUrl})`,
          maskImage: `url(${patternUrl})`,
          WebkitMaskRepeat: "repeat-x",
          maskRepeat: "repeat-x",
          WebkitMaskSize: "auto 200%",
          maskSize: "auto 200%",
          WebkitMaskPosition: "center",
          maskPosition: "center"
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("nav", {
        className: "relative max-w-7xl mx-auto px-4 lg:px-8",
        "aria-label": "Main",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex items-center justify-between h-[72px] lg:h-20",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            href: homeUrl,
            className: "brand-chip shrink-0",
            "aria-label": "Omega Truss Systems \u2014 Home",
            children: logoUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: logoUrl,
              alt: "Omega Truss Systems",
              className: "h-9 lg:h-10 w-auto"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
              className: "leading-none",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "block text-xl lg:text-2xl font-bold tracking-[0.08em] text-white",
                children: "OMEGA"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "block text-[10px] font-semibold uppercase tracking-[0.42em] text-white/75 mt-1",
                children: "Truss Systems"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "hidden lg:flex items-center gap-8",
            children: [LINKS_BEFORE.map(l => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: l.href,
              className: `${linkBase} ${isCurrent(l.href) ? currentMark : ""}`,
              children: l.label
            }, l.href)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "relative",
              ref: dropdownRef,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
                type: "button",
                className: `${linkBase} inline-flex items-center gap-1.5 ${servicesOpen ? "text-white" : ""}`,
                "aria-expanded": servicesOpen,
                "aria-haspopup": "true",
                onClick: () => setServicesOpen(v => !v),
                onMouseEnter: () => setServicesOpen(true),
                children: ["Structural Solutions", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Chevron, {
                  open: servicesOpen
                })]
              })
            }), LINKS_AFTER.map(l => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: l.href,
              className: `${linkBase} ${isCurrent(l.href) ? currentMark : ""}`,
              children: l.label
            }, l.href)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
              href: CTA.href,
              className: "btn-cta",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CtaPoints, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "fold",
                "aria-hidden": "true"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "inner",
                children: CTA.label
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            type: "button",
            className: "lg:hidden inline-flex items-center justify-center h-11 w-11 text-white",
            "aria-expanded": mobileOpen,
            "aria-controls": "omega-mobile-menu",
            "aria-label": mobileOpen ? "Close menu" : "Open menu",
            onClick: () => setMobileOpen(v => !v),
            children: mobileOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
              className: "h-6 w-6",
              viewBox: "0 0 24 24",
              fill: "none",
              "aria-hidden": "true",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                d: "M6 6 18 18 M18 6 6 18",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "square"
              })
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
              className: "h-6 w-6",
              viewBox: "0 0 24 24",
              fill: "none",
              "aria-hidden": "true",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                d: "M3.5 7h17 M3.5 12h17 M3.5 17h17",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "square"
              })
            })
          })]
        })
      }), servicesOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        ref: megaRef,
        role: "menu",
        "aria-label": "Structural Solutions",
        className: "hidden lg:block absolute left-0 right-0 top-full bg-white border-b border-navy/10 shadow-[0_24px_60px_rgba(22,40,60,0.16)] mega-panel",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "h-0.5 bg-ember",
          "aria-hidden": "true"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "max-w-7xl mx-auto px-4 lg:px-8 py-10 grid grid-cols-12 gap-10",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "col-span-4 border-r border-navy/10 pr-10",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              className: "font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember",
              children: "Structural Solutions"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              className: "mt-4 font-display text-2xl font-bold leading-snug text-navy",
              children: "One integrated scope, engineered for California's strictest codes."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
              href: "/structural-solutions/",
              className: "mt-6 inline-flex items-center gap-2 font-display text-[12px] font-semibold uppercase tracking-[0.12em] text-navy hover:text-ember transition-colors",
              children: ["Explore all solutions ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2192"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "col-span-8 grid grid-cols-2 gap-x-8 gap-y-2",
            children: SERVICES.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
              role: "menuitem",
              href: s.href,
              className: `group mega-item flex min-w-0 flex-col p-4 -mx-4 ${isCurrent(s.href) ? "bg-mist" : ""}`,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                className: "flex items-center justify-between gap-3 font-display text-[14px] font-bold text-navy transition-colors duration-200 group-hover:text-white",
                children: [s.label, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "text-ember opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0",
                  "aria-hidden": "true",
                  children: "\u2192"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "mt-1 text-[13px] leading-relaxed text-navy/60 transition-colors duration-200 group-hover:text-white/65",
                children: s.desc
              })]
            }, s.href))
          })]
        })]
      })]
    }), mobileOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      id: "omega-mobile-menu",
      className: "lg:hidden fixed inset-x-0 bottom-0 z-40 bg-white overflow-y-auto border-t border-navy/10",
      style: {
        top: `${panelTop}px`
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "px-5 py-6",
        children: [LINKS_BEFORE.map(l => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          href: l.href,
          className: "block py-4 text-[15px] font-semibold uppercase tracking-[0.12em] text-navy border-b border-navy/10",
          onClick: () => setMobileOpen(false),
          children: l.label
        }, l.href)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
          type: "button",
          className: "w-full flex items-center justify-between py-4 text-left text-[15px] font-semibold uppercase tracking-[0.12em] text-navy border-b border-navy/10",
          "aria-expanded": mobileServices,
          onClick: () => setMobileServices(v => !v),
          children: ["Structural Solutions", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Chevron, {
            open: mobileServices
          })]
        }), mobileServices && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
          className: "py-1 border-b border-navy/10",
          children: SERVICES.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: s.href,
              className: "block py-3 pl-4 text-[15px] text-navy/80 hover:text-navy",
              onClick: () => setMobileOpen(false),
              children: s.label
            })
          }, s.href))
        }), LINKS_AFTER.map(l => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          href: l.href,
          className: "block py-4 text-[15px] font-semibold uppercase tracking-[0.12em] text-navy border-b border-navy/10",
          onClick: () => setMobileOpen(false),
          children: l.label
        }, l.href)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
          href: CTA.href,
          className: "btn-cta w-full mt-6 [--fold-bg:#ffffff]",
          onClick: () => setMobileOpen(false),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CtaPoints, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "fold",
            "aria-hidden": "true"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "inner",
            children: CTA.label
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "mt-6 flex items-center justify-between",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            href: `tel:${_brand__WEBPACK_IMPORTED_MODULE_1__.PHONE.replace(/[^0-9+]/g, "")}`,
            className: "text-[14px] text-navy/70",
            children: _brand__WEBPACK_IMPORTED_MODULE_1__.PHONE
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "flex items-center gap-2",
            children: _brand__WEBPACK_IMPORTED_MODULE_1__.SOCIALS.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: s.url || "#",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": s.label,
              className: "social-chip",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_brand__WEBPACK_IMPORTED_MODULE_1__.SocialIcon, {
                id: s.id
              })
            }, s.id))
          })]
        })]
      })
    })]
  });
}

/***/ },

/***/ "./src/scripts/brand.js"
/*!******************************!*\
  !*** ./src/scripts/brand.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADDRESS: () => (/* binding */ ADDRESS),
/* harmony export */   EMAIL: () => (/* binding */ EMAIL),
/* harmony export */   MAPS_URL: () => (/* binding */ MAPS_URL),
/* harmony export */   PHONE: () => (/* binding */ PHONE),
/* harmony export */   SOCIALS: () => (/* binding */ SOCIALS),
/* harmony export */   SocialIcon: () => (/* binding */ SocialIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * OMEGA TRUSS SYSTEMS — Datos de marca compartidos (Navbar + Footer)
 * Único lugar donde se editan NAP y redes sociales.
 */



// ===== NAP — TODO: reemplazar con datos reales antes de producción =====

const PHONE = "(000) 000-0000";
const EMAIL = "info@omegatruss.com";
const ADDRESS = "Thousand Palms, CA";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Omega+Truss+Systems+Thousand+Palms+CA"; // TODO: dirección exacta

// ===== Redes — TODO: URLs reales =====
const SOCIALS = [{
  id: "fb",
  label: "Facebook",
  url: ""
}, {
  id: "ig",
  label: "Instagram",
  url: ""
}, {
  id: "tt",
  label: "TikTok",
  url: ""
}, {
  id: "gmb",
  label: "Google Business Profile",
  url: ""
}];
function SocialIcon({
  id
}) {
  const cls = "h-4 w-4";
  switch (id) {
    case "fb":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
        className: cls,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4h1.5V5.3c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8.1v2.8h2.4V21h3z"
        })
      });
    case "ig":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
        className: cls,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.6",
        "aria-hidden": "true",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
          x: "4",
          y: "4",
          width: "16",
          height: "16",
          rx: "4.5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
          cx: "12",
          cy: "12",
          r: "3.6"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
          cx: "16.8",
          cy: "7.2",
          r: "1",
          fill: "currentColor",
          stroke: "none"
        })]
      });
    case "tt":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
        className: cls,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M20.5 8.6a6.3 6.3 0 0 1-3.8-1.3v6.6a5.6 5.6 0 1 1-5.6-5.6c.2 0 .5 0 .7.1v3a2.6 2.6 0 1 0 1.9 2.5V2.5h3a6.3 6.3 0 0 0 3.8 5v1.1z"
        })
      });
    case "gmb":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
        className: cls,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.6",
        "aria-hidden": "true",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M4 9.5 5.3 5h13.4L20 9.5M4 9.5a2.3 2.3 0 0 0 4.5.6 2.3 2.3 0 0 0 4.6 0 2.3 2.3 0 0 0 4.6 0A2.3 2.3 0 0 0 20 9.5M5.5 12v7h13v-7M10 19v-4.5h4V19"
        })
      });
    default:
      return null;
  }
}

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "react-dom/client"
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
(module) {

module.exports = window["ReactDOM"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/Navbar */ "./src/scripts/Navbar.js");
/* harmony import */ var _scripts_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/Footer */ "./src/scripts/Footer.js");
/* harmony import */ var _scripts_Chatbot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/Chatbot */ "./src/scripts/Chatbot.js");
/* harmony import */ var _scripts_ContactForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/ContactForm */ "./src/scripts/ContactForm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







function mount(selector, Component) {
  const el = document.querySelector(selector);
  if (el) react_dom_client__WEBPACK_IMPORTED_MODULE_1___default().createRoot(el).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Component, {}));
}
mount("#react-navbar", _scripts_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"]);
mount("#react-footer", _scripts_Footer__WEBPACK_IMPORTED_MODULE_3__["default"]);
mount("#react-contact-form", _scripts_ContactForm__WEBPACK_IMPORTED_MODULE_5__["default"]);
mount("#react-chatbot", _scripts_Chatbot__WEBPACK_IMPORTED_MODULE_4__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map