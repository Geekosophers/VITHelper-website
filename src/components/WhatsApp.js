import React from 'react';

const WhatsApp = () => (
  <div className="content-container">
    <div className="list-item">
      {
        window.location.pathname=="/materials" ?
        <p>Stay up to date by joining one of the WhatsApp group-</p>
        :
        <p>If you weren't able to find the paper, ask your fellow mates by joining one of the WhatsApp group-</p>
      }
        <p><a className="button button--link whatsapp" href="https://chat.whatsapp.com/KLUtAW2rIOADjyzQPBYPAF" target="_blank">VITHelper - Papers #1</a></p>
        <p><a className="button button--link whatsapp" href="https://chat.whatsapp.com/JKnQImP49289HdZ8UdUFKl" target="_blank">VITHelper - Papers #2</a></p>
        <p>In case of any query contact us at <b>vithelper.info@gmail.com</b></p>
    </div>
  </div>
);

export default WhatsApp;
