# Paediatric Hepatology Dependency Score Web-App

This web application has been built with mobile users in mind. The aim of the web-app is to allow easy input for the PHD score during ward rounds which in turn should increase the monitoring of a patients condition and improve data collection and outcomes.

The PHD score itself is a simple index of illness severity (and nursing dependency) in children with liver disease. This score is calculated via adding up the radio button and drop-down select inputs from the user.

Unforunately as this is a third-party project made by myself, it cannot be integrated with official NHS systems. However the ability to email the outcome of the PHD score has been added, and the plain text email generated could easily be incorporated into patient reports and letters.

The web-app can be found here : XXXXXX

## The Tech side:

The web-app has been built using React and the XXXXX library which handles the emailing of the final score.

## The Medical side:

The PHD score was developed in the [Liver Unit at Birmingham Children’s Hospital](https://cdn.journals.lww.com/jpgn/Fulltext/2007/01000/Paediatric_Hepatology_Dependency_Score__PHD.22.aspx) between 1999-2009. The score includes 10 parameters:

    • Specific to liver dysfunction:
         - AST
         - Bilirubin
         - Prothrombin time
         - Presence of ascites

    • More generally associated with disease severity:
         - Albumin
         - Sepsis
         - Invasive access

    • Associated with nursing dependency:
        - Nutrition support
        - Blood products required
        - Organ dysfunction

Although the number of parameters required to generate a score is quite high – this improves its sensitivity. The score was validated by asking independent observers to rate the illness severity of a cohort patients and then comparing the performance of the scores. The utility of the score for patients with liver disease secondary to another primary liver disease was [demonstrated in 2014](https://www.ncbi.nlm.nih.gov/pubmed/23856636). The final score for an individual patient was arrived at by simple addition, to allow calculation at the patient’s bedside. The addition of nursing dependency was incorporated in 2016. A score of zero describes a healthy patient, scores above 10 suggest a sick patient and scores 15-20 a seriously ill patient, and any score above 30 suggests high risk of immediate mortality. The maximum score is 45.

### Glossary

- **AST** (aspartate aminotranferase) - a protein which leaks out of damaged liver cells which increases when the liver cell turnover is raised (reflects increased rate cell death).

- **Bilirubin** - a product of liver metabolism which increases when the liver is under stress.

- **Prothrombin time** (PT) is a measure of clotting function and indicates how well the liver is making clotting proteins – it increases when the liver is under stress and/or when there is insufficient vitamin K in the body.

- **Ascites** - describes accumulation of fluid in the abdomen in the space between the abdominal wall and abdominal organs including liver and intestines – occurs when the blood flow through the liver is impeded especially if the albumin levels have also dropped.

- **Albumin** is a protein made in massive amounts by the liver and distributed in the blood to bind to other molecules and carry them round the body. A reduction in albumin occurs when the liver is under stress and/or not enough nutrition is being received (e.g. Kwashiorkor).

- **Sepsis** evokes an inflammatory response which may be mild (raised temperature) or more severe leading to prescription of antibiotics associated with micro-organisms detected in body fluids, and mostly severely a consumptive process resulting in low levels of coagulation products signified by low fibrinogen and disruption of metabolic homeostasis (and acidosis) signified by a low plasma bicarbonate (arterial or venous blood).

- **Invasive access** is required in many hospitalised patients, but those who require hyper-osmolar solutions (concentrated infusions of glucose or medications) will need them delivering into veins with high blood flows so that the wall of the vein is not damaged – in practice this means veins near to the heart “central access”.

- **Nutrition support** is provided to children who cannot sustain normal growth with their usual diet. The commonest support is a calorie enriched drink (200ml) given one to three times a day, but some children are so unwell that they lose their appetite and require the calories to be delivered in an liquid diet by tube passed through the nostril down into the stomach. When the intestinal tract is dysfunctional (e.g. bad gastroenteritis or after abdominal surgery) some children require intravenous rehydration and if dysfunction is prolonged, may also require intravenous nutrient also called Total Parenteral Nutrition (TPN).

- **Blood product usage** this included red blood cells, fresh frozen plasma, cryoprecipitate, immune globulin, albumin infusions. These products require close monitoring whilst being given in case of allergic reactions and effects on heart rate and blood pressure.

- **Co-morbidity** refers to disease states other than liver dysfunction which will add to the patienst risk of mortality and nursing dependency e.g. diabetes; obesity; gastroenteritis; acute and chronic lung disease (e.g. cystic fibrosis); chronic kidney disease; encephalopathy (swelling of brain cells caused by severe liver dysfunction & metabolic acidosis; leading to confusion and delerium). Psychiatric disorders such as depression and/or pain unresponsive to usual prescribed pain killers necessitating a referral to pain team should score +2.
