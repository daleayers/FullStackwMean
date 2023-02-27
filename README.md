# FullStackw/Mean
-Architecture 
The two main types of frontend development that I used to create this FullStack website are Express HTML and Single Page Application (SPA). The main difference between the two is Express HTML is suited for applications that require multiple pages and good SEO, while JavaScript is essential for dynamic client-side interactions. SPAs provide a seamless user experience and minimize server requests but can have SEO challenges and require additional development effort. Developers can choose the technology that best suits their application requirements and development goals.

In this project, we used MongoDB, which has several advantages. 

Schemaless Design: MongoDB is a document-oriented database that stores data in a JSON-like format called BSON. This allows developers to store and retrieve data without defining a strict schema, which makes it easier to work with dynamic and evolving data structures. This feature is handy in modern web applications, where data structures can frequently change as the application evolves.

Scalability: MongoDB is designed to scale horizontally, which means it can handle large amounts of data by adding more servers to the database cluster. This makes it an ideal choice for applications that require high scalability and performance.
Flexibility: MongoDB is highly flexible and allows developers to store data in various formats, including arrays and nested documents. This feature enables developers to model complex data structures and relationships easily.

JavaScript Integration: MongoDB's query language is based on JavaScript, making it easy to integrate with the MEAN stack, which also uses JavaScript on both the client and server side.

-Functionality JavaScript vs. JSON
JavaScript is a programming language used primarily for web development, while JSON is a data format used for data exchange between different systems. JavaScript supports functions, loops, and other programming constructs, while JSON is simply a text-based format that represents data as key-value pairs.
In a typical web application, the frontend and backend communicate with each other by exchanging data in JSON format. The backend typically generates JSON data from a database or other data sources and sends it to the frontend, which then displays the data in the browser. The frontend can also send data to the backend in JSON format, allowing the backend to process and store the data as needed.
JSON provides a standardized format for exchanging data between different systems, making it easy to integrate different parts of a web application.

-Improved Functionality examples
Throughout this process, I steadily improved this website with several different features. One of my favourites is using handlebars inside the frontend HTML to communicate with the backend JSON files. Doing this makes to website more dynamic and more efficient as we can go from multiple lines of inefficient code to only a few that read and write from a JSON file. We can then update the JSON file if needed. 

-Methods, Endpoints, Security
In a full-stack application, methods, endpoints, and security play essential roles in creating a robust and secure application. Here's a brief explanation of each:
Methods: Methods refer to the HTTP verbs used in API requests, such as GET, POST, PUT, DELETE, etc. Each method corresponds to a specific action that the API can perform, such as retrieving data (GET), creating data (POST), updating data (PUT), or deleting data (DELETE). The API methods are implemented on the backend and are accessed through API endpoints.

Endpoints: Endpoints are the URLs through which the front end can access the API methods implemented on the backend. Each endpoint corresponds to a specific resource or action that the API can perform. For example, an endpoint might be "/api/users" for retrieving a list of users or "/api/users/:id" for retrieving a specific user by ID. Endpoints typically include the HTTP method and a resource identifier.

Security: Security is a critical aspect of full-stack development, as web applications are vulnerable to a variety of attacks, such as SQL injection, cross-site scripting, and session hijacking. To ensure the security of a full-stack application, developers must implement security measures such as input validation, authentication, authorization, and encryption. These measures help to prevent unauthorized access to the application's data and resources, ensuring that the application is secure and protected from attacks.

-Reflection
This course has helped me to understand the front and backends of websites in a more robust manner. It has also helped me to understand databases and terminals in a more dynamic way. Implementing some security features was very fun for me because that is the way I am most interested in. The way we validate users is one of the first steps in any kind of security framework. Overall I learned a lot in this class, and I'm excited to learn more. 
