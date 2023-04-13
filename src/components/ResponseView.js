function ResponseView () { 
    return(
        <div id="divResponseView" hidden>
            <table className="tableResponse">
                <tbody>
                    <tr>
                        <td className="th">CEP</td>
                        <td id="tdCEP"></td>
                    </tr>
                    <tr>
                        <td className="th">UF</td>
                        <td id="tdUF"></td>
                    </tr>
                    <tr>    
                        <td className="th">DDD</td>
                        <td id="tdDDD"></td>
                    </tr>
                    <tr>    
                        <td className="th" >Cidade</td>
                        <td id="tdCidade"></td>
                    </tr>
                    <tr>
                        <td className="th">Bairro</td>
                        <td id="tdBairro"></td>
                    </tr>
                    <tr>    
                        <td className="th">Rua</td>
                        <td id="tdRua"></td>
                    </tr>
                    <tr>    
                        <td className="th">Complemento</td>
                        <td id="tdComplemento"></td>
                    </tr>
                    <tr>    
                        <td className="th">IBGE</td>
                        <td id="tdIBGE"></td>
                    </tr>
                    <tr>    
                        <td className="th">GIA</td>
                        <td id="tdGIA"></td>
                    </tr>
                    <tr>    
                        <td className="th">SIAFI</td>
                        <td id="tdSIAFI"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResponseView;