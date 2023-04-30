import {useState} from "react";
import Button from "./Button";

interface Props{
    children: string;
    maxChars?: number;
}
function ExpandableText({children, maxChars = 100}: Props){
    const [isExpanded, setIsExpanded] = useState(false);
    const handleIsExpanded = () => setIsExpanded(!isExpanded);

    if(children.length > maxChars){
        const text = isExpanded ? children : children.substring(0, maxChars);
        return <p>{text}...
        <Button onClick = {handleIsExpanded} color={isExpanded ? "primary" : "warning"}>
            {isExpanded ? "Show less" : "Show more"}
        </Button>
        </p>
    }
    return <div>{children}</div>
}

export default ExpandableText;