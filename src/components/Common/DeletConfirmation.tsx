import { FC } from "react";
import ModalComponent from "./ModalComponent";
import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import ButtonComponent from '../Form/ButtonComponent';
import { toast } from "react-toastify";

interface Props {
    show: boolean;
    handleClose: () => void;
    apiFunction: (data: any) => Promise<any>;
    text?: string
    title?: string,
    id?: number
}
const DeleteConfirmation: FC<Props> = ({
    show,
    handleClose,
    apiFunction,
    text,
    title,
    id
}) => {
    const handleSubmit = () => {
        if (id) {
            apiFunction({ id: id }).then(res => {
                if (res?.data) {
                    toast(res.successMessage ?? "با موفقیت انجام شد", { type: 'success' })
                    handleClose()
                    setInterval(function () {
                        window.location.reload()
                    }, 1000)
                }
                else
                    toast("error", { type: 'error' })
            }).catch(error => {
                console.log(error)
            })
        }
    }
    return (
        <ModalComponent
            title={title ?? `حذف گزینه`}
            show={show}
            handleClose={handleClose}
            classWidth="xl:w-2/4 md:w-3/4 w-full mx-auto"
            minHeight={200}
        >
            <div className="row">
                <div className="col-12 font-18 text-center my-3" > {text ?? `آیا از حذف آیتم مورد نظر اطمینان دارید ؟ `} </div>
                {/* <div className="col-12 font-18 text-center my-3">{text} </div> */}
                <div className="xl:col-span-8 col-span-12 flex items-center justify-center justify-content-cneter mx-auto">
                    <div className="col-sm mx-auto">
                        <ButtonComponent
                            color="red"
                            icon={faCheck}
                            title="تایید"
                            handleClick={handleSubmit}
                            className="col-span-5  p-2"
                        />
                    </div>
                    <div className="col-sm mx-auto">
                        <ButtonComponent
                            color="green"
                            icon={faClose}
                            title="انصراف"
                            handleClick={handleClose}
                            className="col-span-5 p-2"
                        />
                    </div>
                </div>
            </div>
        </ModalComponent>
    );
};
export default DeleteConfirmation;
