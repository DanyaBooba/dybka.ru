import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'

import PageIndex from '../pages/page-index'
import PageAbout from '../pages/page-about'
import PageProjects from '../pages/page-projects'
import PageProject from '../pages/page-project'
import PageSmi from '../pages/page-smi'
import PageEvents from '../pages/page-events'
const PageEvent = lazy(() => import('../pages/page-event'))
// import PageContests from '../pages/Contests/PageContests'
// import PageSMI from '../pages/SMI/PageSMI'

const RoutesMain = [
    <Route index element={<PageIndex />} key="index" />,
    <Route path="/projects" element={<PageProjects />} key="projects" />,
    <Route path="/projects/:slug" element={<PageProject />} key="project" />,
    <Route path="/events" element={<PageEvents />} key="events" />,
    <Route
        path="/events/:slug"
        element={<Suspense fallback={null}><PageEvent /></Suspense>}
        key="event"
    />,
    // <Route path="/contests" element={<PageContests />} key="contests" />,
    <Route path="/smi" element={<PageSmi />} key="smi" />,
    <Route path="/about" element={<PageAbout />} key="about" />,
]

export default RoutesMain
