function addValueToCell(idElement, value){
    document.getElementById(idElement).innerHTML = value;
}

var search_CEP_Info = () => {

    var cep="";

    try {

        cep = document.getElementById("input-cep").value;

        if((cep==null || cep==="") || cep.includes("_")){
            document.getElementById("divResponseView").setAttribute("hidden", null);
            alert("CEP inválido") 
            return;
        }else{
            console.log("VALID CEP: "+cep)

            var cepFormated = (cep.replaceAll(".", "")).replaceAll("-", "");

            var HttpReq = new XMLHttpRequest();
            HttpReq.open("GET", "https://viacep.com.br/ws/"+ cepFormated +"/json", false);
            HttpReq.send();
            var responseJSON = JSON.parse(HttpReq.responseText);

            if(responseJSON.erro !== undefined){
                document.getElementById("divResponseView").setAttribute("hidden", null);
               alert("Este CEP não existe!")
            }else{

                document.getElementById("divResponseView").removeAttribute("hidden");

                responseJSON = JSON.parse(JSON.stringify(responseJSON).replaceAll('""','"Não presente"'));

                addValueToCell("tdCEP", responseJSON.cep);
                addValueToCell("tdUF", responseJSON.uf);
                addValueToCell("tdDDD", responseJSON.ddd);
                addValueToCell("tdCidade", responseJSON.localidade);
                addValueToCell("tdBairro", responseJSON.bairro);
                addValueToCell("tdRua", responseJSON.logradouro);
                addValueToCell("tdComplemento", responseJSON.complemento);
                addValueToCell("tdIBGE", responseJSON.ibge);
                addValueToCell("tdGIA", responseJSON.gia);
                addValueToCell("tdSIAFI", responseJSON.siafi);

            }

        }

    } catch (error) {

        console.log(error);
        document.getElementById("divResponseView").setAttribute("hidden", null);
        alert("CEP inválido") 

    }

}

export default search_CEP_Info;