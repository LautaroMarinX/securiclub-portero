import { c as createComponent, m as maybeRenderHead, a as addAttribute, r as renderTemplate, b as renderComponent, d as createAstro, e as renderHead, f as renderSlot, s as spreadAttributes } from '../chunks/astro/server_CdqwubwU.mjs';
import { clsx } from 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import React, { useState, useEffect, useMemo } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { XIcon, MenuIcon, User, ChevronDownIcon, CheckIcon, ChevronUpIcon, Building, LoaderIcon, X, Check as Check$1 } from 'lucide-react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
/* empty css                                 */
import { $ as $$Image } from '../chunks/_astro_assets_CLQQtzyt.mjs';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import * as LabelPrimitive from '@radix-ui/react-label';
import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';
import * as SelectPrimitive from '@radix-ui/react-select';
export { renderers } from '../renderers.mjs';

const links = [
  {
    href: "/#como-funciona",
    label: "Cómo funciona"
  },
  {
    href: "/#beneficios",
    label: "Beneficios"
  },
  {
    href: "/#planes",
    label: "Planes"
  },
  {
    href: "/#contacto",
    label: "Contacto"
  }
];

const $$FooterLinks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col"> <h5 class="text-xl mb-1">Contenido</h5> <ul class="flex flex-col [&>li]:py-0.5"> ${links.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="cursor-pointer duration-300 hover:opacity-75 hover:underline">${link.label}</a> </li>`)} </ul> </div>`;
}, "/Users/lautaromarin/Documents/Programacion/securiclub/src/globals/components/molecules/FooterLinks.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-screen bg-card border-t-[1px]"> <div class="container mx-auto py-20! grid grid-cols-3 gap-4"> <div class="flex flex-col col-span-2"> <img src="/logo.png" alt="Logo de Securi Club" class="size-24" loading="lazy"> </div> ${renderComponent($$result, "FooterLinks", $$FooterLinks, {})} </div> <div class="w-full border-t-[1px] container mx-auto flex flex-col"> <p>© 2025 Securi Club. Todos los derechos reservados</p> <a href="googlobal.com" class="hover:text-blue-500 cursor-pointer duration-300">Desarrollado por Googlobal AI</a> </div> </footer>`;
}, "/Users/lautaromarin/Documents/Programacion/securiclub/src/globals/components/organisms/footer.astro", void 0);

function useHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  function useIsAtTop() {
    useEffect(() => {
      const handleScroll = () => {
        setIsAtTop(window.scrollY >= 0 && window.scrollY < 100);
      };
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return isAtTop;
  }
  return { handleOpen, isOpen, closeMenu, useIsAtTop };
}

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-xl gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-xl px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

const RequestDemo = ({ label }) => {
  return /* @__PURE__ */ jsx("a", { href: "/#contacto", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "w-fit cursor-pointer", children: label ? label : "Solicitar demo" }) });
};

const HeaderLinkItem = ({ link, closeMenu }) => {
  return /* @__PURE__ */ jsx("li", { className: "text-nowrap", children: /* @__PURE__ */ jsx("a", { href: link.href, children: /* @__PURE__ */ jsx(
    Button,
    {
      size: "default",
      onClick: closeMenu,
      variant: "ghost",
      className: "hover:bg-secondary lg:hover:bg-card justify-start w-full lg:w-fit cursor-pointer ",
      children: link.label
    }
  ) }) });
};

const DesktopHeaderLinks = () => {
  return /* @__PURE__ */ jsx("nav", { className: "hidden lg:block", children: /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("ul", { className: "flex", children: links.map((link) => /* @__PURE__ */ jsx(HeaderLinkItem, { link }, link.label)) }) }) });
};

function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxs(
      SheetPrimitive.Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsx(XIcon, { className: "size-4" }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className),
      ...props
    }
  );
}

const Links = () => {
  const { handleOpen, isOpen, closeMenu } = useHeader();
  return /* @__PURE__ */ jsx("div", { className: "lg:hidden", children: /* @__PURE__ */ jsxs(Sheet, { open: isOpen, onOpenChange: handleOpen, children: [
    /* @__PURE__ */ jsx(SheetTrigger, { className: "lg:hidden", children: /* @__PURE__ */ jsx(
      Button,
      {
        size: "icon",
        variant: "outline",
        className: "cursor-pointer rounded-md",
        onClick: handleOpen,
        children: /* @__PURE__ */ jsx(MenuIcon, {})
      }
    ) }),
    /* @__PURE__ */ jsxs(SheetContent, { children: [
      /* @__PURE__ */ jsx(SheetHeader, { children: "Menú" }),
      /* @__PURE__ */ jsx("nav", { className: "p-2 w-full", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col", children: links.map((link) => /* @__PURE__ */ jsx(HeaderLinkItem, { closeMenu, link }, link.label)) }) })
    ] })
  ] }) });
};

const Header = () => {
  const { useIsAtTop } = useHeader();
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: `fixed top-0 duration-300 transition-all w-screen ${useIsAtTop() ? "bg-transparent" : "bg-primary/5 backdrop-blur-xl shadow"} z-50`,
      children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto flex justify-between items-center lg:grid lg:grid-cols-3", children: [
        /* @__PURE__ */ jsx("a", { className: "flex items-center", href: "/#top", children: /* @__PURE__ */ jsx("img", { src: "/logo.png", className: "size-12", alt: "Logo de Securi Club" }) }),
        /* @__PURE__ */ jsx(DesktopHeaderLinks, {}),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-end items-center gap-2", children: [
          /* @__PURE__ */ jsx(RequestDemo, {}),
          /* @__PURE__ */ jsx(Links, {})
        ] })
      ] })
    }
  );
};

const $$Astro$4 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Securi Club | Portería Autónoma</title><meta name="description" content="Securi Club digitaliza tu edificio con portería autónoma 24/7, acceso facial y gestión completa desde una app. Más seguridad, menos costos.">${renderHead()}</head> ${renderComponent($$result, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/globals/components/organisms/Header", "client:component-export": "default", "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </html>`;
}, "/Users/lautaromarin/Documents/Programacion/securiclub/src/layouts/Layout.astro", void 0);

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2.5 py-1.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

