import SearchBar from './SearchBar';
import styles from './Trends.module.css';

function Trends() {
  return (
    <div className={styles['container-trends']}>
        <SearchBar />
    </div>
  )
}

export default Trends