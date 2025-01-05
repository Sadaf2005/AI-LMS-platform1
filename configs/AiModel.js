const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 
    export const courseOutlineAIModel= model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate a study material for java' for exam and level of difficulty will be easy with the summary of course ,List of Chapters along with summary for each  chapter,topic list in each chapter in JSON format only"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"courseTitle\": \"Introduction to Java Programming\",\n  \"courseSummary\": \"This course provides a fundamental introduction to Java programming, covering basic syntax, data types, control flow, object-oriented principles, and essential Java APIs. It's designed for beginners with little or no prior programming experience.\",\n  \"level\": \"Easy\",\n  \"chapters\": [\n    {\n      \"chapterNumber\": 1,\n      \"chapterTitle\": \"Getting Started with Java\",\n      \"chapterSummary\": \"This chapter introduces the basics of Java, including setting up the development environment, writing a simple 'Hello, World!' program, and understanding the basic structure of a Java program.\",\n      \"topics\": [\n        \"What is Java?\",\n        \"Why use Java?\",\n        \"Setting up the Java Development Kit (JDK)\",\n        \"Writing your first Java program ('Hello, World!')\",\n        \"Understanding the main method\",\n        \"Compiling and running Java programs\",\n        \"Basic Java program structure\"\n      ]\n    },\n    {\n      \"chapterNumber\": 2,\n      \"chapterTitle\": \"Data Types and Variables\",\n      \"chapterSummary\": \"This chapter covers fundamental data types in Java, how to declare and initialize variables, and the concept of using different types to store different kinds of data.\",\n       \"topics\": [\n        \"Primitive data types (int, float, double, char, boolean)\",\n        \"Declaring variables\",\n        \"Initializing variables\",\n        \"Using different data types\",\n        \"Type conversion (casting)\",\n        \"Constants using final keyword\",\n        \"Understanding variable scope\"\n\n       ]\n    },\n    {\n      \"chapterNumber\": 3,\n      \"chapterTitle\": \"Operators and Expressions\",\n      \"chapterSummary\": \"This chapter explains the different types of operators in Java, how to combine them to create expressions, and how to use them to perform calculations and comparisons.\",\n      \"topics\": [\n        \"Arithmetic operators (+, -, *, /, %)\",\n         \"Assignment operator (=)\",\n        \"Increment and decrement operators (++, --)\",\n        \"Comparison operators (==, !=, >, <, >=, <=)\",\n        \"Logical operators (&&, ||, !)\",\n         \"Operator precedence\",\n        \"Creating and evaluating expressions\"\n      ]\n    },\n     {\n      \"chapterNumber\": 4,\n      \"chapterTitle\": \"Control Flow Statements\",\n      \"chapterSummary\": \"This chapter introduces the concept of control flow using conditional (if, else, else if) and looping statements (for, while, do-while) to control the order of execution of code.\",\n      \"topics\": [\n         \"Conditional statements (if, else, else if)\",\n         \"Nested if statements\",\n        \"Looping statements (for loop)\",\n        \"Looping statements (while loop)\",\n        \"Looping statements (do-while loop)\",\n         \"Break and continue statements\",\n         \"Nested loops\"\n\n      ]\n    },\n    {\n        \"chapterNumber\": 5,\n        \"chapterTitle\": \"Introduction to Object-Oriented Programming (OOP)\",\n        \"chapterSummary\": \"This chapter introduces the basic principles of Object-Oriented Programming (OOP) using Java, including classes, objects, methods, and the basic ideas of encapsulation.\",\n        \"topics\": [\n          \"What is Object-Oriented Programming?\",\n          \"Classes and objects\",\n          \"Creating objects\",\n          \"Accessing members of an object\",\n          \"Methods\",\n           \"Method parameters and return types\",\n            \"Introduction to Encapsulation\"\n        ]\n      },\n      {\n        \"chapterNumber\": 6,\n        \"chapterTitle\": \"Working with Strings\",\n        \"chapterSummary\": \"This chapter focuses on the String class in Java and its usage for manipulating text data. It includes string creation, common string methods and use of escape characters\",\n         \"topics\":[\n          \"String declaration and initialization\",\n          \"String concatenation\",\n          \"Common String methods (length, charAt, substring, indexOf, equals)\",\n          \"Immutability of Strings\",\n          \"String comparison\",\n          \"String formatting using printf and String.format\",\n          \"Escape characters\"\n         ]\n    }\n     ,\n     {\n        \"chapterNumber\": 7,\n        \"chapterTitle\": \"Basic Input and Output\",\n        \"chapterSummary\": \"This chapter teaches how to take input from the user using the Scanner class and output to the console using System.out.println.\",\n        \"topics\": [\n          \"Using the Scanner class for input\",\n          \"Taking different types of input (int, float, String)\",\n          \"Printing output to the console using System.out.println\",\n          \"Formatted output using printf\"\n        ]\n      }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
  
  
    // const {
    //   GoogleGenerativeAI,
    //   HarmCategory,
    //   HarmBlockThreshold,
    // } = require("@google/generative-ai");
    
    // const apiKey = process.env.GEMINI_API_KEY;
    // const genAI = new GoogleGenerativeAI(apiKey);
    
    // const model = genAI.getGenerativeModel({
    //   model: "gemini-2.0-flash-exp",
    // });
    
    // const generationConfig = {
    //   temperature: 1,
    //   topP: 0.95,
    //   topK: 40,
    //   maxOutputTokens: 8192,
    //   responseMimeType: "text/plain",
    // };
    
    // async function run() {
    //   const chatSession = model.startChat({
    //     generationConfig,
    //     history: [
    //       {
    //         role: "user",
    //         parts: [
    //           {text: "Generate a study material for java' for exam and level of difficulty will be easy with the summary of course ,List of Chapters along with summary for each  chapter,topic list in each chapter in JSON format only"},
    //         ],
    //       },
    //       {
    //         role: "model",
    //         parts: [
    //           {text: "```json\n{\n  \"courseTitle\": \"Introduction to Java Programming\",\n  \"courseSummary\": \"This course provides a fundamental introduction to Java programming, covering basic syntax, data types, control flow, object-oriented principles, and essential Java APIs. It's designed for beginners with little or no prior programming experience.\",\n  \"level\": \"Easy\",\n  \"chapters\": [\n    {\n      \"chapterNumber\": 1,\n      \"chapterTitle\": \"Getting Started with Java\",\n      \"chapterSummary\": \"This chapter introduces the basics of Java, including setting up the development environment, writing a simple 'Hello, World!' program, and understanding the basic structure of a Java program.\",\n      \"topics\": [\n        \"What is Java?\",\n        \"Why use Java?\",\n        \"Setting up the Java Development Kit (JDK)\",\n        \"Writing your first Java program ('Hello, World!')\",\n        \"Understanding the main method\",\n        \"Compiling and running Java programs\",\n        \"Basic Java program structure\"\n      ]\n    },\n    {\n      \"chapterNumber\": 2,\n      \"chapterTitle\": \"Data Types and Variables\",\n      \"chapterSummary\": \"This chapter covers fundamental data types in Java, how to declare and initialize variables, and the concept of using different types to store different kinds of data.\",\n       \"topics\": [\n        \"Primitive data types (int, float, double, char, boolean)\",\n        \"Declaring variables\",\n        \"Initializing variables\",\n        \"Using different data types\",\n        \"Type conversion (casting)\",\n        \"Constants using final keyword\",\n        \"Understanding variable scope\"\n\n       ]\n    },\n    {\n      \"chapterNumber\": 3,\n      \"chapterTitle\": \"Operators and Expressions\",\n      \"chapterSummary\": \"This chapter explains the different types of operators in Java, how to combine them to create expressions, and how to use them to perform calculations and comparisons.\",\n      \"topics\": [\n        \"Arithmetic operators (+, -, *, /, %)\",\n         \"Assignment operator (=)\",\n        \"Increment and decrement operators (++, --)\",\n        \"Comparison operators (==, !=, >, <, >=, <=)\",\n        \"Logical operators (&&, ||, !)\",\n         \"Operator precedence\",\n        \"Creating and evaluating expressions\"\n      ]\n    },\n     {\n      \"chapterNumber\": 4,\n      \"chapterTitle\": \"Control Flow Statements\",\n      \"chapterSummary\": \"This chapter introduces the concept of control flow using conditional (if, else, else if) and looping statements (for, while, do-while) to control the order of execution of code.\",\n      \"topics\": [\n         \"Conditional statements (if, else, else if)\",\n         \"Nested if statements\",\n        \"Looping statements (for loop)\",\n        \"Looping statements (while loop)\",\n        \"Looping statements (do-while loop)\",\n         \"Break and continue statements\",\n         \"Nested loops\"\n\n      ]\n    },\n    {\n        \"chapterNumber\": 5,\n        \"chapterTitle\": \"Introduction to Object-Oriented Programming (OOP)\",\n        \"chapterSummary\": \"This chapter introduces the basic principles of Object-Oriented Programming (OOP) using Java, including classes, objects, methods, and the basic ideas of encapsulation.\",\n        \"topics\": [\n          \"What is Object-Oriented Programming?\",\n          \"Classes and objects\",\n          \"Creating objects\",\n          \"Accessing members of an object\",\n          \"Methods\",\n           \"Method parameters and return types\",\n            \"Introduction to Encapsulation\"\n        ]\n      },\n      {\n        \"chapterNumber\": 6,\n        \"chapterTitle\": \"Working with Strings\",\n        \"chapterSummary\": \"This chapter focuses on the String class in Java and its usage for manipulating text data. It includes string creation, common string methods and use of escape characters\",\n         \"topics\":[\n          \"String declaration and initialization\",\n          \"String concatenation\",\n          \"Common String methods (length, charAt, substring, indexOf, equals)\",\n          \"Immutability of Strings\",\n          \"String comparison\",\n          \"String formatting using printf and String.format\",\n          \"Escape characters\"\n         ]\n    }\n     ,\n     {\n        \"chapterNumber\": 7,\n        \"chapterTitle\": \"Basic Input and Output\",\n        \"chapterSummary\": \"This chapter teaches how to take input from the user using the Scanner class and output to the console using System.out.println.\",\n        \"topics\": [\n          \"Using the Scanner class for input\",\n          \"Taking different types of input (int, float, String)\",\n          \"Printing output to the console using System.out.println\",\n          \"Formatted output using printf\"\n        ]\n      }\n  ]\n}\n```\n"},
    //         ],
    //       },
    //     ],
    //   });
    
    //   const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    //   console.log(result.response.text());
    // }
    
    // run();
