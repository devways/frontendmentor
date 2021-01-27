import { useRouter } from 'next/router';
import style from './style.module.css';

import data from './data'

const Home = () => {
  const router = useRouter()
  return (
    <div className={style.container}>
      <div className={style.challenge_container}>
        {
          data.map((item) => 
            <div className={style.challenge_item} key={item.name}>
              <img src={item.imagePreview} />
              <p>{item.name}</p>
              <button onClick={() => router.push(item.pageUrl)}>Preview</button>
              <button onClick={() => window.open(item.githubUrl, '_blank') || window.location.replace(item.githubUrl)}>Code Source</button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Home;