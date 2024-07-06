import './TodoIcon.css';
import { ReactComponent as CheckSvg } from "./../assets/check.svg";
import { ReactComponent as DeleteSvg } from "./../assets/delete.svg";


const IconTypes = {
    "check": (color)=><CheckSvg  className="Icon-svg" fill={color}/>,
    "delete": (color)=><DeleteSvg className="Icon-svg" fill={color}/>
}

function TodoIcon({ type, color , onClick}) {

    return (
        <span
            className={`Icon-container Icon-${type}`}
            onClick={onClick}
        >
            {IconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };
