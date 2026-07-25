/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
const LINKS = [{
  label: "Featured Projects",
  href: "/featured-projects/"
}, {
  label: "About",
  href: "/about/"
}, {
  label: "Location",
  href: "/location/"
}, {
  label: "Contact",
  href: "/contact/"
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
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setServicesOpen(false);
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
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "relative",
              ref: dropdownRef,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
                type: "button",
                className: `${linkBase} inline-flex items-center gap-1.5 ${servicesOpen ? "text-white" : ""}`,
                "aria-expanded": servicesOpen,
                "aria-haspopup": "true",
                onClick: () => setServicesOpen(v => !v),
                children: ["Structural Solutions", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Chevron, {
                  open: servicesOpen
                })]
              }), servicesOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "absolute left-0 top-full mt-4 w-[340px] bg-white border border-navy/10 shadow-[0_16px_40px_rgba(22,40,60,0.12)]",
                role: "menu",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "h-0.5 bg-ember",
                  "aria-hidden": "true"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
                  className: "py-2",
                  children: SERVICES.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                    role: "none",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                      role: "menuitem",
                      href: s.href,
                      className: `block px-5 py-3 text-[14px] text-navy/85 hover:bg-mist hover:text-navy transition-colors ${isCurrent(s.href) ? "bg-mist text-navy" : ""}`,
                      children: s.label
                    })
                  }, s.href))
                })]
              })]
            }), LINKS.map(l => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
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
      })]
    }), mobileOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      id: "omega-mobile-menu",
      className: "lg:hidden fixed inset-x-0 bottom-0 z-40 bg-white overflow-y-auto border-t border-navy/10",
      style: {
        top: `${panelTop}px`
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "px-5 py-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
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
        }), LINKS.map(l => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function mount(selector, Component) {
  const el = document.querySelector(selector);
  if (el) react_dom_client__WEBPACK_IMPORTED_MODULE_1___default().createRoot(el).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Component, {}));
}
mount("#react-navbar", _scripts_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"]);
mount("#react-footer", _scripts_Footer__WEBPACK_IMPORTED_MODULE_3__["default"]);

// Próximos componentes (descomentar cuando existan):
// import ContactForm from "./scripts/ContactForm"
// import Chatbot from "./scripts/Chatbot"
// mount("#react-contact-form", ContactForm)
// mount("#react-chatbot", Chatbot)
})();

/******/ })()
;
//# sourceMappingURL=index.js.map