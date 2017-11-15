import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import TextField from '../wrappers/TextField';

export default class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: true,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Validations"
          subtitle="Form Validation example"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardTitle title="Form" subtitle="Enter values in textfields to see validations in action" expandable={true} />
        <CardText expandable={true}>
          <form>
            <TextField  
              id="primerTextfield"
              hintText="Enter your TIN"
            />
          </form>
        </CardText>
        <CardActions>
          <FlatButton label="Save Form"  />
        </CardActions>
      </Card>
    );
  }
}