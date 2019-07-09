import React, { Component } from 'react'
import TodoList from './TodoList'
class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.a = this.handleChange.bind(this);
        this.b = this.handleSubmit.bind(this);
      }
    
      render() {
        return (
          <div>
            <h3>TODO</h3>
            <TodoList items={this.state} />
            <form onSubmit={this.b}>
              <label htmlFor="new-todo">
                What needs to be done?
              </label>
              <input
                id="new-todo"
                onChange={this.a}
                value={this.state.text}
              />
              <button>
                Add #{this.state.items.length + 1}
              </button>
            </form>
          </div>
        );
      }
    
      handleChange(e) {
        this.setState({ text: e.target.value });                     //값을 보낸다 클릭했을떄 이벤트에서 부모한태 값을 보낸다 setState
}                                                            //e.target.value 이벤트가 걸릴 대상
    
      handleSubmit(e) {
        e.preventDefault();   //폼태그에서 전송되는 submit을 막는다
        if (!this.state.text.length) {
          return;
        }
        const newItem = {
          text: this.state.text,
          id: Date.now()
        };
        this.setState(state => ({
          items: state.items.concat(newItem), // 기존에 있던 배열에 배열을 추가해줌
          text: ''
        }));
      }
    }
    
    
   
export default TodoApp;