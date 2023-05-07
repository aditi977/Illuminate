import Header from "../components/Header";
import './SignUp.css';
import arrow from './images/arrow.png';
import pictureGrid from './images/pictureGrid.png';
import Footer from "../components/Footer";
//signup form for new users
export default function SignUp() {
    return (
        <>
            <Header isLoggedIn={false}/>

            <div className='sign-up-container'>
                {/* <div className='sign-up'> */}

                    <form class="sign-up-form">
                            <h1><a href='/'><img src={arrow} /></a>&nbsp;&nbsp;Welcome Back</h1>

                         

                            <input type="text" placeholder="  Email" name="email" required />

                            <input type="password" placeholder="  Enter Password" name="psw" required />

                            

                            <div>
                               <a href="/welcome" class="signupbtn">Login</a>
                            </div>
                    </form>
                {/* </div> */}
                <img src={pictureGrid}/>
            </div>

            <Footer />
        </>



    )
}