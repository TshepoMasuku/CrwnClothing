import { Group, FrmInput, FrmInputLabel } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FrmInput {...otherProps} />
      {label && (
        <FrmInputLabel shrink={otherProps.value.length}>
          {label}
        </FrmInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
