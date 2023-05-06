import './Dropdown.css';

export default function Dropdown({title}) {
    return (
        <div className="dropdown">
            <span className="dropbtn">{title}&nbsp;&nbsp;<i className="fa-solid fa-chevron-down" style={{fontSize: '0.8em'}}></i></span>
            <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    )
}