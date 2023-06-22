import './App.css'
import Header from './components/header/Header'
import CardPostagem from './components/cardPostagem/cardPostagem'
import CardTopicosRecentes from './components/cardTopicosRecentes/cardTopicosRecentes'
import CardTopicosCurtidos from './components/cardTopicosCurtidos/cardTopicosCurtidos'
import CardTopicosRespondidos from './components/cardTopicosRespondidos/cardTopicosRespondidos'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <CardPostagem />
        <aside id='aside'>
          <CardTopicosRecentes />
          <CardTopicosCurtidos />
          <CardTopicosRespondidos />
        </aside>
      </main>
    </>
  )
}