const $$Astro$3 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Icon;
  const {
    color = "currentColor",
    size = 24,
    "stroke-width": strokeWidth = 2,
    absoluteStrokeWidth = false,
    iconNode = [],
    class: className,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes({
    ...defaultAttributes,
    width: size,
    height: size,
    stroke: color,
    "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
    ...rest
  })}${addAttribute(["lucide", className], "class:list")}> ${iconNode.map(([Tag, attrs]) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs })}`)} ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/Users/lautaromarin/Documents/Programacion/securiclub/node_modules/@lucide/astro/src/Icon.astro", void 0);

const createLucideIcon = (iconName, iconNode) => {
  const Component = createComponent(
    ($$result, $$props, $$slots) => {
      const { class: className, ...restProps } = $$props;
      return renderTemplate`${renderComponent(
        $$result,
        "Icon",
        $$Icon,
        {
          class: mergeClasses(
            Boolean(iconName) && `lucide-${toKebabCase(iconName)}`,
            Boolean(className) && className
          ),
          iconNode,
          ...restProps
        },
        { default: () => renderTemplate`${renderSlot($$result, $$slots["default"])}` }
      )}`;
    },
    void 0,
    "none"
  );
  return Component;
};

const Check = createLucideIcon("check", [["path", { "d": "M20 6 9 17l-5-5" }]]);

const ScanFace = createLucideIcon("scan-face", [["path", { "d": "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { "d": "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { "d": "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { "d": "M7 21H5a2 2 0 0 1-2-2v-2" }], ["path", { "d": "M8 14s1.5 2 4 2 4-2 4-2" }], ["path", { "d": "M9 9h.01" }], ["path", { "d": "M15 9h.01" }]]);

const Send = createLucideIcon("send", [["path", { "d": "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" }], ["path", { "d": "m21.854 2.147-10.94 10.939" }]]);

const Smartphone = createLucideIcon("smartphone", [["rect", { "width": "14", "height": "20", "x": "5", "y": "2", "rx": "2", "ry": "2" }], ["path", { "d": "M12 18h.01" }]]);

const $$CheckIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="rounded-full bg-green-600 flex h-fit w-fit p-1"> ${renderComponent($$result, "Check", Check, { "class": "size-2.5 text-white" })} </span>`;
}, "/Users/lautaromarin/Documents/Programacion/securiclub/src/globals/components/atoms/checkIcon.astro", void 0);

