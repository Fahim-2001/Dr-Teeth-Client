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
      {/* Question Three */}
      <div className="collapse mx-10">
        <input type="checkbox" />
        <div className="collapse-title text-xl text-left font-medium">
          Q3. What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content">
          <p className="text-left pr-1">
            JavaScript is a programming language, which runs in web browsers.
            Whereas Node.js is an interpreter or running environment for
            JavaScript, which holds a lot of requiring libraries and all.
            JavaScript is basically one standard defining programming language;
            it can run any browser with a default browser running environment.
            It is a very strong language normally used for a web application on
            any verification or any specific business logic. We need to append
            in the screen without page refreshing. JavaScript also helps to use
            Ajax at any time, which helps us call any server-side script for
            given dynamic data based on the requirement. It also helps with
            generating dynamic HTML tables based on business requirement. JQuery
            is one of the popular libraries to make comfortable use of
            JavaScript by avoiding to write a lot of code. <br /> Node.js also
            holds a lot of relative libraries, which we normally use in
            javascript for general purpose programming language. It is actually
            a kind of environment or interpreter that can represent JavaScript
            or run any javascript program. It mainly helps us execute some
            non-blocking operation like some operating system special
            information like certificate details or hardware details; we may use
            node js on the same, which help us do it, and JavaScript normal
            programming will not help us on the same. Normally all browsers have
            a JavaScript engine that helps us to run javascript in a web
            browser. Spider monkey (FireFox), JavaScript Core (Safari), V8
            (Google Chrome) are some popular javascript engine using verities
            browsers. But node js is using the V8 engine directly, with some
            libraries to do some I/O or networking operations. It actually helps
            us use JavaScript from outside of the browser, like creating,
            writing or executing one shell script, some back-end services, or
            running on hardware. Let us understand JavaScript vs Node JS in
            detail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
