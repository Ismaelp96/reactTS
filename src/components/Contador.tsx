import { Component } from 'react'
import ContadorValor from './ContadorValor'
import logRender from '../decorators/LogRender'

interface IContadorProps {
  valorInicial?: number
}

interface IContadorState {
  valor: number
}

@logRender
export default class Contador extends Component<
  IContadorProps,
  IContadorState
> {
  public state = { valor: this.props.valorInicial || 0 }
  private setValor = (delta: number) => {
    this.setState({
      valor: this.state.valor + delta,
    })
  }
  render() {
    return (
      <>
        <ContadorValor contador={this.state.valor} />
        <button onClick={() => this.setValor(10)}>+</button>
        <button onClick={() => this.setValor(-10)}>-</button>
      </>
    )
  }
}
