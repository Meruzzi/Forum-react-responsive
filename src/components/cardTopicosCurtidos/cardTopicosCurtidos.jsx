import data from '../../../public/data/PostsCurtidos.json'
import style from './cardTopicosCurtidos.module.css'

export default function CardTopicosCurtidos() {
  return (
    <div className={style.cardPost}>
      <h3>Tópicos curtidos</h3>
       <div className={style.cardPostagens}>
      {data.map((posts, index) => {
        return (
          <div className={style.cardPostRecente} key={index}>
            <h3>{posts.titulo}</h3>
            <h4>{posts.subtitulo}</h4>
            <p>{posts.likes} Likes</p>
          </div>
        )
      })}
         </div>
    </div>
  )
}