import React from "react";

export default function Search() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <section className="container ">
      <form onSubmit={(e) => onSubmit(e)} className="mx-auto max-w-fit">
        <input
          type="text"
          placeholder="Type here..."
          className="border-b leading-8 text-lg py-2 px-4"
        />
        <button
          type="submit"
          className="btn p-4 ml-2 active:scale-90 duration-200 rounded"
        >
          Search
        </button>
      </form>
    </section>
  );
}
