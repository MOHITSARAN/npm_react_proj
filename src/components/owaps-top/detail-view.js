import React from "react";
import { Table } from 'react-bootstrap';

const GetListItems = props => {
  let arr_str = []
  if (props.item){
    arr_str = (
        <ul>{props.item.map((item, i) => <li key={i}>{item}</li>)}</ul> 
    )
    return arr_str
  }
}

const GetReferencesURL = props => {
  let url_str = []
  if (props.item){
    url_str = (
      <ul style={{"word-break":"break-word"}}>{props.item.map((item, i) => <li key={i}><a key={i} href={item} target='_blank' rel="noopener noreferrer" style={{"color":"blue"}}>{item}</a></li>)}</ul> 
    )
    return url_str
  }
}

const DetailView = props => {
   
   var risks = 'None'
   var summary = 'None'
   var item_obj = 'None'

   var exploitability = 'None'
   var detectability = 'None'
   var technical = 'None'
   var prevalence = 'None'

   var exploitability_info = 'None'
   var detectability_info = 'None'
   var technical_info = 'None'

   var application_vulnerable = 'None'
   var prevent = 'None'

   var attack = 'None'
   var url = 'None'

  if (props.details === true){

    item_obj = props.summary;

    risks = item_obj.risks;
    summary = item_obj.summary;

    exploitability = item_obj.exploitability;
    detectability = item_obj.detectability;
    technical = item_obj.technical;

    exploitability_info = item_obj.exploitability_info;
    detectability_info = item_obj.detectability_info;
    technical_info = item_obj.technical_info;

    application_vulnerable = <GetListItems item={item_obj.application_vulnerable} />;
    prevent = <GetListItems item={item_obj.prevent} />;

    attack = <GetListItems item={item_obj.attack} />;
    url = <GetReferencesURL item={item_obj.url} />;

  }

  return (
    <Table striped bordered hover style={{"backgroundColor": "white"}}>
      <thead>
        <tr style={{"backgroundColor": "#3f51b5","color":"white"}}>
          <td colSpan="2" style={{"textAlign":"center"}}> {risks} </td>
        </tr>
        <tr>
          <td colSpan="2">{summary}</td>
        </tr>
        <tr>
         <td colSpan="2" >
         <Table striped bordered hover style={{"backgroundColor": "white"}}>
          <thead>
            <tr style={{"backgroundColor": "whitesmoke"}}><th colSpan="2">Threat Agents / Attack Vectors</th><th colSpan="2">Security Weakness</th><th colSpan="2">Impacts</th></tr>
            <tr>
              <td>App. Specific</td>
              <td>Exploitability: {exploitability} </td>
              <td>Prevalence: {prevalence} </td>
              <td>Detectability: {detectability} </td>
              <td>Technical: {technical} </td>
              <td>Business ?</td>
            </tr>
          </thead>
          <tbody>
          <tr style={{"backgroundColor": "white"}}>
            <td colSpan="2">{exploitability_info}</td>
            <td colSpan="2">{detectability_info}</td>
            <td colSpan="2">{technical_info}</td>
          </tr>
        </tbody>
        </Table>
        </td>
       </tr>
        <tr>
          <td style={{"width":"50%"}}>Is the Application Vulnerable? <hr/> {application_vulnerable}</td>
          <td>How to Prevent <hr/>  {prevent}</td>
        </tr>
        <tr>
          <td>Example Attack Scenarios <hr/> {attack}</td>
          <td>References <hr/>  {url}</td>
        </tr>
       </thead>
      </Table>
  )
}

export default DetailView;