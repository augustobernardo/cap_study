import { Risk } from "#cds-models/RiskService";
import { Service } from "@sap/cds";

// Criando uma função para cada ação executada no serviço (CRUD) de cada entidade 
export = (srv: Service) => {
    srv.after("READ", "Risks", (risksData: Risk[]) => {
        const risks = Array.isArray(risksData) ? risksData : [risksData];

        risks.forEach((risk) => {
            if (risk.impact && risk.impact >= 100000) {
                risk.criticality = 1;
            } else {
                risk.criticality = 2;
            }
        });
    });
};

// module.exports = cds.service.impl(async function (this: Service) {
//     this.after("READ", "Risks", (risksData: Risk[]) => {
//         const risks = Array.isArray(risksData) ? risksData : [risksData];

//         risks.forEach((risk) => {
//             if (risk.impact && risk.impact >= 100000) {
//                 risk.criticality = 1;
//             } else {
//                 risk.criticality = 2;
//             }
//         });
//     });
// });
