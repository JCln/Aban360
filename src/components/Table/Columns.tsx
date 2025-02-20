import { GridColDef } from "@mui/x-data-grid";
import { icons } from "../Icons/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
// import { CustomCheckbox } from "@components/Form/FormComponents";


export const ID = (width: number): GridColDef => ({
    field: 'id',
    headerName: 'ID',
    width: width,
    align: 'center',
    headerAlign: 'center',
    sortable: true,
})
export const USERNAME = (width: number): GridColDef => ({
    field: 'username',
    headerName: 'نام کاربری',
    width: 130,
    align: "center",
    headerAlign: "center", sortable: true
})
export const NAME = (width: number): GridColDef => ({ field: 'name', headerName: 'نام', width: width, align: "center", headerAlign: "center", sortable: true })
export const TITLE = (width: number): GridColDef => ({ field: 'title', headerName: 'عنوان', width: width, align: "center", headerAlign: "center", sortable: true })
export const STYLE = (width: number): GridColDef => ({ field: 'style', headerName: 'استایل', width: width, align: "center", headerAlign: "center", sortable: true })
export const ARROW = (width: number): GridColDef => ({ field: 'arrow', headerName: 'جهت', width: width, align: "center", headerAlign: "center", sortable: true })
export const EMAIL = (width: number): GridColDef => ({ field: 'email', headerName: 'ایمیل', width: width, align: "center", headerAlign: "center", sortable: true })
export const SEQUENCE = (width: number): GridColDef => ({ field: 'sequence', headerName: 'تریتب', width: width, align: "center", headerAlign: "center", sortable: true })

export const LOGICORDER = (width: number): GridColDef => ({ field: 'logicalOrder', headerName: 'ترتیب', width: width, align: "center", headerAlign: "center", sortable: true })
export const SIDEBAR = (width: number): GridColDef => ({
    field: 'sidebar', headerName: 'ساید بار',
    width: width, align: "center", headerAlign: "center", sortable: true,
    renderCell: (cellValue) => {
        return (
            <input
                type="checkbox"
                // checked={field.value?.includes(option.value)}
                // onChange={() => handleCheckboxChange(option.value)}
                className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
        )
    }
})
export const ISACTIVE = (width: number): GridColDef => ({
    field: 'isActive', headerName: 'فعال',
    width: width, align: "center", headerAlign: "center", sortable: true,
    renderCell: (cellValues: any) => {
        return (
            <div className="max-auto w-full text-center">
                {cellValues?.row?.isActive === true ? <FontAwesomeIcon className="bg-green p-1 rounded text-white" icon={faCheck} /> : <FontAwesomeIcon className="bg-red p-1 rounded text-white" icon={faClose} />}
            </div>
        );
    },

})

export const ISMENU = (width: number): GridColDef => ({
    field: 'inMenu', headerName: 'منو',
    width: width, align: "center", headerAlign: "center", sortable: true,
    renderCell: (cellValues: any) => {
        return (
            <div className="max-auto w-full text-center">
                {cellValues?.row?.inMenu === true ? <FontAwesomeIcon className="bg-green p-1 rounded text-white" icon={faCheck} /> : <FontAwesomeIcon className="bg-red p-1 rounded text-white" icon={faClose} />}
            </div>
        );
    },

})
export const CSSCLASS = (width: number): GridColDef => ({ field: "cssClass", headerName: "کلاس css", width: width, align: "center", headerAlign: "center", sortable: true })

