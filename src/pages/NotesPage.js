import {Notes} from "../components/Notes";

export function NotesPage(){

    return(
      <Notes title={"My notes"} notes={[{id:1, title:"note1", text:"dgdfgdfg"},{id:2, title:"note2", text:"dfgdf"}, {id:3, title:"note3", text:"dgdfgdfg"}  ]} />
    )
}