const $$CheckItem = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<li class="flex gap-2 items-center text-muted-foreground">${renderComponent($$result, "CheckIcon", $$CheckIcon, {})} ${renderSlot($$result, $$slots["default"])}</li>`;
}, "/Users/lautaromarin/Documents/Programacion/securiclub/src/globals/components/atoms/CheckItem.astro", void 0);

const $$Banner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="h-fit py-24 flex justify-center items-center bg-linear-to-b from-teal-300/20 to-secondary" id="top"> <div class="flex flex-col-reverse lg:flex-row gap-2 container mx-auto"> <div class="flex flex-col justify-center"> ${renderComponent($$result, "Badge", Badge, { "className": "mb-2 bg-primary/10 text-primary" }, { "default": ($$result2) => renderTemplate`Portería Autónoma 24/7` })} <h1 class="text-3xl md:text-5xl xl:text-6xl mb-2 text-pretty">Tu edificio inteligente, <span class=" bg-clip-text text-transparent bg-linear-to-br from-teal-300/20 via-primary to-black">seguro y conectado</span></h1> <p class="mb-4 text-balance text-muted-foreground">Con Securi Club reducís costos, aumentás la seguridad y simplificás la vida de todos con acceso facial, invitaciones digitales y gestión desde una sola app.</p> <div class="flex flex-wrap gap-2"> ${renderComponent($$result, "RequestDemo", RequestDemo, { "label": "Quiero mi demo gratis" })} <a href="#como-funciona"> ${renderComponent($$result, "Button", Button, { "variant": "outline", "className": "cursor-pointer", "size": "lg" }, { "default": ($$result2) => renderTemplate`
Ver cómo funciona
` })} </a> </div> <ul class="mt-4 flex flex-col gap-1"> ${renderComponent($$result, "CheckItem", $$CheckItem, {}, { "default": ($$result2) => renderTemplate`Ahorro de hasta 50% en costos de portería.` })} ${renderComponent($$result, "CheckItem", $$CheckItem, {}, { "default": ($$result2) => renderTemplate`Acceso facial, QR y videoportero remoto.` })} ${renderComponent($$result, "CheckItem", $$CheckItem, {}, { "default": ($$result2) => renderTemplate`Reservas, expensas y cámaras en una sola app.` })} </ul> </div> <div class="flex w-full h-fit items-center justify-center"> ${renderComponent($$result, "Image", $$Image, { "src": "/mockup.png", "loading": "eager", "alt": "Imagenes de dos telefonos celulares con la aplicaci\xF3n de Porter\xEDa Aut\xF3noma", "class": "aspect-4/3 object-contain", "width": 1920, "height": 1080 })} </div> </div> </section>`;
}, "/Users/lautaromarin/Documents/Programacion/securiclub/src/modules/home/components/organisms/banner.astro", void 0);

function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className),
      ...props
    }
  );
}

const $$Astro$2 = createAstro();
const $$DetailNumberCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$DetailNumberCard;
  const { icon: Icon, title, description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", Card, { "className": "shadow-xl last:col-span-1 md:last:col-span-2 lg:last:col-span-1" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardHeader", CardHeader, { "className": "gap-0 h-20 flex justify-between flex-col" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", Icon, { "class": "size-10 stroke-1" })} ` })} ${renderComponent($$result2, "CardFooter", CardFooter, { "className": "flex flex-col items-start" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardTitle", CardTitle, { "className": "text-2xl font-normal pb-0" }, { "default": ($$result4) => renderTemplate`${title}` })} ${renderComponent($$result3, "CardDescription", CardDescription, { "className": "text-md" }, { "default": ($$result4) => renderTemplate`${description}` })} ` })} ` })}`;
}, "/Users/lautaromarin/Documents/Programacion/securiclub/src/modules/home/components/atoms/detailNumberCard.astro", void 0);

const $$Details = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col bg-secondary py-16" id="como-funciona"> <div class="flex flex-col container mx-auto"> <h2 class="text-2xl lg:text-4xl mb-2">Cómo funciona</h2> <p class="text-muted-foreground">Tres pasos simples para un acceso seguro y sin llaves.</p> <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4"> ${renderComponent($$result, "DetailNumberCard", $$DetailNumberCard, { "icon": ScanFace, "title": "Identificaci\xF3n facial", "description": "El sistema te reconoce y abre la puerta al instante." })} ${renderComponent($$result, "DetailNumberCard", $$DetailNumberCard, { "icon": Send, "title": "Invitaciones digitales", "description": "Envi\xE1 un QR o link con horarios y usos definidos." })} ${renderComponent($$result, "DetailNumberCard", $$DetailNumberCard, { "icon": Smartphone, "title": "Control desde el celular", "description": "Atend\xE9 el timbre, abr\xED y mir\xE1 las c\xE1maras en vivo." })} </div> </div> </section>`;
}, "/Users/lautaromarin/Documents/Programacion/securiclub/src/modules/home/components/organisms/details.astro", void 0);

const $$Astro$1 = createAstro();
const $$DetailCardList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DetailCardList;
  const { title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", Card, { "className": "shadow-xl flex justify-between" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardHeader", CardHeader, { "className": "min-h-20" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardTitle", CardTitle, { "className": "text-2xl font-normal pb-0" }, { "default": ($$result4) => renderTemplate`${title}` })} ` })} ${renderComponent($$result2, "CardContent", CardContent, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<ul class="flex flex-col gap-1"> ${renderSlot($$result3, $$slots["default"])} </ul> ` })} ` })}`;
}, "/Users/lautaromarin/Documents/Programacion/securiclub/src/modules/home/components/atoms/detailCardList.astro", void 0);

