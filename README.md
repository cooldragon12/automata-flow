# AutomataFlow
AutomataFlow is a web application that simulates a Deterministic Finite Automaton (DFA) based on a given regular expression problem. It also includes support for Pushdown Automata (PDA) and Context-Free Grammars (CFG). The DFA diagram in the application is interactive, allowing you to validate or simulate input strings.

## Features
- Simulates Deterministic Finite Automaton (DFA), Pushdown Automata (PDA), and Context-Free Grammars (CFG)
- Interactive DFA diagram for visualization
- Validation and simulation of input strings
- Built with Next.js 13.4 App Router for efficient routing
- Animation support using Framer Motion
- Styling with Tailwind CSS
## Installation
To run AutomataFlow locally, follow these steps:

1. Clone the repository:

```shell
git clone https://github.com/your-username/automataflow.git
```
2. Navigate to the project directory:
```shell
cd automataflow
```
3. Install the dependencies:

```shell
npm install
```
4. Start the development server:

```shell
npm run dev
```
5. Open your web browser and visit http://localhost:3000 to access the application.

## Usage
- On the main page of AutomataFlow, you will see the DFA diagram representing the given regular expression problem.
- To validate or simulate an input string, enter the string in the input box provided.
- Click the "Validate" button to check if the input string is accepted by the DFA.
- To simulate the input string, click the "Simulate" button. The DFA's state transitions will be animated to demonstrate the string's processing.
- You can navigate to the PDA and CFG sections of the application to explore and simulate those automata as well.
### NOTE: Please note that currently, AutomataFlow only supports the given regular expression problem. Inputting your own regular expression to convert it into a DFA is not yet implemented.

## Technologies Used
- Next.js 13.4 App Router: A powerful framework for building server-rendered React applications with efficient routing capabilities.
- Framer Motion: A library for creating smooth animations in React applications.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
## Contributing
Contributions to AutomataFlow are welcome! If you find any issues or have ideas for new features, please open an issue on the project's GitHub repository. You can also submit pull requests with your proposed changes.

When contributing, please ensure that your code adheres to the existing code style and that you include appropriate tests for any new functionality.

### Contributions:
- Alphonsus Joseph Bihag
- Miguel Antonio Chavez
- Johndel Encabo
- Edward Raphael Viñegas
- Maria Cassandra Vitug

## License
The AutomataFlow project is licensed under the MIT License. You are free to use, modify, and distribute the code as permitted by the license. See the LICENSE file for more details.

## Acknowledgments
AutomataFlow was inspired by the fascinating field of automata theory and its practical applications. The project utilizes various technologies and frameworks to create an intuitive and interactive tool for simulating DFAs, PDAs, and CFGs.

Special thanks to the creators and maintainers of Next.js, Framer Motion, and Tailwind CSS for their excellent tools and documentation, which made the development process smoother.

## References
Also, special thanks to this [video](https://www.youtube.com/watch?v=32bC33nJR3A) by ComputerPhile for the DFA Validation using python.


## Contact
If you have any questions, suggestions, or feedback regarding AutomataFlow, you can reach out to the project maintainer at johndelencabo@gmail.com We appreciate your interest and involvement in the project!