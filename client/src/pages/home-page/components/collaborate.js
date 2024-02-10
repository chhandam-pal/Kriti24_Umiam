import './collaborate.css';

const Collaborate = () => {
    const handlelogin = (e)=>{
        window.location.href = "https://login.microsoftonline.com/850aa78d-94e1-4bc6-9cf3-8c11b530701c/oauth2/v2.0/authorize?client_id=b9bb88de-2a97-4488-848b-b33d23d1c014&scope=user.read%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fumiam-kriti24.onrender.com%2Fredirect&client-request-id=7bcd925d-b442-414b-aa01-a4a503e169ed&response_mode=query&response_type=code&x-client-SKU=msal.js.node&x-client-VER=2.6.2&x-client-OS=linux&x-client-CPU=x64&client_info=1";
    }

    return ( 
        <>
        <div className="collaborate-hm">
            <div>
                <p className="heading-hm">Collaberate And Discuss your project with campus janta</p>
                <p className='col_text-hm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius diam justo, id sagittis ipsum dictum feugiat.</p>
                <button className="page_btn-hm" onClick={handlelogin}>Start for Free</button>
            </div>
            <img src={require('./images/Laptop mockup.png')} alt='rectangle' className='laptop_img-hm'></img>
            <img src={require('./images/Rectangle2.png')} alt='rectangle' className='black_img-hm'></img>
            <img src={require('./images/Rectangle3.png')} alt='rectangle' className='yellow_img-hm'></img>
        </div>
        <div className='aboutus-hm right-hm'>
            <img src={require('./images/Rectangle5.png')} alt='rectangle' className='about_img-hm'></img>
            <img src={require('./images/Rectangle6.png')} alt='rectangle' className='outline_img-hm'></img>
            <div className='content-hm'>
                <p className="heading-hm">About Us</p>
                <p className='text-hm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius diam justo, id sagittis ipsum dictum feugiat.</p>
            </div>     
        </div>
        <div className="feature1-hm left-hm">
            <div className="content-hm">
                <p className='heading-hm'>Feature 1</p>
                <p className='text-hm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius diam justo, id sagittis ipsum dictum feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius diam justo, id sagittis ipsum dictum feugiat.</p>
                <button className='page_btn-hm' >Learn More</button>
            </div>
            <div className='im-hm'>
            <img src='/images/Rectangle17.png' alt='rectangle' className='white_box-hm'></img>
            <img src='/images/Rectangle7.png' alt='rectangle' className='black_box-hm'></img>
            </div>
        </div>
        <div className="feature2-hm right-hm">
            <img src='/images/Rectangle8.png' alt='rectangle' className='l_black_box-hm'></img>
            <img src='/images/Rectangle17.png' alt='rectangle' className='l_white_box-hm'></img>
            <div className="content-hm">
                <p className='heading-hm'>Feature 2</p>
                <p className='text-hm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius diam justo, id sagittis ipsum dictum feugiat.</p>
                <button className='page_btn-hm' >Learn More</button>
            </div>
        </div>
        <div className="contact_us-hm">
            <img src='/images/Rectangle9.png' alt='rectangle' className='rec1-hm'></img>
            <img src='/images/Rectangle13.png' alt='rectangle' className='rec2-hm'></img>
            <img src='/images/Rectangle13.png' alt='rectangle' className='rec3-hm'></img>
            <img src='/images/Rectangle13.png' alt='rectangle' className='rec4-hm'></img>
            <img src='/images/Rectangle13.png' alt='rectangle' className='rec5-hm'></img>
            <img src='/images/Rectangle18.png' alt='rectangle' className='rec6-hm'></img>
            <img src='/images/Rectangle1.png' alt='rectangle' className='rec7-hm'></img>
            <img src='/images/Rectangle13.png' alt='rectangle' className='rec8-hm'></img>
            <img src='/images/Rectangle13.png' alt='rectangle' className='rec9-hm'></img>
            <img src='/images/Rectangle13.png' alt='rectangle' className='rec10-hm'></img>
            <p className='get_help-hm'>Get Help</p>
            <p className='get_text-hm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius diam justo, id sagittis ipsum dictum feugiat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius diam justo, id sagittis ipsum dictum feugiat.</p>
            <button className='page_btn-hm cont_btn-hm'>Contact us</button>
            
        </div>
        <div className="footer-hm">
            <img src='/images/Group21.png' alt='logo' className='logo-hm'></img>
            <ul className="nav-links-hm">
                <li>Home</li>
                <li>About</li>
                <li>Features</li>
            </ul>
        </div>
        </>
     );
}
 
export default Collaborate;