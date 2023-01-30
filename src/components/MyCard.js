import {Card, Col} from "react-bootstrap";

export function MyCard(props){
    const{children} = props;

    return(
        <Col className="text-center" >
            <Card className={`m-5 p-2 shadow-sm`} style={{ width: '20rem' }}>
                    {children}
            </Card>
        </Col>
    )
}