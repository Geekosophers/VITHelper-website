import React from 'react';

const WhatsApp = () => (
  <div className="content-container">
    <div className="list-item">
      {
        window.location.pathname=="/materials" ?
        <p>Stay up to date by joining our Discord Server-</p>
        :
        <p>If you weren't able to find the paper, ask your fellow mates by joining the Discord Server-</p>
      }
      <a href="https://discord.gg/9V7xUSNDNJ">
        <img src='./images/join-discord-button.png' width='100%' />  
      </a>
      <p>In case of any query contact us at <b>contact@vithelper.in</b></p>
    </div>
  </div>
);

export default WhatsApp;
