import { LightningElement, api } from "lwc";
import opportunityObject from "@salesforce/schema/Opportunity";
import Nome from "@salesforce/schema/Opportunity.Name";
import CloseDate from "@salesforce/schema/Opportunity.CloseDate";
import StageName from "@salesforce/schema/Opportunity.StageName";
import Peso from "@salesforce/schema/Opportunity.PesoKg__c";
import Email from "@salesforce/schema/Opportunity.E_mail__c";
import Quantidade from "@salesforce/schema/Opportunity.Quantidade_L__c"; 
import origem from "@salesforce/schema/Opportunity.EnderecoDeOrigem__c"; 
import destino from "@salesforce/schema/Opportunity.EnderecoDeDestino__c";
import { ShowToastEvent } from "lightning/platformShowToastEvent"; 

/**
 * Creates Account records.
 */
export default class atividade3 extends LightningElement {
  opportunityObject = opportunityObject;
  nameField = Nome;
  EmailField = Email;
  PesoFiel = Peso;
  QuantidadeField = Quantidade
  destinoField = destino
  origemField = origem
  CloseDateField = CloseDate;
  StageNameField = StageName;

  @api recordId;

  handleOpportunityCreated(event) {
    console.log(event.detail);
    this.dispatchEvent(
      new ShowToastEvent({
        title: "Registro criado com sucesso",
        message: event.detail.message,
        variant: "success"
      })
    );

    const inputFields = this.template.querySelectorAll("lightning-input-field");
    if (inputFields) {
      inputFields.forEach((field) => {
        field.reset();
      });
    }
  }

  handleError(event) {
    console.log(event.detail);
    this.dispatchEvent(
      new ShowToastEvent({
        title: "Error creating record",
        message: event.detail.message,
        variant: "error"
      })
    );
  }
}
