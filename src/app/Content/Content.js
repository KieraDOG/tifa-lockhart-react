import React from 'react';
import avatar from './assets/avatar.png';
import SocialMedias from './components/SocialMedias';
import Timelines from '../../shared/Timelines';

const Content = () => (
  <div className="pages">
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
    <div id="RESUME" className="page page--active">
      <div className="page__header">
        <h2 className="page__title">RESUME</h2>
      </div>
      <div className="page__content">
        <div className="resumePage__sub">
          <Timelines 
            title="Education"
            items={[{
              title: 'Bachelor of ICT',
              year: '2015',
              subtitle: 'Swinburne',
              description: 'Information Communication Technology',
            }, {
              title: 'Diploma of Commerce',
              year: '2013',
              subtitle: 'RMIT',
              description: 'Commerce',
            }]}
          />
          <Timelines 
            title="Experiences"
            items={[{
              title: 'Engineer Lead',
              year: '2019',
              subtitle: 'Qantas',
              description: 'Flying with Qantas Airline and Stay with Qantas Hotels',
            }, {
              title: 'Lead Frontend Developer',
              year: '2018',
              subtitle: 'Blockchain Tech',
              description: '24/7 Crypto Exchange',
            }, {
              title: 'Snr Frontend Developer',
              year: '2016',
              subtitle: 'ACX',
              description: 'Trading with crypto currency',
            }]}
          />
        </div>
        <div className="resumePage__sub">
          <div>
            <h3 className="resumeSub__title">Design <span className="resumeSub__titleHighlight">Skills</span></h3>
            <div className="skill">
              <h4 className="skill__title">Web Design</h4>
              <div className="skill__level skill__level--webDesign"></div>
            </div>
            <div className="skill">
              <h4 className="skill__title">Graphic Design</h4>
              <div className="skill__level skill__level--graphicDesign"></div>
            </div>
            <div className="skill">
              <h4 className="skill__title">Print Design</h4>
              <div className="skill__level skill__level--printDesign"></div>
            </div>
          </div>
          <div>
            <h3 className="resumeSub__title">Coding <span className="resumeSub__titleHighlight">Skills</span></h3>
            <div className="skill">
              <h4 className="skill__title">HTML Design</h4>
              <div className="skill__level skill__level--htmlDesign"></div>
            </div>
            <div className="skill">
              <h4 className="skill__title">CSS Design</h4>
              <div className="skill__level skill__level--cssDesign"></div>
            </div>
            <div className="skill">
              <h4 className="skill__title">JavaScript Design</h4>
              <div className="skill__level skill__level--jsDesign"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="SERVICES" className="page">
      <div className="page__header">
        <h2 className="page__title">Services</h2>
      </div>
      <div className="page__content">
        <div className="servicesPage__services">
          <h3 className="services__title">
            My
            <span className="services__titleHightLight">Services</span>
          </h3>
          <div className="services">
            <div className="serviceItem">
              <div className="serviceItem__imageContainer">
                <img alt="HTML5" src="./assets/html5.png" className="serviceItem__image"></img>
              </div>
              <h4 className="serviceItem__name">HTML5</h4>
              <div className="serviceItem__description">Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.</div>
            </div>
            <div className="serviceItem">
              <div className="serviceItem__imageContainer">
                <img alt="CSS3" src="./assets/css3.png" className="serviceItem__image"></img>
              </div>
              <h4 className="serviceItem__name">CSS3</h4>
              <div className="serviceItem__description">Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.</div>
            </div>
            <div className="serviceItem">
              <div className="serviceItem__imageContainer">
                <img alt="JavaScript" src="./assets/js.png" className="serviceItem__image"></img>
              </div>
              <h4 className="serviceItem__name">JavaScript</h4>
              <div className="serviceItem__description">JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.</div>
            </div>
          </div>
        </div>
        <div className="servicesPage__clients">
          <h3 className="services__title">
            Clients
          </h3>
          <div className="clients">
            <img alt="REA Group" src="./assets/rea.png" className="clientItem"></img>
            <img alt="carsales.com.au" src="./assets/carsales.svg" className="clientItem"></img>
            <img alt="Seek" src="./assets/seek.png" className="clientItem"></img>
          </div>
        </div>
      </div>
    </div>
    <div id="BLOG" className="page"></div>
    <div id="CONTACT" className="page"></div>
  </div>
);

export default Content;
