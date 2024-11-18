console.log(`
[Day 02 - JavaScript]
[Author - Pranav Purankar]

JavaScript’s Lexical Structure`);

console.log(`
The lexical structure of a programming language is the set of elementary rules that 
specifies how you write programs in that language. It is the lowest-level syntax of 
a language.

• Case sensitivity, spaces, and line breaks

JavaScript is a case-sensitive language. This means that language keywords, variables,
function names, & other identifiers must always be typed with a consistent 
capitalization of letters.

Ex: A variable name, 'David', 'david', 'daVid', 'DAVID' are four distinct variable 
names.


• Comments

JavaScript supports two styles of comments. Any text between a // and the end of a 
line is treated as a comment and is ignored by JavaScript. Any text between the 
characters /* and */ is also treated as a comment.

1) Ex: // This is single-line comment.
2) Ex: /* This is
          multi-line 
          comment
       */

• Literals

A literal is a data value that appears directly in a program.

Ex: 12, 1.2, "hello world", 'Hi', true, undefined


• Indetifiers and Reserved words
An identifier is simply a name. In JavaScript, identifiers are used to name constants,variables,
properties, functions, and classes and to provide labels for certain loops in JavaScript code.

Indetifiers must begin with:
    • Letter  • underscore(_)  • dollar sign($)

Ex: i, my_variable_name, v13, _dummy, $str

• Reserved words

The JavaScript lanaguage has reserved keywords that must not be used as the names of constants, 
variables, functions, or classes. Some of them can be used as the name of properties within 
objects, but there are complex rules that govern when they can be used as indetifiers and when 
they cannot. The ideal way is to avoid using any of this keywords.
`);

console.log(`
• Unicode
The Unicode character set can be use to write JavaScript programs. It is good pratice to use only 
ASCII letters and digits in indetifiers, which offers ease of editing and portability. This means 
mathematical symbols and words from non-English langauge can be used as constants and variables.

Ex:
    const π = 3.14;


• Optional Semicolons
The semicolon is use to separate the statements in JavaScript program. This helps in code readability,
maintability.

Rules:
    1) A semicolon can be use to explicitly mark the end of statements, even where they are no required.
    2) If the next token in the program is a closing curly brace, semicolon can be omitted.
    3) Semicolons can be omitted if two statements are written on two different lines.
    4) JavaScript only adds a semicolon at a line break if the next line can't continue the statement.

Ex:1) Multi-line printing and variable declaration
        let a
        a
        =
        3
        console.log(a)

    JavaScript interprets this code like this:
        let a; a = 3; console.log(a);

Exception:
    1) If a line breaks appears after return, throw, yield, break, and continue statements JavaScript will 
       always interpret that line break as a semicolon.
    
       Ex: return
           true;

        JavaScript interpret this code like this:
            return; true;
        
        However, we probably meant:
            return true;
        
        *This means line break must not inserted between mentioned statement and the expression that follows 
        the keywords.
    
    2) The prefix and postfix operators, any of them if used, must appear on the same line as the 
       expression they apply to.

    3) The function defined using arrow function '=>' must appear on the same line as the parameter 
       list.
`);

console.log(`
== Conceptualization ==

• Token :- In programming, a token is a meaningful unit like a word or symbol that a computer understands, such as keywords (if, while), identifiers (totalAmount), 
  operators (+, =), literals (10, "Hello"), and punctuation (;, ()). For example, in total = 10 + 5, total is an identifier, = is an operator, & 10 & 5 are literals.

• Formal Language Theory & Lexical Analysis: Tokenization breaks code into smaller units called tokens (e.g., keywords, identifiers, literals) using formal grammar. 
  For example, in let x = 10 + 5, let is a keyword, x is an identifier, = is an operator, and 10 and 5 are literals.

• Mathematics in Tokenization: Regular expressions (regex) and finite automata help identify patterns in tokens. In JavaScript, /\d+/ (regex) matches numbers, and 
  a deterministic finite automaton (DFA) processes each character sequentially to recognize patterns like identifiers (totalAmount).

• Context-Free Grammars & Parse Trees: Context-free grammars (CFGs) define how tokens combine into larger structures (e.g., expressions). For let x = 10 + 5, the 
  parser forms an abstract syntax tree (AST) where = is the root, and 10 + 5 is the expression subtree.

• Lexical Analysis in Compilers: In compilers, a lexer breaks code into tokens, while the parser uses context-free grammar to build a syntax tree. For let x = 10 + 5, 
  the lexer identifies tokens (let, x, =, 10, +, 5), and the parser creates an AST.

• Mathematical Complexity of Lexical Analysis: Tokenization typically runs in O(n) time, where n is the input length, using deterministic finite automata (DFA). For 
  regex like /\w+/, the DFA processes each character once, ensuring efficient token recognition.

• Finite State Machines in Action: Finite state machines (FSMs) are used to recognize tokens like identifiers. In JavaScript, a DFA processes an identifier like 
  totalAmount, starting from an initial state and moving through states based on valid characters (letters, digits, underscores).

• From Tokens to Abstract Syntax: Tokenization is the first step in compiling code, breaking it into tokens using regular expressions and finite automata, 
  then forming parse trees with context-free grammars for syntactical analysis. For let x = 10 + 5, the final AST represents the expression’s structure for execution.
`);
