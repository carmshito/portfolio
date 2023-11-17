import './App.scss';
import TopNavBar from './components/TopNavBar';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';

const App = () => {
  return (
    <main>
      <TopNavBar />
      <AboutMe />
      <MyProjects />
      <ContactMe />
    </main>
  );
}

export default App;
