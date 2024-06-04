import Select from "react-select";
import { FC } from "react";
import { FilterProps } from "./gallery";

interface Option {
  label: string;
  value: string;
}

interface ControlsProps {
  onFilterChange: (filters: FilterProps) => void;
  filters: FilterProps | null;
}

const Controls: FC<ControlsProps> = ({ onFilterChange, filters }) => {
  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  const handleFieldChange = (selectedOption: Option | null) => {
    onFilterChange({ ...filters, field: selectedOption?.value });
  };

  const handleDirectionChange = (selectedOption: Option | null) => {
    onFilterChange({ ...filters, direction: selectedOption?.value });
  };

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select
          options={fieldOptions}
          inputId="sort-field"
          className="input"
          onChange={handleFieldChange}
        />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          onChange={handleDirectionChange}
        />
      </div>
    </div>
  );
};

export default Controls;
