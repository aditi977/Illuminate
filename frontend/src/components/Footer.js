import "../components/Footer.css";
//imports the CSS file for styling the footer component.
export default function Footer() {
    return (
      <>
      <footer>
      <section className="footer-main-frame">
      <div className="address-part">
      {/* <!-- each social media icon is wrapped in an anchor tag --> */}
          <section className="social-media-icons links">
             
            <a href='/'><i className="fa-brands fa-facebook"></i></a>
            <a href='/'><i className="fa-brands fa-twitter"></i></a>
            <a href='/'>
              <i className="fa-brands fa-linkedin"></i></a>
            <a href='/'>
              <i className="fa-brands fa-instagram"></i></a>
          </section>
        </div>
        <section className="copy-rights-bar">Copyright @2023 Illuminate, Inc</section>
       

       
      </section></footer></>
    )
  }