import { FC } from 'react'
import ButtonComponent from '../Form/ButtonComponent';
import CardWithTabs from '../Common/CardWithTabs';
import { icons } from '../Icons/Icons';
import ProprietorContent from './ProprietorContent';
import BeneficiaryContent from './Beneficiary';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
interface OwnerProps {
    input: string
}
const Owner: FC<OwnerProps> = ({ input }) => {
    const tabs = [
        {
            label: "مالک / مالکین",
            icon: <img src={icons?.user} width={27} alt="" className='ml-2' />,
            content: <ProprietorContent input={input} />
        },
        {
            label: "ذی نفعان",
            icon: <img src={icons.userGroups} alt="" width={27} className='ml-2' />,
            content: <BeneficiaryContent input={input} />,
        },
    ];

    return (
        <CardWithTabs
            tabs={tabs}
            maxHeight='250px'
            button={<ButtonComponent
                icon={faPlus}
                color={'primary-blue'}
                title="ثبت مالک جدید" />} />
    )
}

export default Owner