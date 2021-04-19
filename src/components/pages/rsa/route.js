import {lazy} from 'react';


const routes =
    {
        path: "/rsa",
        exact: true,
        public: true,
        component: lazy(() => import(".")),
    }

export default routes;