import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
       <Head>
        <title>tom grigory - 14 y/o super shadowy coder + designer building ohana</title>
      </Head>
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
            <li><a href="#wip">experiments</a></li>
          </ul>
        </nav>
        <main className="main-content">
          <p className='h1'>
            hola i'm <a href='#' className='spanh1'>tom grigory</a>. 
            <br/> <br/> i’m 14 and i’m a <a href='#' className='spanh1'>hacker</a> with super cool <a href='#' className='spanh1'>design skills</a>(atleast my mom thinks so) riding on web3.. 
            <br/> <br/> currently, i’m working on buidling <a href='https://twitter.com/0xohana' target="_blank" className='spanh1'>ohana</a>, <a href='https://gullak.party' target="_blank" className='spanh1'>gullak and a bunch of other stuff while also training to be a master glasseater🦀.</a>. 
            <br/> <br/> you’ll find me attending <a href='https://www.google.com/search?gs_ssp=eJzj4tTP1TewsEgxTzNgtFI1qDBOMjAzSjZPTTa1NExNSUmyMqiwSLE0TUlKTkoxTTI0NUlK8xIqSMzJyczOz09JzFUoTs7Iz88BAMN_Fdo&q=pallikoodam+school&oq=pallik&aqs=chrome.2.69i57j35i39j46i39i175i199j46i512j0i512j46i20i263i512j46i512j0i512l2j46i175i199i512.50033j0j4&sourceid=chrome&ie=UTF-8' target="_blank" className='spanh1'>boring classes</a> by day and <a href='#' className='spanh1'>copy pasting code + collecting jpgs</a> by night. 
            <br/> <br/> hmu on <a href='#'className='spanh1'>discord</a> (tomgrigory#4520) or <a href='https://twitter.com/tomgrigory' className='spanh1' target="_blank">twitter</a>, i'm always down for a <a href='#' className='spanh1'>fun call</a>
          </p>
          
          <p className='f'></p>

        </main>
      </div>
  )
}
