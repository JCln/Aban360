import { FC } from 'react'
import ButtonComponent from '../Form/ButtonComponent';
import CardWithTabs from '../Common/CardWithTabs';
import HomeIcon from '../../assets/images/icons/home.png'
import flatIcon from '../../assets/images/icons/appartment.png'
import PropertyContent from './PropertyContent';
import UnitContent from './UnitContent';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
interface Props {
    input: string
}
const Property: FC<Props> = ({ input }) => {

    const tabs = [
        {
            label: "ملک",
            icon: <img src={HomeIcon} width={27} alt="" className='ml-2' />,
            content: <PropertyContent input={input} />,
        },
        {
            label: "واحد",
            icon: <img src={flatIcon} width={27} alt="" className='ml-2' />,

            content: <UnitContent input={input} />,
        },
    ];
    return (
        <>
            <CardWithTabs
                maxHeight='250px'
                tabs={tabs} button={<ButtonComponent icon={faPlus} color={'primary-blue'} title="ثبت ملک جدید" />} />
        </>
    )
}

export default Property