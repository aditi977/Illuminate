import Header from "../components/Header";
import './SignUp.css';

export default function SignUp() {
    return (
        <>
            <Header />
            <div className='sign-up'>
                <div className='top-img'></div>
         
                    <form>
                        <div class="sign-up-form">
                            <h1>Start your journey today!</h1>
                           
                      

                           <div class="rectangle1">
                            <input type="text" placeholder="  Name" name="name" required /></div>
                            <div class="rectangle2">
                            <input type="text" placeholder="  Email" name="email" required /></div>

                          <div class="rectangle3">
                            <input type="password" placeholder="  New Password" name="psw" required /></div>

                            <div class="rectangle4">
                            <input type="password" placeholder="  Re-enter new Password" name="psw-repeat" required /></div>

                           

                            <p>By creating an account you agree to our <a href="#" style={{color:" #FFFFFF"}}>Terms & Privacy</a>.</p>

                            <div class="clearfix">
                               
                                <button type="submit" class="signupbtn">Sign Up</button>
                            </div>
                        </div>
                    </form>
         
                <div className='bottom-img'></div>
            </div>
        </>



    )
}