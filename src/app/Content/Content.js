import React, { useState } from 'react';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';
import ServicesPage from './components/ServicesPage';

// state 状态
// react 允许我们通过 useState 来创建一个 state，同时创建它的更新钩子（方法）
// 当我们通过 更新钩子 更新时，React 会同步 HTML 更新

// activePage 是需要变化的
// 在 OOP 里面，一个可以变化的值，我们可以放在那里呢？

// Stateful/Smart Component
// class Content extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       activePage: 'HomePage',
//     };
//   }

//   setActivePage(value) {
//     this.setState({
//       activePage: value,
//     });
//   } 

//   render() {
//     const { activePage } = this.state;

//     return (
//       <div className="pages">
//         {/* 声明式编程 */}
//         <button 
//           onClick={() => {
//             this.setActivePage('ResumePage');
//           }}
//         >
//            Change to ResumePage
//           </button>
//         {{
//           HomePage: <HomePage />,
//           ResumePage: <ResumePage />,
//           ServicesPage: <ServicesPage />,
//           BlogPage: <BlogPage />,
//           ContactPage: <ContactPage />,
//         }[activePage]}
//       </div>
//     );
//   }
// }

// Stateless/Dumb Component
const Content = () => {
  const [activePage, setActivePage] = useState();

  return (
    <div className="pages">
      {/* 声明式编程 */}
      <button 
        onClick={() => {
          setActivePage('ResumePage');
        }}
      >
         Change to ResumePage
        </button>
      {{
        HomePage: <HomePage />,
        ResumePage: <ResumePage />,
        ServicesPage: <ServicesPage />,
        BlogPage: <BlogPage />,
        ContactPage: <ContactPage />,
      }[activePage]}
    </div>
  );
}

export default Content;
