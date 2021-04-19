import {lazy} from 'react';


const routes =
    {
        path: "/hash",
        exact: true,
        public: true,
        component: lazy(() => import(".")),
    }

export default routes;