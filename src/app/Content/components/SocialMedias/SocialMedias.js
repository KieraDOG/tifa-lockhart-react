import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './SocialMedias.css'

const SocialMedias = () => (
  <div className="homepage__socialMedias">
    <FontAwesomeIcon icon={faTwitter} className="homepage__socialMediaItem" />
    <FontAwesomeIcon icon={faFacebookF} className="homepage__socialMediaItem" />
    <FontAwesomeIcon icon={faInstagram} className="homepage__socialMediaItem" />
  </div>
);

export default SocialMedias;
