import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {NotesPage} from "./pages/NotesPage";

function App() {
  return ( <>
          <Header />

          <NotesPage />

          <Footer />
      </>
  );
}

export default App;
