import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { withRouteData, Link } from 'react-static'
import {Helmet} from "react-helmet";
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import '../../node_modules/brace/mode/java';
import '../../node_modules/brace/theme/monokai';

function onChange(newValue) {
  console.log('change',newValue);
}



export default () => (
  <div>
        <Helmet>
      <body className="framework" />
    </Helmet>
<section>

   <div class="container">
   <div class="project-hero">
         <header class="hero-header">
            <h1 class="project-label">React-static Wordpress Framework</h1>
             <a href="https://github.com/PatrickHarden/React-Static-Bootstrap-Template" class="btn project-title" target="_blank">View Source</a>
         </header>
      </div>
      <div class="lede-content">
        <p class="step-body nTop">Although React-static is a radically fast framework, it in itself wasn't adequate enough for our clients' needs. The clients required access to a content management system in order to alter forms, blogs, staff, ect. However, determined not to be binded to wordpress, I pioneered a framework of my own, combining the speed and expandability of react-static with the cms functionality of wordpress. </p>
        <p class="step-body mTop">React-staic excels at generating static sites from JSON data. Check out how the JSON data is pulled from wordpress and dispersed to the sub-components.</p>
     </div>

    <AceEditor
    mode="javascript"
    theme="monokai"
    onChange={onChange}
    fontSize={14}
    // showPrintMargin={true}
    // showGutter={true}
    highlightActiveLine={true}
    width='100%'
    height='1000px'
    value={`export default {
    getSiteData: async () => {
      const baseURL = 'http://www.attorneytemplate.dev.php72-38.lan3-1.websitetestlink.com'
      const { data: menus } = await axios.get(baseURL + '/index.php/wp-json/wp-api-menus/v2/menus/2')
      const { data: options } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/options/')
      
    return {
      title: 'Attorney Template',
      siteRoot: 'https://attorneytemplate.netlify.com/',
      siteCreator: 'Lawyer Marketing USA',
      siteCreatorURL: 'http://lawyermarketingusa.com',
      menus,
      options
    }
  },
  getRoutes: async () => {
    const baseURL = 'http://www.attorneytemplate.dev.php72-38.lan3-1.websitetestlink.com'
    const { data: pages } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/pages?per_page=99')
    const { data: posts } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/posts?per_page=6')
    const { data: areas } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/practice-area?per_page=99')
    const { data: staff } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/staff?per_page=99')
    
    return [
      {
        path: '/blogs',
        component: 'src/pages/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: '/{$post.slug}',
          component: 'src/singles/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        path: '/practice-area',
        component: 'src/archives/AreaArchive',
        getData: () => ({
          areas,
        }),
        children: areas.map(practiceArea => ({
          path: '/{$practiceArea.slug}',
          component: 'src/singles/Areas',
          getData: () => ({
            practiceArea,
          }),
        })),
      },
      {
        path: '/staff',
        component: 'src/archives/StaffArchive',
        getData: () => ({
          staff,
        }),
        children: staff.map(staffMember => ({
          path: '/{$staffMember.slug}',
          component: 'src/singles/Staff',
          getData: () => ({
            staffMember,
          }),
        })),
      },
      {
        path: '/contact',
        component: 'src/pages/Contact',
      },
      {
        path: '/',
        component: 'src/pages/Home',
        children: pages.map(page => ({
        path: '/{$page.slug}',
        component: 'src/pages/Page',
          getData: () => ({
            page,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/pages/404',
      },
    ]
    }
  }
    `}
    setOptions={{
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      enableSnippets: false,
      showLineNumbers: true,
      // tabSize: 2,
      }}/>

   </div>
         <div class="container">
     <div class="lede-content">
        <p class="step-body sTop">Wordpress's Rest API is enabled by default, so those JSON pulls from the pages and posts would occur without conflict - you could even pull the latest stories from a local news site if they use wordpress. </p>
        <p class="step-body sTop ssTop">The rest of the trickery is enabled by a custom wordpress plugin. It creates new custom post types and a deploy button which allows the user to trigger a new yarn/npm build command from wordpress. Additionally, an AWS offload plugin is installed, which converts uploaded media to URLs, which then enables users to add media from wordpress. </p>
     </div>
     </div>
   <div class="project-step">
      <div class="container">

      </div>
   </div>

<div class="project-links">
<Link to="/" class="project-link project-link--first" >
    <span class="project-link__text">Return Home</span>
 </Link>
<Link to="/React-Static-Website-Generator" class="project-link project-link--last">
    <span class="project-link__text">Next Project</span>
    </Link>
</div>
</section>
  </div>
)


//     import axios from 'axios'
//     import React, { Component } from 'react'



//     export default {
//       getSiteData: async () => {
//         const baseURL = 'http://www.attorneytemplate.dev.php72-38.lan3-1.websitetestlink.com'
//         const { data: menus } = await axios.get(baseURL + '/index.php/wp-json/wp-api-menus/v2/menus/2')
//         const { data: options } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/options/')


//     return {
//       title: 'Attorney Template',
//       siteRoot: 'https://attorneytemplate.netlify.com/',
//       siteCreator: 'Lawyer Marketing USA',
//       siteCreatorURL: 'http://lawyermarketingusa.com',
//       menus,
//       options
//     }
//   },
//   getRoutes: async () => {
//     const baseURL = 'http://www.attorneytemplate.dev.php72-38.lan3-1.websitetestlink.com'
//     const { data: pages } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/pages?per_page=99')
//     const { data: posts } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/posts?per_page=6')
//     const { data: areas } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/practice-area?per_page=99')
//     const { data: staff } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/staff?per_page=99')

//     return [
//       {
//         path: '/blogs',
//         component: 'src/pages/Blog',
//         getData: () => ({
//           posts,
//         }),
//         children: posts.map(post => ({
//           path: `/${post.slug}`,
//           component: 'src/singles/Post',
//           getData: () => ({
//             post,
//           }),
//         })),
//       },
//       {
//         path: '/practice-area',
//         component: 'src/archives/AreaArchive',
//         getData: () => ({
//           areas,
//         }),
//         children: areas.map(practiceArea => ({
//           path: `/${practiceArea.slug}`,
//           component: 'src/singles/Areas',
//           getData: () => ({
//             practiceArea,
//           }),
//         })),
//       },
//       {
//         path: '/staff',
//         component: 'src/archives/StaffArchive',
//         getData: () => ({
//           staff,
//         }),
//         children: staff.map(staffMember => ({
//           path: `/${staffMember.slug}`,
//           component: 'src/singles/Staff',
//           getData: () => ({
//             staffMember,
//           }),
//         })),
//       },
//       {
//         path: '/contact',
//         component: 'src/pages/Contact',
//       },
//       {
//         path: '/',
//         component: 'src/pages/Home',
//         children: pages.map(page => ({
//         path: `/${page.slug}`,
//         component: 'src/pages/Page',
//           getData: () => ({
//             page,
//           }),
//         })),
//       },
//       {
//         is404: true,
//         component: 'src/pages/404',
//       },
//     ]
//   }
// }