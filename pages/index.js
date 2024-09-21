import './index.css'
import Link from 'next/link'



export default function home() {
    return (
        <main>
            <div className="fixedBg" style={{ backgroundColor: 'black', top: '0', left: '0' }}>
            </div>
            
            
            
            <div className="navBar" style={{ display: 'flex', justifyContent: 'space-around', maxWidth: '400px', fontFamily: 'sans-serif', marginTop: '20px' }} >
                <Link className='navBt' href='/' style={{ textDecoration: 'none' }}>Home</Link>
                <a className='navBt'>About</a>
                <Link className='navBt' style={{ border: 'solid 1px', padding: '10px', marginTop: '-10px', textDecoration: 'none' }} href='./cbox'>Try For FREE</Link>

            </div>
            <h1 style={{display:'flex', marginLeft:'80%', marginTop:'-30px' ,fontSize:'20px', color:'white', fontFamily:'sans-serif'}}>Powered by GEMENI</h1>
            <div className='mainBtn' style={{ maxWidth: '300px' }}>
                <Link className='mainBtn' style={{ textDecoration: 'none', display: 'flex', color: 'white', border: 'solid 1px', padding: '10px', marginTop: '200px', marginLeft: '20px', fontSize: '40px', fontFamily: 'sans-serif' }} href='./cbox'>Try For FREE</Link>

            </div>


        </main>
    )
}