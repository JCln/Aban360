import { TablePaginationProps } from "@mui/material";
import { DataGrid, GridColumnVisibilityModel, GridLocaleText, gridPageSizeSelector, GridPagination, gridRowCountSelector, GridToolbar, useGridApiContext, useGridSelector } from "@mui/x-data-grid";
import { useCallback, useEffect, useRef, useState } from "react";
import MuiPagination from "@mui/material/Pagination";

export const faIRGrid: Partial<GridLocaleText> = {
    // Root
    noRowsLabel: "بدون سطر",
    noResultsOverlayLabel: "نتیجه ای پیدا نشد.",

    // Density selector toolbar button text
    toolbarDensity: "تراکم",
    toolbarDensityLabel: "تراکم",
    toolbarDensityCompact: "فشرده",
    toolbarDensityStandard: "استاندارد",
    toolbarDensityComfortable: "راحت",

    // Columns selector toolbar button text
    toolbarColumns: "ستون‌ها",
    toolbarColumnsLabel: "ستون‌ها را انتخاب کنید",

    // Filters toolbar button text
    toolbarFilters: "فیلترها",
    toolbarFiltersLabel: "نمایش فیلترها",
    toolbarFiltersTooltipHide: "مخفی کردن فیلترها",
    toolbarFiltersTooltipShow: "نمایش فیلترها",
    toolbarFiltersTooltipActive: (count) =>
        count !== 1 ? `${count} فیلترهای فعال` : `${count} فیلتر فعال`,

    // Quick filter toolbar field
    toolbarQuickFilterPlaceholder: "جستجو...",
    toolbarQuickFilterLabel: "جستجو",
    toolbarQuickFilterDeleteIconLabel: "حذف",

    // Export selector toolbar button text
    toolbarExport: "خروجی",
    toolbarExportLabel: "خروجی",
    toolbarExportCSV: "دانلود به صورت CSV",
    toolbarExportPrint: "چاپ",
    toolbarExportExcel: "دانلود به صورت اکسل",

    // Columns panel text
    columnsPanelTextFieldLabel: "پیداکردن ستون",
    columnsPanelTextFieldPlaceholder: "عنوان ستون",
    columnsPanelDragIconLabel: "جا‌به‌جایی ستون",
    columnsPanelShowAllButton: "نمایش همه",
    columnsPanelHideAllButton: "مخفی همه",

    // Filter panel text
    filterPanelAddFilter: "افزودن فیلتر",
    filterPanelRemoveAll: "حذف همه",
    filterPanelDeleteIconLabel: "حذف",
    filterPanelLogicOperator: "عملگر منطقی",
    filterPanelOperator: "عملگرها",
    filterPanelOperatorAnd: "و",
    filterPanelOperatorOr: "یا",
    filterPanelColumns: "ستون‌ها",
    filterPanelInputLabel: "مقدار",
    filterPanelInputPlaceholder: "فیلتر مقدار",

    // Filter operators text
    filterOperatorContains: "شامل",
    filterOperatorEquals: "مساوی",
    filterOperatorStartsWith: "شروع با",
    filterOperatorEndsWith: "پایان با",
    filterOperatorIs: "هست",
    filterOperatorNot: "نیست",
    filterOperatorAfter: "بعد از",
    filterOperatorOnOrAfter: "معادل یا بعدش",
    filterOperatorBefore: "قبلش",
    filterOperatorOnOrBefore: "معادل یا قبلش",
    filterOperatorIsEmpty: "خالی است",
    filterOperatorIsNotEmpty: "خالی نیست",
    filterOperatorIsAnyOf: "هر یک از",
    "filterOperator=": "=",
    "filterOperator!=": "!=",
    "filterOperator>": ">",
    "filterOperator>=": ">=",
    "filterOperator<": "<",
    "filterOperator<=": "<=",

    // Header filter operators text
    // headerFilterOperatorContains: 'Contains',
    // headerFilterOperatorEquals: 'Equals',
    // headerFilterOperatorStartsWith: 'Starts with',
    // headerFilterOperatorEndsWith: 'Ends with',
    // headerFilterOperatorIs: 'Is',
    // headerFilterOperatorNot: 'Is not',
    // headerFilterOperatorAfter: 'Is after',
    // headerFilterOperatorOnOrAfter: 'Is on or after',
    // headerFilterOperatorBefore: 'Is before',
    // headerFilterOperatorOnOrBefore: 'Is on or before',
    // headerFilterOperatorIsEmpty: 'Is empty',
    // headerFilterOperatorIsNotEmpty: 'Is not empty',
    // headerFilterOperatorIsAnyOf: 'Is any of',
    // 'headerFilterOperator=': 'Equals',
    // 'headerFilterOperator!=': 'Not equals',
    // 'headerFilterOperator>': 'Greater than',
    // 'headerFilterOperator>=': 'Greater than or equal to',
    // 'headerFilterOperator<': 'Less than',
    // 'headerFilterOperator<=': 'Less than or equal to',

    // Filter values text
    filterValueAny: "هرچیزی",
    filterValueTrue: "صحیح",
    filterValueFalse: "غلط",

    // Column menu text
    columnMenuLabel: "فهرست",
    columnMenuShowColumns: "نمایش ستون‌ها",
    columnMenuManageColumns: "مدیریت ستون‌ها",
    columnMenuFilter: "فیلتر",
    columnMenuHideColumn: "مخفی",
    columnMenuUnsort: "نامرتب‌کردن",
    columnMenuSortAsc: "مرتب‌کردن صعودی",
    columnMenuSortDesc: "مرتب‌کردن نزولی",

    // Column header text
    columnHeaderFiltersTooltipActive: (count) =>
        count !== 1 ? `${count} فیلتر‌های فعال` : `${count} فیلتر فعال`,
    columnHeaderFiltersLabel: "نمایش فیلترها",
    columnHeaderSortIconLabel: "مرتب‌کردن",

    // Rows selected footer text
    footerRowSelected: (count) =>
        count !== 1
            ? `${count.toLocaleString()} سطرهای انتخاب شده`
            : `${count.toLocaleString()} سطر انتخاب شده`,

    // Total row amount footer text
    footerTotalRows: "مجموع سطرها:",

    // Total visible row amount footer text
    footerTotalVisibleRows: (visibleCount, totalCount) =>
        `${visibleCount.toLocaleString()} از ${totalCount.toLocaleString()}`,

    // Checkbox selection text
    checkboxSelectionHeaderName: "چک‌باکس انتخاب",
    checkboxSelectionSelectAllRows: "انتخاب همه‌ی ردیف‌ها",
    checkboxSelectionUnselectAllRows: "لغو انتخاب همه‌ی ردیف‌ها",
    checkboxSelectionSelectRow: "انتخاب ردیف",
    checkboxSelectionUnselectRow: "لغو انتخاب ردیف",

    // Boolean cell text
    booleanCellTrueLabel: "صحیح",
    booleanCellFalseLabel: "غلط",

    // Actions cell more text
    actionsCellMore: "بیشتر",

    // Column pinning text
    pinToLeft: "سنجاق کردن به چپ",
    pinToRight: "سنجاق کردن به راست",
    unpin: "برداشتن سنجاق",

    // Tree Data
    treeDataGroupingHeaderName: "گروه‌بندی",
    treeDataExpand: "نمایش فرزندان",
    treeDataCollapse: "پنهان‌سازی فرزندان",

    // Grouping columns
    groupingColumnHeaderName: "گروه‌بندی",
    groupColumn: (name) => `گروه‌بندی براساس ${name}`,
    unGroupColumn: (name) => `لغو گروه‌بندی براساس ${name}`,

    // Master/detail
    detailPanelToggle: "پنل جزئیات",
    expandDetailPanel: "بازکردن پنل جزئیات",
    collapseDetailPanel: "بستن پنل جزئیات",

    // Row reordering text
    rowReorderingHeaderName: "ترتیب مجدد سطر",

    // Aggregation
    aggregationMenuItemHeader: "تجمیع",
    aggregationFunctionLabelSum: "جمع",
    aggregationFunctionLabelAvg: "میانگین",
    aggregationFunctionLabelMin: "حداقل",
    aggregationFunctionLabelMax: "حداکثر",
    aggregationFunctionLabelSize: "اندازه",
};

