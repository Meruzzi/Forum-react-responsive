import style from './cardTopicosRespondidos.module.css'
import data from '../../../public/data/PostsMaisComentados.json'

export default function CardTopicosRespondidos() {
  return (
    <div className={style.cardPost}>
      <h3>Tópicos comentados</h3>
      <div className={style.cardPostagens}>
      {data.map((posts, index) => {
        return (
          <div className={style.cardPostRecente} key={index}>
            <h3>{posts.titulo}</h3>
            <h4>{posts.subtitulo}</h4>
            <p>{posts.Comentários} Comentários</p>
          </div>
        )
      })}
        </div>
    </div>
  )
}