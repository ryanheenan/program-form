export const Switch = ({ checked, onCheckedChange }) => (
  <input
    type="checkbox"
    checked={checked}
    onChange={(e) => onCheckedChange(e.target.checked)}
    className="form-checkbox h-5 w-5 text-indigo-600"
  />
);
