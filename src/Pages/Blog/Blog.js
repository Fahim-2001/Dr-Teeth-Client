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
      {/* Question Two */}
      <div className="collapse mx-10">
        <input type="checkbox" />
        <div className="collapse-title text-xl text-left font-medium">
          Q2. What is JWT, and how does it work?
        </div>
        <div className="collapse-content">
          <p className="text-left pr-1">
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as JSON object. It is
            compact, readable and digitally signed using a private key/ or a
            public key pair by the Identity Provider(IdP). So the integrity and
            authenticity of the token can be verified by other parties involved.
            The purpose of using JWT is not to hide data but to ensure the
            authenticity of the data. JWT is signed and encoded, not encrypted.
            JWT is a token based stateless authentication mechanism. Since it is
            a client-side based stateless session, server doesn't have to
            completely rely on a datastore(database) to save session
            information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
