import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {showEdit: false, showText: '', inputValue: ''}

  onShowEdit = () => {
    this.setState({showEdit: false})
  }

  onShowSave = () => {
    this.setState({showEdit: true})
  }

  onClickText = event => {
    this.setState({
      inputValue: event.target.value,
      showText: event.target.value,
    })
  }

  render() {
    const {showEdit, inputValue, showText} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Editable Text Input</h1>

          <div className="edit-container">
            {showEdit ? (
              <p className="text-style">{showText}</p>
            ) : (
              <input
                type="text"
                className="input-style"
                onChange={this.onClickText}
                value={inputValue}
              />
            )}
            {showEdit ? (
              <button
                type="button"
                onClick={this.onShowEdit}
                className="btn-style"
              >
                Edit
              </button>
            ) : (
              <button
                type="button"
                onClick={this.onShowSave}
                className="btn-style"
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
