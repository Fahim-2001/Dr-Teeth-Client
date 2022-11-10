import React from "react";
import useTitle from "../../Utilities/useTitle";

const Blog = () => {
  useTitle("Blog");
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
      {/* Question Four */}
      <div className="collapse mx-10">
        <input type="checkbox" />
        <div className="collapse-title text-xl text-left font-medium">
          Q4. How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content">
          <p className="text-left pr-1">
            Given a NodeJS application, since Node is single threaded, say if
            processing involves a Promise.all that takes 8 seconds, does this
            mean that the client request that comes after this request would
            need to wait for eight seconds? No. NodeJS event loop is single
            threaded. The entire server architecture for NodeJS is not single
            threaded. Before getting into the Node server architecture, to take
            a look at typical multithreaded request response model, the web
            server would have multiple threads and when concurrent requests get
            to the webserver, the webserver picks threadOne from the threadPool
            and threadOne processes requestOne and responds to clientOne and
            when the second request comes in, the web server picks up the second
            thread from the threadPool and picks up requestTwo and processes it
            and responds to clientTwo. threadOne is responsible for all kinds of
            operations that requestOne demanded including doing any blocking IO
            operations. The fact that the thread needs to wait for blocking IO
            operations is what makes it inefficient. With this kind of a model,
            the webserver is only able to serve as much requests as there are
            threads in the thread pool. NodeJS Web Server maintains a limited
            Thread Pool to provide services to client requests. Multiple clients
            make multiple requests to the NodeJS server. NodeJS receives these
            requests and places them into the EventQueue . NodeJS server has an
            internal component referred to as the EventLoop which is an infinite
            loop that receives requests and processes them. This EventLoop is
            single threaded. In other words, EventLoop is the listener for the
            EventQueue. So, we have an event queue where the requests are being
            placed and we have an event loop listening to these requests in the
            event queue. What happens next? The listener(the event loop)
            processes the request and if it is able to process the request
            without needing any blocking IO operations, then the event loop
            would itself process the request and sends the response back to the
            client by itself. If the current request uses blocking IO
            operations, the event loop sees whether there are threads available
            in the thread pool, picks up one thread from the thread pool and
            assigns the particular request to the picked thread. That thread
            does the blocking IO operations and sends the response back to the
            event loop and once the response gets to the event loop, the event
            loop sends the response back to the client. How is NodeJS better
            than traditional multithreaded request response model? With
            traditional multithreaded request/response model, every client gets
            a different thread where as with NodeJS, the simpler request are all
            handled directly by the EventLoop. This is an optimization of thread
            pool resources and there is no overhead of creating the threads for
            every client request.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
