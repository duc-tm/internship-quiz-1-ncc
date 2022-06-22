import styles from './Sidebar.module.css';
import NavigationLink from '../NavigationLink';
import { useState } from 'react';

function Sidebar() {
  const [isExpand, setIsExpand] = useState(false);

  const navigations = [
    { title: 'Home', url: '#' },
    { title: 'Services', url: '#' },
    { title: 'News', url: '#' },
    { title: 'Blog', url: '#' },
    { title: 'Contact', url: '#' },
  ]

  return (
    <aside className={`${styles.sidebar} ${isExpand ? styles.expand : ''}`}>
      <div className={styles.sidebarContainer}>
        <div
          className={styles.sidebarToggler}
          onClick={() => setIsExpand((prevState) => !prevState)}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <nav className={styles.navigation}>
          <ul className="navigationLinks">
            {navigations.map(({ title, url }, index) => (
              <li
                key={index}
                className={styles.navigationLink}
              >
                <NavigationLink href={url}>
                  {title}
                </NavigationLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;