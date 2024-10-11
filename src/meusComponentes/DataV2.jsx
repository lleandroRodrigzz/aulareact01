import { useState, useEffect } from "react";
//useEffect permite gerenciar o ciclo de vida
// do componente quando ele é desenvolvido utilizado
// a sintaxe JSX
/*
a sintaxe do useEffect
    useEffect( function () {

        return function() <-- willUnmount
    }, []didMount //Executa uma vez so)
       [listaDeValoresObservados]didUpdate para cada valor que foi atualizado
*/
export default function DataV2(props) {
    const [dataAtual, setDataAtual] = useState(""); /*new Date().toLocaleString()*/

    function pegaDataDe(timeZone){
        const dataAtual = new Date();
        let timeZoneFromDB = parseInt(timeZone);
        let diferencaTempo = timeZoneFromDB * 60 + dataAtual.getTimezoneOffset();
        let milisegundos = parseInt(dataAtual.getTime() + (diferencaTempo * 60 * 1000));
        const data = new Date(milisegundos);
        return data;
    }

    //Exemplo didMount
    useEffect(() => {
        setDataAtual(new Date().toLocaleString());
        return () => {} //willUnmount
    }, [])

    //Exemplo didUpdate
    useEffect(() => {
        setTimeout(() => {
            setDataAtual(pegaDataDe(props.timeZone).toLocaleString());
        }, 1000);
    },[dataAtual]); //<- Oque observar para executar a função e cada atualização do compontente 

    return (
        <>
            <h1>{props.texto || ""}{dataAtual}</h1>
        </>
    );
}