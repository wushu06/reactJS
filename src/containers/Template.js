import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import InjectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};
InjectTapEventPlugin()

class Template extends Component {
    render () {
        return (
            <MuiThemeProvider>
                <div>
                    <header>
                        <h1>TicTac</h1>
                        <RaisedButton label="test" primary={true} style={style} onTouchTap={()=>{console.log('touch')}} />
                    </header>
                    <main>
                        {this.props.children}
                    </main>
                </div>
            </MuiThemeProvider>
        )
    }

}

export default Template
