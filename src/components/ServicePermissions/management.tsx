import { FC } from 'react';
import AccordionComponent from '../Form/AccordionComponent';
import { CustomCheckbox } from '../Form/FormComponents';

interface DataItem {
  id: number;
  title: string;
  isSelected?: boolean;
  [key: string]: any;
}

interface Props {
  accordionData: DataItem[];
  checkIndex?: string
  selectedItems?:any
}
const ManagementAccordion: FC<Props> = ({ accordionData,checkIndex, selectedItems }) => {
  const renderAccordion = (items: DataItem[], path: string = "") => {
    return items?.map((item, index) => {

      const currentPath = `${path}_${index}`;
      // Find nested keys that are arrays
      const childKeys = Object.keys(item).filter(
        (key) => Array.isArray(item[key]) && item[key].length > 0
      );
      // Check if this is the last level before checkboxes (to avoid duplication)
      const lastArrayKey = childKeys.find(key =>
        item[key].every((subItem: any) => typeof subItem === "object" && !Array.isArray(Object.values(subItem).find(v => Array.isArray(v))))
      );
      if (childKeys.length > 0) {
        return (
          <div key={currentPath} className="ml-4">
            <AccordionComponent
              title={item.title}
              content={
                <div className="bg-meta-9 rounded-tl-2xl rounded-tr-2xl p-2">
                  <div className="p-2">{item.title}</div>

                  {/* If last array, render checkboxes once */}
                  {lastArrayKey ? renderCheckboxes(item[lastArrayKey], currentPath) : null}

                  {/* Continue recursion for deeper levels */}
                  {childKeys.filter(k => k !== lastArrayKey).map((key) =>
                    renderAccordion(item[key], `${currentPath}_${key}`)
                  )}
                </div>
              }
            />
          </div>
        );
      } else {
        return null;
      }
    });
  };

  const renderCheckboxes = (items: DataItem[], key: string) => {
    if (!Array.isArray(items) || items.length === 0) return null;
    const isSelected = (optionId: string | number) => selectedItems?.includes(Number(optionId));

    const options = items.map((option) => ({
      id: option.id.toString(),
      value: option.id.toString(),
      label: option.title,
      isSelected:isSelected(option.id) 
    }));

    return (
      <div key={key} className="flex flex-col bg-white p-4">
        <CustomCheckbox name={`check_${checkIndex}_${key}`} options={options} selectAll={true} />
      </div>
    );
  };

  return <>{renderAccordion(accordionData)}</>;
};


export default ManagementAccordion;
