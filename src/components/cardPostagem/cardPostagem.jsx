import style from './cardPostagem.module.css'
import CardResPosts from '../cardResPosts/cardResPosts'
import data from '../../../public/data/Postagens.json'

export default function CardPostagem() {
  return (
    <div className={style.cardPostagem} id='cardPostagem'>
      {data.map((posts, index) => {
        return (
          <div className={style.cardPost} key={index}>
            <div className={style.cardInfPost}>
              <h4 className={style.autorPost}>{posts.autor}</h4>
              <p className={style.dataPub}>{posts.data_pub}</p>
            </div>
            <h3>{posts.titulo}</h3>
            <h4>{posts.subtitulo}</h4>
            <p>{posts.descricao}</p>
            <div className={`${style.cardInfPost} ${style.cardInfLikesCmt}`}>
              <p>{posts.qntCurtidas} Curtidas</p>
              <p>{posts.qntComentarios} Comentários</p>
            </div>
          </div>
        )
      })}
      <div className={`${style.cardPost} ${style.cardInteracoesPost}`}>
      <div className={style.cardBtnAcao}>
        <img className={style.iconPost} src='https://cdn-icons-png.flaticon.com/512/126/126473.png' />
        <p>Curtir</p>
        </div>
        <div className={style.cardBtnAcao}><a className={style.IntComentar} href='#cardPostResposta'>
        <img className={style.iconPost} src='https://cdn-icons-png.flaticon.com/512/1380/1380338.png' />
          <p>Comentar</p></a>
        </div>
        <div className={style.cardBtnAcao}>
        <img className={style.iconPost} src='https://cdn.iconscout.com/icon/free/png-256/free-save-3244517-2701888.png' />
          <p>Salvar</p>
        </div>
      
      </div>
      <CardResPosts Usuario={"Gabriel"}/>
    </div>
  )
}