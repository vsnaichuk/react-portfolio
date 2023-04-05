const data = [
  {
    id: '1',
    title: 'Syntho',
    description:
      'Syntho is an electronic music education application. Connect with like minded users as you build your own custom profile, communicate and share music via the newsfeed.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1671564532/portfolio/projects/Syntho/Screenshot_2022-12-20_at_21.26.17_1_c59hzo.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://apps.apple.com/us/app/syntho/id1615419392',
    },
    technologies: [
      '#typescript',
      '#react-native',
      '#react-native-web',
      '#mobx-state-tree',
      '#expo',
      '#i18next',
      '#react-navigation',
      '#sentry',
    ],
  },
  {
    id: '2',
    title: 'Minfin - Currency Rates',
    description:
      'Minfin Currency - application with all necessary information about currency: from currency rates - to the nearest places where you can exchange currency in your city.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1671563302/portfolio/projects/minfin/Screenshot_2022-12-20_at_21.06.43_vl5h6k.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://apps.apple.com/us/app/minfin-currency-rates/id1574863878',
    },
    technologies: [
      '#typescript',
      '#react-native',
      '#mobx-keystone',
      '#i18next',
      '#firebase-analytics',
      '#google-maps',
    ],
  },
  {
    id: '3',
    title: 'Outfitr',
    description:
      'A react native app with animations made with react-native-reanimated. The app is based on the Outfitr - Fashion UI Kit.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1671562261/portfolio/projects/fashion/Screenshot_2022-12-20_at_20.45.27_peyqly.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://expo.dev/@v_snaichuk/rn-fashion?serviceType=classic&distribution=expo-go',
      repo: 'https://github.com/vsnaichuk/fashion-app',
    },
    technologies: [
      '#typescript',
      '#react-native',
      '#expo',
      '#react-native-reanimated',
      '#react-navigation',
    ],
  },
  {
    id: '4',
    title: 'Apiko Marketplace',
    description:
      'An online marketplace made with React. The project was developed on 8th Apiko Intensive.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348072/portfolio/projects/react-marketplace/apiko-marketplace-lg_xppe9n.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://apiko-marketplace-app-snaichuk.herokuapp.com/',
      repo: 'https://github.com/vsnaichuk/apiko-marketplace-app-snaichuk',
    },
    technologies: [
      '#react',
      '#redux',
      '#socket.io',
      '#scss',
      '#formik',
      '#react-window',
      '#restapi',
    ],
  },
  {
    id: '5',
    title: 'Places App',
    description:
      'A MERN app to let users share their experience of places along with Details. It is user friendly and can be useful to many others.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348070/portfolio/projects/mern-places/mern-places-lg_xf6zom.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://yourplaces-sv.netlify.app/',
      repo: 'https://github.com/vsnaichuk/MERN-places',
    },
    technologies: [
      '#react',
      '#nodejs',
      '#express',
      '#mongodb',
      '#react-query',
      '#react-transition-group',
      '#mongoose',
      '#jwt',
      '#aws',
    ],
  },
  {
    id: '6',
    title: 'eCommerce Mobile App',
    description:
      'A Mobile eCommerce application built with React Native that includes cart functionality, push notifications, user authentication and user orders',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/rn-shop/rn-shop-lg_fofglf.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://expo.dev/@v_snaichuk/online-shop-app',
      repo: 'https://github.com/vsnaichuk/RN-shop',
    },
    technologies: [
      '#react-native',
      'expo',
      '#redux',
      '#redux-toolkit',
      '#react-navigation',
      '#nodejs',
      '#express',
      '#mongodb',
    ],
  },
  {
    id: '7',
    title: 'Places Mobile App',
    description:
      'A Mobile application for sharing places that people visit from all over the world. Uses React Native, TypeScript, MobX and Native Device Features',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/rn-places/rn-places-lg_ljyikm.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://expo.dev/@v_snaichuk/rn-places',
      repo: 'https://github.com/vsnaichuk/RN-places',
    },
    technologies: [
      '#react-native',
      '#typescript',
      '#expo',
      '#mobx',
      '#sqlite',
      '#react-native-maps',
      '#expo-location',
    ],
  },
  {
    id: '8',
    title: 'Shopping Cart',
    description:
      'Simple eCommerce cart application built with React and TypeScript. Uses SWR hook to fetch the data from the API and Styled Components',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/react-shop-cart/rn-shop-cart-lg_w3qxn6.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://shopping-cart-sv.netlify.app/',
      repo: 'https://github.com/vsnaichuk/React-ShoppingCart',
    },
    technologies: [
      '#react',
      '#typescript',
      '#material-ui',
      '#styled-components',
      '#swr',
      '#fakestoreapi',
    ],
  },
];

export default data;
