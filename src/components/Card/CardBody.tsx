import { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { CardBodyStyle } from '@styles';

interface Props {
    className?: string;
    children: ReactNode | ReactNode[];
}

const useStyles = makeStyles<Theme>(CardBodyStyle);

export default function CardBody(props: Props): ReactElement {
    const classes = useStyles();
    const { className, children, ...rest } = props;
    const cardBodyClasses = classNames({
        [classes.cardBody]: true,
        [className ?? '']: className,
    });
    return (
        <div className={cardBodyClasses} {...rest}>
            {children}
        </div>
    );
}
