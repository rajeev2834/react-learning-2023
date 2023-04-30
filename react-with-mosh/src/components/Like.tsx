import {useState} from "react";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";


 interface Props {
     onClick: () => void;
 }

function Like({onClick}: Props) {
    const [status, setStatus] = useState(false);

    const handleLikeClick = () => {
        setStatus(!status);
        onClick();
    }

    if(status){
        return <AiFillHeart color="#ff6b81" size={20} onClick={handleLikeClick}/>
    }
    else{
        return <AiOutlineHeart color="#ff6b81" size={20} onClick={handleLikeClick}/>
    }
}
 
export default Like;