import {IInputs, IOutputs} from "./generated/ManifestTypes";
import {Component } from "react";
import {array,number} from "prop-types";
import * as $ from 'jquery';
import { listenerCount } from "events";
export class NotesTimeline implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	private _container: HTMLDivElement;
	public _context: ComponentFramework.Context<IInputs>;

	/**
	 * Empty constructor.
	 */
	constructor()
	{

	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public async init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement)
	{
		// Add control initialization code
		this._context = context;
		this._container = document.createElement('div');
		this._container.className = "mainbody";

		var ticketNumber = context.parameters.CaseNumber.raw || "CAS-01047-N4P1T7";
		let caseId = (<any>context.mode).contextInfo.entityId;
		caseId!=null?caseId : "b5328427-ee82-eb11-a812-000d3a6b0867";
		var caseData = this.GetCaseData();//Test data call
		// caseData.CaseNotes = [];
		//caseData.TaskDetails = [];
		//var caseData = await this.GetCaseNotes(caseId, ticketNumber);
		
		this._container.appendChild(this.CreateTreeStructure(caseData));
		//this._container.appendChild(this.createHTMLStructure());
		container.appendChild(this._container);
	}

	//Below method creates mock Casedata for testing purpose.
	private GetCaseData():CaseModel
	{
		
		var casedata = new CaseModel();
		casedata.casenumber = "CAS-01047-N4P1T7";
		
		var task1 = new ChildEntityModel();
		task1.name = "Entity1";
		task1.Description = "Entity 1 Description";

		var task2 = new ChildEntityModel();
		task2.name = "Entity 2";
		task2.Description = "Entity 2 Desciprtion";
		
		var notes1 = new NotesModel();
		notes1.Notesdate = new Date().toLocaleDateString();
		notes1.notessubject = "Notes Subject 1";
		notes1.notestext = "This is a notes text for case CAS-01047-N4P1T7";
		notes1.notesowner = "User 1";

		var notes2 = new NotesModel();
		notes2.Notesdate = new Date().toLocaleDateString();
		notes2.notessubject = "Notes Subject 2";
		notes2.notestext = "This is a notes text for task Briefing Notes";
		notes2.notesowner = "User 2";
		task1.EntityNotes = [notes2,notes2,notes2];

		var notes3 = new NotesModel();
		notes3.Notesdate =  new Date().toLocaleString();
		notes3.notessubject = "Notes Subject 3";
		notes3.notestext = "This is a notes text for taks Response Letter";
		notes3.notesowner = "User 1";
		task2.EntityNotes = [notes3,notes3,notes3];

		casedata.CaseNotes = [notes1,notes1,notes1];
		casedata.ChildEntities = [task1,task2];

		return casedata;
	}


	private CreateTreeStructure(caseData:CaseModel):HTMLElement
	{
		let nocasenotes = false;
		let notasknotes = false;
		let row = document.createElement('div');
		row.className = "row";

		let column = document.createElement('div');
		column.className = "col-md-4";

		let tree = document.createElement('ul');
		tree.id = "tree1";
		tree.className = "tree";

		let case1 = this.createCaseElement(caseData);
		let childTasks = this.createullistElement();
		if(caseData.CaseNotes !=null && caseData.CaseNotes.length >0)
		{
			caseData.CaseNotes.forEach(note=>{
				let notes1 = this.CreateNotesElement(note);
				childTasks.appendChild(notes1);
			});
			case1.appendChild(childTasks);
		}
		else
		{
			nocasenotes = true;
		}
		if(caseData.ChildEntities !=null && caseData.ChildEntities.length>0)
		{
			caseData.ChildEntities.forEach(taskdata=>{
				let task1 = this.createTaskElement(taskdata,false);
				childTasks.appendChild(task1);
				let childnotes1 = this.createullistElement();
				taskdata.EntityNotes.forEach(note =>{
					let notes1 = this.CreateNotesElement(note);
					childnotes1.appendChild(notes1);
				});
				task1.appendChild(childnotes1);
				childTasks.appendChild(task1);
			});
			case1.appendChild(childTasks);
		}
		else
		{
			notasknotes = true;
		}

		if(nocasenotes && notasknotes)
		{
			case1.appendChild(this.createErrorElement("No notes exists!"));
		}
		
		tree.appendChild(case1);
		column.appendChild(tree);
		row.appendChild(column);
		return row;
	}

	

	private divElementOnClick(this:HTMLElement)
	{
		this.classList.toggle("active");
		var contents = this.getElementsByClassName("content");
		var i;
		for (i = 0; i < contents.length; i++) 
		{
			var divtag = <HTMLElement>contents[i];
			if (divtag.style.display === "block") 
			{
				divtag.style.display = "none";
			} 
			else 
			{
				divtag.style.display = "block";
			}
		}
		
	}
	private CreateNotesElement(notes:NotesModel):HTMLElement
	{
		let listElement = document.createElement('li');
		listElement.style.textAlign = "left";
		let notesElement = document.createElement('div');
		notesElement.className = "collapsible";
		notesElement?.addEventListener("click",this.divElementOnClick);
		let header = document.createElement("div");
		header.appendChild(document.createTextNode(notes.notesowner));
		header.className = "header";

		let footer = document.createElement("div");
		footer.appendChild(document.createTextNode(notes.Notesdate.toString()));
		footer.className= "footer";

		let noteText = document.createElement("div");
		noteText.innerHTML = notes.notestext;

		let bodyElement = document.createElement('div');
		bodyElement.className = "content";
		bodyElement.appendChild(header);
		bodyElement.appendChild(noteText);
		bodyElement.appendChild(footer);

		notesElement.style.width = "200px";
		//notesElement.prepend(this.createIcon("Notes"));
		
		notesElement.appendChild(document.createTextNode(notes.notessubject));
		notesElement.appendChild(bodyElement);
		listElement.appendChild(notesElement);
		return listElement;
	}

	private createTaskElement(taskdata:ChildEntityModel, anchorTag:boolean):HTMLElement
	{
		let listElement = document.createElement('li');
		listElement.style.textAlign = "left";
		let taskElement = document.createElement('div');
		taskElement.className = "task";
		taskElement.style.width = "330px";
		//taskElement.prepend(this.createIcon("Task"));
		
		if(anchorTag)
		{
			let anchor = document.createElement('a');
			anchor.href="#";
			anchor.appendChild(document.createTextNode(taskdata.name +" - "+ taskdata.Description));
			taskElement.appendChild(anchor);
		}
		else
		{
			taskElement.appendChild(document.createTextNode(taskdata.name +" - "+ taskdata.Description));

		}
		listElement.appendChild(taskElement);
		return listElement;
	}

	private createCaseElement(caseData:CaseModel):HTMLElement
	{
		let listElement = document.createElement('li');
		listElement.style.textAlign = "left";
		listElement.style.width = "500px";
		//listElement.prepend(this.createIcon("Case"));
		listElement.appendChild(document.createTextNode(caseData.casenumber));
		return listElement;
	}
	private createErrorElement(errorMessage:string):HTMLElement
	{
		let listElement = document.createElement('li');
		let errorElement = document.createElement('div');
		errorElement.style.textAlign = "left";
		errorElement.appendChild(document.createTextNode(errorMessage));
		listElement.appendChild(errorElement);
		return listElement;
	}

	private createullistElement():HTMLElement
	{
		let ullistElement = document.createElement('ul');
		ullistElement.className = "ullist";
		return ullistElement;
	}

	private async GetCaseNotes(targetId: string,ticketnumber:string):Promise<CaseModel>
	{
		var caseDetails =new CaseModel();
		let fetchCaseNotes: string = `<fetch>
		<entity name="annotation" >
		  <attribute name="createdon" />
		  <attribute name="createdby" />
		  <attribute name="subject" />
		  <attribute name="notetext" />
		  <filter>
			<condition attribute="objectid" operator="eq" value="incidentid" uitype="incident" />
		  </filter>
		</entity>
	  </fetch>`;

	  	var caseid = /incidentid/gi;
		var finalnotesQuery = "?fetchXml=" + encodeURIComponent(fetchCaseNotes.replace(caseid,targetId));
		caseDetails.casenumber = ticketnumber;

		let response = await this.retrieveCRMRecords("annotation", finalnotesQuery);
		if(response.entities.length > 0){
			response.entities.forEach(entity=>{
				var note = new NotesModel();
				note.Notesdate = entity["createdon@OData.Community.Display.V1.FormattedValue"];
				note.notesowner = entity["_createdby_value@OData.Community.Display.V1.FormattedValue"];
				note.notessubject = entity["subject"];
				note.notestext = entity["notetext"];
				caseDetails.CaseNotes.push(note);
			});
		}
			

		let tasksQuery:string = `<fetch>
		<entity name="task" >
		  <attribute name="subject" />
		  <attribute name="cos_cbutasktype" />
		  <filter>
			<condition attribute="regardingobjectid" operator="eq" value="incidentid" uitype="incident" />
		  </filter>
		</entity>
	  </fetch>`;
		var finaltaskQuery = "?fetchXml=" + encodeURIComponent(tasksQuery.replace(caseid,targetId));
		let response1 = await this.retrieveCRMRecords("task",finaltaskQuery );
		var taskarrray:ChildEntityModel[] = [];
		if(response1.entities.length > 0){
			response1.entities.forEach(async entity=>{
				var taskdata =new  ChildEntityModel();
				taskdata.name = entity["subject"];
				taskdata.Description = entity["cos_cbutasktype@OData.Community.Display.V1.FormattedValue"];
				taskdata.ChildEntityId = entity["activityid"];
				taskarrray.push(taskdata);
			});
		}

		let fetchTaskNotes: string = `<fetch>
		<entity name="annotation" >
			<attribute name="createdon" />
			<attribute name="createdby" />
			<attribute name="subject" />
			<attribute name="notetext" />
			<filter>
				<condition attribute="objectid" operator="eq" value="taskid" uitype="task" />
			</filter>
		</entity>
		</fetch>`;

		var taskid = /taskid/gi;
		var i;
		for(i=0;i<taskarrray.length;i++)
		{
			var taskData = taskarrray[i];
			var finalnotesQuery = "?fetchXml=" + encodeURIComponent(fetchTaskNotes.replace(taskid,taskData.ChildEntityId));
			let response = await this.retrieveCRMRecords("annotation",finalnotesQuery);
			if(response.entities.length > 0){
				response.entities.forEach(entity=>{
					var note = new NotesModel();
					note.Notesdate = entity["createdon@OData.Community.Display.V1.FormattedValue"];
					note.notesowner = entity["_createdby_value@OData.Community.Display.V1.FormattedValue"];
					note.notessubject = entity["subject"];
					note.notestext = entity["notetext"];
					taskData.EntityNotes.push(note);
				});
				caseDetails.ChildEntities.push(taskData);
			}
		}
		return caseDetails;
	}
	public async retrieveCRMRecords (entityName: string, query: string): Promise<ComponentFramework.WebApi.RetrieveMultipleResponse>
	{
        try {
			let result=await this.getResults(entityName,query);
			return result;
        }
        catch (error){
            // display error message within error section of tile
            return Promise.reject(error);
        }
        finally {}
        
    }
    public async getResults(entityName: string, query: string):Promise<ComponentFramework.WebApi.RetrieveMultipleResponse>
	{
        let a: Promise<ComponentFramework.WebApi.RetrieveMultipleResponse>;
		return a = this._context.webAPI.retrieveMultipleRecords(entityName,query).then(
			function success(result) {
			//  return result.entities;
				return result;
			},
			function (error) {
				return Promise.reject(error);                
			}
		)
    }
	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		// Add code to update control view
	}

	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs
	{
		return {};
	}

	/** 
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void
	{
		// Add code to cleanup control if necessary
	}

	
}
class CaseModel
{
	casenumber:string;
	ChildEntities : ChildEntityModel[] = [];
	CaseNotes:NotesModel[] = [];
	constructor()
	{
		
	}
}
class ChildEntityModel
{
	name:string;
	Description:string;
	ChildEntityId:string;
	EntityNotes:NotesModel[]=[];
	constructor()
	{
		
	}
}
class NotesModel
{
	notessubject:string;
	notestext:string;
	Notesdate:string;
	notesowner:string;
	constructor()
	{
		
	}
}