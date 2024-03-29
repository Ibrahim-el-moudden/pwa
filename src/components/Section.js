import {Container, Row} from "react-bootstrap";

export function Section(props){
    const {children, title} = props;

    return (
        <div className="mt-3 rounded shadow-sm" style={{backgroundColor: "#ffeaa7"}}>
            <h2 className="text-center pt-2">{title}</h2>
            <Container>
                <Row>
                    {children}
                </Row>
            </Container>
        </div>
    );
}