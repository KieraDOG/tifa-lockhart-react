import React from 'react';
import SocialMedias from './components/SocialMedias';
import avatar from './assets/avatar.png';

const HomePage = () => (
  <div id="HOME" className="page">
    <div className="page__header homepage__header">
      <img className="homepage__avatar" src={avatar} alt="Avatar" />
      <div className="homepage__title">
        <h2 className="homepage__name">Tifa Lockhart</h2>
        <div className="homepage__position">Final Fantasy VII</div>
        <SocialMedias />
      </div>
    </div>
    <div className="page__content homepage__content">
      <div>
        <h3 className="homepage__aboutMeHeader">
          About
          <span className="homepage__aboutMeHeaderHighlight">Me</span>
        </h3>
        <div className="homepage__aboutMeContent">
          Bright and optimistic, Tifa always cheers up the others when they're down. But don't let her looks fool you, she can decimate almost any enemy with her fists...
        </div>
      </div>
      <table className="homepage__contact">
        <tbody>
          <tr>
            <td>Age</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Residence</td>
            <td>Gaia</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>Level 3 / 57 Coronation Drive, Brisbane</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <a href="mailto:info@jiangren.com.au">
                info@jiangren.com.au
              </a>
            </td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>+0123 123 456 789</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default HomePage;
