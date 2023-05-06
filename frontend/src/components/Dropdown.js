import './Dropdown.css';

export default function Dropdown({title}) {
    return (
        <div className="dropdown">
            <span className="dropbtn">{title}&nbsp;&nbsp;<i className="fa-solid fa-chevron-down" style={{fontSize: '0.8em'}}></i></span>
            <div className="dropdown-content">
                <a href="#">By title</a>
                <a href="#">By skill</a>
                <a href="#">By projects</a>
            </div>
        </div>
    )
}