import React, { useState } from "react";

function Todo() {
  const [activity, setActivity] = useState('');
  const [listData, setListData] = useState([]);

  function addActivity() {
    setListData(() => {
      const udatedList = [...listData, activity];
      console.log(udatedList);
      setActivity('');
      return udatedList;
    })
  }

  function removeActivity(i) {
    const updatedListData = listData.filter((elem, id) => {
      return i!==id;
    });
    setListData(updatedListData);
  }

  function removeAll() {
    setListData([]);
  }

  return (
    <>
      <div className="container">
        <div className="header">TODO LIST 📝</div>
        <input type='text' placeholder='✍️ Enter your task' value={activity} onChange={(e) => setActivity(e.target.value)} />
        <button onClick={addActivity} >Add</button>
        {listData !== [] && listData.map((data, i) => {
          return (
            <>
              <p key={i}>
                <div className="listData">{data}</div>
                <span><button onClick={() => removeActivity(i)} >Remove</button></span>          
              </p>
            </>
          )
        })}

        {listData.length >= 1 && <button onClick={removeAll} >Remove All</button>}
      </div>
    </>
  );
}

export default Todo;
