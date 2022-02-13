import React from 'react';
import Timeline from './components/Timeline';

// css module
// CSS in JS 的实现
// 通过 JavaScript 的处理，解决 css 的全局问题和 scoping 问题
import styles from './Timelines.module.css';

const Timelines = ({
  title,
  items,
}) => (
  <div>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.container}>
      {/* map() 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。 */}
      {items.map(({
        title,
        year,
        subtitle,
        description,
      }) => (
        <Timeline 
          title={title}
          year={year}
          subtitle={subtitle}
          description={description}
        />
      ))}
    </div>
  </div>
);

export default Timelines;
