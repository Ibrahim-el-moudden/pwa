import {Button, Form, Modal} from "react-bootstrap";

export function NoteForm(props) {
    const {noteSelected, setNoteSelected, onSave} = props;
    if (!noteSelected) return;

    const close = () => {
        setNoteSelected(undefined);
    }
    const save = () => {
        const success = onSave(noteSelected);
        if (success) setNoteSelected(undefined);
    }

    return <Modal show={noteSelected!==undefined} onHide={close}>
        <Modal.Header closeButton>
            <Modal.Title>Edit note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Label>title:</Form.Label>
                <Form.Control value={noteSelected.title ? noteSelected.title : ""}
                              onChange={(e) => setNoteSelected({...noteSelected, title: e.target.value})} />
                <Form.Label>text:</Form.Label>
                <Form.Control aria-required={true} as="textarea" rows={4} value={noteSelected.text ? noteSelected.text : ""}
                              onChange={(e) => setNoteSelected({...noteSelected, text: e.target.value})} />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={close}>
                Cancel
            </Button>
            {noteSelected.text ?
                <Button variant="primary" onClick={save}>
                    Save
                </Button> : null}

        </Modal.Footer>
    </Modal>
}