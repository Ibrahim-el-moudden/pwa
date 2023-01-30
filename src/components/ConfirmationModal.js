import {Button, Modal} from "react-bootstrap";

export function ConfirmationModal(props){
    const {noteSelected, setNoteSelected, confirm} = props;

    if (!noteSelected) return;

    const close = () => {
        setNoteSelected(undefined);
    }
    const save = () => {
        const success = confirm(noteSelected);
        if (success) setNoteSelected(undefined);
    }
    return(

            <Modal show={noteSelected!==undefined} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete note!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to delete this note ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={save}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

    )
}