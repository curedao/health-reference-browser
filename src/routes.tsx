import React, {
  Suspense,
  Fragment,
  lazy
} from 'react';
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';
import LoadingScreen from 'src/components/LoadingScreen';
import { appRoutes } from './route-paths';

type Routes = {
  exact?: boolean;
  path?: string | string[];
  guard?: any;
  layout?: any;
  component?: any;
  routes?: Routes;
}[];

export const renderRoutes = (routes: Routes = []): JSX.Element => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Layout>
                  {route.routes
                    ? renderRoutes(route.routes)
                    : <Component {...props} />}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);


const routes: Routes = [
  {
    exact: true,
    path: '/404',
    component: lazy(() => import('src/views/errors/NotFoundView'))
  },
  {
    path: '*',
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: '/',
        component: () => <Redirect to={appRoutes.searchReferences} />
      },
      {
        exact: true,
        path: appRoutes.searchReferences,
        component: lazy(() => import('src/views/references/ReferencesView'))
      },
      {
        exact: true,
        path: appRoutes.searchCreateReferences,
        component: lazy(() => import('src/views/references/ReferencesCreateView'))
      },
      {
        exact: true,
        path: `${appRoutes.searchEditReferences}:id`,
        component: lazy(() => import('src/views/references/ReferencesCreateView'))
      },
      {
        component: () => <Redirect to={appRoutes.error} />
      }
    ]
  }
];

export default routes;
