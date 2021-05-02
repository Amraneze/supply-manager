import { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { CardStyle } from '@styles';

interface Props {
    className?: string;
    children: ReactNode | ReactNode[];
}

const useStyles = makeStyles(CardStyle);

export default function Card(props: Props): ReactElement {
    const classes = useStyles();
    const { className, children, ...rest } = props;
    const cardClasses = classNames({
        [classes.card]: true,
        [className ?? '']: className,
    });
    return (
        <div className={cardClasses} {...rest}>
            {children}
        </div>
    );
}
