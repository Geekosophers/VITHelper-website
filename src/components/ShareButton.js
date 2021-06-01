import React from 'react';

const ShareButton = () => (
  <div className="show-for-mobile content-container">
    <a href="whatsapp://send?text=http://www.vithelper.in/"><button className="share-button"><img src="/images/share.png" height="30px" width="30px"/></button></a>
  </div>
);

export default ShareButton;