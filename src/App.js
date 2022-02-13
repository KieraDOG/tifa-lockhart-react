import React from 'react';
import Header from './app/Header';
import Content from './app/Content';
import Footer from './app/Footer';
// Readable

// RMR
// 程序员是很懒的

// 成为一个处女座，一定要有强迫症，一定在代码上要有洁癖
// 需要天马行空，相信代码是万能的，相信只有想不到，没有做不到

// 代码你只写一次，却会被阅读 n 次
// 你多写 3s 节省下来的 3s 阅读时间，会为你的后续代码维护节省 3n 的时间

const App = () => (
  <div className="main">
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  </div>
);

export default App;
