import { FC } from 'react'
import ButtonComponent from '../Form/ButtonComponent';
import CardWithTabs from '../Common/CardWithTabs';
import meterIcon from '../../assets/images/icons/meter.png'
import MeterContent from './MeterContent';
import MeterMartyrContent from './MeterMartyrContent ';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface MeterProps {
    input: string
}
const Meter: FC<MeterProps> = ({ input }) => {
    const tabs = [
        {
            label: "کنتور / کنتورها",
            icon: <img src={meterIcon} width={27} alt="" className='ml-2' />,
            content: <MeterContent input={input} />,
        },
        {
            label: "کنتور شاهد",
            icon: <img src={meterIcon} width={27} alt="" className='ml-2' />,
            content: <MeterMartyrContent input={input} />,
        },
    ];
    return (
        <>
            <CardWithTabs
                maxHeight='250px'
                tabs={tabs}
                button={<ButtonComponent
                    icon={faPlus} color={'primary-blue'} title="ثبت کنتور جدید" />} />
        </>
    )
}

export default Meter