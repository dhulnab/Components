"use client";
import styles from "./Table.module.css";

const Table = ({ columns, list, style, ...props }) => {
  return (
    <div className={styles.table}>
      <table style={{ ...style }} {...props}>
        <thead>
          {columns.map((el, i) => (
            <tr key={i}>
              <th>{el.id}</th>
              <th>{el.name}</th>
              <th>{el.age}</th>
              <th>{el.city}</th>
            </tr>
          ))}
        </thead>

        <tbody>
          {list.map((el, i) => (
            <tr key={i}>
              <td>{el.id}</td>
              <td>{el.name}</td>
              <td>{el.age}</td>
              <td>{el.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
