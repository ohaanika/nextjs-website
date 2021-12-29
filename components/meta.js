import React from 'react'
import Head from 'next/head'

const Meta = ({ title = 'Zyphr Solutions', description = 'We build professional and production-ready Plotly Dash Apps.', author = 'Zyphr Solutions' }) => (
  <Head>
    <title>{title}</title>
    <meta charSet="UTF-8" />
    <meta name="description" content={description} />
    <meta name="author" content={author} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {/* <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0'/> */}
    {/* <meta name='apple-mobile-web-app-capable' content='yes'/> */}
    {/* <meta name='apple-mobile-web-app-status-bar-style' content='black'/> */}
  </Head>
)

export default Meta