interface ColumnVisibilityModel {
    [key: string]: boolean;
}



export const useColumnVisibilityModel = (defaultVisibilityModel: GridColumnVisibilityModel) => {
    const [columnVisibilityModel, setColumnVisibilityModel] = useState<ColumnVisibilityModel>(defaultVisibilityModel ?? {});

    const handleColumnVisibilityChange = useCallback((newModel: GridColumnVisibilityModel) => {
        const updatedModel = { ...columnVisibilityModel, ...newModel };

        // Ensure default hidden columns remain hiddel
        Object.keys(defaultVisibilityModel).forEach((key) => {
            if (defaultVisibilityModel[key] === false) {
                updatedModel[key] = false;
            }
        });

        // setColumnVisibilityModel(updatedModel);
        setColumnVisibilityModel(newModel);
    }, [columnVisibilityModel, defaultVisibilityModel]);

    return { columnVisibilityModel, handleColumnVisibilityChange };
};


export function Pagination({
    page,
    onPageChange,
    className,
}: Pick<TablePaginationProps, "page" | "onPageChange" | "className">) {
    const apiRef = useGridApiContext();
    const pageCount = useGridSelector(apiRef, gridRowCountSelector);
    // const pageCount = useGridSelector(apiRef, gridPageCountSelector);
    const pageSize = useGridSelector(apiRef, gridPageSizeSelector);
    const countTotal = Math.ceil(pageCount / pageSize);
    return (
        <MuiPagination
            color="primary"
            variant="outlined"
            className={className}
            shape="rounded"
            count={countTotal}
            page={page + 1}
            onChange={(event, newPage) => {
                onPageChange(event as any, newPage - 1);
            }}
        />
    );
}


