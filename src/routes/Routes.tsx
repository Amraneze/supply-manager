import { FC, ComponentType } from 'react';
import { BrowserRouter, Switch, Route, RouteProps, RouteComponentProps } from 'react-router-dom';
import { Layout } from '../layouts';
import { Home } from '../views';

interface Props<T> extends RouteProps {
    component: ComponentType<RouteComponentProps<T>> | ComponentType<T>;
}

const RouteWrapper = ({ component: Component, ...rest }: Props<Record<string, unknown>>) => (
    <Route
        {...rest}
        render={(props) => (
            <Layout>
                <Component {...props} />
            </Layout>
        )}
    />
);

const Routes: FC = () => (
    <BrowserRouter>
        <Switch>
            <RouteWrapper exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
