const data = [
  {
    id: '1',
    title: 'BonAppetite',
    description:
      'Proyecto final en Henry: consiste en una app de gestión de pedidos en un restaurant, en la cual se puede escanear un codigo qr y dirigirse a un menú interactivo donde puede seleccionar platos y bebidas, posee una pasarella de pagos y la opcion de pago en efectivo.',
    image: {
      src: 'https://res.cloudinary.com/dzjcb1rhu/image/upload/v1697669205/BonAppetiteHome.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://github.com/JFReales/BonAppetite-Front',
    },
    technologies: [
      '#Node.js',
      '#React',
      '#Cloudinary',
      '#Firebase',
      '#JavaScript',
      '#Nodemailer',
    ],
  },
  {
    id: '2',
    title: 'PI-Videogames',
    description:
      'Ejercicio académico con el fin de desarrollar una aplicación sobre los diferentes videojuegos, donde éstos se pueden buscar por nombre,por género, por plataforma y ver su detalle.',
    image: {
      src: 'https://res.cloudinary.com/dzjcb1rhu/image/upload/v1697669685/PIVideogameHome.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://github.com/JFReales/PI-Videogames',
    },
    technologies: [
      '#React',
      '#Redux',
      '#Axios',
      '#CSS-Module',
      '#Node.js',
      '#Express js',
      `#Sequelize`,
      `#Postgres`,
      `#Nodemon`,
      `#Morgan`,
      `#Insomnia`,
    ],
  },
  // {
  //   id: '3',
  //   title: 'Outfitr',
  //   description:
  //     'A react native app with animations made with react-native-reanimated. The app is based on the Outfitr - Fashion UI Kit.',
  //   image: {
  //     src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1671562261/portfolio/projects/fashion/Screenshot_2022-12-20_at_20.45.27_peyqly.jpg',
  //     placeholderSrc:
  //       'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
  //   },
  //   links: {
  //     site: 'https://expo.dev/@v_snaichuk/rn-fashion?serviceType=classic&distribution=expo-go',
  //     repo: 'https://github.com/vsnaichuk/fashion-app',
  //   },
  //   technologies: [
  //     '#typescript',
  //     '#react-native',
  //     '#expo',
  //     '#react-native-reanimated',
  //     '#react-navigation',
  //   ],
  // },
  // {
  //   id: '4',
  //   title: 'Apiko Marketplace',
  //   description:
  //     'An online marketplace made with React. The project was developed on 8th Apiko Intensive.',
  //   image: {
  //     src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348072/portfolio/projects/react-marketplace/apiko-marketplace-lg_xppe9n.jpg',
  //     placeholderSrc:
  //       'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
  //   },
  //   links: {
  //     site: 'https://apiko-marketplace-app-snaichuk.herokuapp.com/',
  //     repo: 'https://github.com/vsnaichuk/apiko-marketplace-app-snaichuk',
  //   },
  //   technologies: [
  //     '#react',
  //     '#redux',
  //     '#socket.io',
  //     '#scss',
  //     '#formik',
  //     '#react-window',
  //     '#restapi',
  //   ],
  // },
  // {
  //   id: '5',
  //   title: 'Places App',
  //   description:
  //     'A MERN app to let users share their experience of places along with Details. It is user friendly and can be useful to many others.',
  //   image: {
  //     src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348070/portfolio/projects/mern-places/mern-places-lg_xf6zom.jpg',
  //     placeholderSrc:
  //       'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
  //   },
  //   links: {
  //     site: 'https://yourplaces-sv.netlify.app/',
  //     repo: 'https://github.com/vsnaichuk/MERN-places',
  //   },
  //   technologies: [
  //     '#react',
  //     '#nodejs',
  //     '#express',
  //     '#mongodb',
  //     '#react-query',
  //     '#react-transition-group',
  //     '#mongoose',
  //     '#jwt',
  //     '#aws',
  //   ],
  // },
  // {
  //   id: '6',
  //   title: 'eCommerce Mobile App',
  //   description:
  //     'A Mobile eCommerce application built with React Native that includes cart functionality, push notifications, user authentication and user orders',
  //   image: {
  //     src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/rn-shop/rn-shop-lg_fofglf.jpg',
  //     placeholderSrc:
  //       'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
  //   },
  //   links: {
  //     site: 'https://expo.dev/@v_snaichuk/online-shop-app',
  //     repo: 'https://github.com/vsnaichuk/RN-shop',
  //   },
  //   technologies: [
  //     '#react-native',
  //     'expo',
  //     '#redux',
  //     '#redux-toolkit',
  //     '#react-navigation',
  //     '#nodejs',
  //     '#express',
  //     '#mongodb',
  //   ],
  // },
  // {
  //   id: '7',
  //   title: 'Places Mobile App',
  //   description:
  //     'A Mobile application for sharing places that people visit from all over the world. Uses React Native, TypeScript, MobX and Native Device Features',
  //   image: {
  //     src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/rn-places/rn-places-lg_ljyikm.jpg',
  //     placeholderSrc:
  //       'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
  //   },
  //   links: {
  //     site: 'https://expo.dev/@v_snaichuk/rn-places',
  //     repo: 'https://github.com/vsnaichuk/RN-places',
  //   },
  //   technologies: [
  //     '#react-native',
  //     '#typescript',
  //     '#expo',
  //     '#mobx',
  //     '#sqlite',
  //     '#react-native-maps',
  //     '#expo-location',
  //   ],
  // },
  // {
  //   id: '8',
  //   title: 'Shopping Cart',
  //   description:
  //     'Simple eCommerce cart application built with React and TypeScript. Uses SWR hook to fetch the data from the API and Styled Components',
  //   image: {
  //     src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/react-shop-cart/rn-shop-cart-lg_w3qxn6.jpg',
  //     placeholderSrc:
  //       'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
  //   },
  //   links: {
  //     site: 'https://shopping-cart-sv.netlify.app/',
  //     repo: 'https://github.com/vsnaichuk/React-ShoppingCart',
  //   },
  //   technologies: [
  //     '#react',
  //     '#typescript',
  //     '#material-ui',
  //     '#styled-components',
  //     '#swr',
  //     '#fakestoreapi',
  //   ],
  // },
];

export default data;
