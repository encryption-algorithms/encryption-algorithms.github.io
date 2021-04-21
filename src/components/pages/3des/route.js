import {lazy} from 'react';


const routes =
    {
        path: "/3des",
        exact: true,
        public: true,
        component: lazy(() => import(".")),
    }

export default routes;

