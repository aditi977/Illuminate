import './Dropdown.css';

export default function Dropdown({title}) {
    return (
        <div class="dropdown">
            <span class="dropbtn">{title}&nbsp;&nbsp;<i class="fa-solid fa-chevron-down" style={{fontSize: '0.8em'}}></i></span>
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    )
}