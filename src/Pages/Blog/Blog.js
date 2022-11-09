import React from "react";

const Blog = () => {
  return (
    <div>
      {/* Question One */}
      <div className="collapse mx-10">
        <input type="checkbox" />
        <div className="collapse-title text-xl text-left font-medium">
          Q1. What is the difference between SQL and NoSQL ?
        </div>
        <div className="collapse-content">
          <p className="text-left">
            The five critical differences between SQL vs NoSQL are: <br /> 1.SQL
            databases are relational, NoSQL databases are non-relational. <br />{" "}
            2.SQL databases use structured query language and have a predefined
            schema. NoSQL databases have dynamic schemas for unstructured data.{" "}
            <br />
            3.SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. <br /> 4.SQL databases are table-based, while
            NoSQL databases are document, key-value, graph, or wide-column
            stores. <br /> 5.SQL databases are better for multi-row
            transactions, while NoSQL is better for unstructured data like
            documents or JSON.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
