import Header from "../components/Header";
import './SignUp.css';
import arrow from './arrow.png';
import pictureGrid from './pictureGrid.png';
import Footer from "../components/Footer";

export default function SignUp() {
    return (
        <>
            <Header />
            <div className='sign-up-container'>
                <div className='sign-up'>

                    <form>
                        <div class="sign-up-form">

                            <h1><a href='/'><img src={arrow} /></a>&nbsp;&nbsp;Start your journey today!</h1>

                            <input type="text" placeholder="  Name" name="name" required />

                            <input type="text" placeholder="  Email" name="email" required />

                            <input type="password" placeholder="  New Password" name="psw" required />

                            <input type="password" placeholder="  Re-enter new Password" name="psw-repeat" required />

                            <p>By creating an account you agree to our <a href="#" style={{ color: " #FFFFFF" }}>Terms & Privacy</a>.</p>

                            <div>
                                <button type="submit" class="signupbtn">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <img src={pictureGrid}/>
            </div>
            <Footer />
        </>



    )
}