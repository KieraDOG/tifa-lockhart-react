import React, { useState } from 'react';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';
import ServicesPage from './components/ServicesPage';

const Content = ({
  activePage,
}) => {
  return  (
    <div className="pages">
      {{
        HomePage: <HomePage />,
        ResumePage: <ResumePage />,
        ServicesPage: <ServicesPage />,
        BlogPage: <BlogPage />,
        ContactPage: <ContactPage />,
      }[activePage]}
    </div>
  )
}

export default Content;