const $$Benefits = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col py-16 bg-secondary" id="beneficios"> <div class="container mx-auto"> <div class="flex flex-col mb-4 xl:max-w-2/4"> <h2 class="text-2xl lg:text-4xl mb-2">Beneficios</h2> <p class="text-muted-foreground">Tecnología inteligente, seguridad real y gestión sin fricciones.
            Securi Club redefine la experiencia en edificios: menos costos, más control y todo al alcance de tu celular.</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4"> ${renderComponent($$result, "DetailCardList", $$DetailCardList, { "title": "Administradores" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CheckItem", $$CheckItem, {}, { "default": ($$result3) => renderTemplate`Reducí hasta 50% los costos` })} ${renderComponent($$result2, "CheckItem", $$CheckItem, {}, { "default": ($$result3) => renderTemplate`Gestión centralizada y transparente` })} ${renderComponent($$result2, "CheckItem", $$CheckItem, {}, { "default": ($$result3) => renderTemplate`Auditoría 24/7 de accesos` })} ` })} ${renderComponent($$result, "DetailCardList", $$DetailCardList, { "title": "Desarrolladores" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CheckItem", $$CheckItem, {}, { "default": ($$result3) => renderTemplate`Diferenciá tus proyectos con IA & biometría` })} ${renderComponent($$result2, "CheckItem", $$CheckItem, {}, { "default": ($$result3) => renderTemplate`Amenity digital premium que acelera ventas` })} ${renderComponent($$result2, "CheckItem", $$CheckItem, {}, { "default": ($$result3) => renderTemplate`Menor costo operativo del consorcio` })} ` })} ${renderComponent($$result, "DetailCardList", $$DetailCardList, { "title": "Propietarios" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CheckItem", $$CheckItem, {}, { "default": ($$result3) => renderTemplate`Seguridad real y sin llaves` })} ${renderComponent($$result2, "CheckItem", $$CheckItem, {}, { "default": ($$result3) => renderTemplate`Control de visitas y paquetería segura` })} ${renderComponent($$result2, "CheckItem", $$CheckItem, {}, { "default": ($$result3) => renderTemplate`Reservas y expensas en una app` })} ` })} </div> </div> </section>`;
}, "/Users/lautaromarin/Documents/Programacion/securiclub/src/modules/home/components/organisms/benefits.astro", void 0);

const $$ViewDemo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-secondary py-16 px-4"> <div class="flex flex-col container mx-auto bg-white rounded-2xl"> <div class="flex flex-col mb-4"> <h2 class="text-2xl lg:text-4xl mb-2">Acceso Total al Instante</h2> <p class="lg:w-3/4 text-muted-foreground">Mira la demo y descubre cómo gestionar el acceso facial, códigos QR para invitados, la recepción de paquetes seguros y las reservas, todo desde tu móvil y en segundos.</p> </div> ${renderComponent($$result, "LiteYouTubeEmbed", LiteYouTubeEmbed, { "client:load": true, "activatedClass": "lyt-activated", "wrapperClass": "yt-lite rounded-xl", "aspectHeight": 8, "title": "Descubre FullCond: La Soluci\xF3n Integral para la Gesti\xF3n de Condominios", "id": "1Hhs6TqKLxc", "client:component-hydration": "load", "client:component-path": "react-lite-youtube-embed", "client:component-export": "default" })} </div> </section>`;
}, "/Users/lautaromarin/Documents/Programacion/securiclub/src/modules/home/components/organisms/viewDemo.astro", void 0);

