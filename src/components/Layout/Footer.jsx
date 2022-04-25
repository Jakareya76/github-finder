import {FaReact} from 'react-icons/fa'

function Footer() {
  const footerYears = new Date().getFullYear();

  return (
    <>
      <footer className="footer p-5 bg-gray-700 text-primary-content footer-center">
        <div>
            <FaReact className='text-5xl my-custom-animate-spin'/>
            <p>CopyRight &copy; {footerYears} All Right Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
