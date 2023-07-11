export const Category = ({ title, amount, children }) => {
  return (
    <>
      <h3>
        {title}: {amount}
      </h3>
      {children}
    </>
  );
};
