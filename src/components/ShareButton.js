import React from 'react';

const ShareButton = () => (
  <div className="content-container">
    {/* <a href="whatsapp://send" data-text="Take a look at this awesome website:" data-href="" class="wa_btn wa_btn_s" style="display:none">Share</a> */}
    <a href="whatsapp://send?text=http://www.vithelper.in/"><button className="share-button"><img src="/images/share.png" height="30px" width="30px"/></button></a>
  </div>
);

export default ShareButton;