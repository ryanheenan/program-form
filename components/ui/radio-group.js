export const RadioGroup = ({ children, className }) => (
  <div className={`flex space-x-4 ${className}`}>{children}</div>
);

export const RadioGroupItem = ({ value, id }) => (
  <input type="radio" id={id} value={value} className="form-radio" />
);
