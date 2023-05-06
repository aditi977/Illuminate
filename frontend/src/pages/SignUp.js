import Header from "../components/Header";
import './SignUp.css';
import arrow from './images/arrow.png';
import pictureGrid from './images/pictureGrid.png';
import Footer from "../components/Footer";

//returns a signup form in the signup page
export default function SignUp() {
    return (
        <>
            <Header isLoggedIn={false}/>

            <div className='sign-up-container'>
                {/* <div className='sign-up'> */}

                    <form class="sign-up-form">
                            <h1><a href='/'><img src={arrow} /></a>&nbsp;&nbsp;Start your journey today!</h1>

                            <input type="text" placeholder="  Name" name="name" required />

                            <input type="text" placeholder="  Email" name="email" required />

                            <input type="password" placeholder="  New Password" name="psw" required />

                            <input type="password" placeholder="  Re-enter new Password" name="psw-repeat" required />

                            <div>
                               <a href="/welcome" class="signupbtn">Submit</a>
                            </div>
                    </form>
                {/* </div> */}
                <img src={pictureGrid}/>
            </div>

            <Footer />
        </>



    )
}