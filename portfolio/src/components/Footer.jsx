import Github from './static/github.svg';
import Youtube from './static/youtube.svg';
import Gmail from './static/gmail.svg';
import Linkedin from './static/linkedin.svg';
import X from './static/x.svg';


export function Footer() {
    return (
        <footer className='bg-teal-500 p-10'>
            <div className='contact w-full text-center'>
                <a className='inline-flex px-5' href='/'><img className='h-8 w-8' alt='Gmail' src={Gmail} /></a>
                <a className='inline-flex px-5' href='/'><img className='h-8 w-8' alt='Linkedin' src={Linkedin} /></a>
                <a className='inline-flex px-5' href='/'><img className='h-8 w-8' alt='Github' src={Github} /></a>
                <a className='inline-flex px-5' href='/'><img className='h-8 w-8' alt='X' src={X} /></a>
                <a className='inline-flex px-5' href='/'><img className='h-8 w-8' alt='Youtube' src={Youtube} /></a>
            </div>
        </footer>
    );
}