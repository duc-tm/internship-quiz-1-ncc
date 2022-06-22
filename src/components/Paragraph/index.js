import styles from './Paragraph.module.css';

function Paragraph({
  title,
  image,
  children
}) {
  return (
    <div className="paragraph">
      <h3 className={styles.paragraphTitle}>
        {title}
      </h3>
      <div>
        <div className={styles.paragraphImage} style={{ shapeOutside: `url(${image.url})` }}>
          <img srcSet={`${image.url} 2x`} alt={image.alt} />
        </div>
        <p className={styles.paragraphText}>
          {children}
        </p>
      </div>
    </div>
  );
}

export default Paragraph;