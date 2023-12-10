import styles from "./Table.module.css";

const Table = ({ columns, list, style, ...props }) => {
  return (
    <div className={styles.table}>
      <table style={{ ...style }} {...props}>
        <thead>
          <tr>
            {columns.map((el, index) => (
              <TableHead key={index} item={el} />
            ))}
          </tr>
        </thead>

        <tbody>
          {list.map((el, index) => (
            <TableRow key={index} item={el} column={columns} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableHead = ({ item }) => <th>{item.heading}</th>;

const TableRow = ({ item, column }) => (
  <tr>
    {column.map((columnItem, index) => {
      if (columnItem.value.includes(".")) {
        const itemSplit = columnItem.value.split(".");
        return <td key={index}>{item[itemSplit[0]][itemSplit[1]]}</td>;
      }

      return <td key={index}>{item[`${columnItem.value}`]}</td>;
    })}
  </tr>
);

export default Table;
