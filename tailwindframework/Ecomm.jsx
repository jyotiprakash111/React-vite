// import React from "react"

// // @notus-pro/react
// import Hero9 from "@notus-pro/react/Hero9"
// import Pricing3 from "@notus-pro/react/Pricing3"
// import Blogs7 from "@notus-pro/react/Blogs7"
// import Testimonials2 from "@notus-pro/react/Testimonials2"
// import NavbarLinks from "@notus-pro/react/NavbarLinks"
// import HeaderImageTitleButtonCenter from "@notus-pro/react/HeaderImageTitleButtonCenter"
// import PreFooterLarge from "@notus-pro/react/PreFooterLarge"
// import FooterSmall from "@notus-pro/react/FooterSmall"

// // texts as props
// const navbarlinkslanding1 = {
//   color: "transparent",
//   type: "absolute",
//   logoText: "Notus PRO React",
//   logoLink: { to: "/" },
//   leftLinks: [
//     {
//       href: "#pablo",
//       children: {
//         key: null,
//         ref: null,
//         props: {
//           children: [
//             {
//               type: "i",
//               key: null,
//               ref: null,
//               props: {
//                 className:
//                   "lg:text-blueGray-300 text-blueGray-500 far fa-file-alt text-lg leading-lg mr-2",
//               },
//               _owner: null,
//             },
//             " ",
//             "Docs",
//           ],
//         },
//         _owner: null,
//       },
//     },
//   ],
//   socials: [
//     {
//       icon: "facebook",
//       text: "Share on Facebook",
//       link: "https://www.facebook.com/CreativeTim",
//     },
//     {
//       icon: "twitter",
//       text: "Tweet on Twitter",
//       link: "https://twitter.com/CreativeTim",
//     },
//     {
//       icon: "github",
//       text: "Star on Github",
//       link: "https://github.com/creativetimofficial",
//     },
//   ],
//   rightLinks: [
//     {
//       dropdown: true,
//       text: "Demo Pages",
//       items: [
//         { disabled: true, children: "Group 1" },
//         { href: "#pablo", children: "Demo Page 1" },
//         { href: "#pablo", children: "Demo Page 2" },
//         { disabled: true, children: "Group 2" },
//         { href: "#pablo", children: "Demo Page 3" },
//         { href: "#pablo", children: "Demo Page 4" },
//         { disabled: true, children: "Group 3" },
//         { href: "#pablo", children: "Demo Page 5" },
//         { href: "#pablo", children: "Demo Page 6" },
//         { disabled: true, children: "Group 4" },
//         { href: "#pablo", children: "Demo Page 7" },
//         { href: "#pablo", children: "Demo Page 8" },
//       ],
//     },
//   ],
// }
// const headerimagetitlebuttoncenter = {
//   image: "/notus-pro-react/static/media/fashion-show.16bee4d7.jpg",
//   title: "Check our latest items!",
//   text:
//     "Shop now and find your special suits, t-shirts and trousers. Many designers just launched their Autumn/Winter 2021 Collection!",
//   icon: "fas fa-shopping-cart",
//   color: "red",
//   skew: { color: "white" },
// }
// const hero9 = {
//   heading3badge: {
//     badge: { color: "pink", children: "Have you seen us?" },
//     title: "Our recent products",
//     description:
//       "The time is now for it to be okay to be great. People in this world shun people for being great.",
//     alignment: "left",
//   },
//   cards: [
//     {
//       image: "/notus-pro-react/static/media/ecommerce-1.986b18bf.jpg",
//       icon: "fas fa-calendar-check",
//       color: "red",
//       text: "Wearing",
//       description:
//         "Yesterday, this was an essential fabric and its news reader app Paper. It is design-focused wool called out...",
//       title: "Check our latest collection",
//       link: { href: "#pablo" },
//     },
//     {
//       image: "/notus-pro-react/static/media/p2.59bf26e0.svg",
//       icon: "fas fa-calendar-check",
//       color: "red",
//       text: "Fashion",
//       description:
//         "Argon is a great free UI package based on Bootstrap 4 that includes the most important components and features.",
//       title: "Wardrobe essentials",
//       link: { href: "#pablo" },
//     },
//     {
//       image: "/notus-pro-react/static/media/linth3.41699b02.svg",
//       icon: "fas fa-calendar-check",
//       color: "red",
//       text: "Fashion",
//       description:
//         "Trends may come and go, but wardrobe essentials are here to stay. Basic pieces tend to be universal across.",
//       title: "Wardrobe essentials",
//       link: { href: "#pablo" },
//     },
//   ],
// }
// const pricing3ecommerce1 = {
//   heading2badge: {
//     badge: { color: "light", children: "Have you seen us?" },
//     title: "Some of Our Pricing Plans",
//     description:
//       "The time is now for it to be okay to be great. People in this world shun people for being great.",
//     alignment: "left",
//   },
//   button: { color: "pink", children: "Load more..." },
//   cards: [
//     {
//       image: "/notus-pro-react/static/media/tshirt5.d8f53d72.jpg",
//       title: "Burberry",
//       type: "borderless",
//       price: "$2.300",
//       badge: { color: "teal", children: "new collection" },
//       link: { href: "#pablo" },
//     },
//     {
//       image: "/notus-pro-react/static/media/tshirt2.56983c49.jpg",
//       title: "Casablanca",
//       type: "borderless",
//       badge: { color: "red", children: "On Discount" },
//       price: { old: "$1.179", new: "$999" },
//       link: { href: "#pablo" },
//     },
//     {
//       image: "/notus-pro-react/static/media/tshirt3.db592a23.jpg",
//       title: "Palm Angels",
//       type: "borderless",
//       price: "$450",
//       link: { href: "#pablo" },
//     },
//     {
//       image: "/notus-pro-react/static/media/tshirt4.9bd30523.jpg",
//       title: "Saint Laurent",
//       type: "borderless",
//       price: "$349",
//       link: { href: "#pablo" },
//     },
//   ],
// }
// const blogs7 = {
//   heading2badge: {
//     badge: { color: "dark", children: "Have you seen us?" },
//     title: "Our recent writings",
//     description:
//       "The time is now for it to be okay to be great. People in this world shun people for being great.",
//     alignment: "left",
//   },
//   button: { color: "pink", children: "show more" },
//   cards: [
//     {
//       width: "1/4",
//       card: {
//         image: "/notus-pro-react/static/media/josh-appel.46ae43ca.jpg",
//         subtitle: "New Challenges",
//         title: "Touch on a trend",
//         size: "sm",
//         link: { href: "#pablo" },
//       },
//     },
//     {
//       width: "1/4",
//       card: {
//         image: "/notus-pro-react/static/media/john-hoang.6f57d2ad.jpg",
//         subtitle: "New Opportunities",
//         title: "Constantly growing",
//         size: "sm",
//         link: { href: "#pablo" },
//       },
//     },
//     {
//       width: "2/4",
//       card: {
//         image: "/notus-pro-react/static/media/kit-suman.1648f423.jpg",
//         subtitle: "Sales Leads",
//         title: "Configure Blockchain Technology",
//         size: "sm",
//         link: { href: "#pablo" },
//       },
//     },
//     {
//       width: "2/4",
//       card: {
//         image: "/notus-pro-react/static/media/damian.3c157333.jpg",
//         subtitle: "AI at the Edge",
//         title: "Research Byte",
//         size: "sm",
//         link: { href: "#pablo" },
//       },
//     },
//     {
//       width: "1/4",
//       card: {
//         image: "/notus-pro-react/static/media/ashim.cd8293b4.jpg",
//         subtitle: "Spectrum",
//         title: "Data Virtualization",
//         size: "sm",
//         link: { href: "#pablo" },
//       },
//     },
//     {
//       width: "1/4",
//       card: {
//         image: "/notus-pro-react/static/media/odin.60ea7c0d.jpg",
//         subtitle: "Touch on a trend",
//         title: "New Challenges",
//         size: "sm",
//         link: { href: "#pablo" },
//       },
//     },
//   ],
// }
// const pricing3ecommerce2 = {
//   heading3badge: {
//     badge: { color: "red", children: "Have you seen us?" },
//     title: "The latest accessories",
//     description:
//       "The time is now for it to be okay to be great. People in this world shun people for being great.",
//     alignment: "left",
//   },
//   button: { color: "pink", children: "Load more..." },
//   cards: [
//     {
//       image: "/notus-pro-react/static/media/hat.e973baf6.png",
//       title: "Winter Hat",
//       price: "$ 99",
//       link: { href: "#pablo" },
//     },
//     {
//       image: "/notus-pro-react/static/media/shorts.2d9699b3.png",
//       title: "Gucci Shorts",
//       price: { old: "$ 879", new: "$ 499" },
//       link: { href: "#pablo" },
//     },
//     {
//       image: "/notus-pro-react/static/media/bracelet.7a620de7.png",
//       title: "Ice Bracelet",
//       price: "$ 19,999",
//       link: { href: "#pablo" },
//     },
//     {
//       image: "/notus-pro-react/static/media/bullet.f66bf624.png",
//       title: "Necklace",
//       price: "$ 229",
//       link: { href: "#pablo" },
//     },
//   ],
// }
// const testimonials2 = {
//   heading3badge: {
//     badge: { color: "dark", children: "See our customers opinion" },
//     title: "What Clients Say",
//     description:
//       "Meet Wingman, a robust suite of styled pages and components, powered by Bootstrap 4. The ideal starting point for product landing pages, stylish web-apps and complete company websites.",
//     alignment: "left",
//   },
//   mediaplayer: {
//     defaultOpened: 0,
//     items: [
//       {
//         title: "Sarah Smith",
//         description:
//           "Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success. A single rose can be my garden... a single friend, my world.",
//         image: "/notus-pro-react/static/media/brooke-cagle.940d1a99.jpg",
//         color: "indigo",
//         button: { children: "read more" },
//       },
//       {
//         title: "Isaac Hunter",
//         description:
//           "Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success. A single rose can be my garden... a single friend, my world.",
//         image: "/notus-pro-react/static/media/fezbot.106ba6c3.jpg",
//         color: "teal",
//         button: { children: "read more" },
//       },
//     ],
//   },
// }
// const prefooterlarge = {
//   title: "Thank you for supporting us!",
//   subtitle: "Let's get in touch on any of these platforms.",
//   socials: [
//     {
//       icon: "fab fa-twitter",
//       buttonProps: { color: "white", outline: false, size: "sm" },
//     },
//     {
//       icon: "fab fa-facebook",
//       buttonProps: { color: "white", outline: false, size: "sm" },
//     },
//     {
//       icon: "fab fa-dribbble",
//       buttonProps: { color: "white", outline: false, size: "sm" },
//     },
//     {
//       icon: "fab fa-github",
//       buttonProps: { color: "white", outline: false, size: "sm" },
//     },
//   ],
// }
// const footersmall = {
//   copyright: {
//     children: "Creative Tim",
//     href: "https://www.creative-tim.com",
//     target: "_blank",
//   },
//   links: [
//     {
//       children: "Creative Tim",
//       href: "https://www.creative-tim.com",
//       target: "_blank",
//     },
//     {
//       children: "About us",
//       href: "https://www.creative-tim.com/presentation",
//       target: "_blank",
//     },
//     {
//       children: "Blog",
//       href: "https://www.creative-tim.com/blog",
//       target: "_blank",
//     },
//   ],
// }

// export default function ECommerce() {
//   return (
//     <>
//       <NavbarLinks {...navbarlinkslanding1} />
//       <HeaderImageTitleButtonCenter {...headerimagetitlebuttoncenter} />
//       <div className="container mx-auto px-4 -mt-64">
//         <Hero9 {...hero9} />
//         <Pricing3 {...pricing3ecommerce1} />
//         <Blogs7 {...blogs7} />
//         <Pricing3 {...pricing3ecommerce2} />
//       </div>
//       <Testimonials2 {...testimonials2} />
//       <PreFooterLarge {...prefooterlarge} />
//       <FooterSmall {...footersmall} />
//     </>
//   )
// }
