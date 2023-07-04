import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Box from "../atoms/Box";

const InputGroup = ({
  className,
  label,
  id,
  name,
  value,
  onChange,
  type,
  placeholder,
}) => {
  return (
    <Box className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        className="input"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </Box>
  );
};

export default InputGroup;
