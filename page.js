"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault(); //prevent from page reload. Remove 1 and 2 you will underatand
    setMainTask([...mainTask, { title, desc }]);
    setdesc(""); //1
    settitle(""); //2
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2>No tash Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      //t->object name, i->object index
      return (
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="flex justify-between items-center w-2/3">
            <h4 className="text-2xl font-semibold">
              <h3 className="text-2xl ml-10 text-slate-800">Task{i + 1}</h3>
              <br />
              {t.title}
            </h4>
            <h5 className="text-l font-medium">
              <h3 className="text-2xl mr-10 text-slate-800">
                Description{i + 1}
              </h3>
              <br />
              {t.desc}
            </h5>
          </div>
          <button onClick={() => {
            deleteHandler(i);
          }} className="bg-red-600 text-white px-4 py-2 rounded font-bold">
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-4 px-4 py-2"
          placeholder="Enter title Here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        ></input>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-4 px-4 py-2"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        ></input>
        <button className="bg-black text-white px-5 py-3 text-2xl font-bold rounded m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
