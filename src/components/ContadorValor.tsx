interface IContadorValorProps {
  contador: number
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (props: IContadorValorProps) => {
  return <p>{props.contador}</p>
}
