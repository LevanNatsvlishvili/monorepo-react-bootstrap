import TextField from '@mui/material/TextField';

interface MuiInputProps {
  variant?: 'standard' | 'outlined' | 'filled';
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = (props: MuiInputProps) => {
  const { variant = 'outlined', onChange, label, ...rest } = props;
  return <TextField label={label} variant={variant} onChange={onChange} {...rest} />;
};

export default CustomInput;
