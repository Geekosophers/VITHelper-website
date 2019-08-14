import React from 'react';

export default class Ad extends React.Component {
  componentDidMount () {
    (adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: "ca-pub-7519255120506599",
        enable_page_level_ads: true
      });
  }

render () {
    return (
        <div></div>
    );
  }
}