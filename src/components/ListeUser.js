import React, { Component } from 'react' 
import { connect} from 'react-redux';  
import ItemUser from'./ItemUser' 
import { affiche_USERS} from "../reducer/actionReducer/action"
class ListeUser extends Component {
    componentDidMount() {
        this.props.affiche_USERS()
    }
    render() {
        return (
          <div className="ListeUser">
                {
                    this.props.users.map((user, index) => <ItemUser key={index}  infos={user} />)
                }
          </div>
        )
    }
}
const mapStateToProps = state => ({
    users: state.users.users
})
export default connect(mapStateToProps, { affiche_USERS })(ListeUser)