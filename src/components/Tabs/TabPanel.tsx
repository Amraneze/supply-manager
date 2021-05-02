import { ReactNode, FC } from 'react';
import Box from '@material-ui/core/Box';

interface Props {
    children: ReactNode;
    index: number;
    value: number;
}

const TabPanel: FC<Props> = ({ children, value, index }: Props) => (
    <div role="tabpanel" hidden={value !== index}>
        {value === index && <Box p={3}>{children}</Box>}
    </div>
);

export default TabPanel;
