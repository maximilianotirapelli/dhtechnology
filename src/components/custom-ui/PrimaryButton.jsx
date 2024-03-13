import { Button } from '../ui/button';
import PropTypes from 'prop-types';

PrimaryButton.propTypes = {
  children: PropTypes.node,
};

export default function PrimaryButton({ children, ...props }) {
  return (
    <Button
      {...props}
      className="bg-gradient-to-b from-btnPink to-btnPinkDarker text-base shadow-xl hover:opacity-90"
    >
      {children}
    </Button>
  );
}
