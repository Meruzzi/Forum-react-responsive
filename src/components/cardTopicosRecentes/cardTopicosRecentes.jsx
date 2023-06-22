import style from './cardTopicosRecentes.module.css'
import data from '../../../public/data/PostsRecentes.json'

export default function CardTopicosRecentes() {
  return (
    <div className={`${style.cardTopicosRecentes} ${style.cardPost}`}>
      <h3>Tópicos recentes</h3>
      <div className={style.cardPostagens}>
      {data.map((posts, index) => {
        return (
          <div className={style.cardPostRecente} key={index}>
            <h3>{posts.titulo}</h3>
            <h4>{posts.subtitulo}</h4>
            <p>{posts.dataPub}</p>
          </div>
        )
      })}
        </div>
    </div>
  )
}