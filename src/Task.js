import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export class Task extends Component{

    render () {
        const task = this.props.value;
        return (
            <div style={{ marginBottom: '1rem', width: '50vw' }}>
                <Card>
                    <CardContent>
                        {task.title}
                    </CardContent>
                </Card>

            </div>
        );

    }
}

export default Task; 
