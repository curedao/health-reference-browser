import { Method } from "src/models/method.model";

export const methods: Method[] = [
    {
        id: '', // used as key
        name: '',
        biomarkers: [
            '' // id's of biomarkers
        ],
        error: 0,           // percentage of value error in one direction
        quality: '',        // manual: Entered manually, consumer: From consumer electronics, clinical: Clinicla grade
        description: '',    // Used as informational short description in info boxes or knowledgebase
        references: ['']       // URL for more information or scientific definition
    },
    {
        id: 'self_reported',
        name: 'Manual entry',
        biomarkers: [       // apply to all when entered trough platform
            'sleep_episode',
        ],
        error: 10,
        quality: 'manual',
        description: `Manually entered occurencies of interventions or symptoms with subjective perception of the user himself. 
            The accuracy of the input remains solely in the responsibilty of the user`,
        references: ['']
    },
    {
        id: 'approved',
        name: 'Approved interventions or symptoms',
        biomarkers: [ 
            'body_height'
        ],
        error: 3,
        quality: 'clinical',
        description: `Approved occurencies of interventions or symptoms with objective perception of a testimonial in e.g a clinical trial environment or a video recording`,
        references: ['']
    },
    {
        id: 'pedometer',
        name: 'Pedometer (Fitness tracker)',
        biomarkers: [ 
            'steps_count',
            'calories_burned'
        ],
        error: 1,
        quality: 'manual',
        description: `A pedometer is a device, usually portable and electronic or electromechanical, 
            that counts each step a person takes by detecting the motion of the person's hands or hips. Also smart phone or fitness tracker`,
        references: ['https://en.wikipedia.org/wiki/Pedometer']
    },
    {
        id: 'body_weight_scale',
        name: 'Body weight scale',
        biomarkers: [ 
            'body_weight'
        ],
        error: 1,
        quality: 'consumer',
        description: `A scale is a device to measure weight or mass of the human body. It should be measured without clothes on and in breakfastless condition.`,
        references: ['https://en.wikipedia.org/wiki/Weighing_scale']
    },
    {
        id: 'mass_spectrometry',
        name: 'Mass spectrometry',
        biomarkers: [ 
            'blood_analysis'
        ],
        error: 5,
        quality: 'clinical',
        description: `Mass spectrometry (MS) is an analytical technique that measures the mass-to-charge ratio of ions. 
            The results are typically presented as a mass spectrum, a plot of intensity as a function of the mass-to-charge ratio. 
            Mass spectrometry is used in many different fields and is applied to pure samples as well as complex mixtures.`,
        references: ['https://en.wikipedia.org/wiki/Mass_spectrometry']
    },
    {
        id: 'ppg',
        name: 'Photoplethysmography (PPG)',
        biomarkers: [ 
            'blood_pressure',
            'heart_rate',
            'heart_rate_variability',
            'sleep_episode'
        ],
        error: 0.1,
        quality: 'clinical',
        description: `Photoplethysmography (PPG) is an uncomplicated and inexpensive optical measurement method that is often used for heart rate monitoring purposes. 
            PPG is a non-invasive technology that uses a light source and a photodetector at the surface of skin to measure the volumetric variations of blood circulation`,
        references: ['https://en.wikipedia.org/wiki/Photoplethysmogram']
    },
    {
        id: 'ppg-3Dacc',
        name: 'Photoplethysmography (PPG) + 3D Accelerometer',
        biomarkers: [ 
            'sleep_episode'
        ],
        error: 0.1,
        quality: 'clinical',
        description: `Photoplethysmography (PPG)  + 3D Accelerometer are normally used as a combination in fitness trackers to measure different markers during a sleep.`,
        references: ['https://en.wikipedia.org/wiki/Photoplethysmogram']
    },
    {
        id: 'rppg',
        name: 'Remote Photoplethysmography (rPPG)',
        biomarkers: [ 
            'blood_pressure',
            'heart_rate',
            'heart_rate_variability' 
        ],
        error: 0.1,
        quality: 'clinical',
        description: `Remote Photoplethysmography (rPPG) is an uncomplicated and inexpensive optical measurement method that is often used for heart rate monitoring purposes. 
            rPPG is a non-invasive technology that uses a light source and a photodetector at the surface of skin to measure the volumetric variations of blood circulation`,
        references: ['https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6874325/']
    },
    {
        id: 'blood_pressure_cuff',
        name: 'Blood pressure monitor with inflatable cuff (Sphygmomanometer)',
        biomarkers: [ 
            'blood_pressure'
        ],
        error: 0.1,
        quality: 'clinical',
        description: `A sphygmomanometer, also known as a blood pressure monitor, or blood pressure gauge, is a device used to measure blood pressure,
            composed of an inflatable cuff to collapse and then release the artery under the cuff in a controlled manner,`,
        references: ['https://en.wikipedia.org/wiki/Sphygmomanometer']
    },
    {
        id: 'blood_glucose_fingerstick',
        name: 'Blood glucose monitoring with a Fingerstick',
        biomarkers: [ 
            'blood_glucose'
        ],
        error: 1,
        quality: 'clinical',
        description: `In medicine, some blood tests are conducted on capillary blood obtained by fingerstick (or fingerprick).
            The site, free of surface arterial flow, where the blood is to be collected is sterilized with a topical germicide, 
            and the skin pierced with a sterile lancet. After a droplet has formed, capillary blood is captured in a capillary tube (usually relying on surface tension).`,
        references: ['https://en.wikipedia.org/wiki/Fingerstick']
    },
    {
        id: 'cgm',
        name: 'Continuous glucose monitor (CGM)',
        biomarkers: [ 
            'blood_glucose'
        ],
        error: 1,
        quality: 'clinical',
        description: `A continuous glucose monitor (CGM) is a device used for monitoring blood glucose on a continual basis. A continuous glucose monitor
             takes a reading on set intervals with a small electrode placed under the skin and held in place by an adhesive. 
             It determines the body's precise glucose level from interstitial fluid, which is a thin layer of fluid surrounding the cells of the tissue just under the skin.`,
        references: ['https://en.wikipedia.org/wiki/Continuous_glucose_monitor']
    },
    {
        id: 'ecg',
        name: 'Electrocardiography',
        biomarkers: [ 
            'heart_rate',
            'heart_rate_variability'
        ],
        error: 0.5,
        quality: 'clinical',
        description: `Electrocardiography is the process of producing an electrocardiogram (ECG or EKG[a]). It is a graph of voltage versus time of the
             electrical activity of the heart[4] using electrodes placed on the skin. These electrodes detect the small electrical changes that are a
             consequence of cardiac muscle depolarization followed by repolarization during each cardiac cycle (heartbeat). `,
        references: ['https://en.wikipedia.org/wiki/Electrocardiography']
    },
    {
        id: 'urine_test_stripe', 
        name: 'Urin ph test stripe diagnostic (Urinalysis)',
        biomarkers: [ 
            'urine_analysis'
        ],
        error: 5,
        quality: 'clinical',
        description: `A urine test strip or dipstick is a basic diagnostic tool used to determine pathological changes in a patient's urine in standard urinalysis. 
            A standard urine test strip may comprise up to 10 different chemical pads or reagents which react (change color) when immersed in, and then removed from, 
            a urine sample. The test can often be read in as little as 60 to 120 seconds after dipping, although certain tests require longer.`,
        references: ['https://en.wikipedia.org/wiki/Urine_test_strip']
    },
    {
        id: 'thermometer', 
        name: 'Thermometer to measure temperature',
        biomarkers: [ 
            'body_temperature'
        ],
        error: 1,
        quality: 'clinical',
        description: `A thermometer is a device that measures temperature or a temperature gradient (the degree of hotness or coldness of an object).`,
        references: ['https://en.wikipedia.org/wiki/Thermometer']
    },
    {
        id: 'gene_sequencing', 
        name: 'Genomic sequencing',
        biomarkers: [ 
            ''
        ],
        error: 0.1,
        quality: 'clinical',
        description: `Whole genome sequencing is ostensibly the process of determining the complete DNA sequence of an organism's genome at a single time.
         This entails sequencing all of an organism's chromosomal DNA as well as DNA contained in the mitochondria and, for plants, in the chloroplast.
         In practice, genome sequences that are nearly complete are also called whole genome sequences.`,
        references: ['https://en.wikipedia.org/wiki/Whole_genome_sequencing']
    },
    {
        id: 'epigenetic_clock', 
        name: 'Epigenetic clock',
        biomarkers: [ 
            'biological_age'
        ],
        error: 0.1,
        quality: 'clinical',
        description: `An epigenetic clock is a biochemical test that can be used to measure age. The test is based on DNA methylation levels.`,
        references: ['https://en.wikipedia.org/wiki/Epigenetic_clock']
    },
    {
        id: 'agemeter', 
        name: 'Agemeter',
        biomarkers: [ 
            'auditory_reaction_time',
            'highest_audible_pitch',
            'decision_reaction_time',
            'decision_movement_time',
            'short_term_memory',
            'muscle_speed_coordination',
            'visual_reaction_time',
            'visual_movement_time',
        ],
        error: 1,
        quality: 'clinical',
        description: `The Agemeter calculates functional age by testing physiological biomarkers that decline with age. Audio-Visually Guided AgeMeter Tests Require No Supervision`,
        references: [
            'https://www.agemeter.com/how-it-works'
        ]
    },
];