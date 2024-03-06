import {Card, Col} from "react-bootstrap";

export function MyCard(props){
    const{children} = props;

    return(
        <Col className="text-center" >
            <Card className={`m-2 p-2 shadow-sm`} style={{ width: '18.5rem' }}>
                    {children}
            </Card>
        </Col>
    )
}