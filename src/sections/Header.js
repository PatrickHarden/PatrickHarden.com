import React from 'react'
import { Link, SiteData, withSiteData } from 'react-static'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import {Helmet} from "react-helmet";
import Navigation from '../Nav'


export default withSiteData(class SiteHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const siteTitle = this.props.title
        const siteRoot = this.props.siteRoot

        return (
            <header>
                <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
                    {/* <meta name=“web_author” content=“author, expect3.com” /> */}
                    <meta name="robots" content="index, follow" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="description" content="Front-end Web Developer" />
                    <meta name="keywords" content="Web Developer, Web Designer, React, Wordpress, SEO, SEM, Angular, PHP, Front-end Web Develoepr" />
                    <title>Patrick Harden | Front End Web Developer</title>
                    <link rel="canonical" href={siteRoot} />
                    <script async src="https://www.google-analytics.com/analytics.js" />
                    <script async src="/assets/js/autotrack.custom.js" />
                </Helmet>
                <Navigation />
            </header>
        )

    }
})