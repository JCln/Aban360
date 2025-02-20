import { FC } from "react"
import Modal from '@mui/material/Modal';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
interface Props {
    title: string,
    children: any,
    show: boolean,
    handleClose: any,
    classWidth: string,
    minHeight?: number
    maxHeight?: number
}

const ModalComponent: FC<Props> = ({ title, children, show, handleClose, classWidth, minHeight, maxHeight }) => {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };
    console.log(show)
    return (
        <Modal
            open={show}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className={`${classWidth}  bg-light-blue border-light-gray rounded focus:outline-none`}>
                <div className="modal-header w-full ">
                    <button className="btn text-gray font-18" onClick={handleClose}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                    <Typography className="modal-modal-title  mx-auto text-center dashboard__title-fat" variant="h6" component="h2">
                        {title}
                    </Typography>
                </div>
                <div className={`modal-body  w-full text-right min-height-${minHeight} max-height-${maxHeight}`}  dir={"rtl"}>
                    {children}
                    <Typography className="modal-modal-description" sx={{ mt: 2 }}>
                    </Typography>
                </div>
            </Box>
        </Modal>
    )
}

export default ModalComponent