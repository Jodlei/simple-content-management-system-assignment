import { NavLink } from "react-router-dom";

const Navigation = ({ tables }) => {
  const sortedTables = tables.sort((a, b) => a.order - b.order);

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        {sortedTables.map((table) => {
          return (
            <li key={table.id}>
              <NavLink to={`/${table.id}`}>{table.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
