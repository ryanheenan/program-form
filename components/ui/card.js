export const Card = ({ children }) => (
  <div className="border rounded-lg shadow-lg p-4 bg-white">{children}</div>
);

export const CardHeader = ({ children }) => (
  <div className="mb-4">{children}</div>
);

export const CardTitle = ({ children }) => (
  <h2 className="text-xl font-bold">{children}</h2>
);

export const CardContent = ({ children }) => (
  <div className="space-y-4">{children}</div>
);
