interface Props{
   children: string;
   color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
   onClick: () => void;
}

function Button({children, color, onClick} : Props){
    return(
        <button className= {"btn btn-" + color} onClick={onClick}>{children}</button>
    );
}

export default Button;