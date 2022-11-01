import React from 'react';
import IMG from './assets/IMG_20181230_150338.jpg';
import Foot from './assets/Foot.png';
import Feet from './assets/Vector.png';
import Dot from './assets/dot.png'
import { Link } from 'react-router-dom';
import './App.css';

function Project() {
  return (
    <div className="container">
        <div className="wrap">
        <div className="pic">
            <img src={IMG} id='profile__img' alt='profile picture' />
        </div> <div className='title'>
            <h2 className='title'>Aanuoluwapo Ade-Ogunmola</h2>
            </div>

        <div className="frames">
            <button className="bot"><Link id="twitter" to="http://www.twitter.com/lady_buugg">Twitter Link</Link></button>
        </div>
        <div className="frames" id="hide">
            <button className="bot"><Link id="twitter" to="hng.Ibiyemi.slack.com">Slack</Link></button>
        </div>
        <div className="frames">
            <button className="bot"><Link id="btn__zuri" to="https://training.zuri.team/">Zuri Team</Link></button>
        </div>
        <div className="frames">
            <button className="bot"><Link id="books"to=" http://books.zuri.team">Zuri Books</Link></button>
        </div>
        <div className="frames">
            <button className="bot"><Link id="book__python" to="https://books.zuri.team/python-for-beginners?ref_id=Ibiyemi">Python Books</Link></button>
        </div>
        <div className="frames">
            <button className="bot"><Link id="pitch" to="https://background.zuri.team">Coders Background Check</Link></button>
        </div>
        <div className="frames">
            <button className="bot"><Link id="books__design" to="https://books.zuri.team/design-rules">Design Books</Link></button>
        </div>
        </div>
        <div className="footer">
            
            <div className="feet"><img  src={Feet} /><img className="dot" src={Dot} /></div>
            <div className="leg"><p>HNG Internship 9 Frontend Task</p></div>
            <div className="foot"><img src={Foot}/></div>
            
            
        </div>
        
    </div>
  )
}

export default Project