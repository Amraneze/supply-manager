import { FC, ReactElement } from 'react';

interface Props {
    value: string;
    classes?: string;
    splitter?: string;
}

const Textarea: FC<Props> = ({ classes = '', value = '', splitter = '\n' }): ReactElement => (
    <>
        {value.split(splitter).map((sentence) => (
            <span key={sentence} className={classes}>
                {sentence}
                <br />
            </span>
        ))}
    </>
);

export default Textarea;
