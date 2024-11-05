sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'br/com/risksmanagment/capstudyrisksmanagment/test/integration/FirstJourney',
		'br/com/risksmanagment/capstudyrisksmanagment/test/integration/pages/RisksList',
		'br/com/risksmanagment/capstudyrisksmanagment/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('br/com/risksmanagment/capstudyrisksmanagment') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);