export const columnsAllUsers: GridColDef[] = [
    { field: "id", headerName: "ردیف", width: 30 },
    {
        field: "username",
        headerName: "نام نمایشی",
        width: 200, align: "center", headerAlign: "center",
        sortable: true,
        renderHeader: (params) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={icons.filtercolumn} alt="" width={20} className='w-full h-5 w-5' />
                {params.colDef.headerName}
            </div>
        ),
    },
    {
        field: "display", headerName: "نام کاربری", width: 200, align: "center", headerAlign: "center", sortable: true,
    },
    {
        field: "code", headerName: "کد کاربری", width: 200, align: "center", headerAlign: "center", sortable: true,
    },
    {
        field: "mobile", headerName: "موبایل ", width: 200, align: "center", headerAlign: "center", sortable: true,
    },
    {
        field: "deleted", headerName: "حذف شده", width: 120, align: "center", headerAlign: "center",
        renderCell: (cellValues) => {
            return (
                <input
                    type="checkbox"
                    checked
                    // checked={field.value?.includes(option.value)}
                    // onChange={() => handleCheckboxChange(option.value)}
                    className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                />
            )
        }
    },

]

export const modulePermissions: GridColDef[] = [
    ID(10),
    TITLE(300),
    { field: "appTitle", headerName: "عنوان APP", width: 200, align: "center", headerAlign: "center", sortable: true },
    STYLE(170),
    LOGICORDER(200),
    ISMENU(100),
    ISACTIVE(300)
];
export const submodulePermissions: GridColDef[] = [
    ID(10),
    { field: "moduleId", headerName: "" },
    { field: "moduleTitle", headerName: " ماژول", width: 200, align: "center", headerAlign: "center", sortable: true },
    TITLE(250),
    STYLE(100),
    ISMENU(100),
    LOGICORDER(100),
    { field: "clientRoute", headerName: " clientRoute", width: 200, align: "center", headerAlign: "center", sortable: true },
    ISACTIVE(200),
];

export const endpointPermissions: GridColDef[] = [
    ID(10),
    TITLE(250),
    STYLE(100),
    { field: "subModuleId", headerName: "", width: 150 },
    { field: "authValue", headerName: "authValue", width: 250, align: "center", headerAlign: "center", sortable: true },
    { field: "subModuleTitle", headerName: "کنترلر", width: 150, align: "center", headerAlign: "center", sortable: true },
    LOGICORDER(100),
    ISMENU(70),
    ISACTIVE(120)
];

export const provinceColumns: GridColDef[] = [
    ID(10),
    TITLE(250),
    { field: "cordinalDirectionId", headerName: "", width: 150 },
    { field: "cordinalDirectionTitle", headerName: "جهت", width: 150, align: "center", headerAlign: "center", sortable: true },
    { field: "countryId", headerName: "", width: 150 },
    { field: "countryTitle", headerName: "کشور", width: 150, align: "center", headerAlign: "center", sortable: true },
];

export const headquartersColumns: GridColDef[] = [
    ID(10),
    TITLE(250),
    { field: "provinceId", headerName: "", width: 150 },
    { field: "provinceTitle", headerName: "استان", width: 250, align: "center", headerAlign: "center", sortable: true },
];

export const regionColumns: GridColDef[] = [
    ID(10),
    TITLE(250),
    { field: "headquartersId", headerName: "", width: 150 },
    { field: "headquartersTitle", headerName: "نام شرکت", width: 250, align: "center", headerAlign: "center", sortable: true },
];

export const zoneColumns: GridColDef[] = [
    ID(10),
    TITLE(250),
    { field: "regionId", headerName: "", width: 150 },
    { field: "regionTitle", headerName: "نام شرکت", width: 250, align: "center", headerAlign: "center", sortable: true },
    { field: "unstandardCode", headerName: "unstandardCode ", width: 250, align: "center", headerAlign: "center", sortable: true },
];

export const municipalityColumns: GridColDef[] = [
    ID(10),
    TITLE(250),
    { field: "zoneId", headerName: "", width: 150 },
    { field: "zoneTitle", headerName: "نام ناحیه", width: 250, align: "center", headerAlign: "center", sortable: true },
    {
        field: "isVillage", headerName: " isVillage", width: 250, align: "center", headerAlign: "center", sortable: true,
        renderCell: (cellValues: any) => {
            return (
                <div className="max-auto w-full text-center">
                    {cellValues?.row?.isVillage === true ? <FontAwesomeIcon className="bg-green p-1 rounded text-white" icon={faCheck} /> : <FontAwesomeIcon className="bg-red p-1 rounded text-white" icon={faClose} />}
                </div>
            );
        },

    },
];

