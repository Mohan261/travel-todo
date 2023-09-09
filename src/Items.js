import "./Items.css";

const Items = ({
  itemList,
  clearList,
  deleteList,
  packedStatus,
  sortItems,
}) => {
  return (
    <div className="items-sec">
      <div className="items-cont">
        <ul className="list-items">
          {itemList.map((list) => (
            <ItemComp
              key={list.id}
              listItems={list}
              deleteList={deleteList}
              packedStatus={packedStatus}
            />
          ))}
        </ul>
      </div>
      <div className="sort-sec">
        <select className="sort" onChange={(e) => sortItems(e.target.value)}>
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="pack">SORT BY PACK STATUS</option>
          <option value="description">SORT BY DESCRIPTION</option>
        </select>
        <button className="clear-btn" onClick={clearList}>
          CLEAR LIST
        </button>
      </div>
    </div>
  );
};
const ItemComp = ({ listItems, deleteList, packedStatus }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={(e) => packedStatus(listItems.id, e.target.checked)}
        checked={listItems.packed}
      />
      <span className={listItems.packed ? "line" : ""}>
        {listItems.quantity} {listItems.product}
      </span>
      <button
        className="del-btn"
        onClick={() => {
          deleteList(listItems.id);
        }}
      >
        &times;
      </button>
    </li>
  );
};
export default Items;
