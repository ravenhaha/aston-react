import type { ComponentType, ReactElement } from 'react';

interface WithLoadingProps {
    isLoading: boolean;
}

function withLoading<P extends object>(
    Component: ComponentType<P>
): ComponentType<P & WithLoadingProps> {
    const WithLoadingComponent = ({ isLoading, ...props }: P & WithLoadingProps): ReactElement | null => {
        if (isLoading) {
            return <div>Loading...</div>;
        }

        return <Component {...(props as P)} />;
    };

    const componentName = Component.displayName ?? Component.name ?? 'Component';
    WithLoadingComponent.displayName = `withLoading(${componentName})`;

    return WithLoadingComponent;
}

export default withLoading;
export type { WithLoadingProps };
