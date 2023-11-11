import React from "react";
// import { robots } from '../robots';
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox'
import './App.css'



class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })


    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState(({ robots: users }))
            })

    }

    render() {
        const { robots, searchfield } = this.state;
        const filterRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
            <h1 className="tc">Loading...</h1> :

            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />

                    <Scroll>
                        <CardList robots={filterRobot} />
                    </Scroll>
                </div>

            )
    }

}
    
    


export default App;