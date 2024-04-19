/** @format */

export default (itens: Array<any>, maximo: number): Array<Array<any>> => {
  return itens.reduce((acumulador, item, indice) => {
    const grupo = Math.floor(indice / maximo);
    acumulador[grupo] = [...(acumulador[grupo] || []), item];
    return acumulador;
  }, []);
};
