import './App.scss';

import TopNavBar from './components/TopNavBar';
import SideNavBar from './components/SideNavBar';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';
import ProfilePicture from './components/ProfilePicture';

const App = () => {
  return (
    <main>
      <TopNavBar />
      <SideNavBar />
      <AboutMe />
      <ProfilePicture />
      <MyProjects />
      <ContactMe />
    </main>
  );
}

export default App;
