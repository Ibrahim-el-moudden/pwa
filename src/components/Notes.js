import {Card} from "react-bootstrap";
import {Section} from "./Section";
import {MyCard} from "./MyCard";
import PropTypes from "prop-types";
import {MyButton} from "./MyButton";

function Note(props){
    const{note, onDelete, onEdit} = props;
    return(
        <MyCard>
            <Card.Body>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>{note.text}</Card.Text>
            <Card.Link><MyButton onClick={() => onEdit(note)} variant={"outline-warning"}>Edit</MyButton></Card.Link>
            <Card.Link><MyButton onClick={() => onDelete(note)} variant={"outline-danger"}>Delete</MyButton></Card.Link>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{note.date.toString()}</small>
            </Card.Footer>
        </MyCard>
    )
}

export function Notes(props){
    const {title, notes, onDelete, onEdit} = props;

    if (!notes) return;
    return(
            <Section title={title}>
                {notes.map(n => <Note key={n.id} note={n} onDelete={onDelete} onEdit={onEdit} />)}
            </Section>
    )
}

Notes.prototype = {
    title: PropTypes.string,
    notes: PropTypes.arrayOf(PropTypes.object)
}