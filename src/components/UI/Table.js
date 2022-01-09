import classes from "./Table.module.css";

const Table = (props) => {
  const handleViewDetailsBtnClick = (event) => {
    const productId = event.target.id.split("_")[1];
    props.onDetailBtnClick(productId);
  };

  return (
    <table className={classes["table-border"]}>
      <thead>
        <tr id="heading">
          <th id="ProductName" className={classes["table-border"]}>
            Product Names
          </th>
          <th id="Details" className={classes["table-border"]}>
            View Details
          </th>
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row) => (
          <tr key={`Row${row.productId}`}>
            <td
              key={`ProductName${row.productId}`}
              className={classes["table-border"]}
            >
              {row.productName}
            </td>
            <td
              key={`DetailBtn${row.productId}`}
              className={classes["table-border"]}
            >
              <button
                type="button"
                id={`button_${row.productId}`}
                onClick={handleViewDetailsBtnClick}
              >
                View Details
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
