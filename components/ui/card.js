export const Card = ({ children }) => (
  <div className="border p-4 rounded shadow">{children}</div>
);

export const CardHeader = ({ children }) => <div>{children}</div>;

export const CardTitle = ({ children }) => <h2>{children}</h2>;

export const CardContent = ({ children }) => <div>{children}</div>;
