import { Button } from 'react-vant';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button>Hello World</Button>
    </div>
  );
}
