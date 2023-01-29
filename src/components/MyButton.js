import {Button} from "react-bootstrap";

export function MyButton(props){
    const {children, onClick, variant} = props;
    return(
        <Button variant={variant} size="sm" onClick={onClick}>
            {children}
        </Button>
    )
}