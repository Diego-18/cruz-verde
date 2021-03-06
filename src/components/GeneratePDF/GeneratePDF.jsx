import { jsPDF } from "jspdf";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../updateAction.jsx";

export default function GeneratePDF(props) {
    const { state } = useStateMachine(updateAction);
    const name = state.yourDetails.firstName + ' ' + state.yourDetails.secondName + ' ' + state.yourDetails.firstLastName + ' ' + state.yourDetails.secondLastName;
    const document = state.yourDetails.documentType + '. ' + state.yourDetails.nDocument;
    const generatePDF = () => {
        const doc = new jsPDF('p', 'pt');
        doc.text(20, 20, ('Paciente: ' + name))
        doc.setFont(undefined, 'helvetica')
        doc.text(20, 40, document)
        doc.setFont(undefined, 'helvetica')
        doc.text(20, 100, 'Consultoria Externa')
        doc.setFont(undefined, 'helvetica')
        doc.text(20, 120, state.yourDetails.sede)
        doc.setFont(undefined, 'helvetica')
        doc.text(20, 140, ('Fecha: ' + props.Day))
        doc.setFont(undefined, 'helvetica')
        doc.text(20, 160, ('Hora: ' + props.Time))
        doc.setFont(undefined, 'helvetica')
        doc.save('demo.pdf')
    };

    return (
        <div className="section-exporter">
            <button onClick={generatePDF} className="btn cstm-btn-2">Download PDF</button>
        </div>
    );
}