import styles from './NavigationLink.module.css';

function NavigationLink({
  href = '#',
  children
}) {
  return (
    <a href={href} className={styles.navigationLink}>
      {children}
    </a>
  );
}

export default NavigationLink;