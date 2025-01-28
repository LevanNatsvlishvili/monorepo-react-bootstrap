import Button from '@mui/material/Button';

interface MUIButtonProps {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  children: React.ReactNode;
  onClick?: () => void;
}

const MUIButton = (props: MUIButtonProps) => {
  const { variant = 'contained', color = 'primary', children, ...rest } = props;
  return (
    <Button variant={variant} color={color} {...rest}>
      {children}
    </Button>
  );
};
export default MUIButton;
