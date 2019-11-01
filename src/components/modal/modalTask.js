import React, { useEffect, useState } from 'react'
import chroma from 'chroma-js';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Select from 'react-select'

import { toggleModalTask } from '../../store/actions/modal'

import { setValueSelect } from '../../helper'
import { api } from '../../services/api'

const customStylesCliente = {
    option: (provided, state) => ({
        ...provided,
      width: '100%',
      background: 'transparent',
      height: 17,
      color: '#7e7e7e',
      padding: "0px",
      fontSize: 14,
      fontWeight: 500,
      marginBottom: "15px",
      cursor: 'pointer',
      }),
  
      input: () =>({
          width: '100%',
          borderBottom: '1px solid #b7b7b7',
          padding: "0px 0px 0px 0px",
      }),
  
      valueContainer:(provided) => ({
          ...provided,
          paddingLeft:0,
          paddingRight: 0,
          cursor: 'pointer',
      }),
  
      dropdownIndicator:(provided) => ({
          ...provided,
      }),
  
      singleValue: (provided) => ({
          ...provided,
          top: 30,
          color: "#000000",
          fontSize: "14px",
          fontWeight: 500
      }),
  
      indicatorSeparator: (provided) => ({
          ...provided,
          backgroundColor: "unset",
      }),

      indicatorsContainer:(provided) => ({
          ...provided,
          position: 'absolute',
          right: '0px',
          top: "50%",
          transform: "translateY(-50%)",
      }),
  
      menu:(provided) => ({
          ...provided,
          width: "100%",
          height: "150px",
          padding: "10px 10px 10px 45px",
          boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
          backgroundColor: "#fff",
      }),

      menuList:(provided) => ({
          ...provided,
          maxHeight: "332px",
          height: "332px",
      }),
  
      placeholder:(provided) => ({
          ...provided,
          color: "#000000",
          fontSize: "14px",
          fontWeight: 500,
          top: "30px",
      }),
  
      control: () => ({
        width: "100%",
        display: "flex",
      }),    
}
function ModalTask({ modal, toggleModalTask }){

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function loadUser(){
            const response = await api.get('/users') 

            let config = ['name', 'name']

            let values = setValueSelect(config, response.data)

            setUsers(values)
            
        }
        loadUser()
    },[])


    
    console.log(users)

    function closeModal(e){
        if(e.target.classList.value.includes('active')){
            toggleModalTask(false)
        }
    }

    return (
        <div onClick={closeModal} className={ modal ? "container-modal-project active": "container-modal-project" }>
            <div className="card-modal-project">
                <h1>Adicionar Tarefa</h1>  
                <form>
                    <div className="container-form">
                        <input type="text" name="title" placeholder="Titulo" />   
                    </div> 
                      
                    <div className="container-form">
                        <input type="text" name="description" placeholder="Descrição" />   
                    </div>   

                    <div className="container-form">
                        <Select options={users} styles={customStylesCliente} classNamePrefix="react-select"/>
                    </div>
                    
                    <div className="btn">
                        <button type="submit">Adicionar</button>
                    </div>

                </form>
            </div>
        </div>
    )
}



const mapStateToProps = state => ({
  modal: state.modal.modal_tasks
});  

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleModalTask }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalTask)