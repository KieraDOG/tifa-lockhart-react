import React from 'react';
import Timelines from '../../../../shared/Timelines';

const ResumePage = () => (
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
);

export default ResumePage;
