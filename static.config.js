import axios from 'axios'



export default {
  getSiteData: async () => {

    return {
      title: 'Patrick Harden',
      siteRoot: 'https://www.patrickharden.com/',
      siteCreator: 'Patrick Harden',
    }
  },
  getRoutes: async () => {

    return [
      {
        path: '/contact',
        component: 'src/pages/Contact',
      },
      {
        path: '/expect3',
        component: 'src/pages/Ex3',
      },
      {
        path: '/lms',
        component: 'src/pages/Lms',
      },
      {
        path: '/React-Static-Wordpress',
        component: 'src/pages/Framework',
      },
      {
        path: '/React-Static-Wordpress-v2',
        component: 'src/pages/Framework2',
      },
      {
        path: '/React-Static-Website-Generator',
        component: 'src/pages/AWB',
      },
      {
        path: '/work',
        component: 'src/pages/Work',
      },
      {
        path: '/',
        component: 'src/pages/Home',
      },
      {
        is404: true,
        component: 'src/pages/404',
      },
    ]
  }
}