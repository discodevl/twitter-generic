import SearchBar from './SearchBar';
import styles from './Trends.module.css';
import WhoFollow from './WhoFollow';
import {useLocation} from 'react-router-dom';

function Trends() {
  const {pathname} = useLocation();

  return (
    <div className={styles['container-trends']}>
        {pathname !== '/explore' && <SearchBar />}
        <WhoFollow />
    </div>
  )
}

export default Trends