const $$Astro = createAstro();
const $$PricingCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PricingCard;
  const { title, pricing, recomendado } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", Card, { "className": "bg-card shadow-xl" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardHeader", CardHeader, { "className": "flex flex-col gap-0" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardTitle", CardTitle, { "className": "text-2xl font-normal flex justify-between items-center w-full" }, { "default": ($$result4) => renderTemplate`${title}${recomendado && renderTemplate`${renderComponent($$result4, "Badge", Badge, {}, { "default": ($$result5) => renderTemplate`Recomendado` })}`}` })} ${maybeRenderHead()}<h3 class="text-3xl text-primary">$${pricing} <span class="text-sm text-black!">/ mes</span></h3> ` })} ${renderComponent($$result2, "CardContent", CardContent, {}, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["default"])} ` })} ` })}`;
}, "/Users/lautaromarin/Documents/Programacion/securiclub/src/modules/home/components/atoms/pricingCard.astro", void 0);

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-linear-to-b from-secondary via-teal-300/20 to-secondary py-16" id="planes"> <div class="flex flex-col container mx-auto"> <div class="flex flex-col mb-4"> <h3 class="text-2xl lg:text-4xl mb-2">Planes y Precios</h3> <p class="text-muted-foreground">Elegí el plan que mejor se adapta a tu edificio</p> <small class="text-black/50">Valores orientativos, pueden variar según hardware y cantidad de unidades.</small> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-4"> ${renderComponent($$result, "PricingCard", $$PricingCard, { "title": "Piloto", "pricing": "15000" }, { "default": ($$result2) => renderTemplate` <ul class="flex flex-col gap-1"> ${renderComponent($$result2, "CheckItem", $$CheckItem, {}, { "default": ($$result3) => renderTemplate`Acceso facial + QR` })} ${renderComponent($$result2, "CheckItem", $$CheckItem, {}, { "default": ($$result3) => renderTemplate`1 equipo de acceso` })} ${renderComponent($$result2, "CheckItem", $$CheckItem, {}, { "default": ($$result3) => renderTemplate`App residentes + invitaciones` })} ${renderComponent($$result2, "CheckItem", $$CheckItem, {}, { "default": ($$result3) => renderTemplate`Soporte estándar` })} </ul> ` })} ${renderComponent($$result, "PricingCard", $$PricingCard, { "title": "Estandar", "recomendado": true, "pricing": "15000" }, { "default": ($$result2) => renderTemplate` <ul class="flex flex-col gap-1"> ${renderComponent($$result2, "CheckItem", $$CheckItem, {}, { "default": ($$result3) => renderTemplate`Todo lo del plan Piloto` })} ${renderComponent($$result2, "CheckItem", $$CheckItem, {}, { "default": ($$result3) => renderTemplate`Videoportero remoto` })} ${renderComponent($$result2, "CheckItem", $$CheckItem, {}, { "default": ($$result3) => renderTemplate`Reservas de amenities` })} ${renderComponent($$result2, "CheckItem", $$CheckItem, {}, { "default": ($$result3) => renderTemplate`Comunicados y expensas` })} </ul> ` })} ${renderComponent($$result, "PricingCard", $$PricingCard, { "title": "Premium", "pricing": "15000" }, { "default": ($$result2) => renderTemplate` <ul class="flex flex-col gap-1"> ${renderComponent($$result2, "CheckItem", $$CheckItem, {}, { "default": ($$result3) => renderTemplate`Integración cámaras + portón` })} ${renderComponent($$result2, "CheckItem", $$CheckItem, {}, { "default": ($$result3) => renderTemplate`Automatización de puertas` })} ${renderComponent($$result2, "CheckItem", $$CheckItem, {}, { "default": ($$result3) => renderTemplate`Reportes avanzados` })} ${renderComponent($$result2, "CheckItem", $$CheckItem, {}, { "default": ($$result3) => renderTemplate`Soporte prioritario 24/7` })} </ul> ` })} </div> </div> </section>`;
}, "/Users/lautaromarin/Documents/Programacion/securiclub/src/modules/home/components/organisms/pricing.astro", void 0);

function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

function FieldSet({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "fieldset",
    {
      "data-slot": "field-set",
      className: cn(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        className
      ),
      ...props
    }
  );
}
function FieldLegend({
  className,
  variant = "legend",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "legend",
    {
      "data-slot": "field-legend",
      "data-variant": variant,
      className: cn(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        className
      ),
      ...props
    }
  );
}
function FieldGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "field-group",
      className: cn(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        className
      ),
      ...props
    }
  );
}
const fieldVariants = cva(
  "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ],
        responsive: [
          "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ]
      }
    },
    defaultVariants: {
      orientation: "vertical"
    }
  }
);
function Field({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "group",
      "data-slot": "field",
      "data-orientation": orientation,
      className: cn(fieldVariants({ orientation }), className),
      ...props
    }
  );
}
function FieldLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Label,
    {
      "data-slot": "field-label",
      className: cn(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
        className
      ),
      ...props
    }
  );
}
function FieldError({
  className,
  children,
  errors,
  ...props
}) {
  const content = useMemo(() => {
    if (children) {
      return children;
    }
    if (!errors?.length) {
      return null;
    }
    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values()
    ];
    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message;
    }
    return /* @__PURE__ */ jsx("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: uniqueErrors.map(
      (error, index) => error?.message && /* @__PURE__ */ jsx("li", { children: error.message }, index)
    ) });
  }, [children, errors]);
  if (!content) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "alert",
      "data-slot": "field-error",
      className: cn("text-destructive text-sm font-normal", className),
      ...props,
      children: content
    }
  );
}

function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}

const $formInfo = atom(null);
function getFormInfo() {
  return $formInfo.get();
}
function setFormField(field, value) {
  const currentInfo = $formInfo.get() || {
    name: "",
    email: "",
    phone: 0,
    rol: "",
    units: 0,
    message: ""
  };
  $formInfo.set({
    ...currentInfo,
    [field]: value
  });
}

const isValidName = (name) => {
  return name.length > 2;
};
const isValidEmail = (email) => {
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};
const isValidPhone = (phone) => {
  let regex = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
  return regex.test(phone.toString());
};
const isValidUnits = (units) => {
  return units > 0;
};
const isValidRol = (rol) => {
  return rol != "";
};
const isValidForm = (formInfo) => {
  return isValidName(formInfo.name) && isValidEmail(formInfo.email) && isValidPhone(formInfo.phone) && isValidUnits(formInfo.units) && isValidRol(formInfo.rol);
};

const NameField = () => {
  const [touched, setTouched] = React.useState(false);
  const formInfo = useStore($formInfo);
  const validation = useMemo(() => {
    const name = formInfo?.name;
    const isValid = name ? isValidName(name.trim()) : false;
    const shouldShowError = touched && !isValid && name !== void 0;
    return { isValid, shouldShowError };
  }, [formInfo?.name, touched]);
  return /* @__PURE__ */ jsxs(Field, { "data-invalid": validation.shouldShowError, children: [
    /* @__PURE__ */ jsx(FieldLabel, { htmlFor: "name", children: "Nombre completo *" }),
    /* @__PURE__ */ jsx(
      Input,
      {
        type: "text",
        required: true,
        id: "name",
        autoComplete: "name",
        placeholder: "Ingrese su nombre y apellido",
        value: formInfo?.name || "",
        onChange: (e) => setFormField("name", e.target.value),
        onBlur: () => setTouched(true)
      }
    ),
    validation.shouldShowError && /* @__PURE__ */ jsx(FieldError, { children: "El nombre debe tener más de 2 caracteres." })
  ] });
};

const EmailField = () => {
  const [touched, setTouched] = React.useState(false);
  const formInfo = useStore($formInfo);
  const validation = useMemo(() => {
    const email = formInfo?.email;
    const isValid = email ? isValidEmail(email) : false;
    const shouldShowError = touched && !isValid && email !== void 0;
    return { isValid, shouldShowError };
  }, [formInfo?.email, touched]);
  return /* @__PURE__ */ jsxs(Field, { "data-invalid": validation.shouldShowError, children: [
    /* @__PURE__ */ jsx(FieldLabel, { htmlFor: "email", children: "Correo electronico *" }),
    /* @__PURE__ */ jsx(
      Input,
      {
        type: "email",
        required: true,
        id: "email",
        autoComplete: "email",
        placeholder: "tu@email.com",
        value: formInfo?.email || "",
        onChange: (e) => setFormField("email", e.target.value),
        onBlur: () => setTouched(true)
      }
    ),
    validation.shouldShowError && /* @__PURE__ */ jsx(FieldError, { children: "Por favor, ingresa un correo electrónico válido." })
  ] });
};

const PhoneField = () => {
  const [touched, setTouched] = React.useState(false);
  const formInfo = useStore($formInfo);
  const validation = useMemo(() => {
    const phone = formInfo?.phone;
    const isValid = phone ? isValidPhone(phone) : false;
    const shouldShowError = touched && !isValid && phone !== void 0;
    return { isValid, shouldShowError };
  }, [formInfo?.phone, touched]);
  return /* @__PURE__ */ jsxs(Field, { "data-invalid": validation.shouldShowError, children: [
    /* @__PURE__ */ jsx(FieldLabel, { htmlFor: "phone", children: "Teléfono *" }),
    /* @__PURE__ */ jsx(
      Input,
      {
        type: "tel",
        required: true,
        id: "phone",
        autoComplete: "tel",
        placeholder: "+54 11 1234-5678",
        value: formInfo?.phone || "",
        onChange: (e) => setFormField("phone", Number(e.target.value)),
        onBlur: () => setTouched(true)
      }
    ),
    validation.shouldShowError && /* @__PURE__ */ jsx(FieldError, { children: "Por favor, ingresa un número de teléfono válido." })
  ] });
};

const PersonalInfo = () => {
  return /* @__PURE__ */ jsxs(FieldSet, { children: [
    /* @__PURE__ */ jsxs(FieldLegend, { className: "flex gap-2 items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "p-2 bg-secondary rounded-md items-center flex", children: /* @__PURE__ */ jsx(User, { className: "size-4" }) }),
      "Información personal"
    ] }),
    /* @__PURE__ */ jsxs(FieldGroup, { className: "grid grid-cols-1 gap-2 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsx(NameField, {}),
      /* @__PURE__ */ jsx(EmailField, {}),
      /* @__PURE__ */ jsx(PhoneField, {})
    ] })
  ] });
};

function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}

const MessageField = () => {
  return /* @__PURE__ */ jsxs(Field, { children: [
    /* @__PURE__ */ jsx(FieldLabel, { htmlFor: "message", children: "Mensaje" }),
    /* @__PURE__ */ jsx(Textarea, { rows: 4, id: "message", placeholder: "Contanos brevemente tu necesidad." })
  ] });
};

const Message = () => {
  return /* @__PURE__ */ jsx(FieldSet, { children: /* @__PURE__ */ jsx(FieldGroup, { children: /* @__PURE__ */ jsx(MessageField, {}) }) });
};

function Select({
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  align = "center",
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      align,
      ...props,
      children: [
        /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4" })
    }
  );
}

const StatusField = () => {
  const [touched, setTouched] = React.useState(false);
  const formInfo = useStore($formInfo);
  const validation = useMemo(() => {
    const rol = formInfo?.rol;
    const isValid = rol ? isValidRol(rol) : false;
    const shouldShowError = touched && !isValid && rol !== void 0;
    return { isValid, shouldShowError };
  }, [formInfo?.rol, touched]);
  return /* @__PURE__ */ jsxs(Field, { "data-invalid": validation.shouldShowError, children: [
    /* @__PURE__ */ jsx(FieldLabel, { htmlFor: "rol", children: "Rol personal *" }),
    /* @__PURE__ */ jsxs(
      Select,
      {
        required: true,
        value: formInfo?.rol || "",
        onValueChange: (value) => {
          setFormField("rol", value);
          setTouched(true);
        },
        children: [
          /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Elija una opción" }) }),
          /* @__PURE__ */ jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsx(SelectItem, { value: "Administrador", children: "Administrador de Consorcio" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "Desarrollador", children: "Desarrollador inmobiliario" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "Propietario", children: "Propietario o Residente" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "Instalador", children: "Instalador o Empresa de Seguridad" })
          ] })
        ]
      }
    ),
    validation.shouldShowError && /* @__PURE__ */ jsx(FieldError, { children: "Por favor, selecciona tu rol personal." })
  ] });
};

const UnitsField = () => {
  const [touched, setTouched] = React.useState(false);
  const formInfo = useStore($formInfo);
  const validation = useMemo(() => {
    const units = formInfo?.units;
    const isValid = units ? isValidUnits(units) : false;
    const shouldShowError = touched && !isValid && units !== void 0;
    return { isValid, shouldShowError };
  }, [formInfo?.units, touched]);
  return /* @__PURE__ */ jsxs(Field, { "data-invalid": validation.shouldShowError, children: [
    /* @__PURE__ */ jsx(FieldLabel, { htmlFor: "units", children: "Unidades del edificio *" }),
    /* @__PURE__ */ jsx(
      Input,
      {
        type: "number",
        required: true,
        id: "units",
        min: 0,
        placeholder: "Ingrese las unidades del edificio.",
        value: formInfo?.units || "",
        onChange: (e) => setFormField("units", Number(e.target.value)),
        onBlur: () => setTouched(true)
      }
    ),
    validation.shouldShowError && /* @__PURE__ */ jsx(FieldError, { children: "Por favor, ingresa un número válido de unidades (mayor a 0)." })
  ] });
};

const DetailInfo = () => {
  return /* @__PURE__ */ jsxs(FieldSet, { children: [
    /* @__PURE__ */ jsxs(FieldLegend, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "p-2 bg-secondary rounded-md items-center flex", children: /* @__PURE__ */ jsx(Building, { className: "size-4" }) }),
      "Detalle del condominio"
    ] }),
    /* @__PURE__ */ jsxs(FieldGroup, { children: [
      /* @__PURE__ */ jsx(StatusField, {}),
      /* @__PURE__ */ jsx(UnitsField, {})
    ] })
  ] });
};

const SendForm = () => {
  const formInfo = useStore($formInfo);
  const isFormValid = useMemo(() => {
    if (!formInfo) return false;
    return isValidForm(formInfo);
  }, [formInfo]);
  return /* @__PURE__ */ jsx(Button, { type: "submit", size: "lg", disabled: !isFormValid, children: "Solicitar demo" });
};

const StatusWrapper = ({ children }) => {
  return /* @__PURE__ */ jsx("div", { className: "flex h-96 bg-card ro w-full xl:w-4xl flex-col justify-center items-center text-center", children });
};
const StatusContent = ({
  setSendStatus,
  status
}) => {
  if (status === "enviando") {
    return /* @__PURE__ */ jsxs(StatusWrapper, { children: [
      /* @__PURE__ */ jsx(LoaderIcon, { className: "size-10 mb-4 animate-spin" }),
      /* @__PURE__ */ jsx("p", { children: "Estamos enviando el mail" })
    ] });
  }
  if (status === "error") {
    if (setSendStatus === void 0) return null;
    return /* @__PURE__ */ jsxs(StatusWrapper, { children: [
      /* @__PURE__ */ jsx(X, { className: "size-10 mb-4 text-red-400" }),
      /* @__PURE__ */ jsx("h2", { className: "text-xl mb-1", children: "Sucedio un error" }),
      /* @__PURE__ */ jsx("p", { className: "w-3/4", children: "No pudimos enviar tu mensaje. Por favor, intenta nuevamente o pruebe mas tarde." }),
      /* @__PURE__ */ jsx(Button, { className: "mt-3", onClick: () => setSendStatus("pendiente"), children: "Intentar nuevamente" })
    ] });
  }
  if (status === "enviado") {
    return /* @__PURE__ */ jsxs(StatusWrapper, { children: [
      /* @__PURE__ */ jsx(Check$1, { className: "size-10 mb-4 text-green-400" }),
      /* @__PURE__ */ jsx("h2", { className: "text-xl mb-1", children: "Gracias por contactarte" }),
      /* @__PURE__ */ jsx("p", { className: "w-3/4", children: "Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto." })
    ] });
  }
};

const ContactForm = () => {
  const [sendStatus, setSendStatus] = React.useState("pendiente");
  const handleSubmit = async (e) => {
    const payload = getFormInfo();
    setSendStatus("enviando");
    if (!payload) return;
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      setSendStatus("enviado");
    } else {
      console.log(res);
      setSendStatus("error");
    }
  };
  if (sendStatus === "pendiente") {
    return /* @__PURE__ */ jsx(
      "form",
      {
        className: "p-4 shadow-2xl rounded-2xl bg-card",
        onSubmit: handleSubmit,
        children: /* @__PURE__ */ jsxs(FieldGroup, { children: [
          /* @__PURE__ */ jsx(PersonalInfo, {}),
          /* @__PURE__ */ jsx(DetailInfo, {}),
          /* @__PURE__ */ jsx(Message, {}),
          /* @__PURE__ */ jsx(SendForm, {})
        ] })
      }
    );
  }
  return /* @__PURE__ */ jsx(StatusContent, { status: sendStatus, setSendStatus });
};

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const mensaje = "¡Hola! Me comunico desde su sitio web. Deseo solicitar una demostración de la Portería Autónoma de Securi Club";
  return renderTemplate`${maybeRenderHead()}<section class="bg-secondary py-20" id="contacto"> <div class="container mx-auto flex flex-col gap-4 justify-center items-center"> <div class="flex flex-col text-center items-center mb-4"> <h3 class="text-2xl lg:text-4xl mb-2">Solicitá tu demo</h3> <p class="mb-2 text-muted-foreground">Completá el formulario y un asesor te contactará. También podés escribirnos por WhatsApp.</p> <a${addAttribute(`https://wa.me/${"541176162536"}?text=${decodeURIComponent(mensaje)}`, "href")} target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "Button", Button, { "size": "lg", "className": "w-fit cursor-pointer" }, { "default": ($$result2) => renderTemplate`Hablar por WhatsApp` })} </a> </div> <div class="flex flex-col"> ${renderComponent($$result, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/modules/contactForm/components/organisms/ContactForm", "client:component-export": "default" })} <p class="mt-6 text-sm text-center">Al enviar este formulario aceptás ser contactado por Securi Club. No compartimos tus datos con terceros.</p> </div> </div> </section>`;
}, "/Users/lautaromarin/Documents/Programacion/securiclub/src/modules/home/components/organisms/contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Banner", $$Banner, {})} ${renderComponent($$result2, "Details", $$Details, {})} ${renderComponent($$result2, "Benefits", $$Benefits, {})} ${renderComponent($$result2, "ViewDemo", $$ViewDemo, {})} ${renderComponent($$result2, "Pricing", $$Pricing, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "/Users/lautaromarin/Documents/Programacion/securiclub/src/pages/index.astro", void 0);

const $$file = "/Users/lautaromarin/Documents/Programacion/securiclub/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
