import SearchBar from '../Trends/SearchBar';
import styles from './Explore.module.css';


function Explore() {

  return (
    <div className={styles['container-explore']}>
        <SearchBar />
    </div>
  )
}

export default Explore