export function CustomPagination({ onRowsPerPageChange, ...props }: any) {
    return (
        <GridPagination
            ActionsComponent={Pagination}
            {...props}
            labelRowsPerPage="آیتم در هر صفحه "
            labelDisplayedRows={({ from, to, count }) =>
                `${from} - ${to} از ${count}`
            }
            onRowsPerPageChange={(e: any) => onRowsPerPageChange(e.target.value)}
        />
    );
}

export function CustomPaginationDataGrid(props: any) {
    return (
        <GridPagination
            ActionsComponent={Pagination}
            {...props}
            labelRowsPerPage="آیتم در هر صفحه "
            labelDisplayedRows={({ from, to, count }) =>
                `${from} - ${to} از ${count}`
            }
        />
    );
}


interface DatagridProps {

}
export const DatailGridComponent = (props: any) => {
    const {
        handleSelect,
        height,
        columnVisibilityModel,
        pagination,
        rows,
        pageSize,
        columns,
        checkboxSelection,
        toolbar,
        totalRows,
        handlePageChange,
        handlePageSizeChange,
        handleColumnVisibilityModelChange,
        handleRowClick,
        handleRowClass
    } = props;

    const gridRef = useRef<HTMLDivElement>(null);
    let isSyncing = false;

    useEffect(() => {
        const grid = gridRef.current;

        if (!grid) return;

        const observer = new MutationObserver(() => {
            const header = grid?.querySelector(".MuiDataGrid-columnHeaders");
            const body = grid?.querySelector(".MuiDataGrid-virtualScroller");

            if (header && body) {
                observer.disconnect();
                attachScrollListeners(header, body);
            }
        });

        observer?.observe(grid, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, []);

    const attachScrollListeners = (header: any, body: any) => {
        let isHeaderScrolling = false;
        let isBodyScrolling = false;

        const handleHeaderScroll = () => {
            if (isBodyScrolling) return;
            isHeaderScrolling = true;
            body.scrollLeft = header.scrollLeft;
            isHeaderScrolling = false;
            // console.log('header scroll');
        };

        const handleBodyScroll = () => {
            if (isHeaderScrolling) return;
            isBodyScrolling = true;
            header.scrollLeft = body.scrollLeft;
            isBodyScrolling = false;
            // console.log('body scroll');
        };

        header.addEventListener("scroll", handleHeaderScroll);
        body.addEventListener("scroll", handleBodyScroll);

        return () => {
            header.removeEventListener("scroll", handleHeaderScroll);
            body.removeEventListener("scroll", handleBodyScroll);
        };
    };


    return (
        <div style={{ height: height, width: "100%", direction:"rtl" }} ref={gridRef}>
            <DataGrid
                onPaginationModelChange={handlePageChange}
                rows={rows ?? []}
                // rowHeight={200}
                // autoHeight
                // disableColumnMenu

                paginationMode="server"
                rowCount={totalRows}
                columns={columns ?? []}
                className="col"
                getRowClassName={handleRowClass}
                checkboxSelection={checkboxSelection ?? false}
                localeText={faIRGrid}
                columnBuffer={30}
                initialState={{
                    pagination: { paginationModel: { pageSize: pageSize ?? 5 } },
                    // columns: {
                    //   columnVisibilityModel,
                    // },
                }}
                columnVisibilityModel={columnVisibilityModel}
                onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
                slots={{
                    pagination: (props) => (
                        <CustomPagination
                            {...props}
                            onRowsPerPageChange={handlePageSizeChange}
                        />
                    ),

                    toolbar: toolbar === undefined ? GridToolbar : GridToolbar,
                }}
                // slotProps={{ toolbar: { csvOptions: { encoding: "utf-8" } } }}
                pageSizeOptions={pagination}
                // columnVisibilityModel={columnVisibilityModel}
                sx={{
                    "& .MuiDataGrid-columnSeparator": {
                        visibility: "visible",
                        color: "#3856ac",
                        direction: "rtl",
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        overflowX: "scroll",
                    },
                    "& .MuiDataGrid-virtualScrollerContent ": {
                        height: "auto !important",
                    },
                    "& .MuiDataGrid-main ": {
                        minHeight: "auto !important",
                    },
                }}
                onRowSelectionModelChange={(ids) =>
                    handleSelect ? handleSelect(ids) : ""
                }
                onRowClick={handleRowClick}
            />
        </div>
    );
};
