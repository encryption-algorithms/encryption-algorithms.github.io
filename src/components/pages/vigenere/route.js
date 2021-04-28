import {lazy} from 'react';


const routes =
    {
        path: "/vigenere",
        exact: true,
        public: true,
        component: lazy(() => import(".")),
    }

export default routes;