export const readingBoundColumns: GridColDef[] = [
    ID(10),
    TITLE(250),
    { field: "zoneId", headerName: "", width: 150 },
    { field: "zoneTitle", headerName: "نام ناحیه", width: 250, align: "center", headerAlign: "center", sortable: true },
    { field: "fromReadingNumber", headerName: "fromReadingNumber", width: 250, align: "center", headerAlign: "center", sortable: true },
    { field: "toReadingNumber", headerName: "toReadingNumber", width: 250, align: "center", headerAlign: "center", sortable: true },
];
export const readingBlockColumns: GridColDef[] = [
    ID(10),
    TITLE(250),
    { field: "readingBoundId", headerName: "", width: 150 },
    { field: "readingBoundTitle", headerName: "نام ناحیه اشتراکی", width: 250, align: "center", headerAlign: "center", sortable: true },
    { field: "fromReadingNumber", headerName: "fromReadingNumber", width: 250, align: "center", headerAlign: "center", sortable: true },
    { field: "toReadingNumber", headerName: "toReadingNumber", width: 250, align: "center", headerAlign: "center", sortable: true },
];

export const roleColumns: GridColDef[] = [
    ID(10),
    TITLE(250),
    NAME(200),
    { field: "defaultClaims", headerName: "defaultClaims", width: 250, align: "center", headerAlign: "center", sortable: true },
    {
        field: "sensitiveInfo", headerName: "sensitiveInfo", width: 250, align: "center", headerAlign: "center", sortable: true,
        renderCell: (cellValues: any) => {
            return (
                <div className="max-auto w-full text-center">
                    {cellValues?.row?.sensitiveInfo === true ? <FontAwesomeIcon className="bg-green p-1 rounded text-white" icon={faCheck} /> : <FontAwesomeIcon className="bg-red p-1 rounded text-white" icon={faClose} />}
                </div>
            );
        },

    },
];
export const userColumns: GridColDef[] = [
    ID(10),
    USERNAME(200),
    { field: "fullName", headerName: "نام ", width: 250, align: "center", headerAlign: "center", sortable: true },
    { field: "mobile", headerName: "تلفن همراه ", width: 250, align: "center", headerAlign: "center", sortable: true },
    { field: "displayName", headerName: "نام نمایشی", width: 250, align: "center", headerAlign: "center", sortable: true },
    {
        field: "mobileConfirmed", headerName: "تایید موبایل", width: 100, align: "center", headerAlign: "center", sortable: true,
        renderCell: (cellValues: any) => {
            return (
                <div className="max-auto w-full text-center">
                    {cellValues?.row?.mobileConfirmed === true ? <FontAwesomeIcon className="bg-green p-1 rounded text-white" icon={faCheck} /> : <FontAwesomeIcon className="bg-red p-1 rounded text-white" icon={faClose} />}
                </div>
            );
        },

    },
    {
        field: "hasTwoStepVerification", headerName: "پسورد دو مرحله ای", width: 100, align: "center", headerAlign: "center", sortable: true,
        renderCell: (cellValues: any) => {
            return (
                <div className="max-auto w-full text-center">
                    {cellValues?.row?.hasTwoStepVerification === true ? <FontAwesomeIcon className="bg-green p-1 rounded text-white" icon={faCheck} /> : <FontAwesomeIcon className="text-red p-1 rounded " icon={faClose} />}
                </div>
            );
        },

    },
    {
        field: "isLocked", headerName: " بلاک", width: 100, align: "center", headerAlign: "center", sortable: true,
        renderCell: (cellValues: any) => {
            return (
                <div className="max-auto w-full text-center">
                    {cellValues?.row?.isLocked === true ? <FontAwesomeIcon className="bg-green p-1 rounded text-white" icon={faCheck} /> : <FontAwesomeIcon className="bg-red p-1 rounded text-white" icon={faClose} />}
                </div>
            );
        },

    },
];