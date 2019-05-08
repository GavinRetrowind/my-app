import React from 'react';
import Paper from '@material-ui/core/Paper';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

class Home extends React.Component
{
  constructor(props)
  {
    super(props);
    console.log(props);
  }
  render() {
    const input = "language: PropTypes.string";
    return (
      <Paper  elevation = {5} square={true}>
        <div>
        <h1 className = "title">Welcome</h1>
        </div>
        <br/>
        <div className = "text">
          <h1>Welcome to MYAPP. </h1>
          <br/>
          <h1>Material-UI is an MIT-licensed open source project. It's an independent project with ongoing development made possible entirely thanks to the support of these awesome backers.</h1>
        </div>
      </Paper>
    )
  }
}
export default Home
