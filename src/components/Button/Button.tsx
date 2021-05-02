import { forwardRef, FC, Ref, RefObject, ReactNode, MouseEvent } from 'react';
import classNames from 'classnames';
import { Theme, makeStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';
import { Color } from '@types';
import { ButtonStyle } from '@styles';

const useStyles = makeStyles<Theme>(ButtonStyle);

interface Props {
    color?: Color;
    disabled?: boolean;
    round?: boolean;
    className?: string;
    muiClasses?: Record<string, string>;
    children: ReactNode;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<Props> = forwardRef<HTMLButtonElement, Props>(
    (
        { color, round, children, disabled, className, muiClasses, ...rest }: Props,
        ref: Ref<HTMLButtonElement | null>
    ) => {
        const classes = useStyles();
        const btnClasses = classNames({
            [classes.button]: true,
            [classes[color ?? Color.Primary]]: color,
            [classes.round]: round,
            [className ?? '']: className,
        });
        return (
            <MuiButton {...rest} ref={ref as RefObject<HTMLButtonElement>} classes={muiClasses} className={btnClasses}>
                {children}
            </MuiButton>
        );
    }
);

export default Button;
