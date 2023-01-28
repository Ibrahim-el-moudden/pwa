import {Card} from "react-bootstrap";
import {Section} from "./Section";
import {MyCard} from "./MyCard";

function Note(props){
    const{note} = props;
    return(
        <MyCard>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>{note.text}</Card.Text>
            <Card.Link href="#">Edit</Card.Link>
            <Card.Link href="#">Delete</Card.Link>
        </MyCard>
    )

}

export function Notes(props){
    const {title, notes} = props;
    if (!notes) return ;
    return(
            <Section title={title}>
                {notes.map(n => <Note  key={n.id} note={n} />  )}
            </Section>
    )
}