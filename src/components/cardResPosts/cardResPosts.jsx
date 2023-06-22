import style from './cardResPosts.module.css'
import data from '../../../public/data/RespostasPosts.json'

export default function CardResPosts(props) {
  return (
    <div className={style.cardRespostas}>
      {data.map((userResp, index) => {
        return (
          <div className={style.cardPostResp} key={index}>
            <div className={style.cardInfPost}>
              <h4>{userResp.user}</h4>
              <p>{userResp.data_publicacao}</p>
            </div>
            <p>{userResp.resposta}</p>
            <p>{userResp.likes} Curtidas</p>
            <div className={style.cardIntResp}>
              <div className={style.cardBtnAcao}>
                <img className={style.iconPost} src='https://cdn-icons-png.flaticon.com/512/126/126473.png' />
                <p>Curtir</p>
              </div>
              <div className={style.cardBtnAcao}>
                <a href='#cardPostResposta' className={style.IntComentar}><img className={style.iconPost} src='https://cdn-icons-png.flaticon.com/512/1380/1380338.png' />
                <p>Responder</p></a>
              </div>
            </div>
          </div>
        )
      })}
      <div className={`${style.cardPostResp} ${style.cardRespUser}`} id='cardPostResposta'>
        <h4>{props.Usuario}</h4>
        <div className={style.cardInptResposta}>
          <input type={"text"} className={style.inptResp}></input>
          <p className={style.btnResponder}>Responder</p>
        </div>
      </div>
    </div>
  )
}
