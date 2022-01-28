import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
        <input id="page-nav-toggle" className="main-navigation-toggle" type="checkbox" />
        <label htmlFor="page-nav-toggle">
          <svg className="icon--menu-toggle" viewBox="0 0 60 30">
            <g className="icon-group">
              <g className="icon--menu">
                <path d="M 6 0 L 54 0" />
                <path d="M 6 15 L 54 15" />
                <path d="M 6 30 L 54 30" />
              </g>
              <g className="icon--close">
                <path d="M 15 0 L 45 30" />
                <path d="M 15 30 L 45 0" />
              </g>
            </g>
          </svg>
        </label>
        <nav className="main-navigation">
          <ul>
            <li><a href="/">home</a></li>
            <li><a href="https://twitter.com/tomgrigory" target="_blank">twitter</a></li>
            <li><a href="https://mirror.xyz/0xe7345E6546FAdF08a647015457dcDc982C62BfDc" target="_blank">thoughts</a></li>
            <li><a href="/experiments">experiments</a></li>
          </ul>
        </nav>
        <main className="main-content">
          <p className='h1'>
            stuff i've done that <a href='#' className='spanh1'>went well</a>.
            <br/> - getting approved for superteam's grant for building <a href='#' className='spanh1'>ohana</a>.
            <br/> - joining <a href='#' className='spanh1'>supeteamDAO</a>.
            <br/> - worked at a couple of super cool companies : <a href='#' className='spanh1'>dish</a>, <a href='#' className='spanh1'>moving</a>, and <a href='#' className='spanh1'>hyperscalefund</a>
            <br/> - giving my first talk on web3 at <a href='#' className='spanh1'>tinkerhub</a>.
            <br/> - built and shipped a couple of <a href='#sideprojects' className='spanh1'>lil-sideprojects</a>.
          </p>
          
        </main>
        <main className="main-content">
          <p className='h1'>
            stuff i've done that <a href='#' className='spanh1'>failed</a>. 

            <br/> - built and failed a SAAS app called <a href='#' className='spanh1'>saywasp</a>
            <br/> - being a "perfectionist" and <a href='#' className='spanh1'>not shipping shit fast</a>.
            <br/> - not minting a <a href='#' className='spanh1'>coven</a> lol.
            <br/> - some more stuff, i'm too <a href='#' className='spanh1'>embarrassed</a> to share lol.
          </p>
          
        </main>
      </div>
  )
}
