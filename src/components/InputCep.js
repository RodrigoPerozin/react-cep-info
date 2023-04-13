import InputMask from 'react-input-mask';

function InputCEP() {
    return (
        <InputMask mask="99.999-999" placeholder='00.000-000' type="text" id="input-cep" className="form-control input-cep"/>
    )
}

export default InputCEP;