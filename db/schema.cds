namespace sap.my.risk.managment;

using {managed} from '@sap/cds/common';

// O tipo managed consegue guardar informações sobre o usuário, data de modificação e etc.
entity Risks : managed {

    key ID          : UUID @(Core.Computed: true);
        title       : String;
        prio        : String;
        descr       : String;
        miti        : Association to Mitigations;
        impact      : Integer;
        criticality : Integer;
}

entity Mitigations : managed {

    key ID          : UUID @(Core.Computed: true);
        description : String;
        owner       : String;
        timeline    : String;
        risks       : Association to many Risks
                          on risks.miti = $self;
}
