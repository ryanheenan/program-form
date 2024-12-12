export const RadioGroup = ({ children }) => (
  <div className="flex space-x-4">{children}</div>
);

export const RadioGroupItem = ({ value, id }) => (
  <input type="radio" value={value} id={id} name="radio-group" />
);
