import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {NotesPage} from "./pages/NotesPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs} from 'react-bootstrap';
import "./services/firestore";


function App() {
  return ( <>
          <Header />

          <Tabs
              defaultActiveKey="notes"
              className="mb-3">

              <Tab eventKey="notes" title="notes">
                  <NotesPage />
              </Tab>
              <Tab eventKey="tab2" title="tab2">
                  <></>
              </Tab>
              <Tab eventKey="tab3" title="tab3" >
                  <></>
              </Tab>
          </Tabs>

          <Footer />
      </>
  );
}

export default App;
