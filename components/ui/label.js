export const Label = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor} className="block text-sm font-bold">
    {children}
  </label>
);
