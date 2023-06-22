import style from './header.module.css'

export default function Header() {
  return (
    <>
    <header>
      <h1>Reddit</h1>
    </header>
      <nav className={style.navBar}>
      <ul className={style.navUl}>
      <li><img src='https://i.pinimg.com/originals/e1/19/77/e1197754a44d9407e4cdbf4678ae3487.png' className={style.iconNav}/></li>
        <li><img src='https://cdn-icons-png.flaticon.com/512/6522/6522516.png' className={style.iconNav}/></li>
        <li><img src='https://cdn-icons-png.flaticon.com/512/1946/1946426.png' className={style.iconNav}/></li>
        <li><img src='https://cdn-icons-png.flaticon.com/512/2040/2040504.png' className={style.iconNav}/></li>
      </ul>
      </nav>
    </>
  )
}