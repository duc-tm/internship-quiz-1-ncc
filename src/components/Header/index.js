import images from '../../assets/images';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="headerContainer">
          <div className={styles.logo}>
            <img srcSet={`${images.logo} 2x`} alt="ncc company logo" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;