import { Route } from 'react-router-dom'

import PageIndex from '../pages/page-index'
import PageAbout from '../pages/page-about'
import PageProjects from '../pages/page-projects'
import PageProject from '../pages/page-project'
// import PageContests from '../pages/Contests/PageContests'
// import PageSMI from '../pages/SMI/PageSMI'

const RoutesMain = [
    <Route index element={<PageIndex />} key="index" />,
    <Route path="/projects" element={<PageProjects />} key="projects" />,
    <Route path="/projects/:slug" element={<PageProject />} key="project" />,
    // <Route path="/contests" element={<PageContests />} key="contests" />,
    // <Route path="/smi" element={<PageSMI />} key="smi" />,
    <Route path="/about" element={<PageAbout />} key="about" />,
]

export default RoutesMain
