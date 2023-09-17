import Main from '../Main/Main.jsx';
import About from '../../pages/AboutPage/AboutPage.jsx';
import Watch from '../../pages/WatchPage/WatchPage.jsx';
import Expertise from '../../pages/ExpertisePage/ExpertisePage.jsx';
import Teams from '../../pages/TeamsPage/TeamsPage.jsx';
import Works from '../../pages/WorksPage/WorksPage.jsx';
import People from '../../pages/PeoplePage/PeoplePage.jsx';
import Brand from '../../pages/BrandPage/BrandPage.jsx';

const MainContainer = () => {
    return (
        <main className='main'>
            <Main/>
            <About/>
            <Watch/>
            <Expertise/>
            <Teams/>
            <Works/>
            <People/>
            <Brand/>
        </main>
    );
}

export default MainContainer